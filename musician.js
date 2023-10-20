




export default class Musician {
  
  
    
  
  constructor(theName, age, inBand, bandBefore, instrument) {
    this._theName = theName;
    this._age = age;
    this._inBand = inBand;
    this._bandBefore = bandBefore;
    this._instrument = instrument;
  }

  get theName() {
    return this._theName;
  }
  
  
  get age() {
    return this._age;
  }


  get inBand() {
    return this._inBand;
  }


  get bandBefore() {
    return this._bandBefore;
  }


  get instrument() {
    return this._instrument;
  }

  set theName(newName) {
    if (newName.length >= 1) {  
      this._theName = newName;
    } else {
      console.log("You didn't write anything!")
    }

  }

  
  set age(newAge) {
    if (newAge.length >= 1) {
      this._age = newAge;
    } else {
      console.log("You didn't write anything!")
    };
  }


  set inBand(newBand) {
    if (newBand.length >= 1) {
      this._inBand = newBand;
    } else {
      console.log("You didn't write anything!")
    }
  }


  set bandBefore(oldBand) {
    if (oldBand.length >= 1) {
      this._bandBefore = oldBand;
    } else {
      console.log("You didn't write anything!")
    }
  }


  set instrument(theirInstrument) {
    if (theirInstrument.length >= 1) {
      this._instrument = theirInstrument;
    } else {
      console.log("You didn't write anything!")
    }
  }



  infoMusician() {
    return {
      "theName": this.theName,
      "someInfo": this.someInfo,
      "age": this.age,
      "inBand": this.inBand,
      "bandBefore": this.bandBefore,
      "instrument": this.instrument
    };
  }



}




 

