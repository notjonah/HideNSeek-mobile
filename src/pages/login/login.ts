import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FrontPage } from '../Front/front';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    public email: string;

    constructor(public navCtrl: NavController) {
        this.email="miki@gmail.com"
     }

    navigateToLogin() {
        console.log("Navigating...");
    }

    navigateToFront() {
        console.log("Navigating...")
        this.navCtrl.push(FrontPage)
    }

    }

