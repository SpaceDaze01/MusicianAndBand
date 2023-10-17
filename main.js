//importerar filer


import Band from "./band.js";
import Musician from "./musician.js";
import PromptSync from "prompt-sync";


const prompt = PromptSync({ sigint: true })

const band = new Band();
const musician = new Musician();

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

      const newSeparation = prompt("Did the band seperate? yes/no: ")
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

    
    
      break;
  
    
    
    
    case "4": 

    
      
      break;

    
    
    
    case "5":  
      
      
      break;

    
    
    
    case "6":  
      
    
      break;
    
    
    
  
    case "7": {
      console.log("You ended the program")
      run = false
    } break;
    default: {
    
    
    
  
  
    } if (choice < 0 < 8) {
      console.log("Choose a number between 1-7!")
      run = true
    } break;
      

  }
}