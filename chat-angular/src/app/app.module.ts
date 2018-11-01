import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';

import { RouterModule } from '@angular/router';
import { appRoutes } from './routerConfig';

import {HttpClientModule} from '@angular/common/http';
import { MessageService } from './message.service';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,  HttpModule,
    AppRoutingModule,  RouterModule.forRoot(appRoutes), HttpClientModule, ReactiveFormsModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
