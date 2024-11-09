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
            The data for this visualizer is sourced from the Virgina Passenger Rail Authority, which periodically provides updated ridership and on time performance (OTP) statistics.
          </Content>
          <Content component="p">
            VPRA publishes this data monthly as PDF reports, one report per calendar year. The data from these PDF reports are copied by hand into a CSV file which is used to produce the graphs in this visualizer.
          </Content>
        </Content>
      </EmptyStateBody><EmptyStateFooter>
      <Button component="a" href="https://github.com/rhwood/brightline-stats/blob/main/src/monthly-ridership.csv" variant="primary">Ridership CSV Data</Button>
      <Button component="a" href="https://github.com/rhwood/brightline-stats/blob/main/src/monthly-otp.csv" variant="primary">OTP CSV Data</Button>
      <EmptyStateActions>
        <Button component="a" href="https://vapassengerrailauthority.org/resources/ridership-reports/" variant="link">Ridership Reports</Button>
        <Button component="a" href="https://vapassengerrailauthority.org/resources/resources-otp-reports/" variant="link">OTP Reports</Button>
        <Button component="a" href="https://vapassengerrailauthority.org/about/executive-directors-reports/" variant="link">Executive Director&apos;s Reports</Button>
        <Button component="a" href="https://vapassengerrailauthority.org" variant="link">VPRA</Button>
      </EmptyStateActions>
    </EmptyStateFooter></EmptyState>
  </PageSection>
);

export { Sources };
