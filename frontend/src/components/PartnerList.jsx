import React from 'react';
import PartnerTile from './PartnerTile';

const PartnerList = ({ partners, setPartners }) => {
  const deletePartner = (name) => {
    setPartners(prevPartners => ({
      ...prevPartners,
      [name]: { ...prevPartners[name], active: false }
    }));
  };

  return (
    <div>
      {Object.keys(partners)
        .filter(key => partners[key].active)
        .map(key => (
          <PartnerTile
            key={key}
            partnerData={partners[key]}
            onDelete={() => deletePartner(key)}
          />
        ))}
    </div>
  );
};

export default PartnerList;
