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
      <img className="partner-thumbnail" src='' />
      <hr />
      <div className="partner-info">
        This is some placeholder content - you'll need to replace the content here with actual partner information. 
      </div>
      <DeleteButton onClick={handleDeleteClick}/>
    </div>
  )
}

export default PartnerTile;