// A Span is like a Range, but instead of initializing it with
// a start and an end, we initialize it with a start and a length

class Span extends RangeClassRewrittenUsing_class {
	constructor(start, length){
		if(length >= 0) {
			super(start, start + length);
		}else {
			super(start + length, start);
		}
	}
}
