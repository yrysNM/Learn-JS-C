function getHighScore(){
	return getJSON("/api/user/profile").then(profile =>
profile.highScore);
}