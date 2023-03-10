const dataFromControl = {
  water: 200,
  el: 350,
};

function checkReadings(data: typeof dataFromControl): boolean {
  const dataFromUser = {
    water: 200,
    el: 350,
  };

  if (data.el === dataFromUser.el && data.water === dataFromUser.water) {
    return true;
  } else {
    return false;
  }
}

const PI = Math.PI;

let PIClone: typeof PI;

console.log(typeof PI);

console.log(checkReadings(dataFromControl));
