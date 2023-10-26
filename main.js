//importera in filer 


import Bands from "./bands.js";
import Musicians from "./musicians.js";
import PromptSync from "prompt-sync";
import Members from "./members.js";
import Instruments from "./members.js";
import EarlierMembers from "./members.js";
import fs from "fs";


const prompt = PromptSync({ sigint: true })
const savingBands = JSON.parse(fs.readFileSync("savebands.json"));
const saveMusicians = JSON.parse(fs.readFileSync("savemusicians.json"));

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


    case "1": {

      //lägger till band
      console.clear();
      createOrEditBand();
    } break;

    case "2": {

      //lägger till musician
      console.clear();
      createOrEditMusician();
    } break;



    case "3": {
      console.clear();
      deleteBand();
     //funktion för att radera band
      function deleteBand() {
        bands.printOutBandsRawInfo;

        const toDelete = prompt("Which band do you want to delete? ");

        if (Number(toDelete).toString() === NaN) {

          console.log("You must write a number!")
        }
        if (toDelete <= bands.getBandLength() || toDelete >= 1) {
          bands.removeBand(Number(toDelete) - 1);
        } else {
          console.log(`The number must be between 1 and ${bands.getBandLength()}`);
        }
      }
    } break;




    case "4": {
      console.clear();
      deleteMusician();
      //funktion för att radera musician
      function deleteMusician() {
        musicians.printOutMusician();

        const toDelete = prompt("Which musician do you want to delete? ");

        if (Number(toDelete).toString() === NaN) {

          console.log("You must write a number!")
        }
        if (toDelete <= musicians.getMusicianLength() || toDelete >= 1) {
          musicians.removeMusician(Number(toDelete) - 1);
        } else {
          console.log(`The number must be between 1 and ${musicians.getMusicianLength()}`);
        }
      }
    } break;




    case "5": {

      //få de att skriva ut lista på band
      console.clear();
      bands.printOutBandsRawInfo();
    } break;
      



    case "6": {
      //få de att skriva ut lista på musician 
      console.clear()
      musicians.printOutMusiciansRawInfo();
    } break;



    //avslutar programmet
    case "7": {
      console.log("You ended the program")
      run = false
    } break;
    default:




      //användaren måste skriva in en siffra mellan 1-7
      if (choice < 0 < 8) {
        console.log("You must choose a number between 1-7!")
        run = true
      } break;

  }




}

function createOrEditBand(index = -1) {


  let running = true;
  while (running) {

    
  let bandName = "";
  let year = "";
  let separation = "";
  let members = [];
  let instruments = [];
  let earlierMembers = []
  let menuText = "Menu - create band";


  if (index >= 0) {
    menuText = "Menu - edit band";
    bandName = savingBands[index].bandName
    year = savingBands[index].year
    separation = savingBands[index].separation
    members = savingBands[index].members
    instruments = savingBands[index].instruments
    earlierMembers = savingBands[index].earlierMembers
  }

  






  console.log(`
    
    1.Band name       -> ${bands.bandName}
    2.Year            -> ${bands.year}
    3.Separation      -> ${bands.separation}
    4.Members         -> ${bands.members}
    5.Instruments     -> ${bands.instruments}
    6.Earlier members -> ${bands.earlierMembers}

    S - save
    B - go back to menu
    `);

  const choices = prompt().trim().toUpperCase()


  switch (choices) {
    case "1": {
      let run = true
      while (run) {
        bands.bandName = prompt("What's the name of the band? ");
        console.clear()
        if (bands.bandName.length >= 1) {
          bands.bandName;
          run = false
          console.clear()
        } else {
          console.clear()
          console.log("You didn't write anything!")

        }
      } break;
    }


    case "2": {
      let run = true
      while (run) {
        bands.year = prompt("What year was the band formed? ");
        console.clear()
        if (bands.year.length === 4) {
          bands.year;
          run = false
          console.clear()
        } else if (bands.year.length < 4) {
          console.clear()
          console.log("You must write 4 numbers!")
        } else if (isNaN(bands.year)) {
          console.clear()
          console.log("You must write numbers!")

        }
      } break;
    }

    case "3": {
      let run = true
      while (run) {
        bands.separation = prompt("Separation, yes/no: ");
        console.clear()
        if (bands.separation === "yes") {
          bands.separation;
          run = false
          console.clear()
        } else if (bands.separation === "no") {
          bands.separation;
          run = false
          console.clear()
        } else {
          console.clear()
          console.log("You must answer yes or no")

        }
      } break;
    }


    case "4":
      console.clear()
      members = theBandMembers(members);
      break;

    case "5":
      console.clear()
      instruments = bandInstruments(instruments);
      break;

    case "6":
      console.clear()
      earlierMembers = earlierMembersInBand(earlierMembers);
      break;

    case "S":



      if (createOrEditBand.index >= 0) {
        bands.savingBands[index].bandName = bandName;
        bands.savingBands[index].year = year;
        bands.savingBands[index].separation = separation;
        bands.savingBands[index].members = members;
        bands.savingBands[index].instruments = instruments;
        bands.savingBands[index].earlierMembers = earlierMembers;
      } else {
        bands.savingBands.push(new Bands(bands.addNewBand()));
      }
      bands.updateJson;
      running = false;
      break;


    case "B":
      running = false;
      console.clear()
      break;
    default:
      console.clear();
      console.log("You must choose between 1-6, S or B");
      break;
  }
}
console.clear();
  

}










