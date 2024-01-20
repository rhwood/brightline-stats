import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'
import { MultiYearChart, Ridership } from '@app/utils/MultiYearChart'
import { Text, TextContent, TextList, TextListItem, TextVariants } from '@patternfly/react-core/dist/dynamic/components/Text'

const NewportNews: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Newport News Corridor Ridership</Title>
    <MultiYearChart lineFn={(row: Ridership): number => row['Newport News']} />
    <TextContent>
      <Text component={TextVariants.h3}>Notes</Text>
      <TextList isPlain>
        <TextListItem>A roundtrip cancelled due to the pandemic was resumed in July 2022.</TextListItem>
      </TextList>
    </TextContent>
  </PageSection>
)

export { NewportNews };
