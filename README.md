# laynocode

### My code checks if year is a leap year.

It is written in JS, and requires node.js to run:

type into console `node index.js [year]`

- `node index.js 2024` --> writes `true` to console
- `node index.js 2025` --> writes `false` to console

  Alternatively, you can copy `browser.js` code, paste it in any browser console, and then:

- checkLeapYear(2024) --> writes `true` to console
- checkLeapYear(2025) --> writes `false` to console

### Approach:

In JS, `Date` constructor has built in functionality of overflow.

If provided with values outside of expected range, it updates the date accordingly, e.g. `new Date(2024, 0, 32)` will not give you January 32, but February 1 instead.

So if we compare February 29 and March 1, on leap years it will give us the different date, and on non-leap years it will give the same.

`+` before the Dates is needed to convert Date objects to a timestamp for comparison
