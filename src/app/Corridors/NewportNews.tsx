import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'
import { MultiYearMonthlyOTPChart, MultiYearMonthlyRidershipChart, VPRAStats } from '@app/utils/MultiYearChart'
import { TextContent, TextList, TextListItem, TextVariants } from '@patternfly/react-core/dist/dynamic/components/Text'

const NewportNews: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Newport News Corridor</Title>
    <TextContent>
      <Title headingLevel="h3">Ridership</Title>
      <MultiYearMonthlyRidershipChart lineFn={(row: VPRAStats): number => row['Newport News']} />
      <Title headingLevel="h3">On Time Performance</Title>
      <MultiYearMonthlyOTPChart lineFn={(row: VPRAStats): number => row['Newport News']} />
      <Title headingLevel={TextVariants.h3}>Notes</Title>
      <TextList isPlain>
        <TextListItem>A roundtrip cancelled due to the pandemic was resumed in July 2022.</TextListItem>
      </TextList>
    </TextContent>
  </PageSection>
)

export { NewportNews };
