import axios from 'axios';
import * as queryString from 'query-string';
import config from '../../../http/config/index'
const {GoogleConfig} = config
 
class GoogleCredentials {

    static createUrl(){
        const stringifiedParams = queryString.stringify({
            client_id: GoogleConfig.google_client_id,
            redirect_uri: GoogleConfig.redirect_uri,
            scope: [
              'https://www.googleapis.com/auth/userinfo.email',
              'https://www.googleapis.com/auth/userinfo.profile',
            ].join(' '),
            response_type: 'code',
            access_type: 'offline',
            prompt: 'consent',
          });
          
          const googleLoginUrl = `${GoogleConfig.auth_url}${stringifiedParams}`;
          return googleLoginUrl;
    }

    static async getAccessToken(code:string) {
        try {
            const { data } = await axios({
                url: GoogleConfig.google_access_token_url,
                method: 'post',
                data: {
                    client_id: GoogleConfig.google_client_id,
                    client_secret: GoogleConfig.google_client_secret,
                    redirect_uri: GoogleConfig.redirect_uri,
                    grant_type: 'authorization_code',
                    code,
                },
            });

          if (data){
            const userData = await GoogleCredentials.getUserInfo(data.access_token)
            return userData;
          }

        }
        catch (error) {
            console.log(error)
        }
    }

    static async getUserInfo(accessToken){
        const { data } = await axios({
            url: GoogleConfig.google_user_info_url,
            method: 'get',
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          return data;
        }; 

}

export default GoogleCredentials