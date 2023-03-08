function mergeIntervals(intervals) {
	if(intervals.length <=  0) return;

	let res = new Array();

	intervals.sort((a, b) => a[0] - b[0]);

	res.push([intervals[0][0], intervals[0][1]]);
	console.log(res);
	console.log(intervals[1][0]);
	for(let i = 1;i < intervals.length; i++){
		if(intervals[i][0] <= res[res.length - 1][1]) {
			res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1]);


		}else{
			res.push(intervals[i]);
		}
	}

	return res;
}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]));

