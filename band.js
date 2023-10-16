

//få if alternativen att loopa om de inte stämmer med inmatningen som förväntas

  let run = true


export default class Band {

  

  constructor(bandName, info, year, separation) {
    this.bandName = bandName;
    this._info = info;
    this._year = year;
    this._separation = separation; //true or false statement "yes or no"
    this.members = members; // hitta en metod som gör att man kan lägga till flera medlemmar på en och samma gång 
    this.earlierMembers = earlierMembers;
  }

  
  

  bandName() {
    return this.bandName;

  }


  get info() {
    return this._info;
  }


  get year() {
    return this._year;
  }


  get separation() {
    return this._separation;
  }


    
  set info(newInfo) {
    if (newInfo.length >= 4) {
      this._info = newInfo;
    } else {
      console.log("You must write at least 4 letters!")
      
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

}

  





