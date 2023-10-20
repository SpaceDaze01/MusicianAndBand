import fs from "fs";
import Band from "./band.js";







export default class Bands {

  #savingBands = [] //lista för band


  constructor() {
    this.#getBandInfo();
  }
  
  get savingbands() {
    return this.#savingBands;
  }




  #updateJson() {
    let temporaryBandList = [];

    for (let index = 0; index < this.#savingBands.length; index++) {
      temporaryBandList.push(this.#savingBands[index].bandInfo());

    }

    fs.writeFileSync('./saveBands.json', JSON.stringify(temporaryBandList, null, 2), (error) => {
      if (error) throw error;
      console.log("data has been written to file")
    });


  }

  //läser in alla band
  #getBandInfo() {
    const jsonString = fs.readFileSync("savebands.json");
    const bandData = JSON.parse(jsonString);
    

    for (let index = 0; index < bandData.length; index++) { //test
      this.#savingBands.push(new Band(bandData[index].bandName, bandData[index].info, bandData[index].year, bandData[index].separation, bandData[index].members, bandData[index].instruments, bandData[index].earliermembers))

    }
   
    
  

  }

  printOutBand() {
    for (let index = 0; index < this.#savingBands.length; index++) {
      console.log(`${index + 1} || ${this.#savingBands[index].bandName} || ${this.#savingBands[index].year} || ${this.#savingBands[index].separation} || ${this.#savingBands[index].members} || ${this.#savingBands[index].instruments} || ${this.#savingBands[index].earliermembers}`)
      
    }
  } 


  addNewBand(bandName, year, separation, members, instruments, earlierMembers) {
    this.#savingBands.push(new Band(bandName, year, separation, members, instruments, earlierMembers));
    this.#updateJson();
 }

  
  removeBand(index) {
    this.#savingBands.splice(index, 1);
    this.#updateJson();
  }
  
  
 

  getBandLength() {
    return this.#savingBands.length;
  }

   /*
  checkBandList() {
    for (let index = 0; index < this.#savingBands.length; index++) {
      console.log(`${index + 1}`);
      
    }
  }
  */
  
}





