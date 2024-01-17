import * as React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';
// @ts-expect-error CSV is not typescript
import ridership from "../../monthly-ridership.csv";

export const MultiYearChart = ({ lineFn }) => (
  <Chart
    containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
    legendData={getYears().map(year => { return { name: String(year) }; })}
    legendOrientation="vertical"
    legendPosition="right"
    height={250}
    minDomain={{ y: 0 }}
    name="Total Ridership"
    padding={{
      bottom: 50,
      left: 50,
      right: 200, // Adjusted to accommodate legend
      top: 50
    }}
    themeColor={ChartThemeColor.multiUnordered}
    width={600}
  >
    <ChartAxis tickValues={months} />
    <ChartAxis dependentAxis showGrid tickValues={[]} />
    <ChartGroup>
      {getYears().map((year) => <ChartLine key={year} data={getLine(year, lineFn)} />)}
    </ChartGroup>
  </Chart>
);export interface Ridership {
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
export const getYears = (): number[] => ridership.reduce(
  (prev: number[], row: Ridership) => prev.some(x => x === row.Year) ? prev : [...prev, row.Year], []
);
export const getLine = (year: number, yFn: (row: Ridership) => number): Row[] => ridership.filter((row: Ridership) => row.Year === year).reduce(
  (prev: Row[], row: Ridership) => [...prev, { name: row.Year, x: row.Month, y: yFn(row) }], []
);

