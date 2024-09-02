// about/about.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './navbar.component';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    FormsModule,
     // Include any other modules you might need (e.g., HttpClientModule for HTTP requests)
  ],
  exports: [
    NavComponent, // Export components that will be used in other modules
  ],
})
export class NavModule {
  
}
