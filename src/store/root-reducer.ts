import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process';
import { appProcess } from './app-process/app-process';
import { offersProcess } from './offers-process/offers-process';
import { offerProcess } from './offer-process/offer-process';
import { nearPlacesProcess } from './near-places-process/near-places-process';
import { commentsProcess } from './comments-process/comments-process';

const rootReducer = combineReducers({
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.Offer]: offerProcess.reducer,
  [NameSpace.NearPlaces]: nearPlacesProcess.reducer,
  [NameSpace.Comments]: commentsProcess.reducer,
});

export { rootReducer };
