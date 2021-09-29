import EmailService from "../../Infrastructure/ThirdPartyclients/Email/EmailService";
import EventBus from 'events'
import { EventConstants } from "../Utils/EventConstants";

class UserCreatedEvent extends EventBus {

    constructor(){
        super()
        this.HandleEvent()
    }

    protected async HandleEvent() {
        this.on(EventConstants.userCreated,((user)=>{
            EmailService.sendMail(user.email,"welcome email",'welcome')
        }))
    }

    public Dispatch(eventName:EventConstants,data?:any){
        this.emit(eventName,data)
    }
}

export default new UserCreatedEvent()