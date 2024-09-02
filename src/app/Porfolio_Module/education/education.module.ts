import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EducationComponent } from './education.component';

@NgModule({
  declarations: [EducationComponent],
  imports: [
    CommonModule,
    FormsModule, // Include any other modules you might need (e.g., HttpClientModule for HTTP requests)
  ],
  exports: [
    EducationComponent, // Export components that will be used in other modules
  ],
})
export class EducationModule {}
