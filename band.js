



export default class Band {

  bandName;
  year;
  separation;
  members;
  instruments;
  earlierMembers;
  

  constructor(bandName, year, separation, members = [], instruments = [], earlierMembers = []) {
    this._bandName = bandName;
    this._year = year;
    this._separation = separation; 
    this._members = members; 
    this._instruments = instruments; 
    this._earlierMembers = earlierMembers; 

  }
   
  

  
 


  bandInfo() {
    return {
      "bandName": this.bandName,
      "year": this.year,
      "separation": this.separation,
      "members": this.members,
      "instruments": this.instruments,
      "earlierMembers": this.earlierMembers
    };
    


  }

   
  

}


class Members {


  constructor() {
    this.memberBand = new Band();
  }
  theMember() {
    this.memberBand.members();
  }


}


class Instruments {

  constructor() {
    this.instrumentBand = new Band();
  }
  bandInstrument() {
    this.instrumentBand.instruments();
  }
}


class EarlierMembers {

  constructor() {
    this.earlierMembersBand = new Band();
  }
  EarlyMember() {
  this.earlierMembersBand.earlierMembers();
  }
}




  



