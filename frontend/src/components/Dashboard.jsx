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
    fetch(`http://localhost:4000/partners/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPartner)
    }).then(res => res.json())
      .then(data => {
        setPartners((prevPartners) => ({
          ...prevPartners,
          [data.id]: newPartner
        }));
        setIsAddingPartner(false);
      })
      .catch(error => alert(error));
  };

  const toggleAddPartnerPanel = () => {
    setIsAddingPartner(!isAddingPartner);
  };

  const cancelAddPartner = () => {
    setIsAddingPartner(false);
  };

  return (
    <div id="main-content">
      <div className='add-partner-info-btn-container'>
        {isAddingPartner ? (
          <UserAddition onAddPartner={addPartner} onCancel={cancelAddPartner} />
        ) : (
          <button className='add-partner-info-btn' onClick={toggleAddPartnerPanel}>
            Add Partner Info
          </button>
        )}
      </div>
      <PartnerList partners={partners} setPartners={setPartners} />
    </div>
  );
}

export default Dashboard;
