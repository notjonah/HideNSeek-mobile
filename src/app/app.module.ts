import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { FrontPage } from '../pages/Front/front';
import { ProductsPage } from '../pages/products/products';
import { PaymentPage } from '../pages/payment/payment';
import { ProductPage } from '../pages/product/product';
import { ProductlistPage } from '../pages/productlist/productlist';
import { ProductService } from '../Services/product.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    LoginPage, 
    RegistrationPage,
    FrontPage, 
    ProductsPage,
    PaymentPage, 
    ProductPage, 
    ProductlistPage


    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, { links: [
      { component: LoginPage, name: "login", segment: "login"},
      { component: HomePage, name: "home", segment: "home" },
      { component: FrontPage, name: "front", segment: "front"},
      { component: ProductPage, name: "product", segment: "product"},
      { component: ProductsPage, name: "products", segment: "products"},
      { component: RegistrationPage, name: "registration", segment: "registration" }]})
  

  ],
  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage, 
    RegistrationPage,
    FrontPage, 
    ProductsPage,
    PaymentPage, 
    ProductPage, 
    ProductlistPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProductService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
