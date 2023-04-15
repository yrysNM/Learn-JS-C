function checkIfInstanceOf(obj: Object, classFunction: any): boolean {
  while (obj != null) {
    console.log(obj.constructor, Object.getPrototypeOf(obj));
    if (obj.constructor === classFunction) {
      return true;
    }

    obj = Object.getPrototypeOf(obj);
  }

  return false;
}

function logAllProperties(obj: Object): string[] {
  const p: string[] = [];

  for (; obj !== null; obj = Object.getPrototypeOf(obj)) {
    let op = Object.getOwnPropertyNames(obj);
    for (let i = 0; i < op.length; i++) {
      if (p.indexOf(op[i]) === -1) {
        p.push(op[i]);
      }
    }
  }
  return p;
}

checkIfInstanceOf(new Date(), Date); // true
checkIfInstanceOf(5, Number);
