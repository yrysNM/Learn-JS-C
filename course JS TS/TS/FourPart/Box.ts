// class Box<T> {
//   width: number; // -> T это тип not value;
//   height: number;
//   volume: string;

//   // constructor(volume: string);
//   // constructor(width: number);
//   // constructor(widthOrVolume: number | string) {
//   //   // if (typeof widthOrVolume === "number") {
//   //   //   this.width = widthOrVolume;
//   //   // } else {
//   //   //   this.volume = widthOrVolume;
//   //   // }

//   //   this.height = 500;
//   // }

//   constructor(width: number) {
//     this.width = width;

//     this.height = 500;
//   }
// }

class Box {
  width: number;
  height: number = 500;
  volume: number | undefined;
  _content: string | undefined;

  constructor(width: number, volume?: number, content?: string) {
    this.width = width;
    this.volume = volume;
    this._content = content;
    // this.height = 500;
  }

  calculateVolume(): void {
    if (!this.volume) {
      this.volume = this.width * this.height;
      console.log(`Объем посылки: ${this.volume}`);
    } else {
      console.log(`Объем посылки: ${this.volume}`);
    }
  }

  checkbBoxSize(transport: number): string;
  checkbBoxSize(transport: number[]): string;
  checkbBoxSize(transport: number | number[]): string {
    if (typeof transport === "number") {
      return transport >= this.width ? "ok" : "not ok";
    } else {
      return transport.some((t) => t >= this.width) ? "ok" : "not ok";
    }
  }

  get content() {
    return this._content;
  }

  set content(value) {
    this._content = `Date: ${new Date().toTimeString()},  Content: ${value}`;
  }

  async asyncContent(value: string) {
    const date = await new Date().toTimeString();
    this._content = `Date: ${date},  Content: ${value}`;

    console.log(this._content);
  }
}

const firstBox = new Box(250);
firstBox.volume = 5000;
console.log((firstBox.content = "Test"));
console.log(firstBox.content);

// class User {
//   name: string;
// }

// const ivan = new User();
// ivan.name = "Ivan";
// console.log(ivan);

// Index signatures
// class Styles {
//   [s: string]: string | ((s: string) => boolean);

//   method() {}
// }

// const style = new Style();
// style.color = "red";
// style.font = "Roboto";

class PresentBox extends Box {
  wrap: string;
  height: number = 600;

  constructor(wrap: string, width: number) {
    super(width);
    this.wrap = wrap;
  }

  async asyncContent(value: string, text?: string) {
    const date = await new Date().toTimeString();

    if (!text) {
      super.asyncContent(value);
    } else {
      this._content = `Date: ${date},  Content: ${value}, Text: ${
        text ? text : "No text"
      }`;
    }

    console.log(this._content);

    // return this._content;
  }
}

new PresentBox("red", 250);
