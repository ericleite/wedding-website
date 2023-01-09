import React, { createContext, useCallback, useContext, useMemo, useReducer } from 'react';

import { ActionType, HeroImageLoadedAction, InternalRoute } from '../types';

type Action = HeroImageLoadedAction;
type Dispatch = (action: Action) => void;
type State = { heroImageLoaded: { [key in InternalRoute]: boolean } };

const INITIAL_STATE: State = {
  heroImageLoaded: {
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
    case ActionType.HeroImageLoaded: {
      return {
        heroImageLoaded: {
          ...state.heroImageLoaded,
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

  const setHeroImageLoaded = useCallback(
    (route: InternalRoute) => {
      context.dispatch({ payload: { route }, type: ActionType.HeroImageLoaded });
    },
    [context],
  );

  return useMemo(() => ({ ...context, setHeroImageLoaded }), [context, setHeroImageLoaded]);
}
