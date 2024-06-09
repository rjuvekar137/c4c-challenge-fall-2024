import React from 'react';

function DeleteButton({ onClick }) {
  return (
    <button className="delete-button" onClick={onClick}>
      Delete Partner
    </button>
  ); 
}

function PartnerTile({ partnerData, onDelete }) {
  const handleDeleteClick = () => {
    const confirmed = window.confirm('Are you sure you want to delete this partner?');
    if (confirmed) {
      onDelete();
    }
  };

  return (
    <div className="partner-tile">
      <h3>{partnerData.name}</h3>
      <img className="partner-thumbnail" src={partnerData.thumbnailUrl} alt={partnerData.name} />
      <hr />
      <div className="partner-info">
        {partnerData.description}
      </div>
      <div className='partner-status'>
        <strong>Status: </strong> {partnerData.active ? 'Active' : 'Inactive'}
      </div>
      <div className='partner-delete'>
        <DeleteButton onClick={handleDeleteClick} />
      </div>
    </div>
  );
}

export default PartnerTile;
