import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {MatDialog} from '@angular/material/dialog';
import {CalendarDialogComponent} from "./calendar-dialog/calendar-dialog.component";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  currentMonth: any;
  monthStart: any;
  monthDays = [];
  weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.currentMonth = moment();
    this.setDaysNumbers(this.currentMonth);
  }

  openModal (day) {
    const dialogRef = this.dialog.open(CalendarDialogComponent, {
      width: '500px',
      data: {
        day
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  closeModal() {
    console.log('close!');
  }

  plusMonth() {
    this.currentMonth.add(1, 'M');
    this.setDaysNumbers(this.currentMonth);
  }

  minusMonth() {
    this.currentMonth.subtract(1, 'M');
    this.setDaysNumbers(this.currentMonth);
  }

  setDaysNumbers(month) {
    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    this.monthDays = [];
    this.monthStart = month.startOf('month');
    for (let i = 0; i < month.daysInMonth(); i++) {
      this.monthDays.push(this.monthStart.clone().add(i,'days'));
    }

    const firstDayIndex = dayNames.indexOf(this.monthStart.format('dddd'));
    const lastDay = this.monthDays[this.monthDays.length - 1];
    const lastDayIndex = dayNames.indexOf(lastDay.format('dddd'));

    for (let i = 0; i < firstDayIndex; i++) {
      this.monthDays.unshift(this.monthStart.clone().subtract(i + 1,'days'));
    }

    for (let i = 1; i < 7 - lastDayIndex; i++) {
      this.monthDays.push(lastDay.clone().add(i,'days'));
    }
  }

}
