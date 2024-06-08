import React from 'react';

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

// delete button functionality
function DeleteButton({ onClick }) {
  return (
    <button className="delete-button" onClick={onClick}>
      Delete Partner
    </button>
  );
}

function PartnerTile({ partnerData }) {
 const handleDeleteClick = () => {
    const confirmed = window.confirm('Are you sure you want to delete this partner?');
    if (confirmed) {
      onDelete();
    }
  };


  return (
    <div className="partner-tile">
      {partnerData.name}
      <img className="partner-thumbnail" src={partnerData.thumbnailUrl} />
      <hr />
      <div className="partner-info">
        {partnerData.description}
      </div>
      <DeleteButton onClick={handleDeleteClick}/>
    </div>
  )
}

export default PartnerTile;