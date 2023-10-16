//importerar filer

import Band from "./band.js";
import Musician from "./musician.js";
import PromptSync from "prompt-sync";


const prompt = PromptSync({ sigint: true })


let run = true

while (run) {
  console.log(`Menu
1.Add new band
2.Add new musician
3.Delete band
4.Delete musician
5.Quit
  
Choose a number from 1-5
Choice - `);
   const choice = prompt().trim()


  switch (choice) {


    case "1": 
      const band = new Band();
      
      const newBandName = prompt("What's the name of the band? ")
      band.bandName = newBandName;

      const newInfo = prompt("What country is the band from? ")
      band.info = newInfo;

      const newYear = prompt("What year was the band formed? ")
      band.year = newYear;

      const newSeparation = prompt("Did the band seperate? yes/no: ")
      band.separation = newSeparation;

      break;
  
  
    case "2": 
      const musician = new Musician();

      const newName = prompt("What's the name of the musician? ")
      musician.theName = newName;

      const newInformation = prompt("What country is the musician from? ")
      musician.someInfo = newInformation;


    
    
      break;

    case "3": 

    
    
      break;
  
    case "4": 

    
    
      break;
    
  
    case "5": {
      console.log("You ended the program")
      run = false
    } break;
    default: {
    
    
    
  
  
    } if (choice < 0 < 6) {
      console.log("Choose a number between 1-5!")
      run = true
    } break;
      

}
}