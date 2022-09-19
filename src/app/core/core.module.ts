import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NotificationsSearchComponent } from './components/notifications-search/notifications-search.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';

@NgModule({
  declarations: [LayoutComponent, NavbarComponent, SidebarComponent, NotificationsSearchComponent, SuggestionsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})

export class CoreModule { }
