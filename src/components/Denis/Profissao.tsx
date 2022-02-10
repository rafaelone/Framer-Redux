import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export function Profissao(): ReactElement {
  const { profissao } = useSelector((state: RootState) => state.denisReducer);

  if (!profissao.length) {
    return <strong>Desempregado</strong>;
  }

  return <strong>{profissao}</strong>;
}
