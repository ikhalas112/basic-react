import { useState } from "react";

const useSetState = <State = any,>(initialState: State | (() => State)) => {
  const [state, setState] = useState<State>(initialState);

  const getState = async (): Promise<State> => {
    let state: unknown;

    setState((currentState: State) => {
      state = currentState;
      return currentState;
    });
    return state as State;
  };

  return [state, setState, getState] as [
    State,
    typeof setState,
    typeof getState
  ];
};

export default function useSetStateHook() {
  const [state, serState, getState] = useSetState(100);

  return <div>useSetState</div>;
}
