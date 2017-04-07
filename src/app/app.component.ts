import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app still works!';
    showFeatures = true;
    showMenu = false;
    public isLoggedIn: boolean;



    onOpened(status: boolean): void {
        this.showMenu = false;
    }

    loginUser(){
        this.showFeatures = false;
        this.showMenu = true;
    }
}

