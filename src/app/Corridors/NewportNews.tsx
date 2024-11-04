import * as React from 'react';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page'
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title'
import { MultiYearMonthlyOTPChart, MultiYearMonthlyRidershipChart, VPRAStats } from '@app/utils/MultiYearChart'
import { Content, ContentVariants } from '@patternfly/react-core/dist/dynamic/components/Content'

const NewportNews: React.FunctionComponent = () => (
  <PageSection hasBodyWrapper={false}>
    <Title headingLevel="h1" size="lg">Newport News Corridor</Title>
    <Content>
      <Title headingLevel="h3">Ridership</Title>
      <MultiYearMonthlyRidershipChart lineFn={(row: VPRAStats): number => row['Newport News']} />
      <Title headingLevel="h3">On Time Performance</Title>
      <MultiYearMonthlyOTPChart lineFn={(row: VPRAStats): number => row['Newport News']} />
      <Title headingLevel={ContentVariants.h3}>Notes</Title>
      <Content component="ul" isPlainList>
        <Content component="li">A roundtrip cancelled due to the pandemic was resumed in July 2022.</Content>
      </Content>
    </Content>
  </PageSection>
)

export { NewportNews };
