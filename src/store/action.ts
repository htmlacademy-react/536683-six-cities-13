import { createAction } from '@reduxjs/toolkit';
import { TCity, TOffer } from '../types/offer';

const changeCity = createAction('nav/changeCity', (city: TCity) => ({
  payload: city,
}));
const fillOfferList = createAction(
  'offers/fillOfferList',
  (offers: TOffer[]) => ({
    payload: offers,
  })
);

export { changeCity, fillOfferList };
