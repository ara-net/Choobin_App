import { Component, EventEmitter, Injectable, Input, Output, OnInit } from '@angular/core';

import { NgbCalendar, NgbCalendarPersian, NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { ToMiladi } from '../../util/date';
type DateModel = shared.userControl.persianDatePicker.dateModel;
type CalendarType = shared.userControl.persianDatePicker.CalendarType;

const WEEKDAYS_SHORT = ['د', 'س', 'چ', 'پ', 'ج', 'ش', 'ی'];
const MONTHS = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

@Injectable()
export class NgbDatepickerI18nPersian extends NgbDatepickerI18n {
  getWeekdayShortName(weekday: number) { return WEEKDAYS_SHORT[weekday - 1]; }
  getMonthShortName(month: number) { return MONTHS[month - 1]; }
  getMonthFullName(month: number) { return MONTHS[month - 1]; }
  getDayAriaLabel(date: NgbDateStruct): string { return `${date.year}-${this.getMonthFullName(date.month)}-${date.day}`; }
}

@Component({
  selector: 'jalali-date-picker',
  templateUrl: './jalali-date-picker.component.html',
  providers: [
    { provide: NgbCalendar, useClass: NgbCalendarPersian },
    { provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nPersian }
  ]
})
export class JalaliDatePickerComponent implements OnInit {

  @Input() selectedDate: DateModel;
  @Input('title') title = "title";
  @Input() mode: CalendarType = 'close';
  @Output() selectedDateChange = new EventEmitter<DateModel>();
  dayModel: NgbDateStruct;

  constructor(
    private calendar: NgbCalendar) {
    console.log('Selected Date', this.selectedDate)
  }
  ngOnInit(): void {
    this.selectToday();
  }

  selectToday() {
    this.dayModel = this.calendar.getToday();
    this.onDateChange();
  }
  onDateChange() {
    let date: DateModel = { persianDate: this.getFaDate(), garegorianDate: this.getEnDate() };
    this.selectedDate = date;
    this.selectedDateChange.emit(this.selectedDate);
  }

  private getEnDate() {
    return ToMiladi(this.dayModel.year, this.dayModel.month, this.dayModel.day)
  }

  private getFaDate() {
    return `${this.dayModel.year}/${this.dayModel.month}/${this.dayModel.day}`;
  }
}

