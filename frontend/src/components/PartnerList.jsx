import React from 'react';
import PartnerTile from './PartnerTile';

const PartnerList = ({ partners, setPartners }) => {
  const deletePartner = (partnerId) => {
    setPartners((prevPartners) => ({
      ...prevPartners,
      [partnerId]: { ...prevPartners[partnerId], active: false }
    }));
  };

  return (
    <div id="main-partners-grid">
      {Object.keys(partners).map(partnerId => (
        partners[partnerId].active && (
          <PartnerTile
            key={partnerId}
            partnerData={partners[partnerId]}
            onDelete={() => deletePartner(partnerId)}
          />
        )
      ))}
    </div>
  );
};

export default PartnerList;
