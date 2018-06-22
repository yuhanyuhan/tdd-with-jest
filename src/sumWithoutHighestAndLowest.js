// Sum all the numbers of the array except the highest and the lowest number
// If the highest and lowest numbers appear more than once, exclude ALL occurrences
//
// e.g. sumWithoutHighestAndLowest([6, 2, 1, 8, 10]) => 16
// e.g. sumWithoutHighestAndLowest([1, 1, 11, 2, 3]) => 5

const sumWithoutHighestAndLowest = array => {
	var max = Math.max(...array)
	var min = Math.min(...array)
	return array.filter(x => x !== max && x!== min).reduce((a,b)=>a+b)
};

module.exports = sumWithoutHighestAndLowest;
