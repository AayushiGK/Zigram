import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { SearchPipePipe } from './pipes/search-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CocktailsComponent,
    SearchPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
    routing
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports:[SearchPipePipe],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
