import { Component, OnInit, OnDestroy } from '@angular/core';
import { JournalService } from '../../journal/journal.service';
import { Journal } from '../../journal/journal.model';
import { Entry } from '../entry.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-entries',
  templateUrl: './list-entries.component.html',
  styleUrls: ['./list-entries.component.css']
})
export class ListEntriesComponent implements OnInit, OnDestroy {
  journal:Journal=new Journal('Title',[]);
  entries:Entry[]=[];
  getEntriesSubscription:Subscription;
  changedEntriesSubscription:Subscription;
  constructor(
    private journalService:JournalService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.getEntriesSubscription =this.route.params.subscribe(
      (params)=>{
        this.journalService.getJournalById(params.journalid).subscribe(
          (journal)=>{
            this.journal = journal;
            this.entries = journal.entries; 
          }
        )
      }
    );

    this.changedEntriesSubscription = this.journalService.journalChanged.subscribe(
      (journal:Journal)=>{
        this.entries = journal.entries;
      }
    )
  }

  ngOnDestroy(){
    this.changedEntriesSubscription.unsubscribe();
    this.getEntriesSubscription.unsubscribe();
  }

}
