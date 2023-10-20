import fs from "fs";
import Musician from "./musician.js";

export default class Musicians {

  #saveMusicians = []; //lista för musician


  constructor() {
    this.#getMusicianInfo();
  }

  get saveMusician() {
    return this.#saveMusicians;
  }



  #updateJSON() {
    let temporaryMusicianList = [];

    for (let index = 0; index < this.#saveMusicians.length; index++) {
      temporaryMusicianList.push(this.#saveMusicians[index].infoMusician());

    }

    fs.writeFileSync('./saveMusicians.json', JSON.stringify(temporaryMusicianList, null, 2), (error) => {
      if (error) throw error;
      console.log("data has been written to file")
    });


  }


  //läser in alla musicians
  #getMusicianInfo() {
    const jsonString = fs.readFileSync("savebands.json");
    const musicianData = JSON.parse(jsonString);
    


    for (let index = 0; index < musicianData.length; index++) {
      this.#saveMusicians.push(new Musician(musicianData[index].theName, musicianData[index].age, musicianData[index].inBand, musicianData[index].bandbefore, musicianData[index].instrument))
    }
  }


  printOutMusician() {
    for (let index = 0; index < this.#saveMusicians.length; index++) {
      console.log(`${index + 1} || ${this.#saveMusicians[index].theName} || ${this.#saveMusicians[index].age} || ${this.#saveMusicians[index].inBand} || ${this.#saveMusicians[index].bandbefore} ||${this.#saveMusicians[index].instrument}`)
    }
  }

  
  addNewMusician(theName, age, inBand, bandBefore, instrument) {
    this.#saveMusicians.push(new Band(theName, age, inBand, bandBefore, instrument));
    this.#updateJSON();

  }


  removeMusician(index) {
    this.#saveMusicians.splice(index, 1);
    this.#updateJSON();
  }


  getMusicianLength() {
    return this.#saveMusicians.length;
  }

}




