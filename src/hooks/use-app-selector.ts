import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { TRootState } from '../types/state';

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
