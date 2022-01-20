async function getHighScore()  {
	let  respons = await fetch("api/user/profile");
	let profile await response.json();
	return profile.heighScore;
}