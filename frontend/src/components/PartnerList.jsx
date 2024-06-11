import React from 'react';
import PartnerTile from './PartnerTile';

const PartnerList = ({ partners, setPartners }) => {
  const deletePartner = (id) => {
    fetch(`http://localhost:4000/partners/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setPartners(prevPartners => {
        const newPartners = { ...prevPartners };
        delete newPartners[id];
        return newPartners;
      });
    })
    .catch(error => alert(error));
  };

  const editPartner = (updatedPartner) => {
    const { id } = updatedPartner;
    fetch(`http://localhost:4000/partners/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedPartner)
    }).then(res => res.json())
      .then(data => {
        setPartners(prevPartners => ({
          ...prevPartners,
          [id]: data
        }));
      })
      .catch(error => alert(error));
  };

  return (
    <div className='partner-list'>
      {Object.entries(partners).map(([id, partner]) => (
        <PartnerTile
          key={id}
          partnerData={{ ...partner, id }}
          onDelete={deletePartner}
          onEdit={editPartner}
        />
      ))}
    </div>
  );
};

export default PartnerList;
