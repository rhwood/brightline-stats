import * as React from 'react';
import { HelpIcon } from '@patternfly/react-icons/dist/dynamic/icons/help-icon'
import { Button } from '@patternfly/react-core/dist/dynamic/components/Button'
import {
  EmptyState,
  EmptyStateActions,
  EmptyStateBody,
  EmptyStateFooter,
  EmptyStateVariant
} from '@patternfly/react-core/dist/dynamic/components/EmptyState'
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Content } from '@patternfly/react-core/dist/dynamic/components/Content'

export interface ISupportProps {
  sampleProp?: string;
}

// eslint-disable-next-line prefer-const
let Support: React.FunctionComponent<ISupportProps> = () => (
  <PageSection hasBodyWrapper={false}>
    <EmptyState  headingLevel="h1" icon={HelpIcon}  titleText="Support" variant={EmptyStateVariant.full}>
      <EmptyStateBody>
        <Content>
          <Content component="p">
            This site is not affiliated with Brightline.
          </Content>
          <Content component="p">
            This site was built as much to learn and practice the underlying techniques as to
            provide a visualization for publicly provided data available elsewhere. Please report
            any issues on GitHub.
          </Content>
          <Content component="p">
            Built with ❤️ and ☕️ in Herndon, Virginia.
          </Content>
        </Content>
      </EmptyStateBody><EmptyStateFooter>
      <Button component="a" href="https://github.com/rhwood/brightline-stats/issues" variant="primary">GitHub Issues</Button>
      <EmptyStateActions>
        <Button component="a" href='https://www.gobrightline.com/virginia' variant='link'>Brightline</Button>
        <Button component="a" href="https://en.wikipedia.org/wiki/Brightline" variant="link">Wikipedia</Button>
      </EmptyStateActions>
    </EmptyStateFooter></EmptyState>
  </PageSection>
);

export { Support };
