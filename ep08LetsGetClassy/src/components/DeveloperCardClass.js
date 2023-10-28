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
  }
}

export default DeveloperCardClass;
