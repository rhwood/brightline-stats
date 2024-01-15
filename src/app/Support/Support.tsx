import * as React from 'react';
import { HelpIcon } from '@patternfly/react-icons/dist/dynamic/icons/help-icon'
import { Button } from '@patternfly/react-core/dist/dynamic/components/Button'
import {
  EmptyState,
  EmptyStateActions,
  EmptyStateBody,
  EmptyStateFooter,
  EmptyStateHeader,
  EmptyStateIcon,
  EmptyStateVariant
} from '@patternfly/react-core/dist/dynamic/components/EmptyState'
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Text, TextContent, TextVariants } from '@patternfly/react-core/dist/dynamic/components/Text'

export interface ISupportProps {
  sampleProp?: string;
}

// eslint-disable-next-line prefer-const
let Support: React.FunctionComponent<ISupportProps> = () => (
  <PageSection>
    <EmptyState variant={EmptyStateVariant.full}>
      <EmptyStateHeader titleText="Support" icon={<EmptyStateIcon icon={HelpIcon} />} headingLevel="h1" />
      <EmptyStateBody>
        <TextContent>
          <Text component="p">
            This site is not affiliated with Amtrak or the Virginia Passenger Rail Authority.
          </Text>
          <Text component={TextVariants.small}>
            This text has overridden a css component variable to demonstrate how to apply customizations using
            PatternFly&apos;s global variable API.
          </Text>
        </TextContent>
      </EmptyStateBody><EmptyStateFooter>
      <Button variant="primary">Primary Action</Button>
      <EmptyStateActions>
        <Button variant="link">Multiple</Button>
        <Button variant="link">Action Buttons</Button>
        <Button variant="link">Can</Button>
        <Button variant="link">Go here</Button>
        <Button variant="link">In the secondary</Button>
        <Button variant="link">Action area</Button>
      </EmptyStateActions>
    </EmptyStateFooter></EmptyState>
  </PageSection>
);

export { Support };
