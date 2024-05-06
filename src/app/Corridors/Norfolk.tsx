import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'
import { MultiYearMonthlyOTPChart, MultiYearMonthlyRidershipChart, VPRAStats } from '@app/utils/MultiYearChart'
import { TextContent, TextList, TextListItem, TextVariants } from '@patternfly/react-core/dist/dynamic/components/Text'

const Norfolk: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Norfolk Corridor</Title>
    <TextContent>
      <Title headingLevel={TextVariants.h3}>Ridership</Title>
      <MultiYearMonthlyRidershipChart lineFn={(row: VPRAStats): number => row.Norfolk} />
      <Title headingLevel={TextVariants.h3}>On Time Performance</Title>
      <MultiYearMonthlyOTPChart lineFn={(row: VPRAStats): number => row.Norfolk} />
      <Title headingLevel={TextVariants.h3}>Notes</Title>
      <TextList isPlain>
        <TextListItem>A second roundtrip was added in March 2019.</TextListItem>
        <TextListItem>A third roundtrip was added in July 2022.</TextListItem>
      </TextList>
    </TextContent>
  </PageSection>
)

export { Norfolk };
