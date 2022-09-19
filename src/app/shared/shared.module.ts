import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './sub-modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';

// Angular NGx-Moment
// import { MomentModule } from 'ngx-moment';

// directives
import { RtlDirective } from './directives/rtl/rtl.directive';

// pipes
// import { ValidationHandlerPipe } from './pipes/validation-handler.pipe';

// components

import { EmptyScreenComponent } from './components/empty-screen/empty-screen.component';
import { LoadingComponent } from './components/loading/loading.component';
@NgModule({
  declarations: [
    RtlDirective,
    LoadingComponent,
    EmptyScreenComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgSelectModule,
    MaterialModule
  ],
  exports: [
    LoadingComponent,
    EmptyScreenComponent,
    RtlDirective,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    TranslateModule,
    MaterialModule
  ]
})
export class SharedModule { }
