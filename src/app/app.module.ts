import { BrowserModule, TransferState } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularSvgIconModule, SvgIconRegistryService, SvgLoader } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { FAQsListComponent } from './home/faqs-list/faqs-list.component';
import { FAQItemComponent } from './home/faq-item/faq-item.component';
import { CollapseComponent } from './home/collapse/collapse/collapse.component';
import { FaqsService } from './home/share/faqs.service';

@NgModule({
  declarations: [
    AppComponent,
    FAQsListComponent,
    FAQItemComponent,
    CollapseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [SvgIconRegistryService, FaqsService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private iconReg:SvgIconRegistryService) {
    this.iconReg.loadSvg('../assets/svg/plus-icon.svg', 'plus-icon').subscribe();
  }
}
