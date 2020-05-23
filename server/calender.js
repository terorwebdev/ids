const CalendarDates = require("calendar-dates");
var test = require('node-calendar');

const calendarDates = new CalendarDates();

const log = console.log;

/*
  Date 
  0  -> Jan
  1  -> Feb
  2  -> Mar
  3  -> Apr
  4  -> May
  5  -> Jun
  6  -> Jul
  7  -> Aug
  8  -> Sep
  9  -> Oct
  10 -> Nov
  11 -> Dec

  Matrix
  # returns an array of 6 arrays of 7 elements (as in a calendar)
  [
    { date: 17, iso: '2020-05-17', type: 'current' }, -> Sun
    { date: 18, iso: '2020-05-18', type: 'current' }, -> Mon
    { date: 19, iso: '2020-05-19', type: 'current' }, -> Tue
    { date: 20, iso: '2020-05-20', type: 'current' }, -> Wed
    { date: 21, iso: '2020-05-21', type: 'current' }, -> Thu
    { date: 22, iso: '2020-05-22', type: 'current' }, -> Fri
    { date: 23, iso: '2020-05-23', type: 'current' }  -> Sat
  ]
*/

async function mainAsync(year, month) {
    const may2018 = new Date(year, month);
    const mayMatrix = await calendarDates.getMatrix(may2018);
    //log(`May, 2018 Matrix`, mayMatrix);
    return mayMatrix;
};

mainAsync(2020, 4)
    .then((data) => {
        log(data);
    })
    .catch((error) => {
        log(error);
    });