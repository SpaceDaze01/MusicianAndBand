//importerar filer

import Bands from "./bands.js";
import Musicians from "./musicians.js";
import PromptSync from "prompt-sync";


const prompt = PromptSync({ sigint: true })


const bands = new Bands();
const musicians = new Musicians();


//meny med 7 val
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
      
      //lägger till band
      bands.addNewBand();
  
      break;
  
    case "2": 
      //lägger till musician
      musicians.addNewMusician();
      
     
      break;

    
    
    case "3": 
     //radera band
      deleteBand();
    
      break;
  
    
    
    
    case "4": 
      //radera musician
      deleteMusician();
      
      break;

    
    
    
    case "5":  
     
      //få de att skriva ut lista på band
      bands.printOutBands();
      
      
      break;

    
    
    
    case "6":  
      //få de att skriva ut lista på musician 
      musicians.printOutMusician();
    
      break;
    
    
    
     //avslutar programmet
    case "7": {
      console.log("You ended the program")
      run = false
    } break;
    default: {
    
    
    
  
    //användaren måste skriva in en siffra mellan 1-7
    } if (choice < 0 < 8) {
      console.log("You must choose a number between 1-7!")
      run = true
    } break;
      




  }

  //funktion för att radera band
  function deleteBand() {
    savingBands.printOutBand();

    const toDelete = prompt("Which band do you want to delete? ");

    if (Number(toDelete).toString() === NaN) {

      console.log("You must write a number!")
    }
    if (toDelete <= savingBands.getLength() || toDelete >= 1) {
      savingBands.removeBand(Number(toDelete) - 1);
    } else {
      console.log(`The number must be between 1 and ${savingBands.getLength()}`);
    }
  }

  //funktion för att radera musician
  function deleteMusician() {
    savingMusicians.printOutMusician();

    const toDelete = prompt("Which musician do you want to delete? ");

    if (Number(toDelete).toString() === NaN) {

      console.log("You must write a number!")
    }
    if (toDelete <= savingMusicians.getLength() || toDelete >= 1) {
      savingMusicians.removeBand(Number(toDelete) - 1);
    } else {
      console.log(`The number must be between 1 and ${savingMusicians.getLength()}`);
    }
  }

}



