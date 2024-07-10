import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-courses',
  templateUrl: './latest-courses.component.html',
  styleUrl: './latest-courses.component.scss'
})
export class LatestCoursesComponent {

  PaidCourse=[
    {
      imgName:"/assets/icons/support.svg",
      TitleName:"HTML in Hindi",
      paidIcons:"open",
      categories:"10 Lessons",
      footerIcons:"open",
      CountInterest:"Free",
      Discount:"",
    },

    {
      imgName:"/assets/icons/support.svg",
      TitleName:"CSS in Hindi",
      paidIcons:"open",
      categories:"25 Lessons",
      footerIcons:"open",
      CountInterest:"Free",
      Discount:"",
    },

    {
      imgName:"/assets/icons/support.svg",
      TitleName:"JavaScript in Hindi",
      paidIcons:"open",
      categories:"55 Lessons",
      footerIcons:"open",
      CountInterest:"Free",
      Discount:"",
    },
    {
      imgName:"/assets/icons/support.svg",
      TitleName:"Angular in Hindi",
      paidIcons:"open",
      categories:"76 Lessons",
      footerIcons:"open",
      CountInterest:"₹ 10000",
      Discount:"₹12000",
    },

  ]
}
