// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	let results = [];
	if (size > array.length) {
		results.push([array]);
	} else {
		let arr = [];
		for (let i = 0; i < array.length; i += 1) {
			arr.push(array[i]);
			if (arr.length === size) {
				results.push(arr);
				arr = [];
			} else if (i === array.length - 1) {
				results.push(arr);
			}
		}
	}
	return results;
}

module.exports = chunk;
