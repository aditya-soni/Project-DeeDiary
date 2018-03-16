import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JournalService } from '../journal.service';
import { Journal } from '../journal.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-journal',
  templateUrl: './new-journal.component.html',
  styleUrls: ['./new-journal.component.css']
})
export class NewJournalComponent implements OnInit {

  constructor(
    private journalService:JournalService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    // console.log(form.value);
    let newJournal = new Journal(form.value.title,[],"abc");
    // this.journalService.addJournal(newJournal);
    this.journalService.addJournal(newJournal).subscribe(
      (journal:Journal)=>{
        console.log(journal);
        this.journalService.pushJournal(journal)
      },
      (err)=>{
        console.log(err)
      }
    )
    form.reset();
    this.router.navigate(['/journals'])
  }
}
