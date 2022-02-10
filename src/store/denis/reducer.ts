import * as types from './types';

export type Action = {
  profissao: string;
  type: string;
  atividade: string;
  remove: string;
};

export type DenisReducer = {
  profissao: string;
  atividade: string[];
};

export const INITIAL_STATE: DenisReducer = {
  profissao: '',
  atividade: [],
};

export function Denis(state = INITIAL_STATE, action: Action): DenisReducer {
  switch (action.type) {
    case types.QUAL_PROFISSAO: {
      return {
        ...state,
        profissao: action.profissao,
      };
    }
    case types.ADD_ATIVIDADE: {
      const checkAtividade = state.atividade.filter(
        (ativi) => ativi === action.atividade,
      );

      if (checkAtividade.length) {
        localStorage.setItem('@denis', JSON.stringify(state.atividade));
        return {
          ...state,
        };
      }
      localStorage.setItem(
        '@denis',
        JSON.stringify([...state.atividade, action.atividade]),
      );
      return {
        ...state,
        atividade: [...state.atividade, action.atividade],
      };
    }
    case types.REMOVE_ATIVIDADE: {
      const newAtividades = state.atividade.filter(
        (ativi) => ativi !== action.remove,
      );

      localStorage.setItem('@denis', JSON.stringify(newAtividades));

      return {
        ...state,
        atividade: newAtividades,
      };
    }
    default:
      const getAtividades = localStorage.getItem('@denis');
      return {
        ...state,
        atividade: getAtividades ? JSON.parse(getAtividades) : [],
      };
  }
}
