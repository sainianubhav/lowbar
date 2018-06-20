const chunkify = size => array => {
    let chunked = []
    for (let len = array.length, i = 0; i < len; i += size) {
        chunked.push(array.slice(i, i + size))
    }
    return chunked
}

if (module && module.exports) {
    module.exports = {
        chunkify
    }
}
