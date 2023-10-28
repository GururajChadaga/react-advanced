import DeveloperCard from './DeveloperCard';
import DeveloperCardClass from './DeveloperCardClass';
import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className='about-container'>
        {/* <DeveloperCard /> */}
        <DeveloperCardClass />
      </div>
    );
  }
}
export default About;
