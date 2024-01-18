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
import { Text, TextContent } from '@patternfly/react-core/dist/dynamic/components/Text'

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
          <Text component="p">
            This site was built as much to learn and practice the underlying techniques as to
            provide a visualization for publicly provided data available elsewhere.
          </Text>
        </TextContent>
      </EmptyStateBody><EmptyStateFooter>
      <Button component="a" href="https://github.com/rhwood/amtk-va-ridership/issues" variant="primary">GitHub Issues</Button>
      <EmptyStateActions>
        <Button component="a" href='https://www.amtrak.com/virginia' variant='link'>Amtrak</Button>
        <Button component="a" href="https://vapassengerrailauthority.org" variant="link">VPRA</Button>
        <Button component="a" href="https://en.wikipedia.org/wiki/Amtrak_Virginia" variant="link">Wikipedia</Button>
      </EmptyStateActions>
    </EmptyStateFooter></EmptyState>
  </PageSection>
);

export { Support };
