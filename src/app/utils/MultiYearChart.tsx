import * as React from 'react';
import {
	Chart,
	ChartAxis,
	ChartGroup,
	ChartLine,
	ChartScatter,
	ChartThemeColor,
	ChartVoronoiContainer
} from '@patternfly/react-charts/victory';
// @ts-expect-error CSV is not typescript
import ridership from "../../monthly-ridership.csv";
// @ts-expect-error CSV is not typescript
import fare from "../../monthly-fare.csv";
// @ts-expect-error CSV is not typescript
import revenue from "../../monthly-revenue.csv";

export const MultiYearMonthlyRidershipChart = ({ lineFn }) => (
  <MultiYearMonthlyChart name="monthly-ridership" source={ridership} lineFn={lineFn} />
)

export const MultiYearMonthlyFareChart = ({ lineFn }) => (
  <MultiYearMonthlyChart name="monthly-fare" source={fare} lineFn={lineFn} base={10} labelFormat={LabelFormat.dollar} />
)

export const MultiYearMonthlyRevenueChart = ({ lineFn }) => (
  <MultiYearMonthlyChart name="monthly-revenue" source={revenue} lineFn={lineFn} base={10} labelFormat={LabelFormat.curreny} />
)

export const RollingMonthlyRidershipChart = ({ lineFn }) => (
  <RollingMonthlyChart name="rolling-ridership" source={ridership} legends={[{name: 'Short Trip', key: 'short'}, {name: 'Long Trip', key: 'long'}]} lineFn={lineFn} />
)

export const RollingMonthlyFareChart = ({ lineFn }) => (
  <RollingMonthlyChart name="rolling-fare" source={fare} legends={[{name: 'Short Trip', key: 'short'}, {name: 'Long Trip', key: 'long'}]} lineFn={lineFn}  base={10} labelFormat={LabelFormat.dollar} />
)

export const RollingMonthlyRevenueChart = ({ lineFn }) => (
  <RollingMonthlyChart name="rolling-revenue" source={revenue} legends={[{name: 'Short Trip', key: 'short'}, {name: 'Long Trip', key: 'long'}, {name: 'Ancillary', key: 'ancillary'}]} lineFn={lineFn} base={10} labelFormat={LabelFormat.curreny}/>
)

export const RollingMonthlyChart = ({ name, source, legends, lineFn, base = 1000, labelFormat = LabelFormat.number }) => {
  const legends_: Legend[] = legends // need to just type parameters to this function
  const mostRecentYear: number = getHighestYear(source);
  const mostRecentMonth: number = getHighestMonth(source, mostRecentYear);
  const tickIndicies: number[] = Array.from({length: 12}, (_, i) => (i + mostRecentMonth) % 12);
  const ticks: string[] = Array.from({length: 12}, (_, i) => months[tickIndicies[i]]);
  const rollingSource: BrightlineStats[] = ((source: BrightlineStats[], mostRecentYear: number, mostRecentMonth: number) => {
    if (mostRecentMonth == 12) {
      return source.filter((row: BrightlineStats) => row.Year === mostRecentYear)
    } else {
      return source.filter((row: BrightlineStats) => row.Year === mostRecentYear - 1 && row.Month > mostRecentMonth)
      .concat(source.filter((row: BrightlineStats) => row.Year === mostRecentYear))
    }
  })(source, mostRecentYear, mostRecentMonth)
  const minMonth = mostRecentMonth - rollingSource.length + 1
  if (rollingSource.length < 12) {
    for (let i = 12 - rollingSource.length ; i > 0 ; i--) {
      if (i - minMonth < 0) {
        rollingSource.unshift({Year: mostRecentYear - 1, Month: i + 13 - minMonth, short: 0, long: 0, ancillary: 0})
      } else {
        rollingSource.unshift({Year: mostRecentYear, Month: i + 1 - minMonth, short: 0, long: 0, ancillary: 0})
      }
    }
  }
  const yFns: {(source: BrightlineStats): number;}[] = lineFn // need to just type parameters to this function
  const data: Row[][] = Array.from({length: yFns.length}, () => []);
  let fakingIt = false
  rollingSource.forEach((stat, ri) => {
    for (const fi in yFns) {
      const yFn = yFns[fi]
      const shiftMonth = stat.Month + minMonth - 1
      const row: Row = {name: stat.Year, x:(stat.Month > minMonth - 1 ? shiftMonth : shiftMonth + 12), y: yFn(stat)}
      if (row.x > 12) {
        fakingIt = true
      }
      data[fi][ri] = row
    }
  });
  const tickRange = getRangeFromRows(data, base)
  if (fakingIt) {
    data.forEach((line, li) => {
      line.forEach((row, ri) => {
        if (row.x > 12) {
          row.y = tickRange[0]
          data[li][ri] = row
        }
      })
    })
  }
  return (
    <Chart
      containerComponent={
        <ChartVoronoiContainer
          // https://github.com/patternfly/patternfly-react/discussions/10150
          labels={({ datum }) => datum.childName.includes('line-') ? formatLabel(labelFormat, datum.name, datum.x, datum.y) : ''}
          constrainToVisibleArea
        />
      }
      legendData={legends_.map((legend) => { return {name: legend.name} })}
      legendOrientation="vertical"
      legendPosition="right"
      height={250}
      // minDomain={{ y: 0 }}
      name={name}
      padding={{
        bottom: 50,
        left: 100, // Adjusted to accommodate ticks
        right: 200, // Adjusted to accommodate legend
        top: 50
      }}
      themeColor={ChartThemeColor.multiUnordered}
      width={600}
    >
      <ChartAxis tickValues={ticks} />
      <ChartAxis dependentAxis showGrid tickValues={tickRange} tickFormat={(t) => formatTick(labelFormat, t)} />
      <ChartGroup>
        {legends_.map((legend, li) => (
          <ChartLine key={'line-' + legend.key} name={'line-' + legend.key} data={data[li]} />
        ))}
      </ChartGroup>
      <ChartGroup>
        {legends_.map((legend, li) => (
          <ChartScatter key={'scatter-' + legend.key} name={'scatter-' + legend.key} data={data[li]} />
        ))}
      </ChartGroup>
    </Chart>
  )
}

