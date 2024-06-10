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

  const editPartner = async (id, updatedPartner) => {
    try {
      const response = await fetch(`http://localhost:4000/partners/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPartner),
      });

      if (response.ok) {
        setPartners((prevPartners) => ({
          ...prevPartners,
          [id]: updatedPartner,
        }));
      } else {
        console.error('Failed to update partner');
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
          onEdit={editPartner}
        />
      ))}
    </div>
  );
};

export default PartnerList;
