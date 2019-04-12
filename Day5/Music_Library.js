let Library = function(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
}

let Playlist = function(name) {
  this.name = name;
  this.tracks = [];
}

Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
}

Playlist.prototype.overallRating = function() {
  let aveRating = 0;
  if(this.tracks.length > 0) {
    for(let track of this.tracks) {
      aveRating += track.rating;
    }
    aveRating /= this.tracks.length;
  }
  return aveRating;
}

Playlist.prototype.duration = function() {
  let duration = 0;
  if(this.tracks.length > 0) {
    for(let track of this.tracks) {
      duration += track.length;
    }
  }
  return duration;
}

let Track = function(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

// Test
// Step 1: Create New
  // Step 1.1: Create Three New Tracks
  let track1 = new Track("Chapter 7 of Night", 4.8, 112);
  let track2 = new Track("Night Music", 4.5, 123);
  let track3 = new Track("God Father", 4.0, 98);
  // Step 1.2: Create Two New Playlists
  let playlist1 = new Playlist("Pola Favorite");
  let playlist2 = new Playlist("Ruby Favorite");
  // Step 1.３: Create a New Music Library
  let library1 = new Library("Hao Yu Studio", "Polatouche");
// Step 2: Add
  // Step 2.1: Add Tracks to Playlist
  playlist1.addTrack(track1);
  playlist1.addTrack(track2);
  playlist2.addTrack(track2);
  playlist2.addTrack(track3);
  // Step 2.2: Add Playlists to Music Library
  library1.addPlaylist(playlist1);
  library1.addPlaylist(playlist2);
// Step 3: View Library->Playlist->Track
  console.log(library1);
  console.log(playlist2);
// Step 4: View Library->Playlist->Track
  console.log(playlist2.overallRating());
  console.log(playlist2.duration());