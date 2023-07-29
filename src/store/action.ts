import { createAction } from '@reduxjs/toolkit';
import { TOffer } from '../types/offer';

const changeLocation = createAction('nav/changeLocation', (city: string) => ({
  payload: city,
}));
const fillOfferList = createAction(
  'offers/fillOfferList',
  (offers: TOffer[]) => ({
    payload: offers,
  })
);

export { changeLocation, fillOfferList };
