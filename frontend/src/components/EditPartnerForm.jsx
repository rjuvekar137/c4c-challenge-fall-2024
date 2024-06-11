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
      <div className='form-fields'>
      <div className='form-row'>
        <div className='form-group'>
          <label className='form-label'>Name:</label>
          <input
            type='text'
            name='name'
            value={updatedPartner.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label className='form-label'>Thumbnail URL:</label>
          <input
            type='text'
            name='thumbnailUrl'
            value={updatedPartner.thumbnailUrl}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className='form-row'>
        <div className='form-group'>
          <label className='form-label'>Description:</label>
          <input
            type='text'
            name='description'
            value={updatedPartner.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label className='form-label'>Active?</label>
          <input
            type='checkbox'
            name='active'
            checked={updatedPartner.active}
            onChange={handleCheckboxChange}
          />
        </div>
      </div>
      </div>
      <div className='form-row'>
        <button className='save-changes-btn' type='submit'>Save Changes</button>
        <button className='cancel-btn' type='button' onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default EditPartnerForm;
