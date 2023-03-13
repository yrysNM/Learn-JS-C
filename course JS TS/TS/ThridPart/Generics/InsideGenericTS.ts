const arr: Array<number> = [1, 2, 3];
const arr1: number[] = [1, 2, 3];

const roarr: ReadonlyArray<string> = ["dfdfd"];
// roarr[0] = "wfwfe";  // -> error

interface IState {
  readonly data: {
    name: string;
  };
  tag?: string;
}

const state: Partial<IState> = {
  data: {
    name: "John",
  },
};

const strictState: Required<IState> = {
  data: {
    name: "wfwef",
  },
  tag: "wefew", //required
};

// strictState.data = "wefwef" error

function action(state: Readonly<IState>) {
  // readonly only one level obj
  state.data.name = "abs"; // warning
}
