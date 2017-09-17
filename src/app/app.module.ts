import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { PlayersComponent } from './components/players/players.component';
import { ScoresComponent } from './components/scores/scores.component';
import { CoursesService } from './services/courses.service';
import { PlayersService } from './services/players.service';
import { ScorecardComponent } from './components/scorecard/scorecard.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationService } from './services/authentication.service';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/signup/signup.component';
import { CourseComponent } from './components/courses/course/course.component';
import { NewCourseComponent } from './components/add/course/newcourse.component';
import { CourseAddressComponent } from './components/add/course/address/address.component';
import { CourseBuilderEventService } from './services/coursebuilderevent.service';
import { CourseNameComponent } from './components/add/course/name/name.component';
import { CourseHoleComponent } from './components/add/course/hole/hole.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'scores', component: ScoresComponent },
  {
    path: 'courses/new',
    component: NewCourseComponent,
    children: [
      { path: '', redirectTo: 'name', pathMatch: 'full' },
      { path: 'name', component: CourseNameComponent },
      { path: 'address', component: CourseAddressComponent },
      { path: 'hole/:number', component: CourseHoleComponent },
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    CoursesComponent,
    ScoresComponent,
    ScorecardComponent,
    LeaderboardComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    CourseComponent,
    NewCourseComponent,
    CourseAddressComponent,
    CourseNameComponent,
    CourseHoleComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [
    AuthenticationService,
    CoursesService,
    CourseBuilderEventService,
    PlayersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
