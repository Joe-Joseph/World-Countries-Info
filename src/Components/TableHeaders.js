import React from 'react';

export const TableHeaders = () => {
  const headers = ['Name', 'Population', 'Area', 'Languages'];
  return (
    <div className="flex p-8">
      {headers.map((header) => (
        <div
          style={{ display: 'flex', flex: '6 1' }}
          className="mr-5 text-[#bac9d1] font-bold content-start items-center"
        >
          {header}
        </div>
      ))}
    </div>
  );
};
