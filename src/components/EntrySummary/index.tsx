import React from 'react';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

import Container from '../Core/Container';

const EntrySummary: React.FC<any> = ({}) => {
  return (
    <Container
      title="Categorias"
      actionLabelText="Últimos 7 dias"
      actionButtonText="Ver mais"
      onPressActionButton={() => {}}>
      <EntrySummaryChart />
      <EntrySummaryList />
    </Container>
  );
};

export default EntrySummary;
