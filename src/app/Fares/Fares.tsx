import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'
import { BrightlineStats, MultiYearMonthlyFareChart, RollingMonthlyFareChart } from '@app/utils/MultiYearChart';
import { Content, ContentVariants } from '@patternfly/react-core/dist/dynamic/components/Content'

const Fares: React.FunctionComponent = () => {
  const rollingLineFns: {(row: BrightlineStats): number;}[] = [
    (row: BrightlineStats): number => { return row.short },
    (row: BrightlineStats): number => { return row.long },
  ];
  return (
    <PageSection hasBodyWrapper={false}>
      <Title headingLevel="h1" size="lg">Average Fares per Passenger</Title>
      <Content>
        <Content component={ContentVariants.p}>
          Brightline operates passenger trains on a single route in Florida.
          This site visualizes the ridership and revenue data for those trains as provided monthly by Brightline.
        </Content>
        <Title headingLevel="h3">Average Fares</Title>
        <MultiYearMonthlyFareChart lineFn={(row: BrightlineStats): number => row.ancillary} />
        <Title headingLevel="h3">Average Fare by Trip Length</Title>
        <RollingMonthlyFareChart lineFn={rollingLineFns} />
        <Title headingLevel={ContentVariants.h3}>Notes</Title>
        <Content component="ul" isPlainList>
          <Content component="li">Long distance services started in September 2023.</Content>
        </Content>
      </Content>
    </PageSection>
)
}

export { Fares };
