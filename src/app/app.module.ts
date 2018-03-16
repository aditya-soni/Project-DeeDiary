import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { JournalComponent } from './journal/journal.component';
import { NewJournalComponent } from './journal/new-journal/new-journal.component';
import { ListJournalComponent } from './journal/list-journal/list-journal.component';
import { EntriesComponent } from './entries/entries.component';
import { ListEntriesComponent } from './entries/list-entries/list-entries.component';
import { CreateEntryComponent } from './entries/create-entry/create-entry.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { JournalDetailComponent } from './journal/journal-detail/journal-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    JournalComponent,
    NewJournalComponent,
    ListJournalComponent,
    EntriesComponent,
    ListEntriesComponent,
    CreateEntryComponent,
    LandingPageComponent,
    JournalDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
