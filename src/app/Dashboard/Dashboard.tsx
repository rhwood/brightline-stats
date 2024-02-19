import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'
import { MultiYearMonthlyChart, Ridership } from '@app/utils/MultiYearChart';
import { Text, TextContent, TextVariants } from '@patternfly/react-core/dist/dynamic/components/Text'

const Dashboard: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Total Ridership</Title>
    <TextContent>
      <Text component={TextVariants.p}>
        The Virginia Rail Passenger Authority (VRPA) sponsors eight Amtrak trains on four corridors.
        This site visualizes the ridership data for those trains as provided monthly by the VRPA.
      </Text>
      <MultiYearMonthlyChart lineFn={(row: Ridership): number => row['Newport News'] + row.Norfolk + row.Richmond + row.Roanoke} />
    </TextContent>
  </PageSection>
)

export { Dashboard };
