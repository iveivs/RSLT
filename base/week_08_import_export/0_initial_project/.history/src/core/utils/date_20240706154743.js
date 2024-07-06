import moment from "moment/moment";
import 'moment-precise-range-plugin'

export const getTodayDateFormat = (date) => {
    return moment(date).format("MMM Do YY")
}

const getPresizeDateDifference = (date1, date2) => {
    const date1Format = moment(date1)
    const date1Format = moment(date2)
    moment.preciseDiff()
}