import { Journal } from "./journal.model";
import { Entry } from "../entries/entry.model";
import { Injectable, EventEmitter } from "@angular/core";
import { Http,Response } from "@angular/http";

import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Rx";

@Injectable()
export class JournalService {
journals:Journal[]=[];
emitJournal = new EventEmitter<Journal>();
journalChanged = new Subject<Journal>();

constructor(private _http:Http) {        
}

pushJournal(journal:Journal){
    this.journals.push(journal);
}

pushEntry(journal:Journal,entry:Entry){
    let journalIndex= this.journals.indexOf(journal);
    this.journals[journalIndex].entries.push(entry);
}

getJournals(){
    return this._http.get('http://localhost:3000/journal')
            .map(
                (response:Response)=>{
                    var responseJournals = response.json().obj;
                    var modifiedJournals:Journal[]=[];
                    for(let journal of responseJournals){
                        modifiedJournals.push(
                            new Journal(journal.title,journal.entries,journal._id,null)
                        )
                    }
                    this.journals = modifiedJournals;
                    return modifiedJournals;
                }
            ).catch(
                error=> Observable.throw(error.json())
            )
}

getJournalById(id:String){
    return this._http.get(`http://localhost:3000/journal/${id}`)
            .map(
                (response:Response)=>{
                    var journal = response.json().obj;
                    var transformedJournal = new Journal(journal.title,[],journal._id,null);
                    for(let entry of journal.entries){
                        let modentry = new Entry(entry.title,entry.date,entry.content,entry._id);
                        transformedJournal.entries.push(modentry);
                    }
                    return transformedJournal;
                }
            ).catch(
                error => Observable.throw(error.json())
            )
}

addJournal(journal:Journal){
    var newJournal = { 
        title : journal.title,
        entries : []
     };
    return this._http.post('http://localhost:3000/journal',newJournal)
            .map(
                (response:Response)=>{
                    var journal = response.json().obj;
                    var returnJournal:Journal = new Journal(
                        journal.title,journal.entries,journal._id,null
                    )
                    return returnJournal;
                }
            ).catch(
                error=>Observable.throw(error.json())
            )
}

addEntry(entry:Entry,id:String){
    var newEntry= {
        title : entry.title,
        date : entry.date,
        content : entry.content
    }
    return this._http.post(`http://localhost:3000/journal/${id}`,newEntry)
            .map(
                (response:Response)=>{
                    var journal = response.json().obj;
                    var transformedJournal = new Journal(journal.title,[],journal._id,null);
                    for(let entry of journal.entries){
                        let modentry = new Entry(entry.title,entry.date,entry.content,entry._id);
                        transformedJournal.entries.push(modentry);
                    }
                    return transformedJournal;
                }
            ).catch(
                err=>Observable.throw(err.json())
            )
}

}