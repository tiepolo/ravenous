const clientID = 'nrHcLpND_s3wxq5lhYLPSQ';
const secret = '68Fne2mHwS7T0l8G8fv8krG4t8VFyyLFrkBsb4XAdU15Ttb7gRItckGNJGrRzgM4';
let accessToken = '';

const Yelp = {
  getAccessToken() {
    if(accessToken) {
      return new Promise(resolve => resolve(accessToken));
    }
    return fetch(`https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientID}&client_secret=${secret}`, {
      method: 'POST'
    }).then(reponse => {
      return response.json();
    }).then(jsonResponse => {
      accessToken = jsonResponse.access_token;
    })
  }
}
