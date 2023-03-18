type FromPromise = Awaited<Promise<number>>; // => number
type FromPromise2 = Awaited<Promise<Promise<number>>>; // => number

interface User {
  name: string;
}

async function fetchUsers(): Promise<User[]> {
  const users: User[] = [
    {
      name: "Alex",
    },
  ];

  return users;
}

const users = fetchUsers();

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>; // -> Awaited new

type UnwrappedPromise<T> = T extends Promise<infer Return> ? Return : T; // -> old

type FetchDataReturnType = UnwrappedPromise<ReturnType<typeof fetchUsers>>; // -> old
