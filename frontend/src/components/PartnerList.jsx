import React, { useState } from 'react';
import PartnerTile from './PartnerTile';

const PartnerList = () => {
  const [partners, setPartners] = useState([
    { id: 1, name: 'Partner 1', thumbnail: 'image1.jpg' },
    { id: 2, name: 'Partner 2', thumbnail: 'image2.jpg' },
  ]);

  const deletePartner = (id) => {
    setPartners(partners.filter(partner => partner.id !== id));
  };

  return (
    <div>
      {partners.map(partner => (
        <PartnerTile
          key={partner.id}
          partnerData={partner}
          onDelete={() => deletePartner(partner.id)}
        />
      ))}
    </div>
  );
};

export default PartnerList;