function theBandMembers(tempMembers = []) {

  let members;

  if (tempMembers.length > 0) {
    members = new Members(tempMembers);
  } else {
    members = new Members();
  }

  console.log("Before: ", members.list);
  let run = true
  while (run) {
    if (members.length > 0) {
      console.log("Menu - edit band member");
    } else {
      console.log("Menu - create band member")
    }
    members.printList();
    console.log(`
    A - add new member
    G - go back
    `);
    const choice = prompt("-> ").trim().toUpperCase()

    if (choice === "A") {
      console.log("Write in the new band member, between 1 - 20 symbols");
      members = (prompt("Name of member: ").trim())
      console.clear();
    } else if (choice === "G") {
      run = false;
    } else if (Number(choice) !== NaN) {
      console.clear();
      if (Number(choice) > members.listLength()) {
        console.log(`There is no member with index ${Number(choice)}`)
      } else {
        members.pickMember(Number(choice) - 1);
      }
    } else {
      console.clear();
      if (members.listLength() === 0) {
        console.log("You must choose between A or G");
      } else if (members.listLength() === 1) {
        console.log("You must choose between 1, A or G");
      } else {
        console.log(`You must choose between 1 - ${members.listLength()}, A or G`);
      }
    }

  }
  console.clear();

  console.log("After: ", members.list);
  members.listOfPickedMembers();

}



function bandInstruments(tempInstruments = []) {

  let instruments;

  if (tempInstruments.length > 0) {
    instruments = new Instruments(tempInstruments);
  } else {
    instruments = new Instruments();
  }
  

  console.log("Before: ", instruments.list);
  let run = true
  while (run) {
    if (instruments.length > 0) {
      console.log("Menu - edit band instrument");
    } else {
      console.log("Menu - create band instrument")
    }
    instruments;
    console.log(`
    A - add new instrument
    G - go back
    `);
    const choice = prompt("-> ").trim().toUpperCase()

    if (choice === "A") {
      console.log("Write in the new band instrument, between 1 - 20 symbols");
      instruments = (prompt("Name of instrument: ").trim())
      console.clear();
    } else if (choice === "G") {
      run = false;
    } else if (Number(choice) !== NaN) {
      console.clear();
      if (Number(choice) > instruments.getBandLength()) {
        console.log(`There is no instrument with index ${Number(choice)}`)
      } else {
        instruments.pickMember(Number(choice) - 1);
      }
    } else {
      console.clear();
      if (instruments.listLength() === 0) {
        console.log("You must choose between A or G");
      } else if (instruments.listLength() === 1) {
        console.log("You must choose between 1, A or G");
      } else {
        console.log(`You must choose between 1 - ${instruments.listLength()}, A or G`);
      }
    }

  }
  console.clear();

  console.log("After: ", instruments.list);
  instruments.listOfPickedInstruments();

}




function earlierMembersInBand(tempEarlierMembers = []) {

  let earlierMembers;

  if (tempEarlierMembers.length > 0) {
    earlierMembers = new EarlierMembers(tempEarlierMembers);
  } else {
    earlierMembers = new EarlierMembers();
  }

  console.log("Before: ", earlierMembers.list);
  let run = true
  while (run) {
    if (earlierMembers.length > 0) {
      console.log("Menu - edit old band member");
    } else {
      console.log("Menu - create old band member")
    }
    earlierMembers;
    console.log(`
    A - add earlier member
    G - go back
    `);
    const choice = prompt("-> ").trim().toUpperCase()

    if (choice === "A") {
      console.log("Write in the earlier band member, between 1 - 20 symbols");
      earlierMembers = (prompt("Name of old member: ").trim())
      console.clear();
    } else if (choice === "G") {
      run = false;
    } else if (Number(choice) !== NaN) {
      console.clear();
      if (Number(choice) > earlierMembers.listLength()) {
        console.log(`There is no member with index ${Number(choice)}`)
      } else {
        earlierMembers.pickMember(Number(choice) - 1);
      }
    } else {
      console.clear();
      if (earlierMembers.listLength() === 0) {
        console.log("You must choose between A or G");
      } else if (earlierMembers.listLength() === 1) {
        console.log("You must choose between 1, A or G");
      } else {
        console.log(`You must choose between 1 - ${earlierMembers.listLength()}, A or G`);
      }
    }

  }
  console.clear();

  console.log("After: ", earlierMembers.list);
  earlierMembers.listOfPickedOldMembers();

}





