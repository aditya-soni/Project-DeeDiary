import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { JournalComponent } from './journal/journal.component';
import { ListJournalComponent } from './journal/list-journal/list-journal.component';
import { NewJournalComponent } from './journal/new-journal/new-journal.component';
import { CreateEntryComponent } from './entries/create-entry/create-entry.component';
import { ListEntriesComponent } from './entries/list-entries/list-entries.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent ,pathMatch:'full'},
  { path: 'journals', component: JournalComponent,children:[
      { path: '', component: ListJournalComponent,pathMatch:'full' },
      { path: 'new', component: NewJournalComponent },
      { path: ':journalid/new', component: CreateEntryComponent },
      { path: ':journalid/entries', component: ListEntriesComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting { }