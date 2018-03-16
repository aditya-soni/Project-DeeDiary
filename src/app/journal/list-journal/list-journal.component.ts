import { Component, OnInit } from '@angular/core';
import { Journal } from '../journal.model';
import { Entry } from '../../entries/entry.model';
import { JournalService } from '../journal.service';

@Component({
  selector: 'app-list-journal',
  templateUrl: './list-journal.component.html',
  styleUrls: ['./list-journal.component.css']
})
export class ListJournalComponent implements OnInit {
  journals:Journal[]=[
  ]
  constructor(private journalService:JournalService) { }

  ngOnInit() {
  //  this.journals= this.journalService.getJournals()
  this.journalService.getJournals().subscribe(
    (journals:Journal[])=>{
      this.journals = journals
    }
  )
  }

}
