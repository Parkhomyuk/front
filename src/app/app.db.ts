import { InMemoryDbService } from "angular-in-memory-web-api";
import { Attendee } from "./models";

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const attendees:Attendee[]=[
            {
                id:1,
                name:'Duncan In Memory',
                attending: true,
                guests:1
            }
        ] as Attendee[];
        return {attendees}
    }

}