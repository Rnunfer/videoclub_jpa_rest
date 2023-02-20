import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { PeliculaRoutingModule } from './pelicula-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    IndexComponent
  ],
  exports: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    PeliculaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PeliculaModule { }
