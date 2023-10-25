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


