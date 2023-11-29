import React, { Fragment, useEffect, useState } from 'react';
import { Title } from '../Components/Title';
import axios from 'axios';
import { Country } from '../Components/Country';
import { TableHeaders } from '../Components/TableHeaders';
import { fetchAllCountries } from '../redux/actionCreators';
import { useDispatch } from 'react-redux';

export const Countries = () => {
  const [countries, setCountries] = useState();
  const dispatch = useDispatch();

  const fetchCountries = async () => {
    try {
      const { data } = await axios.get('https://restcountries.com/v3.1/all');
      setCountries(data);
      dispatch(fetchAllCountries(data));
    } catch (error) {}
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div>
      <Title />

      <div style={{ maxWidth: '1000px' }} className="mx-auto">
        <TableHeaders />
        {countries?.length &&
          countries.map((country) => <Country country={country} />)}
      </div>
    </div>
  );
};
