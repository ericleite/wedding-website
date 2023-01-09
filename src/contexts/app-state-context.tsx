import React, { createContext, useCallback, useContext, useMemo, useReducer } from 'react';

import { ActionType, InternalRoute, PageLoadedAction } from '../types';

type Action = PageLoadedAction;
type Dispatch = (action: Action) => void;
type State = { pageLoaded: { [key in InternalRoute]: boolean } };

const INITIAL_STATE: State = {
  pageLoaded: {
    [InternalRoute.Accommodations]: false,
    [InternalRoute.Home]: false,
    [InternalRoute.NotFound]: false,
    [InternalRoute.OurStory]: false,
    [InternalRoute.Registry]: false,
    [InternalRoute.Rsvp]: false,
    [InternalRoute.Schedule]: false,
  },
};

const AppStateContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

function appStateReducer(state: State, action: Action) {
  switch (action.type) {
    case ActionType.PageLoaded: {
      return {
        pageLoaded: {
          ...state.pageLoaded,
          [action.payload.route]: true,
        },
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

type AppStateProviderProps = { children: React.ReactNode };

export function AppStateProvider({ children }: AppStateProviderProps) {
  const [state, dispatch] = useReducer(appStateReducer, INITIAL_STATE);
  const context = useMemo(() => ({ dispatch, state }), [dispatch, state]);
  return <AppStateContext.Provider value={context}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }

  const setPageLoaded = useCallback(
    (route: InternalRoute) => {
      context.dispatch({ payload: { route }, type: ActionType.PageLoaded });
    },
    [context],
  );

  console.log(context.state.pageLoaded);

  return useMemo(() => ({ ...context, setPageLoaded }), [context, setPageLoaded]);
}
