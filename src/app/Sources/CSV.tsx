import * as React from 'react';
import { Link } from 'react-router-dom';
import { DataSourceIcon } from '@patternfly/react-icons';
import {
  Button,
  EmptyState,
  EmptyStateActions,
  EmptyStateBody,
  EmptyStateFooter,
  EmptyStateHeader,
  EmptyStateIcon,
  EmptyStateVariant,
  PageSection,
  Text,
  TextContent,
  TextVariants,
} from '@patternfly/react-core';

export interface ICSVProps {
  sampleProp?: string;
}

// eslint-disable-next-line prefer-const
let CSV: React.FunctionComponent<ICSVProps> = () => (
  <PageSection>
    <EmptyState variant={EmptyStateVariant.full}>
      <EmptyStateHeader titleText="Sources" icon={<EmptyStateIcon icon={DataSourceIcon} />} headingLevel="h1" />
      <EmptyStateBody>
        <TextContent>
          <Text component="p">
            The data for this visualizer is sourced from the Virgina Passenger Rail Authority, which periodically provides updated statistics.
          </Text>
          <Text component="p">
            VPRA publishes this data monthly as PDF reports, one report per calendar year. The data from the PDF reports are copied by hand into a CSV file which is used to produce the graphs in this visualizer.
          </Text>
        </TextContent>
      </EmptyStateBody><EmptyStateFooter>
      <Button component={(props: any) => <Link to="CSV" />} variant="primary">CSV Data</Button>
      <EmptyStateActions>
        <Button component="a" href="https://vapassengerrailauthority.org/resources/ridership-reports/" variant="link">Monthly Ridership Reports</Button>
        <Button component="a" href="https://vapassengerrailauthority.org" variant="link">VPRA</Button>
      </EmptyStateActions>
    </EmptyStateFooter></EmptyState>
  </PageSection>
);

export { CSV };
