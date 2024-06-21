
document.querySelector("#id-form").addEventListener("submit", handleIdSubmit)

// loads youtube iframe API asynchronosly
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// setting up player
var player;
function onYouTubeIframeAPIReady() {
  console.log("Youtube iframe API ready");
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    playerVars: {
      playsinline: 1,
    },
  });
}

/**
 * Plays the youtube id in the player after submit.
 * 
 * @param {Event} event 
 */
function handleIdSubmit(event) {
    event.preventDefault();
    let yId = event.target.youtubeId.value;
    player.loadVideoById(yId);
}

