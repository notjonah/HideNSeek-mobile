import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/product';
import { ProductPage } from '../product/product';
import { ProductService } from '../../Services/product.service';



/**
* Generated class for the ProductsPage pagess.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
selector: 'page-productlist',
templateUrl: 'productlist.html',
})
export class ProductlistPage {

public products: Array<Product>;

constructor(
public navCtrl: NavController,
public navParams: NavParams,
public productService: ProductService
) {
}

ionViewDidLoad() {
console.log('ionViewDidLoad ProductsPage');
this.products = this.productService.getAllProducts();
}

navigateToProduct(product: Product) {
this.navCtrl.push(ProductPage, {
productParameter: product
});
}

}
