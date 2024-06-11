import React, { useState } from 'react';
import EditPartnerForm from './EditPartnerForm';

function PartnerTile({ partnerData, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleDeleteClick = () => {
    const confirmed = window.confirm('Are you sure you want to delete this partner?');
    if (confirmed) {
      onDelete(partnerData.id);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedPartner) => {
    onEdit(updatedPartner);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="partner-tile">
      {isEditing ? (
        <EditPartnerForm 
          partnerData={partnerData} 
          onSave={handleSave} 
          onCancel={handleCancel} 
        />
      ) : (
        <>
          <img className="partner-thumbnail" src={partnerData.thumbnailUrl} alt={partnerData.name} />
          <h3>{partnerData.name}</h3>
          <div className={`partner-status ${partnerData.active ? 'active' : 'inactive'}`}>
            {partnerData.active ? 'Active' : 'Inactive'}
          </div>
          <hr />
          <div className="partner-info">
            {partnerData.description}
          </div>
          <div className='partner-actions'>
            <div className='form-row'>
              <button className='delete-button' onClick={handleDeleteClick}>Delete</button>
              <button className='edit-button' onClick={handleEditClick}>Edit</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PartnerTile;