export const MultiYearMonthlyChart = ({ name, source, lineFn, base = 1000, labelFormat = LabelFormat.number }) => (
  <Chart
    containerComponent={
      <ChartVoronoiContainer
        // https://github.com/patternfly/patternfly-react/discussions/10150
        labels={({ datum }) => datum.childName.includes('line-') ? formatLabel(labelFormat, datum.name, datum.x, datum.y) : ''}
        constrainToVisibleArea
      />
    }
    legendData={getYears(source).map(year => { return { name: String(year) }; })}
    legendOrientation="vertical"
    legendPosition="right"
    height={250}
    // minDomain={{ y: 0 }}
    name={name}
    padding={{
      bottom: 50,
      left: 100, // Adjusted to accommodate ticks
      right: 200, // Adjusted to accommodate legend
      top: 50
    }}
    themeColor={ChartThemeColor.multiUnordered}
    width={600}
  >
    <ChartAxis tickValues={months} />
    <ChartAxis dependentAxis showGrid tickValues={getRange(source, lineFn, base)} tickFormat={(t) => formatTick(labelFormat, t)} />
    <ChartGroup>
      {getYears(source).map((year) => <ChartLine key={'line-' + year} name={'line-' + year} data={getMonthlyData(source, year, lineFn)} />)}
    </ChartGroup>
    <ChartGroup>
      {getYears(source).map((year) => <ChartScatter key={'scatter-' + year} name={'scatter-' + year} data={getMonthlyData(source, year, lineFn)} />)}
    </ChartGroup>
  </Chart>
);

export interface BrightlineStats {
  Year: number;
  Month: number;
  short: number;
  long: number;
  ancillary: number;
}
export interface Row {
  name: number;
  x: number;
  y: number;
}
export interface Legend {
  key: string;
  name: string;
}
export enum LabelFormat {
  number, // a number, will format to locale
  percentage, // a percentage, will round to 2 decimal places
  dollar, // a dollar, with cents to 2 decimal places
  curreny, // a number with a dollar sign
  string // a string, will format to locale
}
export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const getYears = (source): number[] => source.reduce(
  (prev: number[], row: BrightlineStats) => prev.some(x => x === row.Year) ? prev : [...prev, row.Year], []
);
export const getHighestYear = (source): number => getYears(source).reduce(
  (prev: number, current: number) => prev > current ? prev : current
);
export const getHighestMonth = (source, year: number): number => source.filter((row: BrightlineStats) => row.Year === year).reduce(
  (prev: number, row: BrightlineStats) => prev > row.Month ? prev : row.Month
);
export const getMonthlyData = (source, year: number, yFn: (row: BrightlineStats) => number): Row[] => source.filter((row: BrightlineStats) => row.Year === year).reduce(
  (prev: Row[], row: BrightlineStats) => [...prev, { name: row.Year, x: row.Month, y: yFn(row) }], []
);
export const getRange = (source, nFn: (row: BrightlineStats) => number, base: number = 1000): number[] => {
  let max: number = 0;
  let min: number = Number.MAX_SAFE_INTEGER;
  for (const row of source) {
    const n = nFn(row);
    max = max < n ? n : max;
    min = min > n ? n : min;
  }
  max = Math.ceil(max / base) * base;
  min = Math.floor(min / base) * base;
  const segments = 4;
  return Array.from({length: segments + 1}, (e, i) => min + (((max - min) / segments) * i));
}
export const getRangeFromRows = (source: Row[][], base: number = 1000): number[] => {
  let max: number = 0;
  let min: number = Number.MAX_SAFE_INTEGER;
  for (const line of source) {
    for (const row of line) {
      if (row && row.y) { // 
        max = max < row.y ? row.y : max;
        min = min > row.y ? row.y : min;
      }
    }
  }
  max = Math.ceil(max / base) * base;
  min = Math.floor(min / base) * base;
  const segments = 4;
  return Array.from({length: segments + 1}, (e, i) => min + (((max - min) / segments) * i));
}
export const formatLabel = (format: LabelFormat, name: string, x, y): string => {
  switch(format) {
    case LabelFormat.curreny:
      return name + ': $' + y.toLocaleString()
    case LabelFormat.dollar:
      return name + ': $' + y.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })
    case LabelFormat.percentage:
      return name + ': ' + y.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + '%'
    default:
      return y.toLocaleString()
  }
}
export const formatTick = (format: LabelFormat, tick): string => {
  switch(format) {
    case LabelFormat.curreny:
      return '$' + tick.toLocaleString()
    case LabelFormat.dollar:
      return '$' + tick.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })
    case LabelFormat.percentage:
      return tick.toLocaleString() + '%'
    default:
      return tick.toLocaleString()
  }
}

