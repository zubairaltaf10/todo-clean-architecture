import axios from 'axios';
import * as queryString from 'query-string';
import config from '../../../http/config/index'
const {googleConfig} = config
 
class googleCredentials {

    static createUrl(){
        const stringifiedParams = queryString.stringify({
            client_id: googleConfig.google_client_id,
            redirect_uri: googleConfig.redirect_uri,
            scope: [
              'https://www.googleapis.com/auth/userinfo.email',
              'https://www.googleapis.com/auth/userinfo.profile',
            ].join(' '),
            response_type: 'code',
            access_type: 'offline',
            prompt: 'consent',
          });
          
          const googleLoginUrl = `${googleConfig.auth_url}${stringifiedParams}`;
          return googleLoginUrl;
    }

    static async getAccessToken(code:string) {
        try {
            const { data } = await axios({
                url: googleConfig.google_access_token_url,
                method: 'post',
                data: {
                    client_id: googleConfig.google_client_id,
                    client_secret: googleConfig.google_client_secret,
                    redirect_uri: googleConfig.redirect_uri,
                    grant_type: 'authorization_code',
                    code,
                },
            });

          if (data){
            let userData = await googleCredentials.getUserInfo(data.access_token)
            return userData;
          }

        }
        catch (error) {
            console.log(error)
        }
    }

    static async getUserInfo(accessToken){
        const { data } = await axios({
            url: googleConfig.google_user_info_url,
            method: 'get',
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          return data;
        }; 

}

export default googleCredentials