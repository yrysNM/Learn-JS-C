function processingDataF<T, S>(data: T[], options: S): string {
  data.length;
  switch (typeof data) {
    case "string":
      return `${data}, spped: ${options}`;
    case "number":
      return `${data}, speed: ${options}`;
    default:
      return "Not valid";
  }
}

let res1F = processingDataF([1], "fast");
let res2F = processingDataF(["1"], "slow");
const res3F = processingDataF<number, string>([10], "hi");

const processing = <T>(data: T): T => {
  return data;
};

interface ProcessingFn {
  <T>(data: T): T;
}

let newFunc: ProcessingFn = processing;

interface DataSaver {
  //   processing: <T>(data: T) => T;
  //   processing: typeof processing;
  processing: ProcessingFn;
}

const saver: DataSaver = {
  //   processing(data) {
  //     console.log(data);
  //     return data;
  //   },
  //   processing: <T>(data: T) => {
  //     return data;
  //   },
  //   processing: (data) => {
  //     return data;
  //   },
  processing: processing,
};
