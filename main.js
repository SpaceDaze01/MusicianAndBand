//importerar filer

import Band from "./band.js";
import Musician from "./musician.js";
import Bands from "./bands.js";
import Musicians from "./musicians.js";
import PromptSync from "prompt-sync";


const prompt = PromptSync({ sigint: true })


const band = new Band();
const musician = new Musician();
const bands = new Bands();
const musicians = new Musicians();



let run = true

while (run) {
  console.log(`Menu
1.Add new band
2.Add new musician
3.Delete band
4.Delete musician
5.Show all bands
6.Show all musicians
7.Quit
  
Choose a number between 1-7
Choice - `);
   const choice = prompt().trim().toUpperCase()


  switch (choice) {


    case "1":
      
      const newBandName = prompt("What's the name of the band? ")
      band.bandName = newBandName;
    
      const newYear = prompt("What year was the band formed? ")
      band.year = newYear;

      const newSeparation = prompt("Did the band separate? yes/no: ")
      band.separation = newSeparation;

      const newMembers = prompt("What are the names of the members? ")
      band.members = newMembers;

      const newInstruments = prompt("What instruments do they play? ")
      band.instruments = newInstruments;

      const oldMembers = prompt("What's the name of the members that were a part of the band before? ")
      band.earlierMembers = oldMembers;
  

      


      break;
  
    case "2": 
      

      const newName = prompt("What's the name of the musician? ")
      musician.theName = newName;

      const newAge = prompt("How old are they? ")
      musician.age = newAge;

      const whatBand = prompt("Which band are they a part of? ")
      musician.inBand = whatBand;

      const oldMemberOf = prompt("What bands were they a part of before? ")
      musician.bandBefore = oldMemberOf;
    
      break;

    
    
    
    case "3": 

      deleteBand();
    
      break;
  
    
    
    
    case "4": 

    
      
      break;

    
    
    
    case "5":  
     
      
      const savingBands = new Bands(bands.savingbands[0]);
      console.log(savingBands[0])
      
      break;

    
    
    
    case "6":  
      
    
      break;
    
    
    
  
    case "7": {
      console.log("You ended the program")
      run = false
    } break;
    default: {
    
    
    
  
  
    } if (choice < 0 < 8) {
      console.log("You must choose a number between 1-7!")
      run = true
    } break;
      




  }


  function deleteBand() {
    savingBands.printOutBand();

    const toDelete = prompt("Which band do you want to delete? ");

    if (Number(toDelete).toString() === NaN) {

      console.log("You must write a number!")
    }
    if (toDelete <= savingBands.getLength() && toDelete >= 1) {
      savingBands.removeBand(Number(toDelete) - 1);
    } else {
      console.log(`The number must be between 1 and ${savingBands.getLength()}`);
    }
  }

  
  

}



