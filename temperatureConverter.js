"use strict";
class TemperatureConverter {
    set celsius(value) {
        this._celsius = value;
        let fahrenheit = ((9 / 5 * this._celsius) + 32);
        console.log("Temperature in Fahrenheit : ", fahrenheit);
    }
    get celsius() {
        return this._celsius || 0;
    }
}
const c = new TemperatureConverter();
c.celsius = 36;
console.log("Temperature in Celsius: ", c.celsius);
