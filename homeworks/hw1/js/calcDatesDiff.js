import { DateTime } from "https://moment.github.io/luxon/es6/luxon.min.js";
export default function (dateFromStr, dateToStr){
    if (dateFromStr < dateToStr){
        [dateFromStr, dateToStr] = [dateToStr, dateFromStr]
    }

    const dateFrom = DateTime.fromISO(dateFromStr);
    const dateTo = DateTime.fromISO(dateToStr);

    const diff = dateFrom.diff(dateTo, ['years', 'months', 'days']).toObject();

    return diff
}