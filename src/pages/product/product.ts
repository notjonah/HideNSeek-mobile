import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/product';
import { PaymentPage } from '../payment/payment';

/**
* Generated class for the ProductPage page.
*s
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  public product: Product;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product = this.navParams.get("productParameter"); //new Product();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  navigateToPayment() {
    console.log("Navigating...")

    this.navCtrl.push(PaymentPage)
  }


}

