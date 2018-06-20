// > const compactify = require('./src/compact.array').compactify
// undefined
// > compactify([1, 2, 3, 4, false, '', NaN)
// ...
// > compactify([1, 2, 3, 4, false, '', NaN])
// [ 1, 2, 3, 4 ]
// > compactify([1, 2, 3, 4, false, '', NaN, 6])
// [ 1, 2, 3, 4, 6 ]