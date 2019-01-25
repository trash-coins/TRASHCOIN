const request = require('superagent');

const getCurrentPrice = currency => {
    
    return request
        .get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1&convert=${currency}`)
        .set('X-CMC_PRO_API_KEY', '74163a80-d38f-46be-87a0-ad7ec20ea396');
};

getCurrentPrice('USD').then(res => console.log(res));

module.exports = { getCurrentPrice };