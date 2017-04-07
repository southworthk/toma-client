import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { UpdateTomComponent } from './update-tom/update-tom.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { RunTestComponent } from './run-test/run-test.component';
import { ViewReportsComponent } from './view-reports/view-reports.component';
import { ManageTestsComponent } from './manage-tests/manage-tests.component';
import { DataService } from './services/data.service';

export const firebaseConfig = {
    apiKey: 'AIzaSyATlAnQ_3jK-ZXE_Q93kmC4-RA0Vovcefo',
    authDomain: 'tomresults-9ddb8.firebaseapp.com',
    databaseURL: 'https://tomresults-9ddb8.firebaseio.com',
    storageBucket: 'tomresults-9ddb8.appspot.com',
    messagingSenderId: '797341562033'
};

@NgModule({
    declarations: [
        AppComponent,
        UpdateTomComponent,
        CreateTestComponent,
        RunTestComponent,
        ViewReportsComponent,
        ManageTestsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'tom', component: UpdateTomComponent },
            { path: 'create', component: CreateTestComponent },
            { path: 'run', component: RunTestComponent },
            { path: 'view', component: ViewReportsComponent },
            { path: 'manage', component: ManageTestsComponent }
        ])
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {}
