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

@NgModule({
  declarations: [AppComponent, HeaderComponent, CategoriesComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule,MatBadgeModule,MatIconModule,MatButtonModule,BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
