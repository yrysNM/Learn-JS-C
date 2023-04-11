interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

function isAdmin(person: Person): person is Admin {
  return (person as Admin).role !== undefined;
}

function isUser(person: Person): person is User {
  return (person as User).occupation !== undefined;
}

export function logPerson(person: Person) {
  let additionalInformation: string;

  if (isAdmin(person)) {
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }

  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
