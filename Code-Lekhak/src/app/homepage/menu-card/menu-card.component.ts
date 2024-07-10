import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorage } from '../../core/constants/constants';
import { ThemeService } from '../../core/services/Theme/theme.service';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.scss'
})
export class MenuCardComponent {

  isLoggedIn: boolean = false;
  isDarkMode: boolean = false;
  CloseOpen: boolean = false;
  autherDetails: any = [];


  _AuthService = inject(AuthService);
  _router = inject(Router);
  _toastr = inject(ToastrService);

  constructor(private themeService: ThemeService) {
    this.isDarkMode = this.themeService.isDarkMode();
  }

  ngOnInit() {
    const myAccesstoken = sessionStorage.getItem(LocalStorage.accessToken)
    if (!myAccesstoken) {
      this._router.navigate([])
      this.isLoggedIn = true;
    }

    this._AuthService.GetCurrentUser().subscribe({
      next: res => {
        this.autherDetails = res;
      },
      error: err => {
        setTimeout(() => {
          this._toastr.info("If you want to learn more advanced then join");
        }, 10000)
        this._router.navigate([])
      }
    })
  }


  //this is contact dialog box for inquiry
  openContact() {
    // const dialogRef = this.dialog.open(ContactUsComponent);
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  // Router Link for click event
  dashboard() {
    this._router.navigate(["/dashboard"])
  }

  profile() {
    this._router.navigate(['/dashboard/profile'])
  }

  Certificates() {
    this._router.navigate(["/dashboard/profile"])
  }

  Billing() {
    this._router.navigate(["/dashboard/payment_history"])
  }

  logoutUser() {
    this._AuthService.logoutUser().subscribe({
      next: res => {
        // this.toastr.info("User Logout");
        sessionStorage.removeItem("accessToken")
        this._router.navigate(["/auth/login"]);
      }
    })
  }

  //theme change methods
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkMode(this.isDarkMode);
  }

