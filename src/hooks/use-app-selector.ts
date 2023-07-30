import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../types/state';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
