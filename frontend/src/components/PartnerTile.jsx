import React from 'react';

function DeleteButton({ onClick }) {
  return (
    <button className="delete-button" onClick={onClick}>
      Delete Partner
    </button>
  ); 
}

function EditButton({ onClick }) {
  return (
    <button className="edit-button" onClick={onClick}>
      Edit Information
    </button>
  ); 
}

function PartnerTile({ partnerId, partnerData, onDelete }) {
  const handleDeleteClick = () => {
    const confirmed = window.confirm('Are you sure you want to delete this partner?');
    if (confirmed) {
      onDelete();
    }
  };

  const handleEditClick = () => {
    // Edit functionality can be implemented here
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
      <div className='partner-edit'>
        <EditButton onClick={handleEditClick}/>
      </div>
    </div>
  );
}

export default PartnerTile;
