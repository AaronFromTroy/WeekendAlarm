# WeekendAlarm
WeekendAlarm is a work in progress. I was hoping to finish this in a couple of days, but redux proved to be more of a challenge than I gave it credit.<br/>
This is my first time using redux. While I have tried to ensure I've adhered to the rules of redux, I may have misused some aspects of the architecture, and I will work to correct those issues.

## Overview
WeekendAlarm will alleviate the issue of having to turn off your scheduled alarm when your schedule changes for a single day.<br/>
The idea is to allow the user to "Snooze" the alarm for the next day in advance. This will cause the scheduled alarm to cancel for one day, meaning you no longer have to worry about forgetting to reapply your scheduled alarm when you return to your normal schedule.

### Notes
Weekend alarm is currently not in a working state.<br/>
1. Currently Add Alarm just creates a view with a static time and day range.
2. Android seems to not agree with react natives view borders. This will cause inconsistencies in the alarm list layout.
3. Alarms can be added without a schedule. A default will be added, although this doesn't matter since alarms aren't wired up yet.
4. All testing has been done on android emulators.
5. Need to merge styles into a shared styles object.
6. DatePicker needs to be reworked in AddAlarm component.