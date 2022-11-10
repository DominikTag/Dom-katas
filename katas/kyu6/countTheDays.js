/*
Little Annie is very excited for upcoming events. She wants to know how many days she has to wait for a specific event.

Your job is to help her out.

Task: Write a function which returns the number of days from today till the given date. The function will take a Date object as parameter. You have to round the amount of days.

If the event is in the past, return "The day is in the past!"
If the event is today, return "Today is the day!"
Else, return "x days"
*/

function countDays(d){
    const today = new Date();

    const todayAsNumericValue = today.getTime();
    const dateToCompareAsNumericValue = d.getTime();

    const oneDay = 1000 * 60 * 60 * 24; // number of miliseconds in one day

    // handles today as new Date object
    if(todayAsNumericValue === dateToCompareAsNumericValue) {
        return 'Today is the day!';
        // counts the difference between requested date and today and divides it by miliseconds in one day, to get amount of days
    }
    if(todayAsNumericValue < dateToCompareAsNumericValue) {
        let result = Math.round((dateToCompareAsNumericValue - todayAsNumericValue) / oneDay);
        return `${result} days`;
        // handles a case, when today's date is provided as a parameter (e.g. September 6, 2022)
    }
    if(todayAsNumericValue > dateToCompareAsNumericValue && todayAsNumericValue - dateToCompareAsNumericValue < oneDay) {
        return 'Today is the day!';
    }
    return 'The day is in the past!';
}