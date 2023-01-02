const moment = require("moment");
require("moment-countdown");
require('dotenv').config()

const deadlineMoment = moment(process.env.TARGET_DATE); // moment object {isAfter: () => {}, countdown: () => {}}

function yearsMonthsDaysHoursMinutes(){
    if(moment().isAfter(deadlineMoment)){console.log("deadline finished"); return}
    const {years, months, days, hours, minutes} = deadlineMoment.countdown()
    console.log(`${years} Years ${months} Months ${days} Days ${hours} Hours ${minutes} Minutes`);
    return {years, months, days, hours, minutes};
}

/*
console.log(yearsMonthsDaysHoursMinutes());
const {years, months, days, hours, minutes} = yearsMonthsDaysHoursMinutes();
const countdown = yearsMonthsDaysHoursMinutes();
console.log(`years ${countdown.years}`);
console.log(`${years} Years ${months} Months ${days} Days ${hours} Hours ${minutes} Minutes`);
*/

module.exports = {
    yearsMonthsDaysHoursMinutes
}