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
    <div className='rounded-[3rem] border border-black border-solid p-4 w-[50rem] h-20 flex justify-between mb-4'>
      <div>
        <div>{`Name: ${name}`}</div>
        <div>{`Location: ${location}`}</div>
      </div>

      <div className='w-12 rounded-[2rem] ml-4'>
        {avatarUrl && (
          <img className='h-12 w-12 rounded-[2rem]' src={avatarUrl} />
        )}
      </div>
    </div>
  );
};

export default DeveloperCard;