  //this is mega menu data for menu render
  mainMenu = [
    {
      mainLink: "Learn Tutorials",
      showMega: "showMegaone",
      subMenu: [
        {
          heading: "❇️ Web-Development",
          megaLink: [
            {
              mega_icons: "assets/icons/web/html.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn HTML"
            },
            {
              mega_icons: "assets/icons/web/css.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn CSS"
            },
            // {
            //   mega_icons: "assets/icons/jquery.svg",
            //   mega_link: "/quiztest/html_quiz",
            //   mega_name: "Learn Bootstrap"
            // },
            {
              mega_icons: "assets/icons/web/js.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn JavaScript"
            },
            {
              mega_icons: "assets/icons/web/jquery.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn jQuery"
            },
            {
              mega_icons: "assets/icons/web/angular.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn Angular"
            },
            {
              mega_icons: "assets/icons/web/react.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn React"
            },
            {
              mega_icons: "assets/icons/right.svg",
              mega_link: "/categories/web_development_tutorials",
              mega_name: "Learn More"
            },

          ]
        },

        {
          heading: "❇️ Programming",
          megaLink: [
            {
              mega_icons: "assets/icons/program/python.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn Python"
            },
            {
              mega_icons: "assets/icons/program/java.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn Java"
            },
            {
              mega_icons: "assets/icons/program/c.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn C"
            },
            {
              mega_icons: "assets/icons/program/cplusplus.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn C++"
            },
            {
              mega_icons: "assets/icons/program/c-sharp.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn C#"
            },
            {
              mega_icons: "assets/icons/program/kotlin.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn Kotlin"
            },
            {
              mega_icons: "assets/icons/right.svg",
              mega_link: "/categories/computer_programming_tutorials",
              mega_name: "Learn More"
            },

          ]
        },

        {
          heading: "❇️ Databases",
          megaLink: [
            {
              mega_icons: "assets/icons/databases/mysql.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn MySQL"
            },
            {
              mega_icons: "assets/icons/databases/sql.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn SQL"
            },
            {
              mega_icons: "assets/icons/databases/mongodb.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn MongoDB"
            },
            {
              mega_icons: "assets/icons/databases/php.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn PHP"
            },
            {
              mega_icons: "assets/icons/databases/dotnet.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn ASP"
            },
            {
              mega_icons: "assets/icons/databases/nodejs.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn Node js"
            },
            {
              mega_icons: "assets/icons/right.svg",
              mega_link: "/categories/database_tutorials",
              mega_name: "Learn More"
            }
          ]
        },

        {
          heading: "❇️ Data-Analytics",
          megaLink: [
            {
              mega_icons: "assets/icons/analytics/ai.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn AI"
            },
            {
              mega_icons: "assets/icons/analytics/ml.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn ML"
            },
            {
              mega_icons: "assets/icons/analytics/data.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn DS"
            },
            {
              mega_icons: "assets/icons/analytics/numpy.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn Numpy"
            },
            {
              mega_icons: "assets/icons/analytics/panda.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn Pandas"
            },
            {
              mega_icons: "assets/icons/analytics/scipy.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn SciPy"
            },
            {
              mega_icons: "assets/icons/right.svg",
              mega_link: "/categories/mobile_app_tutorials",
              mega_name: "Learn More"
            }
          ]
        },

        {
          heading: "❇️ Mobile App",
          megaLink: [
            {
              mega_icons: "assets/icons/android/android.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn Android"
            },
            {
              mega_icons: "assets/icons/android/swift.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn Swift"
            },
            {
              mega_icons: "assets/icons/android/ios.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn iOS"
            },
            {
              mega_icons: "assets/icons/android/flutter.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn Flutter"
            },
            {
              mega_icons: "assets/icons/android/nativescript.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn NativeScript"
            },
            {
              mega_icons: "assets/icons/android/ionic.svg",
              mega_link: "/quiztest/html_quiz",
              mega_name: "Learn ionic"
            },
            {
              mega_icons: "assets/icons/right.svg",
              mega_link: "/categories/mobile_app_tutorials",
              mega_name: "Learn More"
            }
          ]
        },
        // {
        //   heading: "❇️  MS And Other Tools",
        //   megaLink: [
        //     {
        //       mega_icons: "assets/icons/tools/excel.svg",
        //       mega_link: "/quiztest/html_quiz",
        //       mega_name: "Learn Excel"
        //     },
        //     {
        //       mega_icons: "assets/icons/tools/word.svg",
        //       mega_link: "/quiztest/html_quiz",
        //       mega_name: "Learn Word"
        //     },
        //     {
        //       mega_icons: "assets/icons/tools/ppt.svg",
        //       mega_link: "/quiztest/html_quiz",
        //       mega_name: "Learn PPT"
        //     },
        //     {
        //       mega_icons: "assets/icons/tools/ms-outlook.svg",
        //       mega_link: "/quiztest/html_quiz",
        //       mega_name: "Learn Outlook"
        //     },
        //     {
        //       mega_icons: "assets/icons/tools/excel.svg",
        //       mega_link: "/quiztest/html_quiz",
        //       mega_name: "Google Excel"
        //     },
        //     {
        //       mega_icons: "assets/icons/tools/power-bi.svg",
        //       mega_link: "/quiztest/html_quiz",
        //       mega_name: "Learn Power BI"
        //     },
        //     {
        //       mega_icons: "assets/icons/right.svg",
        //       mega_link: "/quiztest/html_quiz",
        //       mega_name: "Learn More"
        //     }
        //   ]
        // },
      ]
    },

    // // Exercises & Quizzes managing code
    // {
    //   mainLink: "Exercises & Quizzes",
    //   showMega: "showMega",
    //   subMenu: [
    //     {
    //       heading: "♻️ Web Development Quiz",
    //       megaLink: [
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/html_quiz",
    //           mega_name: "HTML Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/css_quiz",
    //           mega_name: "CSS Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/js_quiz",
    //           mega_name: "JavaScript Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/jquery_quiz",
    //           mega_name: "jQuery Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/react_js_quiz",
    //           mega_name: "React js Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/angular_quiz",
    //           mega_name: "Angular Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/right.svg",
    //           mega_link: "/quiztest/json_quiz",
    //           mega_name: "List of More"
    //         },

    //       ]
    //     },

    //     {
    //       heading: "♻️ Programming Quiz",
    //       megaLink: [
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/python_quiz",
    //           mega_name: "Python Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/java_quiz",
    //           mega_name: "Java Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/c_quiz",
    //           mega_name: "C Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/cplus_quiz",
    //           mega_name: "C++ Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/c_shrap_quiz",
    //           mega_name: "C# Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/kotlin_quiz",
    //           mega_name: "Kotlin Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/right.svg",
    //           mega_link: "/quiztest/go_quiz",
    //           mega_name: "List of More"
    //         }
    //       ]
    //     },

    //     {
    //       heading: "♻️ Databases Quiz",
    //       megaLink: [
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/html_quiz",
    //           mega_name: "MySQL Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/html_quiz",
    //           mega_name: "SQL Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/html_quiz",
    //           mega_name: "MongoDB Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/html_quiz",
    //           mega_name: "PHP Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/html_quiz",
    //           mega_name: "ASP Quiz"
    //         }, {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/html_quiz",
    //           mega_name: "Node js Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/right.svg",
    //           mega_link: "/quiztest/html_quiz",
    //           mega_name: "List of More"
    //         }
    //       ]
    //     },

    //     {
    //       heading: "♻️ Data-Analytics Quiz",
    //       megaLink: [
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/artificial_intelligence_quiz",
    //           mega_name: "AI Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/machine_learning_quiz",
    //           mega_name: "ML Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/data_science_quiz",
    //           mega_name: "Data-Science Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/numpy_quiz",
    //           mega_name: "NumPy Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/pandas_quiz",
    //           mega_name: "Pandas Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/scipy_quiz",
    //           mega_name: "SciPy Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/right.svg",
    //           mega_link: "/quiztest/scipy_quiz",
    //           mega_name: "List of More"
    //         }
    //       ]
    //     },


    //     {
    //       heading: "♻️ Mobile App Quiz",
    //       megaLink: [
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/android_quiz",
    //           mega_name: "Android Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/swift_quiz",
    //           mega_name: "Swift Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/ios_quiz",
    //           mega_name: "iOS Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/flutter_quiz",
    //           mega_name: "Flutter Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/nativescript_quiz",
    //           mega_name: "NativeScript Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/rightquiz.svg",
    //           mega_link: "/quiztest/ionic_quiz",
    //           mega_name: "iOnic Quiz"
    //         },
    //         {
    //           mega_icons: "assets/icons/right.svg",
    //           mega_link: "/quiztest/html_quiz",
    //           mega_name: "List of More"
    //         }
    //       ]
    //     },
    //   ]
    // },

  ]


