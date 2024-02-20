import { count } from 'console';
import { useReducer } from 'react';

type State = {
  count: number;
};

type Action = { type: 'increment' | 'decrement' };

const reducer = (state: State, action: Action) => {
  return state; //para funcionar a função reducer precisa retornar algo no mesmo formato do estado
};
export const UseReducerExample: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: 'increment' });
  };

  const decrement = () => {
    dispatch({ type: 'decrement' });
  };

  //https://youtu.be/QFmndUkUYn0?t=911

  return <div></div>;
};
