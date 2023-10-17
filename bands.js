import fs from "fs";
import Band from "./band";


export default class Bands {

  #saveBands = [] //lista för band


  constructor() {
    this.#getBandInfo();
  }
  
  get savebands() {
    return this.#saveBands;
  }



  //läser in alla band
  #getBandInfo() {
    const bandData = JSON.parse(jsonString);
    const jsonString = fs.readFileSync("savebands.json");

    for (let index = 0; index < bandData.length; index++) {
      this.#saveBands.push(new Band(bandData[index].bandName, bandData[index].info, bandData[index].year, bandData[index].separation, bandData[index].members, bandData[index].instruments, bandData[index].earliermembers))


    }

    
  

  }

}





