# WeekendAlarm
WeekendAlarm is a work in progress. This my first redux application, it took a day or so to really rap my head around the architecture.<br/>
While I have tried to ensure I've adhered to the rules of redux, I may have misused some aspects of the architecture, and I will work
to correct those issues.

##Overview
WeekendAlarm will alleviate the issue of having to turn off your scheduled alarm when your schedule changes for a single day.<br/>
The idea is to allow the user to "Snooze" the alarm for the next day in advance. This will cause the scheduled alarm to cancel for one day,
meaning you no longer have to worry about forgetting to reapply your scheduled alarm when you return to your normal schedule.

###Notes
Weekend alarm is currently not in a working state.<br/>
1. Currently Add Alarm just creates a view with a static time and day range.
2. Android seems to not agree with react natives view borders. This will cause inconsistencies in the alarm list layout.
