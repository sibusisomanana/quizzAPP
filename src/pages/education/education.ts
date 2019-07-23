import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ResultsPage} from '../results/results';

import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';

import {QuestionAndAnswer} from "../../app/model/properties.model";
import { Education } from '../../app/model/education/education.model';
/**
 * Generated class for the EducationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-education',
  templateUrl: 'education.html',
})
export class EducationPage {
    @ViewChild('slides') slides: Slides;
  Education: QuestionAndAnswer[] = [
    {question: '1. Schools cannot be understood without the understanding of ?',
     options: [
      {answer:'The religion'},
      {answer:'the society'},
      {answer:'the family'},
      {answer:'the nation'}
     ]},
     {question: '2 Person responsible for administration in a school is ?',
     options: [
      {answer:'principal'},
      {answer:'director of education'},
      {answer:'education officer'},
      {answer:'none of these'}
     ]},

     {question: '3 In its present usage word statistics is?',
     options: [
      {answer:'a decade old'},
      {answer:'a century old'},
      {answer:'10 centuries old'},
      {answer:'3 centuries '}
    ]},

    {question: '4.The number of pairs of cranial nerves in mammals that are purely sensory is ?',
     options: [
      {answer:'One'},
      {answer:'Two'},
      {answer:'Three'},
      {answer:'Five'}
    ]},

    {question: '5.Religion and philosophy meet in: ?',
     options: [
      {answer:'Matter'},
      {answer:' Mind'},
      {answer:'Spirit'},
      {answer:'None of the above'}
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

    this.availableQuestion = Education;
    console.log(this.availableQuestion);
    
  }

  ionViewDidLoad() {
    if(this.item == 'Education'){
  }

}


displayScore(){
this.navCtrl.push(ResultsPage, this.score);
}
getAnswer(val){


  if (val == 'the society'){
    // logic for calculation
    console.log('Good');
    this.score = this.score + 20;
   
    
  }  else{
    console.log('Bad');

  }


  if (val == 'principal'){
    console.log('Good');
    this.score = this.score + 20;
   
    

  } else {
    console.log('bad');
    
  }
  if (val == '10 centuries old'){
    console.log('Good');
    this.score = this.score + 20;
   
  

  } else {
    console.log('bad');

  }

  if (val == 'Three'){
    console.log('Good');
    this.score = this.score + 20;

    

  } else {
    console.log('bad');

  }
  
  if (val == 'Spirit'){
    console.log('Good');
    this.score = this.score + 20;
 
   
  } else {
    console.log('bad');
    
  }
  this.slides.slideNext();
  this.slides.lockSwipeToPrev(true);

}

}