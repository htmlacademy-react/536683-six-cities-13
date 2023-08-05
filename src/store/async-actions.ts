import { fetchData } from '.';
import { BASE_URL } from '../const';
import { TOffer } from '../types/offer';
import { TAppDispatch } from '../types/state';
import { fetchOffers } from './actions';

const loadOffers = () => async (dispatch: TAppDispatch) => {
  const response = await fetchData.get<TOffer[]>(`${BASE_URL}/offers`);

  dispatch(fetchOffers(response.data));
};

export { loadOffers };
