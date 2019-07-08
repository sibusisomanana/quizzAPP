import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {QuizTopicsPage} from '../pages/quiz-topics/quiz-topics';
import { CrimePage} from '../pages/crime/crime';
import {UnemploymentPage} from '../pages/unemployment/unemployment';
import {EducationPage} from '../pages/education/education';
import {HumanDevelopmentPage} from '../pages/human-development/human-development';
import {TechnologyPage} from '../pages/technology/technology';
import { ResultsPage } from '../pages/results/results';







@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuizTopicsPage,
    CrimePage,
    UnemploymentPage,
    EducationPage,
    HumanDevelopmentPage,
    TechnologyPage,
    ResultsPage                                                                                   


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuizTopicsPage,
    CrimePage,
    UnemploymentPage,                                                                          
    EducationPage,
    HumanDevelopmentPage,
    TechnologyPage,
    ResultsPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
