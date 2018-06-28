import { Product } from "../models/product";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {

    private products: Array<Product>;

    constructor() {
        this.products = [];
    }

    getAllProducts() {
        this.products = [];

        var product1: Product = new Product();
        product1.id = 1;
        product1.name = "No Ads: 1 Hour";
        product1.description = "IAP: No Ads: 1 Hour Game";
        product1.price = "$5000";
        product1.descript1 = "This is a great product."
        product1.descript2 = "This is an excellent prod"
        product1.descript3 = "This is a groovy prod."
        product1.descript4 = "This is a best prod."
        
        var product2: Product = new Product();
        product2.id = 2;
        product2.name = "No Ads: 3 Hour";
        product2.description = "No Ads: 3 Hour Game ";
        product2.price = "$6000";
        product2.descript1 = "This is a great product."
        product2.descript2 = "This is an excellent prod"
        product2.descript3 = "This is a groovy prod."
        product2.descript4 = "This is a best prod."
       

        var product3: Product = new Product();
        product3.id = 3;
        product3.name = "No Ads: 1 Year";
        product3.description = "No Ads: 1 Year Game";
        product3.price = "$7000";
        product3.descript1 = "This is a great product."
        product3.descript2 = "This is an excellent prod"
        product3.descript3 = "This is a groovy prod."
        product3.descript4 = "This is a best prod."
    
        this.products.push(product1);
        this.products.push(product2);
        this.products.push(product3);

        return this.products;
    }
}