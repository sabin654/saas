// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './Porfolio_Module/home/home.component';
import { ButtonComponent } from './Porfolio_Module/home/button/button.component';
import { ContactComponent } from './Porfolio_Module/footer/footer.component';
import { ContactFormComponent } from './Porfolio_Module/footer/contact-form/contact-form.component';
import { AboutModule } from './Porfolio_Module/about/about.module';
import { CardsModule } from './Porfolio_Module/cards/cards.module';
import { EducationModule } from './Porfolio_Module/education/education.module';
import { NavModule } from './Porfolio_Module/navbar/navbar.module';
import { SkillModule } from './Porfolio_Module/skills/skills.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonComponent,
    ContactFormComponent,
    ContactComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AboutModule,
    CardsModule,
    EducationModule,
    NavModule,
    SkillModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
