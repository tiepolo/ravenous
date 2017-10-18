import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render () {
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map((business, arrayIndex) => {
              return <Business business={business} key={arrayIndex} />;
            }
          )
        }
      </div>
    )
  }
}

export default BusinessList;
