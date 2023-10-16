
export default class Musician {
  
    
  
  constructor(theName, someInfo, age) {
    this.theName = theName;
    this._someInfo = someInfo;
    this._age = age;
    this.inBand = "Slipknot"
    this.bandBefore = "Junk Beer Kidnap Band"
    this.instrument = "guitar"
  }

  theName() {
    return this.theName;
  }
  
  get someInfo() {
    return this._someInfo;
  }

  set someInfo(newInformation) {
    if (newInformation.length >= 4) {
      this._someInfo = newInformation;
    } else {
      console.log("You must write at least 4 letters!")
    }
      
      
  }

}


 

