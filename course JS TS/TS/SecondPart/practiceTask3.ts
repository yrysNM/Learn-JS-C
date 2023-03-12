type animal = "cat" | "dog" | "bird";

enum AnimalStatus {
  Available = "available",
  NotAvailable = "not available",
}

interface request {
  animal: animal;
  breed: string;
  sterilized?: string;
}

interface animalData extends request {
  location: string;
  age?: number;
}

interface AnimalAvailableResponse {
  status: "available";
  data: animalData;
}

interface AnimalNotAvailableData {
  status: "not available";
  data: {
    message: string;
    nextUpdateIn: Date;
  };
}

type Res = AnimalAvailableResponse | AnimalNotAvailableData;

function isAvailableData(res: Res): res is AnimalAvailableResponse {
  if (res.status === AnimalStatus.Available) {
    return true;
  } else {
    return false;
  }
}

function checkAnimalData(animal: Res): animalData | string {
  if (isAvailableData(animal)) {
    return animal.data;
  } else {
    return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
  }
}

console.log(
  checkAnimalData({
    status: "available",
    data: { animal: "cat", breed: "stock", location: "KZ" },
  })
);
