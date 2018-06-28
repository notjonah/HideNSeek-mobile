import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';
import { ProductsPage } from '../products/products';
import { ProductPage } from '../product/product';
import { ProductlistPage } from '../productlist/productlist';
  
@Component({
    selector: 'page-front',
    templateUrl: 'front.html'
})
export class FrontPage {

    constructor(public navCtrl: NavController) { }

    navigateToFront() {
        console.log("Navigating...");
    }

    navigateToLogin() {
        console.log("Navigating...");
    
        this.navCtrl.push(LoginPage)
      }

      navigateToProductlist() {
        console.log("Navigating...");
    
        this.navCtrl.push(ProductlistPage)
      }



}