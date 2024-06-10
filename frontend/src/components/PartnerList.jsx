import React from 'react';
import PartnerTile from './PartnerTile';

const PartnerList = ({ partners, setPartners }) => {
  const deletePartner = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/partners/${id}`, {
        method: 'DELETE',
      });

      if (response.status === 204) {
        setPartners((prevPartners) => {
          const updatedPartners = { ...prevPartners };
          delete updatedPartners[id];
          return updatedPartners;
        });
      } else {
        console.error('Failed to delete partner');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='partner-list'>
      {Object.entries(partners).map(([id, partner]) => (
        <PartnerTile
          key={id}
          partnerId={id}
          partnerData={partner}
          onDelete={() => deletePartner(id)}
        />
      ))}
    </div>
  );
};

export default PartnerList;
