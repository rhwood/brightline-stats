import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'

const GeneralSettings: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">
      General Settings Page Title
    </Title>
  </PageSection>
);

export { GeneralSettings };
