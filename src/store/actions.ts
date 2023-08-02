import { createAction } from '@reduxjs/toolkit';
import { TOffer } from '../types/offer';

const changeLocation = createAction<string>('nav/changeLocation');
const fetchOffers = createAction<TOffer[]>('offers/fetchOffers');

export { changeLocation, fetchOffers };
