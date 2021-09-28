import EmailService from "../../infrastructure/thirdPartyclients/Email/EmailService";
import EventBus from 'events'
import { EventConstants } from "../utils/EventConstants";

class UserCreatedEvent extends EventBus {
    constructor(){
        super()
        this.handleEvent()
    }

    protected async handleEvent() {
        this.on(EventConstants.userCreated,((user)=>{
            EmailService.sendMail(user.email,"welcome email",'welcome')
        }))
    }

    public dispatch(eventName:EventConstants,data?:any){
        this.emit(eventName,data)
    }
}

export default new UserCreatedEvent()