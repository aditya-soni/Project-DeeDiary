import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JournalService } from '../../journal/journal.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Entry } from '../entry.model';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.css']
})
export class CreateEntryComponent implements OnInit {
  journalId:String;
  constructor(
    private journalService:JournalService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    // console.log(form.value)
    var entry = new Entry(
      form.value.title,
      form.value.date,
      form.value.content
    )
    this.route.params.subscribe(
      (params:Params)=>{
        var journalId = params.journalid;
        this.journalId = journalId;
        this.journalService.addEntry(entry,journalId).subscribe(
          (journal)=>{
            console.log(journal);
            this.journalService.journalChanged.next(journal);
          }
        )
      },
      (err)=>{
        console.log(err)
      }
    );
    form.reset();
    this.router.navigate(['../entries'],{relativeTo:this.route});
  }

}
