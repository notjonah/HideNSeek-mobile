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
import { Item_1Page } from '../pages/item-1/item-1';
import { Item_2Page } from '../pages/item-2/item-2';
import { Item_3Page } from '../pages/item-3/item-3';
import { Item_4Page } from '../pages/item-4/item-4';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    LoginPage, 
    RegistrationPage,
    FrontPage, 
    ProductsPage,
    Item_1Page,
    Item_2Page,
    Item_3Page,
    Item_4Page,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, { links: [
      { component: LoginPage, name: "login", segment: "login"},
      { component: HomePage, name: "home", segment: "home" },
      { component: FrontPage, name: "front", segment: "front"},
      { component: ProductsPage, name: "products", segment: "products"},
      { component: Item_1Page, name: "item-1", segment: "item-1"},
      { component: Item_2Page, name: "item-2", segment: "item-2"},
      { component: Item_3Page, name: "item-3", segment: "item-3"},
      { component: Item_4Page, name: "item-4", segment: "item-4"},
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
    Item_1Page,
    Item_2Page,
    Item_3Page,
    Item_4Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
