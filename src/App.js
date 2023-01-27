import React, { useEffect, useState } from 'react';
import './App.css';
import i18next from 'i18next';
import en from './i18n/en';
import ca from './i18n/ca';
import es from './i18n/es';
import { useTranslation } from 'react-i18next';
import { General } from './general/General';
import { Tab, Tabs } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import env from './env';
import axios from 'axios';

const domain = env[process.env.NODE_ENV].DOMAIN;

i18next.addResourceBundle('en', 'app', en);
i18next.addResourceBundle('ca', 'app', ca);
i18next.addResourceBundle('es', 'app', es);

(() => {
  axios.get(`${domain}categories`).then(console.log);
})();

//getAllRegs('categories').then(console.log);

function App() {
  const { t } = useTranslation('app');
  const [tabValue, setTabValue] = useState(0);
  const [categories, setCategories] = useState([]);
  const [moviments, setMoviments] = useState([]);
  const [percentatges, setPercentatges] = useState([]);

  const getAll = async () => {
    //const categories = await getAllRegs('categories');
    //const moviments = await getAllRegs('moviments');
    //const percentatges = await getAllRegs('percentatges');

    //setCategories(categories);
    //setMoviments(moviments);
    //setPercentatges(percentatges);
  }

  useEffect(() => {
    //getAllRegs('categories').then(setCategories);
    //getAllRegs('moviments').then(setMoviments);
    //getAllRegs('percentatges').then(setPercentatges);
    getAll();
  }, [])


  const handleChange = (event, newTabValue) => {
    setTabValue(newTabValue);
  };

  return (
    <div className="App">
      {t('TITLE')}
      <General t={t} categories={categories} moviments={moviments} percentatges={percentatges} />
      <Tabs value={tabValue} onChange={handleChange} aria-label="icon label tabs example" sx={{ position: 'fixed', bottom: 0 }}>
        <Tab icon={<PhoneIcon />} label="RECENTS" />
        <Tab icon={<FavoriteIcon />} label="FAVORITES" />
        <Tab icon={<PersonPinIcon />} label="NEARBY" />
      </Tabs>
    </div>
  );
}

export default App;
