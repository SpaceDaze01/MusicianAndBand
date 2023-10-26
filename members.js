
export default class Members {

  musicianId;
  instrument;
  joined;
  left;


  constructor(musicianId, instrument, joined, left) {

    this.musicianId = musicianId;
    this.instrument = instrument;
    this.joined = joined;
    this.left = left;
  }

}