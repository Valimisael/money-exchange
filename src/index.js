// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    var exchange = {},
        currencyLeft = currency,
        objectOfValues = {
            "H" : 50,
            "Q" : 25,
            "D" : 10,
            "N" : 5,
            "P" : 1
        }
        for (var key in objectOfValues) {
            getExchange(objectOfValues[key], key);
        }
        function getExchange(value, key) {
            if(currencyLeft/value >= 1) {
                var count = Math.floor(currencyLeft/value);
                exchange[key] = count;
                currencyLeft -= count * value;
            }
        }
    return exchange;
}
