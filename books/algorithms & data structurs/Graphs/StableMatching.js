
// This function returns true if woman 'w' prefers man 'm1' over man 'm'
function wPresersM1OverM(prefer, w, m,m1, N) {
	for(let i = 0;i < N;i++) {
		if(prefer[w][i] == m1) {
			return true;
		}

		if(prefer[w][i] == m) {
			return false;
		}
	}
}


function  stableMarriage(prefer, N) {
	
	let wParther = new Array(N);

	let mFree = new Array(N);

	wParther.fill(-1);
	mFree.fill(false);
	let freeCount = N; 

	while(freeCount > 0) {
		let m; 
		for(m = 0; m < N; m++) {
			if(mFree[m] == false) {
				break;
			}


 		}

 		for(let i =0;i< N && mFree[m] == false; i++) {
 			let w = prefer[m][i];

 			 // The woman of preference is free, w and m become
            // partners (Note that the partnership maybe changed
            // later). So we can say they are engaged not married
 			if(wParther[w - N] == -1) {
 				wParther[w - N] = m; 
 				mFree[m] = true;
 				freeCount--;
 			}else  {
 				let m1 = wParther[w - N];

 				if(wPresersM1OverM(prefer, w, m, m1,N) == false) {
 					wParther[w - N] = m;
 					mFree[m] = true; 
 					mFree[m1] = true;
 				}
 			}
 		}
	}

	console.log('Woman	Man');
	for(let i = 0; i < N; i++) {
		console.log( " " + (i + N) + "		" + wParther[i]);
	}
}


var prefer  = [ [7, 5, 6, 4],
        [5, 4, 6, 7],
        [4, 5, 6, 7],
        [4, 5, 6, 7],
        [0, 1, 2, 3],
        [0, 1, 2, 3],
        [0, 1, 2, 3],
        [0, 1, 2, 3],
    ];

    N = 4; 

    stableMarriage(prefer, N);