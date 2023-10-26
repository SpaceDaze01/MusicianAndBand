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

    fs.writeFileSync('./savebands.json', JSON.stringify(temporaryBandList, null, 2), (error) => {
      if (error) throw error;
      console.log("data has been written to file")
    });


  }

  //läser in alla band
  getBandInfo() {
    const jsonString = fs.readFileSync("./savebands.json");
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

  
}











