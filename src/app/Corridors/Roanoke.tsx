import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'
import { MultiYearChart, Ridership } from '@app/utils/MultiYearChart';

const Roanoke: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Roanoke Corridor Ridership</Title>
    <MultiYearChart lineFn={(row: Ridership): number => row.Roanoke} />
  </PageSection>
)

export { Roanoke };
