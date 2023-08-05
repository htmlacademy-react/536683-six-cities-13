import { fetchData } from '.';
import { BASE_URL, RequestStatus } from '../const';
import { TOffer } from '../types/offer';
import { TAppDispatch } from '../types/state';
import { changeRequestStatus, fetchOffers } from './actions';

const loadOffers = () => async (dispatch: TAppDispatch) => {
  dispatch(changeRequestStatus(RequestStatus.Loading));

  try {
    const response = await fetchData.get<TOffer[]>(`${BASE_URL}/offers`);

    dispatch(fetchOffers(response.data));
    dispatch(changeRequestStatus(RequestStatus.Success));
  } catch (error) {
    dispatch(changeRequestStatus(RequestStatus.Error));
  }
};

export { loadOffers };
