import moment from "moment/moment";
import 'moment-precise-range-plugin'

export const getTodayDateFormat = (date) => {
    return moment(date).format("MMM Do YY")
}