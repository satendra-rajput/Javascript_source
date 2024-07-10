import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { BannerCardComponent } from './banner-card/banner-card.component';
import { HighScoreComponent } from './high-score/high-score.component';
import { LatestCoursesComponent } from './latest-courses/latest-courses.component';
import { LibraryCardComponent } from './library-card/library-card.component';
import { SupportCardComponent } from './support-card/support-card.component';
import { QuizzesCardComponent } from './quizzes-card/quizzes-card.component';
import { GuidanceCardComponent } from './guidance-card/guidance-card.component';
import { FaqCardComponent } from './faq-card/faq-card.component';
import { FooterCardComponent } from './footer-card/footer-card.component';
import { MaterialListModule } from '../shared/material-list/material-list.module';
import { CareerCardComponent } from './career-card/career-card.component';
import { PlaygroundCardComponent } from './playground-card/playground-card.component';



@NgModule({
  declarations: [
    MenuCardComponent,
    BannerCardComponent,
    HighScoreComponent,
    LatestCoursesComponent,
    LibraryCardComponent,
    SupportCardComponent,
    QuizzesCardComponent,
    GuidanceCardComponent,
    FaqCardComponent,
    FooterCardComponent,
    CareerCardComponent,
    PlaygroundCardComponent
  ],
  imports: [
    CommonModule,
    MaterialListModule
  ],
  exports:[
    MenuCardComponent,
    BannerCardComponent,
    HighScoreComponent,
    LatestCoursesComponent,
    LibraryCardComponent,
    SupportCardComponent,
    QuizzesCardComponent,
    GuidanceCardComponent,
    FaqCardComponent,
    FooterCardComponent,
    CareerCardComponent,
    PlaygroundCardComponent
  ]
})
export class HomepageModule { }
