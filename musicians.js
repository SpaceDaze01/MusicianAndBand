import fs from "fs";
import Musician from "./musician";

export default class Musicians {

  #saveMusicians = []; //lista för musician


  constructor() {
    this.#getMusicianInfo();
  }

  get saveMusician() {
    return this.#saveMusicians;
  }

  //läser in alla musicians
  #getMusicianInfo() {
    const musicianData = JSON.parse(jsonString);
    const jsonString = fs.readFileSync("savebands.json");


    for (let index = 0; index < musicianData.length; index++) {
      this.#saveMusicians.push(new Musician(musicianData[index].theName, musicianData[index].age, musicianData[index].inBand, musicianData[index].bandbefore, musicianData[index].instrument))
    }
  }

}




