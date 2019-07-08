import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionAndAnswer } from "../../app/model/properties.model";
import { ResultsPage } from '../results/results';
import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';
import { Technology } from '../../app/model/ment/tech/Technology.model';
/**
 * Generated class for the TechnologyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-technology',
  templateUrl: 'technology.html',
})
export class TechnologyPage {
  @ViewChild('slides') slides: Slides;
  technology: QuestionAndAnswer[] = [
    {question: '1.Compared to Android devices, iPhones operating systems are always what?',
    options: [
    {answer:'more homogenous'},
     {answer:'powerful'},
     {answer:'less useful'},
     {answer:'Russian'}, 
    ]
     
     
    },

    {question: '2.Which product line was the first to adopt near field communication NFC technology',
    options: [
        {answer:'iPhone'},
        {answer:'Android'},
        {answer:'They adapted at about the same time'},
        {answer:'Nokia'}
    ]
      
  
    },


    {question: '3.Compared to apple products, Android products tend to be what?',
    options: [
        {answer:'exclusive'},
        {answer:'inclusive'},
        {answer:'vaporware'},
        {answer:'abduction'},  
       
    ]
    
    },
    {question: '4 How often is the iPhones operating system updated', 
    options: [
        {answer:'annually'},
        {answer:'monthly'},
        {answer:'weekly'},
        {answer:'Friends'}, 
    
    
    ]
    },

    {question: '5.Which operating system works with both 32- and 64-bit architectures',
    options: [
        {answer:'iPhone'},
        {answer:'Android'},
        {answer:'Both'},
        {answer:'Erisson'}, 

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

    this.availableQuestion = Technology;
    console.log(this.availableQuestion);
  }

  ionViewDidLoad() {
    if(this.item == 'technology'){

    }
  }
  displayScore(){
    this.navCtrl.push(ResultsPage, this.score);
  }
  getAnswer(val){

    if (val == 'powerful'){
      // logic for calculation
      console.log('Good');
      this.score = this.score + 20;
      
    }  else{
      console.log('Bad');
      
    }

    if (val == 'iPhone'){
      console.log('Good');
      this.score = this.score +20;
     
 
    } else {
      console.log('bad');
     
    }
    if (val == 'inclusive'){
      console.log('Good');
      this.score = this.score +20;
     

    } else {
      console.log('bad');

    }

    if (val == 'monthly'){
      console.log('Good');
      this.score = this.score +20;


    } else {
      console.log('bad');
     
    }
    
    if (val == 'Both'){
      console.log('Good');
      this.score = this.score +20;
      

    } else {
      console.log('bad');
     
    }
    this.slides.slideNext();
  }
  
 
  

}

