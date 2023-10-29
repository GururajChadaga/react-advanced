import React from 'react';
import { DEVELOPER_BASE_URL } from '../utils/constants';

class DeveloperCardClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      developerInfo: {},
    };
  }

  async componentDidMount() {
    const response = await fetch(`${DEVELOPER_BASE_URL}gururajchadaga`);
    const json = await response.json();
    this.setState({
      developerInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url: avatarUrl } = this.state.developerInfo;
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
  }
}

export default DeveloperCardClass;
