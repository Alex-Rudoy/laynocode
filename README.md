# laynocode

### My code checks if the year is a leap year.

It is written in JS, and requires node.js to run:

Type into terminal `node index.js [year]`

- `node index.js 2024` --> writes `true` to terminal
- `node index.js 2025` --> writes `false` to terminal

Alternatively, you can copy the `browser.js` code, paste it into any browser console, and then:

- `checkLeapYear(2024)` --> writes `true` to browser console
- `checkLeapYear(2025)` --> writes `false` to browser console

### Approach/Explanation:

In JS, the `Date` constructor has the built-in functionality of overflow.

If the provided values are outside the expected range, the date will be updated accordingly. For example, `new Date(2024, 0, 32)` will not give you January 32, but February 1 instead.

So if we compare February 29 and March 1, on leap years it will give us a different date, and on non-leap years it will give the same.

---

`+` before `new Date`s is [Unary plus](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus) which tries to convert value to a `number`. When it is applied to `Date` objects, they are converted to a timestamp `number` (which is honestly not necessary, because `Date`s are automatically converted to a timestamp when math operations are applied to them).

---

`^` between two `Date`s is not power, but [Bitwise XOR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR).

If given two equal numbers, it returns `0`.

---

`!` is a [logical NOT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT) unary operator, which returns `true` when given a "truthy" value, and `false` when given a "falsy" value.

Second `!` then switches `true` to `false`, and `false` to `true`.

So `!!` basically converting the result into a `boolean` - `0` becomes `false` and any non-zero value becomes `true`.
