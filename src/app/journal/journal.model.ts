import { Entry } from "../entries/entry.model";
export class Journal {
    constructor(
        public title:String,
        public entries:Array<Entry>,
        public journalId?:String ,
        public userId?: String,
    ) {        
    }
}