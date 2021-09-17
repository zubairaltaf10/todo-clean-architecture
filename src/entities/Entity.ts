import { v4 as uuidv4 } from 'uuid';

class Entity {
    status:number
    response: {} | []

    private constructor(statusCode,response){
        this.status = statusCode
        this.response = response
    }

   static apiResponse(raw: any,status: string | number){
        
        return new Entity(raw,status)
    }
}

export default Entity