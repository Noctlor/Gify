import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { GifsModule } from './gifs/gifs.module';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ShareModule,
    GifsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
