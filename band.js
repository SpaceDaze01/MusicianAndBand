



export default class Band {

  
  

  constructor(bandName, year, separation, members, instruments, earlierMembers) {
    this._bandName = bandName;
    this._year = year;
    this._separation = separation; 
    this._members = members; 
    this._instruments = instruments; 
    this._earlierMembers = earlierMembers; 


  }

  

  
  get bandName() {
    return this.bandName;

  }

  get year() {
    return this._year;
  }


  get separation() {
    return this._separation;
  }

  get members() {
    return this._members;
  }
   

  get instruments() {
    return this._instruments;
  }


  get earlierMembers() {
    return this._earlierMembers;
  }


  
  set bandName(theirName) {
  if (theirName.length >= 1) {
      this._bandName = theirName;
    } else {
      console.log("You didn't write anything!")
      
    }
  }
  
  
     
  set year(newYear) {
    if (newYear.length === 4) {
      this._year = newYear;
    } else if (newYear.length < 4) {
      console.log("You must write 4 numbers!")
    } else if (isNaN(newYear)) {
      console.log("You must write numbers!")

    }
  }


  set separation(newSeparation) {
    if (newSeparation === "yes") {
      return true
    } else if (newSeparation === "no") {
      return false
    } else {
      console.log("You must answer yes or no")
    }
  }

  
  set members(newMembers) {   
    if (newMembers.length >= 1) {
      this._members = newMembers;
    } else {
      console.log("You didn't write anything!")
    }
  }
  

  set instruments(newInstruments) {   
    if (newInstruments.length >= 1) {
      this._instrument = newInstruments;
    } else {
      console.log("You didn't write anything!")
    }
  }
      
  
  set earlierMembers(oldMembers) {
    if (oldMembers.length >= 1) {
      this._earlierMembers = oldMembers;
    } else {
      console.log("You didn't write anything!")
    }
  }


  bandInfo() {
    return {
      "bandName": this.bandName,
      "info": this.info,
      "year": this.year,
      "separation": this.separation,
      "members": this.members,
      "instruments": this.instruments,
      "earlierMembers": this.earlierMembers
    };
    


  }



}






  



