import { createSlice } from '@reduxjs/toolkit';
import { TState } from '../reducer';
import { NameSpace } from '../../const';
import { loadNearPlaces } from '../async-actions';

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
