import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';
import { PracticeComponent } from '../practice/practice.component';
import { LinkComponent } from '../link/link.component';
import { Prac1Component } from '../practice/prac1/prac1.component';
import { Prac2Component } from '../practice/prac2/prac2.component';
import { Prac3Component } from '../practice/prac3/prac3.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AboutComponent } from '../about/about.component';
import { Prac4Component } from '../practice/prac4/prac4.component';



@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      {
        path: "practice", component: PracticeComponent,
        children: [
          { path: "prac1", component: Prac1Component },
          { path: "prac2", component: Prac2Component },
          { path: "prac3", component: Prac3Component },
          { path: "prac4", component: Prac4Component }
        ]
      },
      { path: "link", component: LinkComponent },
      { path: "about", component: AboutComponent },
      { path: "**", component: NotFoundComponent }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
})
export class AppRoutModule { }
