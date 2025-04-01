import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store'; 
import { EffectsModule } from '@ngrx/effects'; 
import { EntityDataModule } from '@ngrx/data';  
import { AppComponent } from './app.component';
//import { CryptoService } from './crypto.service'; 

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}), 
    EffectsModule.forRoot([]), 
    //EntityDataModule.forRoot(entityMetadata), 
  ],
  providers: [
    //CryptoService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}