// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux';

import {AppDispatch, RootState} from '../state/store';
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
