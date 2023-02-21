import dayjs from 'dayjs';
import React, { useCallback, useEffect, useMemo } from 'react'
import i18n, {t} from 'i18next';
import {initReactI18next} from 'react-i18next';
import { getLocale } from '../helper';
import { setLanguage } from '../state/auth/reducer';
import { TLang } from '../state/auth/type';
import { useAppDispatch, useAppSelector } from './useAppSelector';
import vi from '../language/vi.json'
import en from '../language/en.json'

const useI18n = () =>{
    const dispatch = useAppDispatch()
    const userLang = useAppSelector(state => state.authReducer.lang)
    const lng = useMemo<TLang>(()=> userLang || getLocale() as TLang,[userLang]);

    const configLang = useCallback(async () => {
        dispatch(setLanguage(lng));
        dayjs.locale(lng);
        const resources = {
          vi: {translation: vi},
          en: {translation: en},
        };
        i18n.use(initReactI18next).init({
          compatibilityJSON: 'v3',
          resources,
          lng,
          fallbackLng: 'en',
          interpolation: {escapeValue: false},
          react: {useSuspense: false},
        });
      }, [dispatch]);
      //Init language
      useEffect(() => {
        configLang();
      }, [configLang]);

    return null
}

export default useI18n