import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'
import { BrightlineStats, MultiYearMonthlyRidershipChart } from '@app/utils/MultiYearChart';
import { Content, ContentVariants } from '@patternfly/react-core/dist/dynamic/components/Content';

const Roanoke: React.FunctionComponent = () => (
  <PageSection hasBodyWrapper={false}>
    <Title headingLevel="h1" size="lg">Roanoke Corridor</Title>
    <Content>
      <Title headingLevel={ContentVariants.h3}>Ridership</Title>
      <MultiYearMonthlyRidershipChart lineFn={(row: BrightlineStats): number => row.short} />
      <Title headingLevel={ContentVariants.h3}>Notes</Title>
      <Content component="ul" isPlainList>
        <Content component="li">A second roundtrip was added in July 2022.</Content>
      </Content>
    </Content>
  </PageSection>
)

export { Roanoke };
