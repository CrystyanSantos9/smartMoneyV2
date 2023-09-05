import React from 'react';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

import Container from '../Core/Container';

type Props = {
  onPressActionButton: unknown;
};

const EntrySummary: React.FC<Props> = ({onPressActionButton}) => {
  return (
    <Container
      title="Categorias"
      actionLabelText="Últimos 7 dias"
      actionButtonText="Ver mais"
      onPressActionButton={onPressActionButton}>
      <EntrySummaryChart />
      <EntrySummaryList />
    </Container>
  );
};

export default EntrySummary;
