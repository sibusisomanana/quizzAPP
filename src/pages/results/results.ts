import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UnemploymentPage } from '../unemployment/unemployment';
import { CrimePage } from '../crime/crime';
import { EducationPage } from '../education/education';
import { Education } from '../../app/model/education/education.model';

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  
  currentQuestion: any = {};

  availableQuestion: any = [];
  score: any = 0;

  questionCount: number = 20;

  acceptingAnswers: boolean = false;

  item: any;

  questions: any = [];

  answer2: string;
  answer1: string;
  answer3: string;
  answer4: string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   this.score = this.navParams.data
  }

  sbuda : number = 0;

  finalScore(){
    this.sbuda = this.navParams.get('score');
  }

  goToBack() {
    this.navCtrl.push(CrimePage, UnemploymentPage);
  }
  goToCrime(){
    this.navCtrl.push(CrimePage);
  }
  goToHome(){
    this.navCtrl.push(HomePage);
  }


}
