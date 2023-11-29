import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const Country = ({ country }) => {
  const history = useHistory();

  return (
    <>
      {country ? (
        <div
          onClick={() => history.push(`/country/${country?.ccn3}`)}
          className="bg-white text-[#124a63] shadow-sm shadow-[#00000012] flex p-8 cursor-pointer text-center rounded mb-5 font-medium"
        >
          {' '}
          <div className="text-left" style={{ flex: '6 1' }}>
            {country?.name?.common}
          </div>
          <div className="text-left" style={{ flex: '6 1' }}>
            {country?.population?.toLocaleString('en-US')}
          </div>
          <div className="text-left" style={{ flex: '6 1' }}>
            {country?.area?.toLocaleString('en-US')}
          </div>
          <div className="text-left" style={{ flex: '6 1' }}>
            {country?.languages
              ? Object.values(country?.languages)?.map((language, index) => (
                  <span>
                    {language}
                    {index + 1 < Object.values(country?.languages)?.length
                      ? ', '
                      : ''}
                  </span>
                ))
              : null}
          </div>
        </div>
      ) : null}
    </>
  );
};
