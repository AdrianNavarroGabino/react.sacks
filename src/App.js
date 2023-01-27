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

const getAllRegs = async (path) => {
  const res = await axios.get(`${domain}${path}`);
  return res;
}

function App() {
  const { t } = useTranslation('app');
  const [tabValue, setTabValue] = useState(0);
  const [categories, setCategories] = useState([]);
  const [movements, setMovements] = useState([]);
  const [percentages, setPercentages] = useState([]);
  const [totals, setTotals] = useState([]);

  useEffect(() => {
    //getAllRegs('categories').then(setCategories);
    getAllRegs('movements').then(res => {
      setMovements(res.data);
      const totals = res.data.reduce((acc, curr) => {
        if (!acc[curr.category_id]) {
          acc[curr.category_id] = curr;
        } else {
          acc[curr.category_id].value += curr.value;
        }

        return acc;
      }, []);
      setTotals(totals);
      console.log({ totals });
    });
    //getAllRegs('percentages').then(setPercentages);
  }, [])


  const handleChange = (event, newTabValue) => {
    setTabValue(newTabValue);
  };

  return (
    <div className="App">
      <General t={t} categories={categories} movements={movements} percentages={percentages} totals={totals} />
      {/*<Tabs value={tabValue} onChange={handleChange} aria-label="icon label tabs example" sx={{ position: 'fixed', bottom: 0 }}>
        <Tab icon={<PhoneIcon />} label="RECENTS" />
        <Tab icon={<FavoriteIcon />} label="FAVORITES" />
        <Tab icon={<PersonPinIcon />} label="NEARBY" />
  </Tabs>*/}
    </div>
  );
}

export default App;
