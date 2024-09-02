import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from './cards.component';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    FormsModule, // Include any other modules you might need (e.g., HttpClientModule for HTTP requests)
  ],
  exports: [
    ProjectsComponent, // Export components that will be used in other modules
  ],
})
export class CardsModule {}
