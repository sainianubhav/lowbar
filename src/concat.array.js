function concatify() {
    const args = Array.from(arguments)
    let out = []
    for (let i = 0, len = args.length; i < len; i++) {
        const current = args[i]
        Array.isArray(current) ? out = out.concat(current) : out.push(current)
    }
    return out
}

if (module && module.exports) {
    module.exports = {
        concatify
    }
}
