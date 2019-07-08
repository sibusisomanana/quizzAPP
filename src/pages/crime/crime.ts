import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Crime } from '../../app/model/crime/crime.model';
import { ResultsPage } from '../results/results';
import { QuestionAndAnswer } from "../../app/model/properties.model";

import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';
/**
 * Generated class for the CrimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crime',
  templateUrl: 'crime.html',
})
export class CrimePage {
  @ViewChild('slides') slides: Slides;
  Crime: QuestionAndAnswer[] = [
    {question: '1. From what language was the word "crime" developed?... One answer',
     options: [
      {answer:'Spanish'},
      {answer:'Latin'},
      {answer:'French'},
      {answer:'Russian'}
     ]},
     {question: '2.What term refers to uncovering computer-stored information suitable for use as evidence in courts of law.... One answer',
     options: [
      {answer:'computer investigation'},
      {answer:'computer detention'},
      {answer:'computer forensics'},
      {answer:'computer probing'}
     ]},

     {question: '3..A man regularly assaults his wife and children....One answer',
     options: [
      {answer:'homicide'},
      {answer:'domestic violence'},
      {answer:'abuse'},
      {answer:'abduction'}
    ]},

    {question: '4..How many state capitals are there in South Africa?',
     options: [
      {answer:'2'},
      {answer:'3'},
      {answer:'4'},
      {answer:'5'}
    ]},

    {question: '5. How long is a life sentence in jail....One answer',
     options: [
      {answer:'5 years'},
      {answer:'15 years'},
      {answer:'30 years'},
      {answer:'25 years'}
    ]},
   

  ]
    // {question: '3.A man regularly assaults his wife and children....One answer',
    //  answer1:'homicide',
    //  answer2:'domestic violence',
    //  answer3:'abuse',
    //  answer4:'abduction',  
    //  correctAnswer:1
    // },
    // {question: '4 A person throws a lit match into a building and it catches fire. ?....One answer', 
    // answer1:'arson',
    // answer2:'burglary',
    // answer3:'domestic violence',
    // answer4:'Friends',  
    // correctAnswer:1
    // },

    // {question: '5.An American dealer sells cocaine to a Canadian buyer.?.....?One answer',
    //  answer1:'theft',
    //  answer2:'smuggling',
    //  answer3:'drug trafficking',
    //  answer4:'Russian', 
    //   correctAnswer:1
    // }
    //]

  currentQuestion: any = {};

  availableQuestion: any = [];
  score: number = 0;

  questionCount: number = 20;

  acceptingAnswers: boolean = false;

  item: any;

  questions: any = [];

  value: string;
  answer2: string;
  answer1: string;
  answer3: string;
  answer4: string;
  

  // sum : number ;

  // val = 0;
  // answer: string;
  // score: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('item');

    this.availableQuestion = Crime;
    console.log(this.availableQuestion);
   
  }

  ionViewDidLoad() {
    if(this.item == 'Crime'){
   
    }
    
  }

 displayScore(){
    this.navCtrl.push(ResultsPage, this.score);
  }

  changeValue(){
    if(this.item < 50){
      this.value = "Unsuccessful  your score is  "+this.item+"%";
    }else{
      this.value = "Congratulations   your score is  "+this.item+"%";
    }
}

  getAnswer(val){

    if (val == 'Latin'){
      // logic for calculation
      console.log('Good');
      this.score = this.score + 20;
      
    }  else{
      console.log('Bad');
      
    }

    if (val == 'computer forensics'){
      console.log('Good');
      this.score = this.score +20;
     
 
    } else {
      console.log('bad');
     
    }
    if (val == 'abuse'){
      console.log('Good');
      this.score = this.score +20;
     

    } else {
      console.log('bad');

    }

    if (val == '3'){
      console.log('Good');
      this.score = this.score +20;


    } else {
      console.log('bad');
     
    }
    
    if (val == '25 years'){
      console.log('Good');
      this.score = this.score +20;
      

    } else {
      console.log('bad');

    }
    this.slides.slideNext();
  }
  
 
  }
