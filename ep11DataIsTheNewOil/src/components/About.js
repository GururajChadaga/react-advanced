import UserContext from '../utils/UserContext';
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
      <div className='mb-4'>
        <UserContext.Consumer>
          {({ userName }) => (
            <div className='ml-4'>{`userName: ${userName}`}</div>
          )}
        </UserContext.Consumer>
        <DeveloperCard />

        {/* <DeveloperCardClass /> */}
      </div>
    );
  }
}
export default About;
