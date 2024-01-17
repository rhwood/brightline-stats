import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'
import { MultiYearChart, Ridership } from '@app/utils/MultiYearChart';

const Norfolk: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Norfolk Corridor Ridership</Title>
    <MultiYearChart lineFn={(row: Ridership): number => row.Norfolk} />
  </PageSection>
)

export { Norfolk };
