// Assume we have a typed array of bytes of binary data to process. First,
// we create a DataView object so we can flexibly read and write
// values from those bytes
let bytes = new Uint8Array(1024); 	
let view = new DataView(bytes.buffer,
						bytes.byteOffset,
						bytes.byteLength);

let int = view.getInt32(0);			//Read big-endian signed int from byte  0
int = view.getInt32(4, false); 		//Next int is also big-endian
int = view.getUint32(8, true);		// NExt int is little -endian and unsigned
view.setUint32(8, int , false);		// Write it back in big-endian format;