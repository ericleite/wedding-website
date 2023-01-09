import { InternalRoute } from './ui';

export enum ActionType {
  HeroImageLoaded,
}

export type HeroImageLoadedAction = {
  type: ActionType.HeroImageLoaded;
  payload: { route: InternalRoute };
};
