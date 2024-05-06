import * as React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartScatter, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';
// @ts-expect-error CSV is not typescript
import ridership from "../../monthly-ridership.csv";
// @ts-expect-error CSV is not typescript
import otp from "../../monthly-otp.csv";

export const MultiYearMonthlyRidershipChart = ({ lineFn }) => (
  <MultiYearMonthlyChart name="monthly-ridership" source={ridership} lineFn={lineFn} base={1000} />
)

export const MultiYearMonthlyOTPChart = ({ lineFn }) => (
  <MultiYearMonthlyChart name="monthly-otp" source={otp} lineFn={lineFn} base={10} />
)

export const MultiYearMonthlyChart = ({ name, source, lineFn, base }) => (
  <Chart
    containerComponent={
      <ChartVoronoiContainer
        // https://github.com/patternfly/patternfly-react/discussions/10150
        labels={({ datum }) => datum.childName.includes('line-') ? `${datum.name}: ${datum.y}` : ''}
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
    <ChartAxis dependentAxis showGrid tickValues={getRange(source, lineFn, base)} tickFormat={(t) => t.toLocaleString()} />
    <ChartGroup>
      {getYears(source).map((year) => <ChartLine key={'line-' + year} name={'line-' + year} data={getMonthlyData(source, year, lineFn)} />)}
    </ChartGroup>
    <ChartGroup>
      {getYears(source).map((year) => <ChartScatter key={'scatter-' + year} name={'scatter-' + year} data={getMonthlyData(source, year, lineFn)} />)}
    </ChartGroup>
  </Chart>
);

export interface VPRAStats {
  Year: number;
  Month: number;
  'Newport News': number;
  Norfolk: number;
  Richmond: number;
  Roanoke: number;
}
export interface Row {
  name: number;
  x: number;
  y: number;
}
export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const getYears = (source): number[] => source.reduce(
  (prev: number[], row: VPRAStats) => prev.some(x => x === row.Year) ? prev : [...prev, row.Year], []
);
export const getMonthlyData = (source, year: number, yFn: (row: VPRAStats) => number): Row[] => source.filter((row: VPRAStats) => row.Year === year).reduce(
  (prev: Row[], row: VPRAStats) => [...prev, { name: row.Year, x: row.Month, y: yFn(row) }], []
);
export const getRange = (source, nFn: (row: VPRAStats) => number, base: number = 1000): number[] => {
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

