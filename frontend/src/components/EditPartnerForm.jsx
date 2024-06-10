import React, { useState } from 'react';

function EditPartnerForm({ partnerData, onSave, onCancel }) {
  const [updatedPartner, setUpdatedPartner] = useState(partnerData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPartner(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    setUpdatedPartner(prevState => ({
      ...prevState,
      active: e.target.checked
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(updatedPartner);
  };

  return (
    <form onSubmit={handleSubmit} className='edit-partner-form'>
      <div>
        <label>Name:</label>
        <input
          type='text'
          name='name'
          value={updatedPartner.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Thumbnail URL:</label>
        <input
          type='text'
          name='thumbnailUrl'
          value={updatedPartner.thumbnailUrl}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
         <textarea
          name='description'
          value={updatedPartner.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Active?</label>
          <input
            type='checkbox'
            name='active'
            checked={updatedPartner.active}
            onChange={handleCheckboxChange}
          />
      </div>
      <button type='submit'>Save Changes</button>
      <button type='button' onClick={onCancel}>Cancel</button>
    </form>
  );
}

export default EditPartnerForm;
