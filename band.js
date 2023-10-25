export default class Band {

  bandName;
  year;
  separation;
  members;
  instruments;
  earlierMembers;


  constructor(bandName, year, separation, members = [], instruments = [], earlierMembers = []) {
    this.bandName = bandName;
    this.year = year;
    this.separation = separation;
    this.members = members;
    this.instruments = instruments;
    this.earlierMembers = earlierMembers;

  }

  get bandName() {
    return this.bandName;
  }

  get year() {
    return this.year;
  }

  get separation() {
    return this.separation;
  }

  get members() {
    return this.members;
  }

  get instruments() {
    return this.instruments;
  }

  get earlierMembers() {
    return this.earlierMembers;
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







  



