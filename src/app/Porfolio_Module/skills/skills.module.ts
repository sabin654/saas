// about/about.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SkillsComponent } from './skills.component';

@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    FormsModule, // Include any other modules you might need (e.g., HttpClientModule for HTTP requests)
  ],
  exports: [
    SkillsComponent, // Export components that will be used in other modules
  ],
})
export class SkillModule {}
