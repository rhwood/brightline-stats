import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'
import { MultiYearMonthlyOTPChart, MultiYearMonthlyRidershipChart, VPRAStats } from '@app/utils/MultiYearChart';
import { Content, ContentVariants } from '@patternfly/react-core/dist/dynamic/components/Content';

const Richmond: React.FunctionComponent = () => (
  <PageSection hasBodyWrapper={false}>
    <Title headingLevel="h1" size="lg">Richmond Corridor</Title>
    <Content>
      <Content component={ContentVariants.p}>
        The Richmond corridor consists of Northeast Regional services terminating at Richmond Main Street station.
        The entirety of the Richmond corridor is shared with the Newport News corridor, and all of the Richmod
        corridor except the Richmond Main Street station is shared with the Norfolk corridor.
      </Content>
      <Title headingLevel={ContentVariants.h3}>Ridership</Title>
      <MultiYearMonthlyRidershipChart lineFn={(row: VPRAStats): number => row.Richmond} />
      <Title headingLevel={ContentVariants.h3}>On Time Performance</Title>
      <MultiYearMonthlyOTPChart lineFn={(row: VPRAStats): number => row.Richmond} />
      <Title headingLevel={ContentVariants.h3}>Notes</Title>
      <Content component="ul" isPlainList>
        <Content component="li">Services only on this corridor was suspended from April 2020 to September 2021 due to the pandemic.</Content>
        <Content component="li">In September 2021, service was extended from Richmond Staple Mills station to Richmond Main Street station.</Content>
      </Content>
    </Content>
  </PageSection>
)

export { Richmond };
