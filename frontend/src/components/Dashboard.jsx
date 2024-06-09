import { useState, useEffect } from 'react';
import PartnerList from './PartnerList';
import UserAddition from './UserAddition';

function Dashboard() {
  const [partners, setPartners] = useState({});
  const [isAddingPartner, setIsAddingPartner] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/partners', {
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
    setIsAddingPartner(false);
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
      <PartnerList partners={partners} setPartners={setPartners} />
    </div>
  );
}

export default Dashboard;
