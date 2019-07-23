import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UnemploymentPage} from '../unemployment/unemployment';
import { CrimePage } from '../crime/crime';
import { EducationPage } from '../education/education';
import { HumanDevelopmentPage } from '../human-development/human-development';
import { TechnologyPage } from '../technology/technology';

/**
 * Generated class for the QuizTopicsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz-topics',
  templateUrl: 'quiz-topics.html',
})
export class QuizTopicsPage {
 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizTopicsPage');
    
  }
  goToUnemployment(){
    this.navCtrl.push(UnemploymentPage);
  }
  goToCrime(){
    this.navCtrl.push(CrimePage);
  }
  goToEducation(){
    this.navCtrl.push(EducationPage);
  }
  goToHumanDevelopment(){
    this.navCtrl.push(HumanDevelopmentPage);
  }
  goToTechnology(){
    this.navCtrl.push(TechnologyPage);
  }

}
