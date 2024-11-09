import * as React from 'react';
import { DataSourceIcon } from '@patternfly/react-icons/dist/dynamic/icons/data-source-icon'
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

export interface ISourcesProps {
  sampleProp?: string;
}

// eslint-disable-next-line prefer-const
let Sources: React.FunctionComponent<ISourcesProps> = () => (
  <PageSection hasBodyWrapper={false}>
    <EmptyState  headingLevel="h1" icon={DataSourceIcon}  titleText="Sources" variant={EmptyStateVariant.full}>
      <EmptyStateBody>
        <Content>
          <Content component="p">
            The data for this visualizer is sourced from Brightline, which periodically provides updated ridership and revenue statistics.
          </Content>
          <Content component="p">
            Brightline publishes this data monthly as PDF reports. The data from these PDF reports are copied by hand into a CSV file which is used to produce the graphs in this visualizer.
          </Content>
        </Content>
      </EmptyStateBody><EmptyStateFooter>
      <Button component="a" href="https://github.com/rhwood/brightline-stats/blob/main/src/monthly-ridership.csv" variant="primary">Ridership CSV Data</Button>
      <Button component="a" href="https://github.com/rhwood/brightline-stats/blob/main/src/monthly-fare.csv" variant="primary">Fares CSV Data</Button>
      <Button component="a" href="https://github.com/rhwood/brightline-stats/blob/main/src/monthly-revenue.csv" variant="primary">Revenue CSV Data</Button>
      <EmptyStateActions>
        <Button component="a" href="https://www.gobrightline.com/investor-relations" variant="link">Investor Reports</Button>
        <Button component="a" href="https://www.gobrightline.com" variant="link">Brightline</Button>
      </EmptyStateActions>
    </EmptyStateFooter></EmptyState>
  </PageSection>
);

export { Sources };
