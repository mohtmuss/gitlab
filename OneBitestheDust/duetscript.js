const lyrics = [
    { time: 0, text: "Are you ready, hey, are you ready for this?", singer: "freddie" },
    { time: 5, text: "Are you hanging on the edge of your seat?", singer: "freddie" },
    { time: 10, text: "I need a break beat, uh", singer: "others" },
    { time: 15, text: "Are you ready, hey, are you ready for this?", singer: "freddie" },
    { time: 20, text: "Are you hanging on the edge of your seat?", singer: "freddie" },
    { time: 25, text: "I need a break beat, uh", singer: "others" },
    { time: 30, text: "Are you ready, hey, are you ready for this?", singer: "freddie" },
    { time: 34, text: "Are you hanging on the edge of your seat?", singer: "freddie" },
    { time: 39, text: "I need a break beat, uh", singer: "others" },
    { time: 44, text: "Outta the doorway the bullets rip", singer: "freddie" },
    { time: 49, text: "Repeating to the sound of the beat, hey", singer: "freddie" },
    { time: 50, text: "Yo, a for the kids in the club that's ready to get bugged", singer: "others" },
    { time: 55, text: "Another one bites the dust", singer: "freddie" },
    { time: 60, text: "And for the thugs with the burners that wanna blast off", singer: "others" },
    { time: 65, text: "Another one bites the dust", singer: "freddie" },
    { time: 70, text: "And for the kids on the blocks, shootin' at the crooked cops—blaow!", singer: "others" },
    { time: 75, text: "Another one bites the dust", singer: "freddie" },
    { time: 80, text: "And another one gone", singer: "freddie" },
    { time: 85, text: "And another one gone", singer: "freddie" },
    { time: 90, text: "Another one bites the dust", singer: "freddie" },
    { time: 95, text: "Wyclef", singer: "others" },
    { time: 100, text: "And another one gone", singer: "freddie" },
    { time: 105, text: "Dirty Cash", singer: "others" },
    { time: 110, text: "Another one bites the dust", singer: "freddie" },
    { time: 115, text: "Steve walks wearily down the street", singer: "freddie" },
    { time: 120, text: "With the brim pulled way down low", singer: "freddie" },
    { time: 125, text: "Some cat up in Brooklyn just got robbed with a Kangol", singer: "others" },
    { time: 130, text: "Are you ready, hey, are you ready for this?", singer: "freddie" },
    { time: 135, text: "Are you hanging on the edge of your seat?", singer: "freddie" },
    { time: 140, text: "Out of the doorway, the bullets rip", singer: "freddie" },
    { time: 145, text: "Repeating to the sound of the beat, hey", singer: "freddie" },
    { time: 150, text: "My man got shot, and the block got hot", singer: "others" },
    { time: 155, text: "Another one bites the dust", singer: "freddie" },
    { time: 160, text: "Yo, hey I hear more shots, this is like Fort Knox, kid", singer: "others" },
    { time: 165, text: "Another one bites the dust", singer: "freddie" },
    { time: 170, text: "Yo, hold your breath", singer: "others" },
    { time: 175, text: "And another one gone", singer: "freddie" },
    { time: 180, text: "Hold your breath", singer: "others" },
    { time: 185, text: "And another one gone", singer: "freddie" },
    { time: 190, text: "Hold your breath", singer: "others" },
    { time: 195, text: "Another one bites the dust", singer: "freddie" }
  ];
  
  let currentLyricIndex = 0;
  const audio = document.getElementById("audio");
  const lyricFreddie = document.getElementById("lyric-freddie");
  const lyricOthers = document.getElementById("lyric-others");
  
  audio.addEventListener("play", () => {
    setInterval(displayLyrics, 100);
  });
  
  function displayLyrics() {
    const currentTime = audio.currentTime;
    if (currentLyricIndex < lyrics.length && currentTime >= lyrics[currentLyricIndex].time) {
      if (lyrics[currentLyricIndex].singer === "freddie") {
        lyricFreddie.textContent = lyrics[currentLyricIndex].text;
      } else {
        lyricOthers.textContent = lyrics[currentLyricIndex].text;
      }
      currentLyricIndex++;
    }
  }
  