import React from 'react';
import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import 'flag-icons/css/flag-icons.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import cookies from 'js-cookie';
import { NavDropdown } from "react-bootstrap";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'lt', 'ru'],
    fallbackLng: 'en',
    debug: false,
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
  })

const languages = [
  {
    code: 'gb',
    name: 'English',
  },
  {
    code: 'lt',
    name: 'Lithuanian',
  },
  {
    code: 'ru',
    name: 'Russian',
  },
]

export const Languages = () => {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const { t } = useTranslation()
  
  return (
    <>
    {/* <GlobeIcon /> */}
    
    <div className='divGlobus'>
    <svg height="30" width="30">
      <circle cx="16" cy="16" r="10" stroke="dodgerblue" strokeWidth="3" fill="dodgerblue" />
        Sorry, your browser does not support inline SVG.  
    </svg> 
    <NavDropdown title={t('lang')} id="collasible-nav-dropdown">
      
    {languages.map(({ code, name }) => (
      
      <NavDropdown.Item 
        key={code}
        href="#"
        disabled={currentLanguageCode === code}
        onClick={
          () => {i18next.changeLanguage(code)}
        }
      >
        <span
          className={`fi fi-${code} fib mx-2`}
          style={{
            opacity: currentLanguageCode === code ? 0.5 : 1,
          }}
        >
        </span> {name}
        
      </NavDropdown.Item>
      ))}
    </NavDropdown>
    </div>
    </>
  )
}
