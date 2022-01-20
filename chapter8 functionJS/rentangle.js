// This function returns an object representing a rectangle's dimensions.
// If only width is supplied, make it twice as high as it is wide
const rectangle = (width, height = width * 2) => ({width, height});

console.log(rectangle(1)); // => { width: 1, height: 2 }