//skapa eller redigera musician
function createOrEditMusician(index = -1) {

  let running = true;
  while (running) {


  let theName = "";
  let age = "";
  let inBand = "";
  let bandBefore = "";
  let instrument = [];
  let menuText = "Menu - create musician";


  if (index >= 0) {
    menuText = "Menu - edit musician";
    theName = saveMusicians[index].theName
    age = saveMusicians[index].age
    inBand = saveMusicians[index].inBand
    bandBefore = saveMusicians[index].bandBefore
    instrument = saveMusicians[index].instrument
  }

  


  console.log(`
    
    1.Musician name   -> ${musicians.theName}
    2.Age             -> ${musicians.age}
    3.In band         -> ${musicians.inBand}
    4.Band before     -> ${musicians.bandBefore}
    5.Instrument      -> ${musicians.instrument}
    
    S - save
    B - go back to menu
    `);

  const choices = prompt().trim().toUpperCase()


  switch (choices) {

    case "1": {
      let run = true
      while (run) {
        musicians.theName = prompt("What's the name of the musician? ");
        console.clear()
        if (musicians.theName.length >= 1) {
          musicians.theName;
          run = false
          console.clear()
        } else {
          console.clear()
          console.log("You didn't write anything!")
        }
      } break;
    }




    case "2": {
      let run = true
      while (run) {
        musicians.age = prompt("Which date were they born? DD-MM-YY: ");
        console.clear()
        if (musicians.age.length === 6) {
          musicians.age;
          run = false
          console.clear()
        } else if (musicians.age < 6) {
          console.clear()
          console.log("You need to write 6 numbers!")
        } else {
          console.clear()
          console.log("You didn't write anything!")
        }
      } break;
    }



    case "3": {
      let run = true
      while (run) {
        musicians.inBand = prompt("Which band are they a part of? ");
        console.clear()
        if (musicians.inBand.length >= 1) {
          musicians.inBand;
          run = false
        } else {
          console.log("You didn't write anything!")
        }
      }

    }

      break;

    case "4": {
      let run = true
      while (run) {
        musicians.bandBefore = prompt("Were they a part of another band before? If yes, Which band? ");
        console.clear()
        if (musicians.bandBefore.length >= 1) {
          musicians.bandBefore;
          run = false
        } else {
          console.log("You didn't write anything!")
        }
      }

    }

      break;

    case "5": {
      console.clear()
      musicians.instrument = instrumentMusician(musicians.instruments);
      break;
    }



    case "S":

      if (createOrEditMusician.index >= 0) {
        musicians.savingMusicians[index].theName = theName;
        musicians.savingMusicians[index].age = age;
        musicians.savingMusicians[index].inBand = inBand;
        musicians.savingMusicians[index].bandBefore = bandBefore;
        musicians.savingMusicians[index].instrument = instrument;
      } else {
        musicians.saveMusicians.push(new Musicians(musicians.addNewMusician()));
      }
      musicians.updateJSON;
      running = false;
      break;


    case "B":
      running = false;
      console.clear()
      break;
    default:
      console.clear();
      console.log("You must choose between 1-5, S or B");
      break;
  
  }
  }
}


function instrumentMusician(tempInstrument = []) {

  let instrument;


  if (tempInstrument.length > 0) {
    instrument = new EarlierMembers(tempInstrument);
  } else {
    instrument = new EarlierMembers();
  }


  console.log("Before: ", instrument.list);
  let run = true
  while (run) {
    if (instrument.length > 0) {
      console.log("Menu - edit instrument of musician");
    } else {
      console.log("Menu - create instrument for musician")
    }
    instrument;
    console.log(`
    A - add instrument for musician
    G - go back
    `);
    const choice = prompt("-> ").trim().toUpperCase()

    if (choice === "A") {
      console.log("Write in the new instrument, between 1 - 20 symbols");
      instrument = (prompt("Name of instrument: ").trim())
      console.clear();
    } else if (choice === "G") {
      run = false;
    } else if (Number(choice) !== NaN) {
      console.clear();
      if (Number(choice) > instrument.listLength()) {
        console.log(`There is no instrument with index ${Number(choice)}`)
      } else {
        instrument.pickMember(Number(choice) - 1);
      }
    } else {
      console.clear();
      if (instrument.listLength() === 0) {
        console.log("You must choose between A or G");
      } else if (instrument.listLength() === 1) {
        console.log("You must choose between 1, A or G");
      } else {
        console.log(`You must choose between 1 - ${instrument.listLength()}, A or G`);
      }
    }

  }
  console.clear();

  console.log("After: ", instrument.list);
  instrument;

}


