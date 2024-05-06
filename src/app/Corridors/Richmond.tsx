import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'
import { MultiYearMonthlyOTPChart, MultiYearMonthlyRidershipChart, VPRAStats } from '@app/utils/MultiYearChart';
import { Text, TextContent, TextList, TextListItem, TextVariants } from '@patternfly/react-core/dist/dynamic/components/Text';

const Richmond: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg">Richmond Corridor</Title>
    <TextContent>
      <Text component={TextVariants.p}>
        The Richmond corridor consists of Northeast Regional services terminating at Richmond Main Street station.
        The entirety of the Richmond corridor is shared with the Newport News corridor, and all of the Richmod
        corridor except the Richmond Main Street station is shared with the Norfolk corridor.
      </Text>
      <Title headingLevel={TextVariants.h3}>Ridership</Title>
      <MultiYearMonthlyRidershipChart lineFn={(row: VPRAStats): number => row.Richmond} />
      <Title headingLevel={TextVariants.h3}>On Time Performance</Title>
      <MultiYearMonthlyOTPChart lineFn={(row: VPRAStats): number => row.Richmond} />
      <Title headingLevel={TextVariants.h3}>Notes</Title>
      <TextList isPlain>
        <TextListItem>Services only on this corridor was suspended from April 2020 to September 2021 due to the pandemic.</TextListItem>
        <TextListItem>In September 2021, service was extended from Richmond Staple Mills station to Richmond Main Street station.</TextListItem>
      </TextList>
    </TextContent>
  </PageSection>
)

export { Richmond };
