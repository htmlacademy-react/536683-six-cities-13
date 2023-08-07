import { store } from '../store';
import { setError } from '../store/actions';
import { clearError } from '../store/async-actions';

const handleError = (message: string) => {
  store.dispatch(setError(message));
  store.dispatch(clearError());
};

export { handleError };
