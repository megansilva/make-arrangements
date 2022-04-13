// let daySchedule = {
//     "8AM": "",
//     "9AM": "",
//     "10AM": "",
//     "11AM": "",
//     "12PM": "",
//     "1PM": "",
//     "2PM": "",
//     "3PM": "",
//     "4PM": "",
//     "5PM": ""
// };

// $(document).ready(function() {
//     if(!localStorage.getItem('daySchedule')) {
//         updateCalendarTasks(daySchedule);
//     } else {
//         updateCalendarTasks(JSON.parse(localStorage.getItem('daySchedule')));
//     }
// })

// $('#date-today h6').text(moment().format('dddd'+", " + moment().format('MMMM Do YYYY, h:mm:ss a')));

// let counter = 1;
// for(const property in daySchedule) {
//     let textEntry = "#text-entry" + counter;
//     $(textEntry).text(daySchedule[property]);
//     let timeId= "#time" + counter;
//     let presentHour = moment().hour();
//     let timeString = $(timeId).text();

// }
