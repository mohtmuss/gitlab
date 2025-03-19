const lyrics = [
    { time: 0, text: "Introduction - David Byrne" },
    { time: 30, text: "I can't seem to face up to the facts" },
    { time: 35, text: "I'm tense and nervous and I can't relax" },
    { time: 40, text: "I can't sleep because my bed's on fire" },
    { time: 45, text: "Don't touch me I'm a real live wire" },
    { time: 50, text: "Psycho Killer, qu'est-ce que c'est?" },
    { time: 55, text: "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa..." },
    { time: 60, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    { time: 65, text: "Ay-ya-ya-ya-ya-ya, ooh"},
    {time: 80, text: "You start a conversation, you can't even finish it"},
    { time: 84, text: "You're talking a lot, but you're not saying anything"},
    {time:89, text:"When I have nothing to say, my lips are sealed"},
    {time: 93, text: "Say something once, why say it again?"},
    { time: 97, text: "Psycho Killer, qu'est-ce que c'est?" },
    { time: 105, text:  "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa..."},
    { time: 110, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    { time: 115, text: "Ay-ya-ya-ya-ya-ya, ooh"},
    { time: 130, text: "Ce que j'ai fait, ce soir-là"},
    { time: 110, text: "Ce que j'ai fait, ce soir-là"},
    { time: 115, text: "Réalisant mon espoir Je me lance vers la gloire, okay"},
    { time: 120, text: " Je me lance vers la gloire, okay"},
    { time: 125, text: "Yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah"},
    { time: 130, text: "We are vain and we are blind"},
    { time: 135, text: "I hate people when they're not polite"},
    { time: 140, text: "Psycho Killer Qu'est-ce que c'est?"},
    {time: 145, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better"},
    {time:150, text:"Run, run, run, run, run, run, run away, oh, oh, oh, oh"},
    { time: 155, text: "Psycho Killer Qu'est-ce que c'est?"},
    {time: 160, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better"},
    {time:165, text:"Run, run, run, run, run, run, run away, oh, oh, oh, oh"},
    { time: 170, text: "Ay-ya-ya-ya-ya-ya, ooh"},
    // Add more lyrics here with timestamps...
    ];
    /*
    I can't seem to face up to the facts
    I'm tense and nervous and I can't relax
    I can't sleep 'cause my bed's on fire
    Don't touch me, I'm a real live wire
    Psycho Killer
    Qu'est-ce que c'est?
    Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
    Run, run, run, run, run, run, run away, oh-oh-oh
    Psycho Killer
    Qu'est-ce que c'est?
    Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
    Run, run, run, run, run, run, run away, oh, oh, oh, oh
    Ay-ya-ya-ya-ya-ya, ooh
  -  You start a conversation, you can't even finish it
   - You're talking a lot, but you're not saying anything
   - When I have nothing to say, my lips are sealed
    Say something once, why say it again?
   - Psycho Killer Qu'est-ce que c'est?
    -Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
   - Run, run, run, run, run, run, run away, oh-oh-oh
    -Psycho Killer
   - Qu'est-ce que c'est?
   - Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
   - Run, run, run, run, run, run, run away, oh, oh, oh, oh
  -  Ay-ya-ya-ya-ya-ya
    -Ce que j'ai fait, ce soir-là
    -Ce qu'elle a dit, ce soir-là
   - Réalisant mon espoir
  -  Je me lance vers la gloire, okay
  -  Yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah
   - We are vain and we are blind
  -  I hate people when they're not polite
  -  Psycho Killer
   - Qu'est-ce que c'est?
 -  Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
    Run, run, run, run, run, run, run away, oh-oh-oh
    Psycho Killer
    Qu'est-ce que c'est?
    -Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
    -Run, run, run, run, run, run, run away, oh, oh, oh, oh
    Ai-ya-ya-ya-ya-ya, ooh
    */
    let currentLyricIndex = 0;
    const audio = document.getElementById("audio");
    const lyricElement = document.getElementById("lyric");
    audio.addEventListener("play", () => {
    setInterval(displayLyrics, 100); // Update lyrics every 100ms for better
    accuracy
    });
    function displayLyrics() {
    const currentTime = audio.currentTime;
    // Find the current lyric based on time
    if (
    currentLyricIndex < lyrics.length &&
    currentTime >= lyrics[currentLyricIndex].time
    ) {
    lyricElement.textContent = lyrics[currentLyricIndex].text;
    currentLyricIndex++;
    }
    }