const axios = require("axios");

const videoPlayer = document.getElementById("videoPlayer");
const playlistElement = document.getElementById("playlist");
const nextButton = document.getElementById("nextButton");

function loadPlaylist() {
	axios
		.get("https://api.example.com/playlist")
		.then((response) => {
			const playlist = response.data;
			playlist.forEach((video, index) => {
				const listItem = document.createElement("li");
				listItem.textContent = video.title;
				listItem.addEventListener("click", () => {
					playVideo(video.url);
				});
				playlistElement.appendChild(listItem);

				if (index === 0) {
					playVideo(video.url);
				}
			});
		})
		.catch((error) => {
			console.error("Error fetching playlist:", error);
		});
}

function playVideo(url) {
	videoPlayer.src = url;
	videoPlayer.play();
}

nextButton.addEventListener("click", () => {
	console.log("next clicked");
});

loadPlaylist();
