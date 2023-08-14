import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process';
import { appProcess } from './app-process/app-process';
import { offersProcess } from './offer-process/offer-process';

const rootReducer = combineReducers({
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offersProcess.reducer,
});

export { rootReducer };
