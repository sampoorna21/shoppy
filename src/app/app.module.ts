import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { MatBadgeModule} from '@angular/material/badge';  

import { MatIconModule} from '@angular/material/icon';  

import { MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BadgeComponent } from './badge/badge.component';

import { BadgeDirective } from './badge.directive';
import { ProductsComponent } from './tutorial/products/products.component';
 import { FormsModule } from '@angular/forms';
import { ProductComponent } from './tutorial/product/product.component';
import { FormsComponent } from './tutorial/forms/forms.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CategoriesComponent, FooterComponent, BadgeComponent, BadgeDirective, ProductsComponent, ProductComponent, FormsComponent],
  imports: [BrowserModule, AppRoutingModule,MatBadgeModule,MatIconModule,MatButtonModule,BrowserAnimationsModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
