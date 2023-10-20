import fs from "fs";
import Musician from "./musician.js";
import PromptSync from "prompt-sync";

const prompt = PromptSync({ sigint: true })


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
    const jsonString = fs.readFileSync("saveMusicians.json");
    const musicianData = JSON.parse(jsonString);
    


    for (let index = 0; index < musicianData.length; index++) {
      this.#saveMusicians.push(new Musician(musicianData[index].theName, musicianData[index].age, musicianData[index].inBand, musicianData[index].bandBefore, musicianData[index].instrument))
    }
  }


  printOutMusician() {
    for (let index = 0; index < this.#saveMusicians.length; index++) {
      console.log(`${index + 1} || ${this.#saveMusicians[index].theName} || ${this.#saveMusicians[index].age} || ${this.#saveMusicians[index].inBand} || ${this.#saveMusicians[index].bandBefore} ||${this.#saveMusicians[index].instrument}`)
    }
  }

  
  printOutMusiciansRawInfo() {
    for (let index = 0; index < this.#saveMusicians.length; index++) {
      console.log(this.#saveMusicians[index].infoMusician())

    }
  } 

  addNewMusician() {
    
    const tempMusician = new Musician();
    let run = true 

    //frågor till användaren om musician
    while (run) {
      if (tempMusician.theName = prompt("What's the name of the musician? ")) {
        run = false
      }
    }
     
    while(run) {
    if (tempMusician.age = prompt("How old are they? ")) {
        run = false 
    }
   }
   
    if (tempMusician.inBand = prompt("Which band are they a part of? ")) {
        run = false
    }
   
    

    if (tempMusician.bandBefore = prompt("What bands were they a part of before? ")) {
        run = false
    }
    
    if (tempMusician.instrument = prompt("What instruments do they play? ")) {
        run = false 
    }

   
    this.#saveMusicians.push(new Musician());
    this.#updateJSON();

  }

  


  removeMusician(index) {
    this.#saveMusicians.splice(index, 1);
    this.#updateJSON();
  }



  addOrDeleteMusicianr() {
    this.#saveMusicians[index].inOrOutMusician();
    this.#updateJSON();
  }


  getMusicianLength() {
    return this.#saveMusicians.length;
  }

}



