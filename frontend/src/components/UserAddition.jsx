import React, { useState } from 'react';

function UserAddition({ onAddPartner, onCancel }) {
  const [newPartner, setNewPartner] = useState({
    name: '',
    thumbnailUrl: '',
    description: '',
    active: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPartner(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    setNewPartner(prevState => ({
      ...prevState,
      active: e.target.checked
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPartner(newPartner);
  };

  return (
    <form onSubmit={handleSubmit} className='add-info-panel'>
      <div className='form-row'>
      <div className='form-group'>
      <label className='form-label'>Name:</label>
        <input
          type='text'
          name='name'
          value={newPartner.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
      <label className='form-label'>Thumbnail URL:</label>
        <input
          type='text'
          name='thumbnailUrl'
          value={newPartner.thumbnailUrl}
          onChange={handleChange}
          required
        />
      </div>
      </div>
      <div className='form-row'>
      <div className='form-group'>
      <label className='form-label'>Description:</label>
         <input
          name='description'
          value={newPartner.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
      <label className='form-label'>Active?</label>
          <input
            type='checkbox'
            name='active'
            checked={newPartner.active}
            onChange={handleCheckboxChange}
          />
      </div>
      </div>
      <div className='form-row'>
        <button className='save-changes-btn' type='submit'>Add Partner</button>
        <button className='cancel-btn' type='button' onClick={onCancel}>Cancel</button>
      </div>    
      </form>
  );
}

export default UserAddition;
