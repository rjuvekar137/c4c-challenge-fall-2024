import { useState, useEffect } from 'react';
import PartnerTile from './PartnerTile';
import UserAddition from './UserAddition';

/*
  The top-level component containing everything relevant to the dashboard,
  including information on each partner
*/
function Dashboard() {
  const [partners, setPartners] = useState({});
  const [isAddingPartner, setIsAddingPartner] = useState(false);

  // Load all partners on initial page load 
  useEffect(() => {
    fetch('http://localhost:4000', {
      method: 'GET',
    })
    .then((res) => res.json())
    .then(data => setPartners(data));
  }, []);

  const addPartner = (newPartner) => {
    setPartners((prevPartners) => ({
      ...prevPartners,
      [newPartner.name]: newPartner
    }));
    setIsAddingPartner(false); // Hide the form panel after adding the partner
  };

  const toggleAddPartnerPanel = () => {
    setIsAddingPartner(!isAddingPartner);
  };

  return (
    <div id="main-content">
      <div className='add-partner-info-btn-container'>
        <button className='add-partner-info-btn' onClick={toggleAddPartnerPanel}>
          {isAddingPartner ? 'Cancel' : 'Add Partner Info'}
        </button>
        {isAddingPartner && <UserAddition onAddPartner={addPartner} />}
      </div>
      <div id="main-partners-grid">
        {Object.keys(partners).map(partnerId => (
          <PartnerTile key={partnerId} partnerData={partners[partnerId]} />
        ))}      
      </div>
    </div>
  );
}

export default Dashboard;
