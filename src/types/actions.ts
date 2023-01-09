import { InternalRoute } from './ui';

export enum ActionType {
  PageLoaded,
}

export type PageLoadedAction = {
  type: ActionType.PageLoaded;
  payload: { route: InternalRoute };
};
