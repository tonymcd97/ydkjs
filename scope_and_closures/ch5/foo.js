const bar = require('./bar');

const hungry = 'hippo'

exports.awesome = () => {
    console.log(bar.hello(hungry).toUpperCase());
}