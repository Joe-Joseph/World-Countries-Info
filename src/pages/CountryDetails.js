import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Title } from '../Components/Title';

export const CountryDetails = () => {
  const { countryCode } = useParams();
  const [countryDetails, setCountryDetails] = useState();

  const getCountryDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
      );
      setCountryDetails(data[0]);
    } catch (error) {}
  };

  useEffect(() => {
    getCountryDetails();
  }, []);

  return (
    <div>
      <Title />
      <>
        {countryDetails ? (
          <div>
            <div className="bg-white rounded shadow-sm shadow-[#00000012] p-8">
              <div>
                <div className="text-center text-4xl text-[#124a63] font-bold">
                  {countryDetails?.name?.common}
                </div>
                <div className="text-center mt-5">
                  {countryDetails?.continents?.map((continent, index) => (
                    <span>
                      {continent}
                      {index + 1 < countryDetails?.continents?.length
                        ? ', '
                        : ''}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between mt-14">
                  <div>
                    <div className="text-[#124a63] font-semibold">
                      {countryDetails?.population?.toLocaleString('en-US')}
                    </div>
                    <div className="text-center text-[#bac9d1] font-medium">
                      Population
                    </div>
                  </div>

                  <div>
                    <div className="text-[#124a63] font-semibold">
                      {countryDetails?.area?.toLocaleString('en-US')}
                    </div>
                    <div className="text-center text-[#bac9d1] font-medium">
                      Area
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded shadow-sm shadow-[#00000012] p-8">
              <div className="text-[#124a63] font-bold">Details</div>
              <div className="flex justify-between py-4">
                <div className="text-[#bac9d1] font-medium">Capital</div>
                <div className="text-[#124a63] font-semibold">
                  {countryDetails?.capital?.map((capital, index) => (
                    <span>
                      {capital}
                      {index + 1 < countryDetails?.capital?.length ? ', ' : ''}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border border-b-[#e7edf070]"></div>

              <div className="flex justify-between py-4">
                <div className="text-[#bac9d1] font-medium">Languages</div>
                <div className="text-[#124a63] font-semibold">
                  {Object.values(countryDetails?.languages).map(
                    (language, index) => (
                      <span>
                        {language}
                        {index + 1 <
                        Object.values(countryDetails?.languages)?.length
                          ? ', '
                          : ''}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="border border-b-[#e7edf070]"></div>

              <div className="flex justify-between py-4">
                <div className="text-[#bac9d1] font-medium">Currencies</div>
                <div className="text-[#124a63] font-semibold">
                  {Object.keys(countryDetails?.currencies)?.map(
                    (currency, index) => (
                      <span>
                        {currency}
                        {index + 1 <
                        Object.keys(countryDetails?.currencies)?.length
                          ? ', '
                          : ''}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="border border-b-[#e7edf070]"></div>

              <div className="flex justify-between py-4">
                <div className="text-[#bac9d1] font-medium">Official Name</div>
                <div className="text-[#124a63] font-semibold">
                  {countryDetails?.name?.official}
                </div>
              </div>

              <div className="border border-b-[#e7edf070]"></div>

              <div className="flex justify-between py-4">
                <div className="text-[#bac9d1] font-medium">Start of week</div>
                <div className="text-[#124a63] font-semibold">
                  {countryDetails?.startOfWeek}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    </div>
  );
};
