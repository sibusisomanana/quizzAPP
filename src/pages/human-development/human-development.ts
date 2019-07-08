import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';
import {QuestionAndAnswer} from "../../app/model/properties.model";
import { ResultsPage } from '../results/results';
import { humanDevelopment } from '../../app/model/crime/human/human/human.model';


/**
 * Generated class for the HumanDevelopmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-human-development',
  templateUrl: 'human-development.html',
})
export class HumanDevelopmentPage {
  @ViewChild('slides') slides: Slides;

  humanDevelopment: QuestionAndAnswer [] = [
 
    {question: '1.The first emotional reaction to impending death is usually ? ',

      options: [
      {answer:'anger'},
      {answer:'denial'},
      {answer:'bargaining'},
      {answer:'depression'}
     ]},

     {question: '2. cognitive development theory is characterized by the development of logical operations, classification, and conservation ?',
      options: [
      {answer:'Concrete Operational'},
      {answer:'Sensorimotor'},
      {answer:'Operational'},
      {answer:'Formal Operational'}
     ]},

     {question: '3. Lawrence Kohlberg is known for his research in the area of development.?',
      options: [
      {answer:'Cognitive'},
      {answer:'physical'},
      {answer:'moral'},
      {answer:'motor'}
     ]},

     {question: '4.A failure to develop a consistent identity results in?',
      options: [
      {answer:'isolation'},
      {answer:'inferiority'},
      {answer:'confusion'},
      {answer:'stagnation'}
     ]},

     {question: '5. If you are a young adult, you are interested in developing?',
      options: [
      {answer:'intimacy'},
      {answer:'generativity'},
      {answer:'integrity'},
      {answer:'initiative'}
     ]},

  
  
];

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

    this.availableQuestion = humanDevelopment;
    console.log(this.availableQuestion);
  }

  ionViewDidLoad() {
    if(this.item == 'humanDevelopment'){

    }
  }

displayScore(){
  this.navCtrl.push(ResultsPage, this.score);
}
getAnswer(val){

  if (val == 'denial'){
    // logic for calculation
    console.log('Good');
    this.score = this.score + 20;
    
  }  else{
    console.log('Bad');
    
  }

  if (val == 'Operational'){
    console.log('Good');
    this.score = this.score +20;
   

  } else {
    console.log('bad');
   
  }
  if (val == 'moral'){
    console.log('Good');
    this.score = this.score +20;
   

  } else {
    console.log('bad');

  }

  if (val == 'confusion'){
    console.log('Good');
    this.score = this.score +20;


  } else {
    console.log('bad');
   
  }
  
  if (val == 'intimacy'){
    console.log('Good');
    this.score = this.score +20;
    

  } else {
    console.log('bad');
    this.slides.slideNext();
  }

}




}




