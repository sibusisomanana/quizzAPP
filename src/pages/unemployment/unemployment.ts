import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Crime } from '../../app/model/crime/crime.model';
import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';
import {QuestionAndAnswer} from "../../app/model/properties.model";
import { ResultsPage } from '../results/results';
import { Unemployment } from '../../app/model/ment/unemployment';


/**
 * Generated class for the UnemploymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unemployment',
  templateUrl: 'unemployment.html',
})
export class UnemploymentPage {
  @ViewChild('slides') slides: Slides;
  unemployment: QuestionAndAnswer [] = [
    {question: '1.The money market is a market for …-term savings and loans ?',

      options: [
      {answer:'short- and long '},
      {answer:'long'},
      {answer:'short'},
      {answer:'medium'}
     ]},

     {question: '2.To be counted as unemployed in our society, a person must be ?',
      options: [
      {answer:'An illegal immigrant'},
      {answer:'Without work'},
      {answer:'Uneducated'},
      {answer:'When you dont have a regular income'}
     ]},

     {question: '3. What is the current unemployment rate in South Africa ?',
      options: [
      {answer:'100%'},
      {answer:'8.9%'},
      {answer:'5.6%'},
      {answer:'27.6%'}
     ]},

     {question: '4.Who are counted in the labor force of a country?',
      options: [
      {answer:'18 to 60 years of age'},
      {answer:'15 to 65 years of age'},
      {answer:'18 to 65 years of age'},
      {answer:'21 to 62 years of age'}
     ]},

     {question: '5. The application of new scientific knowledge in the form of inventions and innovations is known as ?',
      options: [
      {answer:'capital'},
      {answer:'technology'},
      {answer:'labour'},
      {answer:'state'}
     ]},

  
  ]
  

     
  currentQuestion: any = {};

  availableQuestion: any = [];
  score: number = 0;

  questionCount: number = 20;

  acceptingAnswers: boolean = false;

  item: any;

  questions: any = [];

  answer2: string;
  answer1: string;
  answer3: string;
  answer4: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.item = this.navParams.get('item');

    
    this.availableQuestion = this.unemployment;
  }

  ionViewDidLoad() {
    if(this.item == 'unemployment'){


    }

    
  }
  displayScore(){
    this.navCtrl.push(ResultsPage, this.score);
  }
  getAnswer(val){
    if (val == 'short'){
      // logic for calculation
      console.log('Good');
      this.score = this.score + 20;
      
    }  else{
      console.log('Bad');
      
    }

    if (val == 'When you dont have a regular income'){
      console.log('Good');
      this.score = this.score +20;
      

    } else {
      console.log('bad');
      
    }
    if (val == '27.6%'){
      console.log('Good');
      this.score = this.score +20;
      

    } else {
      console.log('bad');
      
    }

    if (val == '18 to 65 years of age'){
      console.log('Good');
      this.score = this.score +20;
      

    } else {
      console.log('bad');
      
    }
    
    if (val == 'technology'){
      console.log('Good');
      this.score = this.score +20;
      

    } else {
      console.log('bad');
      
    }
    this.slides.slideNext();
    this.slides.lockSwipeToPrev(true);
  }

}


