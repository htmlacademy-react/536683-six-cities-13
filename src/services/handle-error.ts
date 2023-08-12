import { ERROR_TIMEOUT } from '../const';
import { store } from '../store';
import { clearError, setError } from '../store/actions';
import { TError } from '../types/error';

const handleError = (errorInfo: TError) => {
  store.dispatch(setError(errorInfo));

  store.dispatch(clearError({ errorInfo: null, delay: ERROR_TIMEOUT }));
};

export { handleError };
