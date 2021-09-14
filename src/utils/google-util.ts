import { google } from 'googleapis';
const config = require('../../database/repositories/config.json')['development']
import axios from 'axios';
import * as queryString from 'query-string';


export class googleUtil {


    static createUrl(){
        const stringifiedParams = queryString.stringify({
            client_id: config.google_client_id,
            redirect_uri: config.redirect_uri,
            scope: [
              'https://www.googleapis.com/auth/userinfo.email',
              'https://www.googleapis.com/auth/userinfo.profile',
            ].join(' '),
            response_type: 'code',
            access_type: 'offline',
            prompt: 'consent',
          });
          
          const googleLoginUrl = `${config.auth_url}${stringifiedParams}`;
          return googleLoginUrl;
    }

    static async getAccessToken(code:string) {
        try {
            const { data } = await axios({
                url: config.google_access_token_url,
                method: 'post',
                data: {
                    client_id: config.google_client_id,
                    client_secret: config.google_client_secret,
                    redirect_uri: config.redirect_uri,
                    grant_type: 'authorization_code',
                    code,
                },
            });
            console.log(data); // { access_token, expires_in, token_type, refresh_token }
          //  googleAuthService.getGoogleUserInfo(data.access_token)

          if (data){
            let userData = await googleUtil.getUserInfo(data.access_token)
            return userData;
          }

        }
        catch (error) {
            console.log(error)
        }
    }

    static async getUserInfo(accessToken){
        const { data } = await axios({
            url: config.google_user_info_url,
            method: 'get',
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          console.log(data); // { id, email, given_name, family_name }
          return data;
        }; 

}