import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { AboutComponent } from './about/about.component';

export const appRoutes: Routes = [
  { path: 'chat', 
    component: ChatComponent 
  },  
  { path: 'about',
    component: AboutComponent
  }
  
];