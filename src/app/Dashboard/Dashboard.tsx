import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'
import { MultiYearChart, Ridership } from '@app/utils/MultiYearChart';

const Dashboard: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Total Ridership</Title>
    <MultiYearChart lineFn={(row: Ridership): number => row['Newport News'] + row.Norfolk + row.Richmond + row.Roanoke} />
  </PageSection>
)

export { Dashboard };
