import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'
import { MultiYearMonthlyChart, Ridership } from '@app/utils/MultiYearChart';
import { Text, TextContent, TextList, TextListItem, TextVariants } from '@patternfly/react-core/dist/dynamic/components/Text';

const Roanoke: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Roanoke Corridor Ridership</Title>
    <TextContent>
      <MultiYearMonthlyChart lineFn={(row: Ridership): number => row.Roanoke} />
      <Text component={TextVariants.h3}>Notes</Text>
      <TextList isPlain>
        <TextListItem>A second roundtrip was added in July 2022.</TextListItem>
      </TextList>
    </TextContent>
  </PageSection>
)

export { Roanoke };
