import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'
import { MultiYearMonthlyOTPChart, MultiYearMonthlyRidershipChart, VPRAStats } from '@app/utils/MultiYearChart';
import { Text, TextContent, TextVariants } from '@patternfly/react-core/dist/dynamic/components/Text'

const Dashboard: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Overall</Title>
    <TextContent>
      <Text component={TextVariants.p}>
        The Virginia Rail Passenger Authority (VRPA) sponsors eight Amtrak trains on four corridors.
        This site visualizes the ridership data for those trains as provided monthly by the VRPA.
      </Text>
      <Title headingLevel="h3">Ridership</Title>
      <MultiYearMonthlyRidershipChart lineFn={(row: VPRAStats): number => row['Newport News'] + row.Norfolk + row.Richmond + row.Roanoke} />
      <Title headingLevel="h3">On Time Performance</Title>
      <MultiYearMonthlyOTPChart lineFn={(row: VPRAStats): number => (row['Newport News'] + row.Norfolk + row.Richmond + row.Roanoke) / 4} />
    </TextContent>
  </PageSection>
)

export { Dashboard };
