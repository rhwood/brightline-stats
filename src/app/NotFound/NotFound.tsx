import * as React from 'react';
import { ExclamationTriangleIcon } from '@patternfly/react-icons/dist/dynamic/icons/exclamation-triangle-icon'
import { Button } from '@patternfly/react-core/dist/dynamic/components/Button'
import {
  EmptyState,
  EmptyStateBody,
  EmptyStateFooter,
} from '@patternfly/react-core/dist/dynamic/components/EmptyState'
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { useHistory } from 'react-router-dom';

const BASE_PATH = process.env.BASE_PATH || '/';

const NotFound: React.FunctionComponent = () => {
  function GoHomeBtn() {
    const history = useHistory();
    function handleClick() {
      history.push(BASE_PATH);
    }
    return (
      <Button onClick={handleClick}>Take me home</Button>
    );
  }

  return (
    <PageSection hasBodyWrapper={false}>
    <EmptyState  headingLevel="h1" icon={ExclamationTriangleIcon}  titleText="404 Page not found" variant="full">
      <EmptyStateBody>
        We didn&apos;t find a page that matches the address you navigated to.
      </EmptyStateBody><EmptyStateFooter>
      <GoHomeBtn />
    </EmptyStateFooter></EmptyState>
  </PageSection>
  )
};

export { NotFound };
