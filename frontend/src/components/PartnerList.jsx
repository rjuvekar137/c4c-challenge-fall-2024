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
    <div className='partner-list'>
      {Object.values(partners).map(partner => (
        <div className="partner-tile-wrapper" key={partner.name}>
          <PartnerTile
            partnerData={partner}
            onDelete={() => deletePartner(partner.name)}
          />
        </div>
      ))}
    </div>
  );
};

export default PartnerList;
