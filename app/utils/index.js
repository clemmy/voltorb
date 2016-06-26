import axios from 'axios'

export default {
  getToken: function() {
    return axios({
      method: 'post',
      url: 'https://platform.pokitdok.com/oauth2/token',
      headers: {
        'Authorization': 'Basic Z1B4VE1EcFdGY0N2VFRWNlZRYkg6bnZLcmlVUVVCTVc1NjYzVG01cEd3OWZJT2pIWnJHZ09La04yVEZMYwo='
      },
      data: 'grant_type=client_credentials'
    }).then((response) => response.data.access_token)
  }
}
