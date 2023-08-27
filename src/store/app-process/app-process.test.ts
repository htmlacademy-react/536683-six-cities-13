import { DEFAULT_LOCATION } from '../../const';
import {
  appProcess,
  changeLocation,
  clearError,
  setError,
} from './app-process';

describe('AppProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const initialState = {
      location: DEFAULT_LOCATION,
      error: null,
    };
    const emptyAction = { type: '' };

    const result = appProcess.reducer(initialState, emptyAction);

    expect(result).toEqual(initialState);
  });

  it('should return default initial state', () => {
    const emptyAction = { type: '' };
    const expectedState = { location: DEFAULT_LOCATION, error: null };

    const result = appProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should change location field with "changeLocation" action', () => {
    const initialState = {
      location: DEFAULT_LOCATION,
      error: null,
    };
    const nextActionValue = 'Cologne';

    const result = appProcess.reducer(
      initialState,
      changeLocation(nextActionValue)
    );

    expect(result.location).toBe(nextActionValue);
  });

  it('should change error field with "setError" action', () => {
    const initialState = {
      location: DEFAULT_LOCATION,
      error: null,
    };
    const nextActionValue = {
      message: 'Not Found',
      messageStatus: '404',
    };

    const result = appProcess.reducer(initialState, setError(nextActionValue));

    expect(result.error).toEqual(nextActionValue);
  });

  it('should change error field to null with "clearError" action', () => {
    const initialState = {
      location: DEFAULT_LOCATION,
      error: {
        message: 'Not Found',
        messageStatus: '404',
      },
    };
    const nextActionValue = null;

    const result = appProcess.reducer(
      initialState,
      clearError({ errorInfo: nextActionValue, delay: 0 })
    );

    expect(result.error).toBe(nextActionValue);
  });
});
