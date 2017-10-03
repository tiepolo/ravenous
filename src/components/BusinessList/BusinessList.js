import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render () {
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map(function(business) {
              <BusinessList business={businesses} />;
            }
          )
        }
      </div>
    )
  }
}

export default BusinessList;
