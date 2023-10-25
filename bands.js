import fs from "fs";
import Band from "./band.js";







export default class Bands {

  savingBands = [] //lista för band


  constructor() {
    this.getBandInfo();
  }

  get savingbands() {
    return this.savingBands;
  }




  updateJson() {
    let temporaryBandList = [];

    for (let index = 0; index < this.savingBands.length; index++) {
      temporaryBandList.push(this.savingBands[index].bandInfo());

    }

    fs.writeFileSync('./saveBands.json', JSON.stringify(temporaryBandList, null, 2), (error) => {
      if (error) throw error;
      console.log("data has been written to file")
    });


  }

  //läser in alla band
  getBandInfo() {
    const jsonString = fs.readFileSync("./saveBands.json");
    const bandData = JSON.parse(jsonString);


    for (let index = 0; index < bandData.length; index++) {
      this.savingBands.push(new Band(bandData[index].bandName, bandData[index].year, bandData[index].separation, bandData[index].members, bandData[index].instruments, bandData[index].earlierMembers))

    }




  }

  printOutBands() {
    for (let index = 0; index < this.savingBands.length; index++) {
      console.log(`${index + 1}, ${this.savingBands[index].bandName}, ${this.savingBands[index].year}, ${this.savingBands[index].separation}, ${this.savingBands[index].members}, ${this.savingBands[index].instruments}, ${this.savingBands[index].earlierMembers}`)

    }
  }

  printOutBandsRawInfo() {
    for (let index = 0; index < this.savingBands.length; index++) {
      console.log(this.savingBands[index].bandInfo())

    }
  }



  addNewBand(bandName, year, separation, members, instruments, earlierMembers) {
    this.savingBands.push(new Band(bandName, year, separation, members, instruments, earlierMembers));
    this.updateJson();

  }


  removeBand(index) {
    this.savingBands.splice(index, 1);
    this.updateJson();
  }



  addOrDeleteMember() {
    this.savingBands[index].inOrOutOfBand();
    this.updateJson();
  }


  getBandLength() {
    return this.savingBands.length;
  }

  


  //instruments 
  addInstrumentsToList(newInstrument) {
    if (newInstrument.length < 3 || newInstrument.length > 25) {
      console.log("Måste skriva in minst 3 tecken och max 25");
    } else if (this.savingBands.includes(newInstrument)) {
      console.log(`${newInstrument} finns redan.`);
    } else {
      this.savingBands.push(new Hobbie(newInstrument));
      this.updateFile()
    }
  }


  setInstruments(instruments) {
    for (let i = 0; i < instruments.length; i++) {
      const index = this.savingBands.findIndex(element => element.name === instruments[i]);
      console.log("Index - ", index);
      if (index >= 0) {
        this.pickInstruments(index);
      }
    }
  }

  printInstrumentsList() {
    for (let i = 0; i < this.list.length; i++) {
      console.log(`${i + 1}. ${this.list[i].name} - ${this.list[i].picked}`);
    }
  }


  pickInstruments(index) {
    this.list[index].picked = !this.list[index].picked;
  }


  listInstrumentsLength() {
    return this.list.length;
  }

  listOfPickedInstruments() {
    const templist = [];

    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].picked) {
        templist.push(this.list[i].name)
      }
    }
    return templist;
  } //slut instruments


  //earliermembers
  addOldMemberToList(oldMember) {
    if (oldMember.length < 3 || oldMember.length > 25) {
      console.log("Måste skriva in minst 3 tecken och max 25");
    } else if (this.savingBands.includes(oldMember)) {
      console.log(`${oldMember} finns redan.`);
    } else {
      this.savingBands.push(new Hobbie(oldMember));
      this.updateFile()
    }
  }


  setOldMember(earlierMembers) {
    for (let i = 0; i < earlierMembers.length; i++) {
      const index = this.savingBands.findIndex(element => element.name === earlierMembers[i]);
      console.log("Index - ", index);
      if (index >= 0) {
        this.pickOldMember(index);
      }
    }
  }

  printOldMemberList() {
    for (let i = 0; i < this.list.length; i++) {
      console.log(`${i + 1}. ${this.list[i].name} - ${this.list[i].picked}`);
    }
  }


  pickOldMember(index) {
    this.list[index].picked = !this.list[index].picked;
  }


  listOldMemberLength() {
    return this.list.length;
  }

  listOfPickedOldMembers() {
    const templist = [];

    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].picked) {
        templist.push(this.list[i].name)
      }
    }
    return templist;
  } //slut på earliermember

}




class Instruments {

  name;
  picked;

  constructor(name, picked = false) {
    this.name = name;
    this.picked = picked;
  }
}


class EarlierMembers {

  name;
  picked;

  constructor(name, picked = false) {
    this.name = name;
    this.picked = picked;
  }
}