  dropMenu = [
    {
      MainLink: "Learn Tutorials",
      showMegaId: "showDrop",
      SubDropMenu: [
        {
          LinkName: "Web Development",
          ImgUrl: "assets/icons/digital/email.svg",
          BaseUrl: ""
        },

        {
          LinkName: "Web Development",
          ImgUrl: "assets/icons/digital/email.svg",
          BaseUrl: ""
        },

        {
          LinkName: "Web Development",
          BaseUrl: ""
        },

        {
          LinkName: "Web Development",
          BaseUrl: ""
        },

        {
          LinkName: "Web Development",
          BaseUrl: ""
        },
      ]
    },

    {
      MainLink: "Exercises & Quizzes",
      showMegaId: "showDropD",
      SubDropMenu: [
        {
          LinkName: "Web Development",
          BaseUrl: ""
        },

        {
          LinkName: "Web Development",
          BaseUrl: ""
        },

        {
          LinkName: "Web Development",
          BaseUrl: ""
        },

        {
          LinkName: "Web Development",
          BaseUrl: ""
        },

        {
          LinkName: "Web Development",
          BaseUrl: ""
        },
      ]
    },

    {
      MainLink: "Digital Marketing",
      showMegaId: "showDropa",
      SubDropMenu: [
        {
          LinkName: "Web Development",
          BaseUrl: ""
        },

        {
          LinkName: "Web Development",
          BaseUrl: ""
        },

        {
          LinkName: "Web Development",
          BaseUrl: ""
        },

        {
          LinkName: "Web Development",
          BaseUrl: ""
        },

        {
          LinkName: "Web Development",
          BaseUrl: ""
        },
      ]
    },

    {
      MainLink: "Tutorials",
      showMegaId: "showDrop",
      SubDropMenu: [
        {
          LinkName: "Web Development",
          BaseUrl: ""
        },

        {
          LinkName: "Web Development",
          BaseUrl: ""
        },

        {
          LinkName: "Web Development",
          BaseUrl: ""
        },

        {
          LinkName: "Web Development",
          BaseUrl: ""
        },

        {
          LinkName: "Web Development",
          BaseUrl: ""
        },
      ]
    },

  ]

  closeMenu() {
    this.CloseOpen = true;
  }
}


