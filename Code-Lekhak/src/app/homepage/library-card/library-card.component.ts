import { Component } from '@angular/core';

@Component({
  selector: 'app-library-card',
  templateUrl: './library-card.component.html',
  styleUrl: './library-card.component.scss'
})
export class LibraryCardComponent {


//**************** This is data of library  ***************//
library = [
  {
    CardTitle_web: "Web Development",
    icons: "language",
    linkurl: "/categories/web_development_tutorials",
    cardiconsList: [
      {
        Urlbase: "/html_introduction.htm",
        LibraryImg: "assets/icons/web/html.svg",
        LibraryTitle: "Html Tutorial"
      },

      {
        Urlbase: "/css_introduction.htm",
        LibraryImg: "assets/icons/web/css.svg",
        LibraryTitle: "CSS Tutorial"
      },

      {
        Urlbase: "/js_introduction.htm",
        LibraryImg: "assets/icons/web/js.svg",
        LibraryTitle: "Javascript Tutorial"
      },

      {
        Urlbase: "/jquery_introduction.htm",
        LibraryImg: "assets/icons/web/jquery.svg",
        LibraryTitle: "jQuery Tutorial"
      },

      {
        Urlbase: "/react_introduction.htm",
        LibraryImg: "assets/icons/web/react.svg",
        LibraryTitle: "React JS Tutorial"
      },

      {
        Urlbase: "/angular_introduction.htm",
        LibraryImg: "assets/icons/web/angular.svg",
        LibraryTitle: "Angular Tutorial"
      },
    ]
  },

  {
    CardTitle_web: "Programming-Tutorials",
    icons: "developer_mode_tv",
    linkurl: "/categories/computer_programming_tutorials",
    cardiconsList: [
      {
        Urlbase: "/python_introduction.htm",
        LibraryImg: "assets/icons/program/python.svg",
        LibraryTitle: "Python Tutorial"
      },

      {
        Urlbase: "/java_introduction.htm",
        LibraryImg: "assets/icons/program/java.svg",
        LibraryTitle: "Java Tutorial"
      },

      {
        Urlbase: "/c_introduction.htm",
        LibraryImg: "assets/icons/program/c-file.svg",
        LibraryTitle: "C Tutorial"
      },

      {
        Urlbase: "/cplusplus_introduction.htm",
        LibraryImg: "assets/icons/program/cplusplus.svg",
        LibraryTitle: "C++ - Tutorial"
      },

      {
        Urlbase: "/kotlin_introduction.htm",
        LibraryImg: "assets/icons/program/kotlin.svg",
        LibraryTitle: "Kotlin Tutorial"
      },

      {
        Urlbase: "/django_introduction.htm",
        LibraryImg: "assets/icons/program/django.svg",
        LibraryTitle: "Django Tutorial"
      },
    ]
  },

  // {
  //   CardTitle_web: "Database Tutorials",
  //   icons: "storage",
  //   linkurl: "/categories/database_tutorials",
  //   cardiconsList: [
  //     {
  //       Urlbase: "/mysql_sql_introduction.htm",
  //       LibraryImg: "assets/icons/databases/mysql.svg",
  //       LibraryTitle: "MySQL Tutorial"
  //     },

  //     {
  //       Urlbase: "/php_introduction.htm",
  //       LibraryImg: "assets/icons/databases/php.svg",
  //       LibraryTitle: "PHP Tutorial"
  //     },

  //     {
  //       Urlbase: "/node_introduction.htm",
  //       LibraryImg: "assets/icons/databases/nodejs.svg",
  //       LibraryTitle: "Node JS Tutorial"
  //     },

  //     {
  //       Urlbase: "/aws_introduction.htm",
  //       LibraryImg: "assets/icons/databases/aws.svg",
  //       LibraryTitle: "AWS Tutorial"
  //     },

  //     {
  //       Urlbase: "/git_github_introduction.htm",
  //       LibraryImg: "assets/icons/program/git.svg",
  //       LibraryTitle: "Git-Github Tutorial"
  //     },

  //     {
  //       Urlbase: "/sql_introduction.htm",
  //       LibraryImg: "assets/icons/databases/sql.svg",
  //       LibraryTitle: "SQL - Tutorial"
  //     },
  //   ]
  // },

  // {
  //   CardTitle_web: "Mobile App Development",
  //   icons: "android",
  //   linkurl: "/categories/mobile_app_tutorials",
  //   cardiconsList: [
  //     {
  //       Urlbase: "/android_introduction.htm",
  //       LibraryImg: "assets/icons/android/android.svg",
  //       LibraryTitle: "Android Tutorial"
  //     },

  //     {
  //       Urlbase: "/swift_introduction.htm",
  //       LibraryImg: "assets/icons/android/swift.svg",
  //       LibraryTitle: "Swift Tutorial"
  //     },

  //     {
  //       Urlbase: "/ios_introduction.htm",
  //       LibraryImg: "assets/icons/android/ios.svg",
  //       LibraryTitle: "IOS - Tutorial"
  //     },

  //     {
  //       Urlbase: "/flutter_introduction.htm",
  //       LibraryImg: "assets/icons/android/flutter.svg",
  //       LibraryTitle: "Flutter Tutorial"
  //     },

  //     {
  //       Urlbase: "/nativescript_introduction.htm",
  //       LibraryImg: "assets/icons/android/nativescript.svg",
  //       LibraryTitle: "NativeScript Tutorial"
  //     },

  //     {
  //       Urlbase: "/jquery_introduction.htm",
  //       LibraryImg: "assets/icons/android/ionic.svg",
  //       LibraryTitle: "iOnic Tutorial"
  //     },
  //   ]
  // },

  // {
  //   CardTitle_web: "Microsoft Technologies",
  //   icons: "grid_view",
  //   linkurl: "/categories/microsoft_technologies_tutorials",
  //   cardiconsList: [
  //     {
  //       Urlbase: "/ms_excel_tutorial.htm",
  //       LibraryImg: "assets/icons/tools/excel.svg",
  //       LibraryTitle: "Excel Tutorial"
  //     },

  //     {
  //       Urlbase: "/ms_word_tutorial.htm",
  //       LibraryImg: "assets/icons/tools/word.svg",
  //       LibraryTitle: "Word Tutorial"
  //     },

  //     {
  //       Urlbase: "/ms_power_point_tutorial.htm",
  //       LibraryImg: "assets/icons/tools/ppt.svg",
  //       LibraryTitle: "PPT - Tutorial"
  //     },

  //     {
  //       Urlbase: "/ms_outlook_tutorial.htm",
  //       LibraryImg: "assets/icons/tools/ms-outlook.svg",
  //       LibraryTitle: "Outlook Tutorial"
  //     },

  //     {
  //       Urlbase: "/advance_excel_tutorials.htm",
  //       LibraryImg: "assets/icons/tools/excel.svg",
  //       LibraryTitle: "Advance Excel"
  //     },

  //     {
  //       Urlbase: "/power_bi_tutorial.htm",
  //       LibraryImg: "assets/icons/tools/power-bi.svg",
  //       LibraryTitle: "Power BI Tutorial"
  //     },
  //   ]
  // },

  // {
  //   CardTitle_web: "Data Analytics",
  //   icons: "monitoring",
  //   linkurl: "/categories/big_data_tutorials",
  //   cardiconsList: [
  //     {
  //       Urlbase: "/artificial_introduction.htm",
  //       LibraryImg: "assets/icons/analytics/ai.svg",
  //       LibraryTitle: "AI Tutorial"
  //     },

  //     {
  //       Urlbase: "/data_science_introduction.htm",
  //       LibraryImg: "assets/icons/analytics/data.svg",
  //       LibraryTitle: "Data Science"
  //     },

  //     {
  //       Urlbase: "/statistics_introduction.htm",
  //       LibraryImg: "assets/icons/analytics/statistics.svg",
  //       LibraryTitle: "Statistics Tutorial"
  //     },

  //     {
  //       Urlbase: "/machine_learning_introduction.htm",
  //       LibraryImg: "assets/icons/analytics/ml.svg",
  //       LibraryTitle: "Machine Learning"
  //     },

  //     {
  //       Urlbase: "/pandas_introduction.htm",
  //       LibraryImg: "assets/icons/analytics/panda.svg",
  //       LibraryTitle: "Pandas Tutorial"
  //     },

  //     {
  //       Urlbase: "/numpay_introduction.htm",
  //       LibraryImg: "assets/icons/analytics/numpy.svg",
  //       LibraryTitle: "NumPy Tutorial"
  //     },
  //   ]
  // },
]
}