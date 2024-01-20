import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'
import { MultiYearChart, Ridership } from '@app/utils/MultiYearChart'
import { Text, TextContent, TextList, TextListItem, TextVariants } from '@patternfly/react-core/dist/dynamic/components/Text'

const Norfolk: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Norfolk Corridor Ridership</Title>
    <MultiYearChart lineFn={(row: Ridership): number => row.Norfolk} />
    <TextContent>
      <Text component={TextVariants.h3}>Notes</Text>
      <TextList isPlain>
        <TextListItem>A second roundtrip was added in March 2019.</TextListItem>
        <TextListItem>A third roundtrip was added in July 2022.</TextListItem>
      </TextList>
    </TextContent>
  </PageSection>
)

export { Norfolk };
