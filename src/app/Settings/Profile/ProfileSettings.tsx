import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'

const ProfileSettings: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">
      Profile Settings Page Title
    </Title>
  </PageSection>
);

export { ProfileSettings };
