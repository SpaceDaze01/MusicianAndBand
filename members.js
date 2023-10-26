import fs from "fs";

export default class Members {
  orginList = []
  listM = [];

  constructor(members = []) {
    this.orginList = this.loadMembers();
    this.list = this.loadMembers();

    console.log("Before - ", this.list);
    if (members.length > 0) {
      this.setMembers(members);
    }
    console.log("After - ", this.list);
  }

  loadMembers() {
    const data = JSON.parse(fs.readFileSync("./savebands.json"));
    const tempList = [];

    for (let i = 0; i < data.length; i++) {
      tempList.push(new Member(data[i].name, data[i].picked));
    }

    return tempList;
  }

  setMembers(members) {
    for (let i = 0; i < members.length; i++) {
      const index = this.orginList.findIndex(element => element.name === members[i]);
      console.log("Index - ", index);
      if (index >= 0) {
        this.pickMember(index);
      }
    }
  }

  addMembersToList(newMember) {
    if (newMember.length < 2 || newMember.length > 20) {
      console.log("You must write between 2-20 symbols!");
    } else if (this.orginList.includes(newMember)) {
      console.log(`${newMember} already exists!`);
    } else {
      this.orginList.push(new Hobbie(newMember));
      this.updateFile()
    }
  }

  printList() {
    for (let i = 0; i < this.list.length; i++) {
      console.log(`${i + 1}. ${this.list[i].name} - ${this.list[i].picked}`);
    }
  }

  pickMember(index) {
    this.list[index].picked = !this.list[index].picked;
  }

  listLength() {
    return this.list.length;
  }

  listOfPickedMembers() {
    const templist = [];

    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].picked) {
        templist.push(this.list[i].name)
      }
    }

    return templist;
  }

  updateFile() {
    fs.writeFileSync("./savebands.json", JSON.stringify(this.orginList, null, 2))
  }
}

class Member {

  name;
  picked;

  constructor(name, picked = false) {
    this.name = name;
    this.picked = picked;
  }
}







export class instruments {

  //instruments 
  addInstrumentsToList(newInstrument) {
    if (newInstrument.length < 3 || newInstrument.length > 25) {
      console.log("You must write between 2-20 symbols!");
    } else if (this.savingBands.includes(newInstrument)) {
      console.log(`${newInstrument} already exists!`);
    } else {
      this.savingBands.push(new Instrument(newInstrument));
      this.updateFile()
    }
  }


  setInstruments(instruments) {
    for (let i = 0; i < instruments.length; i++) {
      const index = this.savingBands.findIndex(element => element.name === instruments[i]);
      console.log("Index - ", index);
      if (index >= 0) {
        this.pickInstruments(index);
      }
    }
  }

  printList() {
    for (let i = 0; i < this.list.length; i++) {
      console.log(`${i + 1}. ${this.list[i].name} - ${this.list[i].picked}`);
    }
  }


  pickInstruments(index) {
    this.list[index].picked = !this.list[index].picked;
  }


  listInstrumentsLength() {
    return this.list.length;
  }

  listOfPickedInstruments() {
    const templist = [];

    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].picked) {
        templist.push(this.list[i].name)
      }
    }
    return templist;
  } //slut instruments
}



class Instrument {

  name;
  picked;

  constructor(name, picked = false) {
    this.name = name;
    this.picked = picked;
  }
}





export class EarlierMembers {
//earliermembers
addOldMemberToList(oldMember) {
  if (oldMember.length < 3 || oldMember.length > 25) {
    console.log("You must write between 2-20 symbols!");
  } else if (this.savingBands.includes(oldMember)) {
    console.log(`${oldMember} already exists!`);
  } else {
    this.savingBands.push(new EarlierMember(oldMember));
    this.updateFile()
  }
}


setOldMember(earlierMembers) {
  for (let i = 0; i < earlierMembers.length; i++) {
    const index = this.savingBands.findIndex(element => element.name === earlierMembers[i]);
    console.log("Index - ", index);
    if (index >= 0) {
      this.pickOldMember(index);
    }
  }
}

printList() {
  for (let i = 0; i < this.list.length; i++) {
    console.log(`${i + 1}. ${this.list[i].name} - ${this.list[i].picked}`);
  }
}


pickOldMember(index) {
  this.list[index].picked = !this.list[index].picked;
}


listOldMemberLength() {
  return this.list.length;
}

listOfPickedOldMembers() {
  const templist = [];

  for (let i = 0; i < this.list.length; i++) {
    if (this.list[i].picked) {
      templist.push(this.list[i].name)
    }
  }
  return templist;
} //slut på earliermember

}


class EarlierMember {

  name;
  picked;

  constructor(name, picked = false) {
    this.name = name;
    this.picked = picked;
  }
}