import { Component } from '@angular/core';
import { NavController, NavParams, Item } from 'ionic-angular';
import { Item_1Page } from '../item-1/item-1';
import { LoginPage } from '../login/login';
import { Item_3Page } from '../item-3/item-3';
import { Item_2Page } from '../item-2/item-2';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  items = [
    '1 Hour Package',
    '3 Hour Package',
    '1 Year Package',
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);

    if (item == "1 Hour Package")
    this.navCtrl.push(Item_1Page)

    if (item == "3 Hour Package")
    this.navCtrl.push(Item_2Page)

    if (item == "1 Year Package")
    this.navCtrl.push(Item_3Page)
  }

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

 

}
