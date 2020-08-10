import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { PriceComponent } from './components/price/price.component';
import { DiscountComponent } from './components/discount/discount.component';
import { SearchComponent } from './components/search/search.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    HeaderComponent,
    FooterComponent,
    FiltersComponent,
    ProductsContainerComponent,
    ColorComponent,
    BrandComponent,
    PriceComponent,
    DiscountComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
