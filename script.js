const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

// Song titles
const songs = ["1,000,000 TIMES feat. chelly (EGOIST) chelly (EGOIST)",
"333",
"Armand Van Helden - My My My (DJ KUBA & NEITAN Remix)",
"AURORA - Runaway",
"AURORA - Running With The Wolves",
"Bassjackers ft. Luciana - Fireflies (Official Music Video)",
"Ben Bohmer - Wall Of Strings",
"Bring Sally Up - Push Up Challenge with Timer",
"Caravan Palace - Lone Digger",
"Catiso - Zanobi",
"Cazzette - Blind Heart (Broiler Remix)",
"CAZZETTE - Sleepless ft. The High (Lyric Video)",
"Confetti - Dear God",
"Confetti - Ghost",
"Confetti - Hot",
"Confetti - Right Now",
"Confetti - When I Grow Up",
"David Guetta, Martin Garrix & Brooks - Like I Do (Lyric Video)",
"Dax - !Homicide! Freestyle [One Take Video]",
"Doja Cat - Boss B!tch (from Birds of Prey! The Album) [Official Music Video]",
"DROELOE - Homebound",
"Dropgun - Drought ft. Nevve (Official Audio)",
"Dropgun - Tomorrow Never Comes (feat. Bryan Finlay)",
"e-dubble - Be A King",
"Eminem - Mockingbird (Official Music Video)",
"Eminem - When I'm Gone (Official Music Video)",
"Every Little Thing (Bazzflow Remix Radio)",
"Florian Picasso - Final Call (Mesto & Justin Mylo Remix)",
"fools (can't help falling in love) ft. Sody & Sarcastic Sounds (Lyric Video)",
"Harano Oni 1",
"Harano Oni 2",
"Harano Oni 3",
"Harano Oni 4",
"it's different - Shadows (feat. Miss Mary) [NCS Release]",
"IZECOLD - Close (feat. Molly Ann) [Brooks Remix] ! NCS x FHM Release",
"Jay Eskar - Awakening",
"Jay Eskar - Chakra",
"Joji - Tick Tock (Official Video)",
"Josh A - YOU'RE NOT ALONE",
"korou x powfu - a friend in you",
"Lil Revive - Tell The Reaper I'm Sorry",
"Logic - Everybody (Lyrics)",
"Masked Wolf - Astronaut In The Ocean (Ozlig Remix)",
"Metrik - Gravity",
"Mike Williams - Konnichiwa (Original Mix)",
"MR BLACK & Offer Nissim - Mucho Bien (MR.BLACK Remix)",
"Nas - Shootouts (Izzamuzzic Remix)",
"Netsky - Rio",
"NF - CLOUDS",
"NF - JUST LIKE YOU (Audio)",
"NF - LOST ft. Hopsin",
"NF - THAT'S A JOKE (Audio)",
"NF - The Search",
"NF - TRUST (Audio) ft. Tech N9ne",
"NF - When I Grow Up",
"Nightcore - Senpai (Deeper version) - Lyrics",
"One Hope - the overthinker",
"Phoebe Ryan - Mine (Elephante Remix)",
"Powfu - her ocean eyes (Lyrics ! Lyric Video)",
"Purple Disco Machine, Sophie and the Giants - Hypnotized (Official Video)",
"Queen Of A Lonely Heart (feat. Lourdiz) (Dastic x Robbie Mendez Club Mix)",
"Question Mark",
"relax and take notes- soulchef (notorious b.i.g)",
"RIVERO & Triangle - WICKD (feat. Dean) [Official Audio]",
"RYLLZ - I Gotta Know",
"SHAHMEN - MARK (EMR3YGUL Remix)",
"Shahmen - Mark",
"SHAHMEN - MARK EMR3YGUL Remix INFINITY BASS #enjoybeauty",
"Shouse - Love Tonight (Radio Edit)",
"Skeleton Ave",
"Steve Aoki - Back to Earth feat. Fall Out Boy (LA Riots Remix)",
"Sub Urban - Cradles [Official Music Video]",
"Sub Urban - Freak (feat. REI AMI) [Official Music Video]",
"Sub Urban - PATCHWERK (with Two Feet) [Official Music Video]",
"The Black Eyed Peas - Let's Get It Started (Galwaro Remix)",
"The Kid LAROI, Justin Bieber - Stay (Lyrics) !Oh, I'll be fucked up if you can't be right here",
"The Truth",
"Thomas Reid x Rxseboy - are you okay! (Lyrics) feat. Powfu",
"Timmy Trumpet Freaks (Radio Edit)",
"Tujamo & Sidney Samson - Riverside (Reloaded) [Official Music Video]",
"Tujamo - Drop That Low (When I Dip) (Bass Boosted)",
"Tupac  - Changes (Dax Remix) [One Take]",
"Unknown Brain - Why Do I! (feat. Bri Tolani) [NCS Release]",
"WATEVA - Ber Zer Ker (Rob Gasser Remix) [NCS Release]",
"would look perfect",
"Yas - Empty Crown"
];

shuffle(songs);

// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);

//randomize array elements function
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/question.jpg`;
}

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

//get duration & currentTime for Time of song
function DurTime (e) {
	const {duration,currentTime} = e.srcElement;
	var sec;
	var sec_d;

	// define minutes currentTime
	let min = (currentTime==null)? 0:
	 Math.floor(currentTime/60);
	 min = min <10 ? '0'+min:min;

	// define seconds currentTime
	function get_sec (x) {
		if(Math.floor(x) >= 60){

			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec = Math.floor(x) - (60*i);
					sec = sec <10 ? '0'+sec:sec;
				}
			}
		}else{
		 	sec = Math.floor(x);
		 	sec = sec <10 ? '0'+sec:sec;
		 }
	}

	get_sec (currentTime,sec);

	// change currentTime DOM
	currTime.innerHTML = min +':'+ sec;

	// define minutes duration
	let min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	 min_d = min_d <10 ? '0'+min_d:min_d;


	 function get_sec_d (x) {
		if(Math.floor(x) >= 60){

			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}
		}else{
		 	sec_d = (isNaN(duration) === true)? '0':
		 	Math.floor(x);
		 	sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		 }
	}

	// define seconds duration

	get_sec_d (duration);

	// change duration DOM
	durTime.innerHTML = min_d +':'+ sec_d;

};

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

// Time of song
audio.addEventListener('timeupdate',DurTime);
