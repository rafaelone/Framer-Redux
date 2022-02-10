import { ChangeEvent, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './styles';

import * as actions from '../../store/denis/actions';
import { Profissao } from './Profissao';

export function Denis(): ReactElement {
  const dispatch = useDispatch();

  function handleChangeJob(event: ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;

    dispatch(actions.AddProfissao(value));
  }

  return (
    <Container>
      <h1>Qual a Profissão do Denis</h1>
      <select onChange={handleChangeJob}>
        <option value="Dev Jr">Dev Jr</option>
        <option value="Dev Pleno">Dev Pleno</option>
        <option value="Dev Senior">Dev Senior</option>
        <option value="Lixo">Lixo</option>
      </select>
      <Profissao />
    </Container>
  );
}
