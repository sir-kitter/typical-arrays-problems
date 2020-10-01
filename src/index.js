exports.min = function min(array) {
    if (Array.isArray(array)) {
        if (array.length === 0) return 0
		return Math.min.apply(null, array)
    }
	return 0
}

exports.max = function max(array) {
    if (Array.isArray(array)) {
        if (array.length === 0) return 0
        return Math.max.apply(null, array)
    }
    return 0
}

exports.avg = function avg(array) {
    if (Array.isArray(array)) {
        if (array.length === 0) return 0
        const sum = array.reduce((accumulator, value) => accumulator + value)
        return sum / array.length
    }
    return 0
}
