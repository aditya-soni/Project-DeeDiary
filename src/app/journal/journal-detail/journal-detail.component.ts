import { Component, OnInit, Input } from '@angular/core';
import { Journal } from '../journal.model';
import { Router, ActivatedRoute } from '@angular/router';
import { JournalService } from '../journal.service';

@Component({
  selector: 'app-journal-detail',
  templateUrl: './journal-detail.component.html',
  styleUrls: ['./journal-detail.component.css']
})
export class JournalDetailComponent implements OnInit {
  @Input() journal:Journal;
  constructor(
    private journalService:JournalService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onNewEntry(){
    this.router.navigate([this.journal.journalId,'new'],{relativeTo:this.route})
  }

  onListEntries(){
    this.journalService.emitJournal.emit(this.journal);
    this.router.navigate([this.journal.journalId,'entries'],{relativeTo:this.route})
  }
}
