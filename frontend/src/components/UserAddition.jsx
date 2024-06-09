import React, { useState } from 'react';

/*
  Contains the layout for how adding a user input looks
*/

function UserAddition({ onAddPartner }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleAddInfoClick = () => {
    const newPartner = {
      name,
      description,
      thumbnailUrl,
      isActive,
    };
    onAddPartner(newPartner);
    setName('');
    setDescription('');
    setThumbnailUrl('');
    setIsActive(false);
  };

  return (
    <div className='add-info-panel'>
      <input
        type='text'
        placeholder='Partner Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder='Partner Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type='text'
        placeholder='Partner Logo URL'
        value={thumbnailUrl}
        onChange={(e) => setThumbnailUrl(e.target.value)}
      />
      <label>
        Active:
        <input
          type='checkbox'
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
        />
      </label>
      <button className='add-partner-info-btn' onClick={handleAddInfoClick}>
        Add Partner Info
      </button>
    </div>
  );
}

export default UserAddition;
