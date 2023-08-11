import { store } from '../store';
import { setError } from '../store/actions';
import { clearError } from '../store/async-actions';
import { TError } from '../types/error';

const handleError = (message: TError) => {
  store.dispatch(setError(message));
  store.dispatch(clearError());
};

export { handleError };
