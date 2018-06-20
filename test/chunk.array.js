const chunkify = require('../src/chunk.array').chunkify

const actuals = [
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5, 6],
]

const expecteds = [
    [ [ 1, 2 ], [ 3, 4 ] ],
    [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ],
    [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
]

// do it yourself.