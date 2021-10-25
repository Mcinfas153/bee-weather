export function getCurrentTime() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return time
}

export function unixToHumanTime(unixTime) {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unixTime * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    //var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    //var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours;

    return formattedTime;
}

export function checkTimeExetnsion(hour) {
    return hour >= 12 ? 'PM' : 'AM'
}