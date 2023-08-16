import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { loadNearPlaces } from '../async-actions';
import { TState } from '../../types/state';

type TNearPlacesProcess = Pick<TState, 'nearPlaces'>;

const initialState: TNearPlacesProcess = {
  nearPlaces: [],
};

export const nearPlacesProcess = createSlice({
  name: NameSpace.NearPlaces,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadNearPlaces.fulfilled, (state, action) => {
      state.nearPlaces = action.payload;
    });
  },
});
