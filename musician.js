




export default class Musician {

  theName;
  age;
  inBand;
  bandBefore;
  instrument;


  constructor(theName, age, inBand, bandBefore, instrument = []) {
    this._theName = theName;
    this._age = age; // ha med år, månad datum
    this._inBand = inBand;
    this._bandBefore = bandBefore;
    this._instrument = instrument;
  }


  get theName() {
    return this.theName;
  }

  get age() {
    return this.age;
  }

  get inBand() {
    return this.inBand;
  }

  get bandbefore() {
    return this.bandBefore;
  }

  get instruments() {
    return this.instruments;
  }

  infoMusician() {
    return {
      "theName": this.theName,
      "age": this.age,
      "inBand": this.inBand,
      "bandBefore": this.bandBefore,
      "instrument": this.instrument
    };
  }



}




