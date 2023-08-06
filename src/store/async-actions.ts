import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, RequestStatus } from '../const';
import { TOffer } from '../types/offer';
import { TAppDispatch, TRootState } from '../types/state';
import { AxiosInstance } from 'axios';
import { changeRequestStatus, fetchOffers } from './actions';

const loadOffers = createAsyncThunk<
  void,
  undefined,
  { dispatch: TAppDispatch; state: TRootState; extra: AxiosInstance }
>('data/loadOffers', async (_arg, { dispatch, extra: fetchData }) => {
  try {
    dispatch(changeRequestStatus(RequestStatus.Loading));
    const { data } = await fetchData.get<TOffer[]>(APIRoute.Offers);

    dispatch(changeRequestStatus(RequestStatus.Success));
    dispatch(fetchOffers(data));
  } catch (error) {
    dispatch(changeRequestStatus(RequestStatus.Error));
  }
});

export { loadOffers };
