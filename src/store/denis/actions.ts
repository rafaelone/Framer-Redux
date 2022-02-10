import { Dispatch } from 'redux';
import * as actions from './types';

export const AddProfissao =
  (profissao: string) =>
  (dispatch: Dispatch): void => {
    dispatch({
      type: actions.QUAL_PROFISSAO,
      profissao,
    });
  };

export const AddAtividade =
  (atividade: string) =>
  (dispatch: Dispatch): void => {
    dispatch({
      type: actions.ADD_ATIVIDADE,
      atividade,
    });
  };

export const RemoveAtividade =
  (atividade: string) =>
  (dispatch: Dispatch): void => {
    console.log(atividade);
    dispatch({
      type: actions.REMOVE_ATIVIDADE,
      remove: atividade,
    });
  };
