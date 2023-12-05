/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DaysOfWeek {
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',  
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
  SUNDAY = 'Sunday',
}
const isWeekend = (day: DaysOfWeek): boolean => {
  switch (day) {
    case DaysOfWeek.SATURDAY:
    case DaysOfWeek.SUNDAY:
      return true;
    default:
      return false;
  }
}
