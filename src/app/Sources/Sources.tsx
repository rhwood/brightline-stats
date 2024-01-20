import * as React from 'react';
import { DataSourceIcon } from '@patternfly/react-icons/dist/dynamic/icons/data-source-icon'
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

export interface ISourcesProps {
  sampleProp?: string;
}

// eslint-disable-next-line prefer-const
let Sources: React.FunctionComponent<ISourcesProps> = () => (
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
      <Button component="a" href="https://github.com/rhwood/amtk-va-ridership/blob/main/src/monthly-ridership.csv" variant="primary">CSV Data</Button>
      <EmptyStateActions>
        <Button component="a" href="https://vapassengerrailauthority.org/resources/ridership-reports/" variant="link">Ridership Reports</Button>
        <Button component="a" href="https://vapassengerrailauthority.org" variant="link">VPRA</Button>
      </EmptyStateActions>
    </EmptyStateFooter></EmptyState>
  </PageSection>
);

export { Sources };
