import { Component, OnInit } from '@angular/core';
import { JournalService } from './journal.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css'],
  providers:[JournalService]
})
export class JournalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
