import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'
import { BrightlineStats, MultiYearMonthlyFareChart, MultiYearMonthlyRevenueChart, MultiYearMonthlyRidershipChart } from '@app/utils/MultiYearChart';
import { Content, ContentVariants } from '@patternfly/react-core/dist/dynamic/components/Content'

const Short: React.FunctionComponent = () => (
  <PageSection hasBodyWrapper={false}>
    <Title headingLevel="h1" size="lg">Short Distance Trips</Title>
    <Content>
    <Title headingLevel={ContentVariants.h3}>Ridership</Title>
      <MultiYearMonthlyRidershipChart lineFn={(row: BrightlineStats): number => row.short} />
      <Title headingLevel={ContentVariants.h3}>Average Fare per Passenger</Title>
      <MultiYearMonthlyFareChart lineFn={(row: BrightlineStats): number => row.short} />
      <Title headingLevel={ContentVariants.h3}>Revenues (in millions of dollars)</Title>
      <MultiYearMonthlyRevenueChart lineFn={(row: BrightlineStats): number => row.short} />
      <Title headingLevel={ContentVariants.h3}>Notes</Title>
      <Content component="ul" isPlainList>
        <Content component="li">Long distance services started in September 2023.</Content>
      </Content>
    </Content>
  </PageSection>
)

export { Short };
