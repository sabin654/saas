// about/about.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    FormsModule, // Include any other modules you might need (e.g., HttpClientModule for HTTP requests)
  ],
  exports: [
    AboutComponent, // Export components that will be used in other modules
  ],
})
export class AboutModule {}
