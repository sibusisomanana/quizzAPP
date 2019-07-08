import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizTopicsPage } from './quiz-topics';

@NgModule({
  declarations: [
    QuizTopicsPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizTopicsPage),
  ],
})
export class QuizTopicsPageModule {}
