import EmailService from "../../infrastructure/ThirdPartyClients/Email/EmailService";
import EventBus from 'events'

class UserCreatedEvent extends EventBus {
    constructor(){
        super()
        this.handleEvent()
    }

    protected async handleEvent() {
        this.on('userCreated',((user)=>{
            EmailService.sendMail(user.email,"welcome email",'welcome')
        }))
    }

    public dispatch(eventName:string,data?:any){
        this.emit(eventName,data)
    }
}

export default new UserCreatedEvent()