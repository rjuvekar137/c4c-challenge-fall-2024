import React from 'react';
import PartnerTile from './PartnerTile';

const PartnerList = ({ partners, setPartners }) => {
  const deletePartner = (name) => {
    setPartners((prevPartners) => ({
      ...prevPartners,
      [name]: {
        ...prevPartners[name],
        active: false
      }
    }));
  };

  return (
    <div>
      {Object.values(partners).map(partner => (
        <PartnerTile
          key={partner.name}
          partnerData={partner}
          onDelete={() => deletePartner(partner.name)}
        />
      ))}
    </div>
  );
};

export default PartnerList;
