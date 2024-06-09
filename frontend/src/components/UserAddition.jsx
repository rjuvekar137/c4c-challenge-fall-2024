import React, { useState } from 'react';

function UserAddition({ onAddPartner }) {
  const [newPartner, setNewPartner] = useState({
    name: '',
    thumbnailUrl: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPartner(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPartner(newPartner);
  };

  return (
    <form onSubmit={handleSubmit} className='add-info-panel'>
      <div>
        <label>Name:</label>
        <input
          type='text'
          name='name'
          value={newPartner.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Thumbnail URL:</label>
        <input
          type='text'
          name='thumbnailUrl'
          value={newPartner.thumbnailUrl}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
         <textarea
          name='description'
          value={newPartner.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>
          Active?
          <input
            type='checkbox'
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
          />
        </label>
      </div>
      <button type='submit'>Add Partner</button>
    </form>
  );
}

export default UserAddition;
