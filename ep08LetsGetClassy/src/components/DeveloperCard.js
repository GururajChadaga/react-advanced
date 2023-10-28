import { useEffect, useState } from 'react';
import { DEVELOPER_BASE_URL } from '../utils/constants';

const DeveloperCard = () => {
  const [developer, setDeveloper] = useState({});
  const { name, location, avatar_url: avatarUrl } = developer;

  const fetchDeveloper = async () => {
    const response = await fetch(`${DEVELOPER_BASE_URL}gururajchadaga`);
    const json = await response.json();
    setDeveloper(json);
  };

  useEffect(() => {
    fetchDeveloper();
  }, []);

  return (
    <div className='dev-card'>
      <div className='dev-details-container'>
        <div>{`Name: ${name}`}</div>
        <div>{`Location: ${location}`}</div>
      </div>

      <div className='dev-avatar-container'>
        {avatarUrl && <img className='dev-avatar' src={avatarUrl} />}
      </div>
    </div>
  );
};

export default DeveloperCard;
