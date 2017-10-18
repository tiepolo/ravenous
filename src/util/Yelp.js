const clientID = 'nrHcLpND_s3wxq5lhYLPSQ';
const secret = '68Fne2mHwS7T0l8G8fv8krG4t8VFyyLFrkBsb4XAdU15Ttb7gRItckGNJGrRzgM4';
let accessToken = '';


const Yelp = {
  getAccessToken() {
    if(accessToken) {
      return new Promise(resolve => resolve(accessToken));
    }
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientID}&client_secret=${secret}`
    , {
      method: 'POST'
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      accessToken = jsonResponse.access_token;
    })
  },
  search(term, location, sortBy) {
    return Yelp.getAccessToken().then(() => {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
      , { headers: { Authorization: `Bearer ${accessToken}` }})
      .then(response => response.json())
      .then(jsonResponse => {
          if(jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => (
              {
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                sate: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories.title,
                rating: business.rating,
                reviewCount: business.review_count
              }
            ));
          } // end if
        }); // end json response
    }); // yelp getaccess
  }
}

export default Yelp;
