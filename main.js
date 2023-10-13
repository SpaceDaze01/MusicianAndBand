//import files

import Band from "./band";
import Musician from "./musiker";
import PromptSync from "prompt-sync";

const prompt = PromptSync({ sigint: true })
const saveBand = require('../../Users/luuna/Downloads/programmering javascript/inlämningsuppgift2/saveband.json');
const saveMusician = require('../../Users/luuna/Downloads/programmering javascript/inlämningsuppgift2/savemusician.json')

const band = new Band();
const musician = new Musician();



