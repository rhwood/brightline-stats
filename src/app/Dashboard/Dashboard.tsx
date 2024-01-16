import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, ChartVoronoiContainer } from '@patternfly/react-charts';
// @ts-ignore
import ridership from "../../monthly-ridership.csv";
import { ReactNodeArray } from 'prop-types';

const ticks = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function getYears(): number[] {
  return ridership.reduce(
    (prev: number[], row: any) =>
    prev.some(x => x === row.Year)? prev: [...prev, row.Year], []
  );
}

function getLine(year: number, y: (any) => number ) {
  return ridership.filter(x => x.Year === year).reduce(
    (prev: any[], row: any) => [...prev, { name: row.Year, x: row.Month, y: y(row) }], []
  );
}

function totalRow(row: any): number {
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
      { getYears().map((year) => <ChartLine data={ getLine(year, totalRow) } />) }
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
