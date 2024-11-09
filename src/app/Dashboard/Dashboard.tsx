import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'
import { BrightlineStats, MultiYearMonthlyFareChart, MultiYearMonthlyRevenueChart, MultiYearMonthlyRidershipChart } from '@app/utils/MultiYearChart';
import { Content, ContentVariants } from '@patternfly/react-core/dist/dynamic/components/Content'

const Dashboard: React.FunctionComponent = () => (
  <PageSection hasBodyWrapper={false}>
    <Title headingLevel="h1" size="lg">Overall</Title>
    <Content>
      <Content component={ContentVariants.p}>
        Brightline operates passenger trains on a single route in Florida.
        This site visualizes the ridership and revenue data for those trains as provided monthly by Brightline.
      </Content>
      <Title headingLevel="h3">Ridership</Title>
      <MultiYearMonthlyRidershipChart lineFn={(row: BrightlineStats): number => row.short + row.long} />
      <Title headingLevel="h3">Average Fare per Passenger</Title>
      <MultiYearMonthlyFareChart lineFn={(row: BrightlineStats): number => (row.short + row.long)} />
      <Title headingLevel="h3">Revenue (in millions of dollars)</Title>
      <MultiYearMonthlyRevenueChart lineFn={(row: BrightlineStats): number => (row.short + row.long + row.ancillary)} />
    </Content>
  </PageSection>
)

export { Dashboard };
