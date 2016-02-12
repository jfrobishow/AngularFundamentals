eventsApp.factory('calendarHelper', function () {
    var monthNames = [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];

    return {
        incrementCalendarMonth: function(calendar) {
            if (calendar.month === 11) {
                calendar.month = 0;
                calendar.year++;
            } else {
                calendar.month++;
            }
        },
        decrementCalendarMonth: function(calendar) {
            if (calendar.month === 0) {
                calendar.month = 11;
                calendar.year--;
            } else {
                calendar.month--;
            }
        },
        getCalendarDays: function (year, month) {
            var monthStartDate = new Date(year, month, 1);
            var days = [];
            for (var idx = 0; idx < monthStartDate.getDay(); idx++) {
                days.push('');
            }
            for (var idx = 1; idx <= new Date(year, month+1, 0).getDate(); idx++) {
                days.push(idx);
            }
            return days;
        },
        getMonthName: function(monthNumber) {
            return monthNames[monthNumber];
        }
    }
});