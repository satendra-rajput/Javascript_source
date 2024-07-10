import { Component } from '@angular/core';

@Component({
  selector: 'app-high-score',
  templateUrl: './high-score.component.html',
  styleUrl: './high-score.component.scss'
})
export class HighScoreComponent {

  highScore=[
    {
      imgName:"assets/icons/high/chart.svg",
      numberCount:"55%",
      Para:"Average Salary Hike"
    },
  
    {
      imgName:"assets/icons/high/book.svg",
      numberCount:"40+",
      Para:"Different Courses"
    },
  
    {
      imgName:"assets/icons/high/up-down.svg",
      numberCount:"100+",
      Para:"Career Transitions"
    },
  
    {
      imgName:"assets/icons/high/work.svg",
      numberCount:"40+",
      Para:"Hiring Partners"
    },
  ]
  }
