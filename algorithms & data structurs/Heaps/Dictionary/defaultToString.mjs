export function defaultToString(item) {
	if(item === null) {
		return "NULL";
	}else if(item === undefined) {
	 	return "UNDEFINED";
	}else if(typeof item === "string" || item instanceof string) {
		return `${item}`;
	}

	return item.toString();
}