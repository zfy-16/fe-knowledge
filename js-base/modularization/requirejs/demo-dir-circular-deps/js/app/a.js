define(['./b', 'exports'], function (b, exports) {
    console.log('a starting', b);
    exports.done = false;
    console.log('in a, b.done =', b.done);
    console.log('a done');
    exports.done = true;
});
