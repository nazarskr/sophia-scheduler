import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {StudentsComponent} from "./components/students/students.component";
import {StatisticComponent} from "./components/statistic/statistic.component";
import {CalendarComponent} from "./components/calendar/calendar.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'statistics', component: StatisticComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
