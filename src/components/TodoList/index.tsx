import { ChangeEvent, ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Container } from '../Denis/styles';
import * as actions from '../../store/denis/actions';

type ButtonProps = {
  atividade: string;
};

function Button({ atividade }: ButtonProps): ReactElement {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(actions.RemoveAtividade(atividade));
  }

  return (
    <li>
      <button type="button" onClick={handleClick}>
        {atividade}
      </button>
    </li>
  );
}

export function TodoList(): ReactElement {
  const [todo, setTodo] = useState<string>('');
  const { atividade } = useSelector((state: RootState) => state.denisReducer);

  const dispatch = useDispatch();

  function handleSubmit(event: ChangeEvent<HTMLFormElement>): void {
    event.preventDefault();
    dispatch(actions.AddAtividade(todo));
    setTodo('');
  }

  return (
    <Container>
      <form
        onSubmit={handleSubmit}
        style={{ flexDirection: 'column', display: 'flex' }}
      >
        <input
          type="text"
          value={todo}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setTodo(event.target.value)
          }
        />
        <button type="submit">Cadastrar</button>
      </form>

      <ul>
        {atividade.map((ativi) => (
          <Button atividade={ativi} />
        ))}
      </ul>
    </Container>
  );
}
