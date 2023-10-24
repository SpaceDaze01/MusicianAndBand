




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




 

