import axios from 'axios';
import * as queryString from 'query-string';
import config from '../../../Http/Config/index'
const { GoogleConfig } = config

class GoogleCredentials {

  static createUrl() {
    const stringifiedParams = queryString.stringify({
      client_id: GoogleConfig.GOOGLE_CLIENT_ID,
      redirect_uri: GoogleConfig.REDIRECT_URI,
      scope: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
      ].join(' '),
      response_type: 'code',
      access_type: 'offline',
      prompt: 'consent',
    });

    const googleLoginUrl = `${GoogleConfig.AUTH_URL}${stringifiedParams}`;
    return googleLoginUrl;
  }

  static async getAccessToken(code: string) {
    try {
      const { data } = await axios({
        url: GoogleConfig.GOOGLE_ACCESS_TOKEN_URL,
        method: 'post',
        data: {
          client_id: GoogleConfig.GOOGLE_CLIENT_ID,
          client_secret: GoogleConfig.GOOGLE_CLIENT_SECRET,
          redirect_uri: GoogleConfig.REDIRECT_URI,
          grant_type: 'authorization_code',
          code,
        },
      });

      if (data) {
        const userData = await GoogleCredentials.getUserInfo(data.access_token)
        return userData;
      }

    }
    catch (error) {
      console.log(error)
    }
  }

  static async getUserInfo(accessToken) {
    const { data } = await axios({
      url: GoogleConfig.GOOGLE_USER_INFO_URL,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  };

}

export default GoogleCredentials