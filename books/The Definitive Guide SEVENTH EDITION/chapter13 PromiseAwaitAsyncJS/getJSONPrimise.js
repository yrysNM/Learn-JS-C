getJSON(url).then(jsonData => {

});

//Suppose you have  function like this to dislay a user profile
function displayUserProfile(profile) {	/* implementation omitted */
	
}


getJSON("/api/user/profile").then(displayUserProfile, handlProfileError);

getJSON("/api/user/profile").then(displayUserProfile).catch(handleProfileError);