import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'
import { BrightlineStats, MultiYearMonthlyRidershipChart, RollingMonthlyRidershipChart } from '@app/utils/MultiYearChart';
import { Content, ContentVariants } from '@patternfly/react-core/dist/dynamic/components/Content'

const Ridership: React.FunctionComponent = () => (
  <PageSection hasBodyWrapper={false}>
    <Title headingLevel="h1" size="lg">Ridership</Title>
    <Content>
      <Content component={ContentVariants.p}>
        Brightline operates passenger trains on a single route in Florida.
        This site visualizes the ridership and revenue data for those trains as provided monthly by Brightline.
      </Content>
      <Title headingLevel="h3">Total Ridership</Title>
      <MultiYearMonthlyRidershipChart lineFn={(row: BrightlineStats): number => row.short + row.long} />
      <Title headingLevel="h3">Last 12 Months by Trip Length</Title>
      <RollingMonthlyRidershipChart lineFn={(row: BrightlineStats): number => (row.short + row.long)} />
      <Title headingLevel={ContentVariants.h3}>Notes</Title>
      <Content component="ul" isPlainList>
        <Content component="li">Long distance services started in September 2023.</Content>
      </Content>
    </Content>
  </PageSection>
)

export { Ridership };
