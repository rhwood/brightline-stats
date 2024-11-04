import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'
import { MultiYearMonthlyOTPChart, MultiYearMonthlyRidershipChart, VPRAStats } from '@app/utils/MultiYearChart'
import { Content, ContentVariants } from '@patternfly/react-core/dist/dynamic/components/Content'

const Norfolk: React.FunctionComponent = () => (
  <PageSection hasBodyWrapper={false}>
    <Title headingLevel="h1" size="lg">Norfolk Corridor</Title>
    <Content>
      <Title headingLevel={ContentVariants.h3}>Ridership</Title>
      <MultiYearMonthlyRidershipChart lineFn={(row: VPRAStats): number => row.Norfolk} />
      <Title headingLevel={ContentVariants.h3}>On Time Performance</Title>
      <MultiYearMonthlyOTPChart lineFn={(row: VPRAStats): number => row.Norfolk} />
      <Title headingLevel={ContentVariants.h3}>Notes</Title>
      <Content component="ul" isPlainList>
        <Content component="li">A second roundtrip was added in March 2019.</Content>
        <Content component="li">A third roundtrip was added in July 2022.</Content>
      </Content>
    </Content>
  </PageSection>
)

export { Norfolk };
