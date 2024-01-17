import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';
// @ts-expect-error CSV is not typescript
import ridership from "../../monthly-ridership.csv";

interface Ridership {
  Year: number
  Month: number
  'Newport News': number
  Norfolk: number
  Richmond: number
  Roanoke: number
}

interface Row {
  name: number
  x: number
  y: number
}

const ticks = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function getYears(): number[] {
  return ridership.reduce(
    (prev: number[], row: Ridership) =>
    prev.some(x => x === row.Year)? prev: [...prev, row.Year], []
  );
}

function getLine(year: number, yfn: (row: Ridership) => number ): Row[] {
  return ridership.filter((row: Ridership) => row.Year === year).reduce(
    (prev: Row[], row: Ridership) => [...prev, { name: row.Year, x: row.Month, y: yfn(row) }], []
  );
}

function totalRow(row: Ridership): number {
  return row['Newport News'] + row.Norfolk + row.Richmond + row.Roanoke;
}

const TotalChart = () => (
  <Chart
    containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
    legendData={getYears().map(year => { return { name : String(year) } })}
    legendOrientation="vertical"
    legendPosition="right"
    height={250}
    minDomain={{y: 0}}
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
    <ChartAxis tickValues={ticks} />
    <ChartAxis dependentAxis showGrid tickValues={[]} />
    <ChartGroup>
      { getYears().map((year) => <ChartLine key={year} data={ getLine(year, totalRow) } />) }
    </ChartGroup> 
  </Chart>
)

const Dashboard: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Total Ridership</Title>
    <TotalChart />
  </PageSection>
)

export { Dashboard };
