import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'
import { BrightlineStats, MultiYearMonthlyRevenueChart, RollingMonthlyRevenueChart } from '@app/utils/MultiYearChart';
import { Content, ContentVariants } from '@patternfly/react-core/dist/dynamic/components/Content'

const Revenues: React.FunctionComponent = () => {
  const rollingLineFns: {(row: BrightlineStats): number;}[] = [
    (row: BrightlineStats): number => { return row.short },
    (row: BrightlineStats): number => { return row.long },
    (row: BrightlineStats): number => { return row.ancillary }
  ];
  return (
    <PageSection hasBodyWrapper={false}>
      <Title headingLevel="h1" size="lg">Revenues</Title>
      <Content>
        <Content component={ContentVariants.p}>
          Brightline operates passenger trains on a single route in Florida.
          This site visualizes the ridership and revenue data for those trains as provided monthly by Brightline.
        </Content>
        <Title headingLevel="h3">Total Revenues (in millions of dollars)</Title>
        <MultiYearMonthlyRevenueChart lineFn={(row: BrightlineStats): number => (row.short + row.long + row.ancillary)} />
        <Title headingLevel="h3">Revenue by Source (in millions of dollars)</Title>
        <RollingMonthlyRevenueChart lineFn={rollingLineFns} />
        <Title headingLevel={ContentVariants.h3}>Notes</Title>
        <Content component="ul" isPlainList>
          <Content component="li">Long distance services started in September 2023.</Content>
        </Content>
      </Content>
    </PageSection>
  )
}

export { Revenues };
