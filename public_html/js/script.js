/*
 * set all header & footers to be as in the main page.
 */
var layout = {
	sourceHeader: null,
	sourceFooter: null,
	targetHeaders: null,
	targetFooters: null,
	
	init: function () {		
		layout.sourceHeader = $("[data-id='main-header']").eq(0);
		layout.sourceFooter = $("[data-id='main-footer']").eq(0);
		layout.targetHeaders = $("[data-id='main-header']").not("source-header");
		layout.targetFooters = $("[data-id='main-footer']").not("source-footer");
		
		layout.targetHeaders.html(layout.sourceHeader.html());
		layout.targetFooters.html(layout.sourceFooter.html());
	}
};

/**
 *  Clean all forms after leaving a page.
 */
$("section[data-role='page']").on('pagebeforehide', function () {
    $('form').each (function(){
	this.reset();
    });
    
    $('.err-msg').each(function (){
       this.innerHTML = ""; 
    });
});

/**
 * Load user name & password from SQLite and send to server in order to login.
 * 
 * In part 2 of the project - allow only admin@test to login to the application.
 */
function validateSignin()
{
    var username = document.getElementById("signin-username");
    var password = document.getElementById("signin-password");


    var username_err = document.getElementById('signin-username-error');
    var password_err = document.getElementById('signin-password-error');
    
    var error_appear = "false";
    var flag = "false";
    
    
    if(username.value === "")
    {
        username_err.innerHTML = "<div class='validate_error_messages_signin'>please enter your username</div>";
        error_appear = "true";
        flag = "true";
    }
    
    if(password.value === "")
    {
        password_err.innerHTML = "<div class='validate_error_messages_signin'>please enter your password</div>";
        error_appear = "true";
        flag = "true";
    }

    if (error_appear === "false") 
    {
        if (username.value === "admin@test" && password.value === "123")
        {
        window.location = '#index';
        }
        else {
          username_err.innerHTML = "<div class='validate_error_messages_signin'>Unknown username</div>";
          password_err.innerHTML = "<div class='validate_error_messages_signin'></div>";
        }
    }
}

function haveAccount()
{
    window.location = "index.html";
}

/**
 * Validate all forms in Sign up page and inform the user for bad inputs.
 */
function validateSignUp()
{
    /** values of signup forms **/
    var email = document.getElementById('signup-email');
    var password = document.getElementById('signup-pass');
    var re_password = document.getElementById('signup-val-pass');
    var name = document.getElementById('signup-name');
    var bday = document.getElementById('signup-birthdate');
    
    /** error divs **/
    var email_err = document.getElementById('signup-email-error');
    var password_err = document.getElementById('signup-password-error');
    var name_err = document.getElementById('signup-name-error');
    var bday_err = document.getElementById('signup-birthdate-error');
    
    var error_appear = "false";
    
    /** clean all error divs **/
    email_err.innerHTML = "";
    password_err.innerHTML = "";
    name_err.innerHTML = "";
    bday_err.innerHTML = "";
    
    if(email.value === "")
    {
        email_err.innerHTML = "<div class='validate_error_messages'>please enter your e-mail</div>";
        error_appear = "true";
    }
    
    if(password.value === "" || re_password === "")
    {
        password_err.innerHTML = "<div class='validate_error_messages'>missing password</div>";
        error_appear = "true";
    }
    else if(password.value !== re_password.value)
    {
        password_err.innerHTML = "<div class='validate_error_messages'>passwords doesn't match</div>";
        error_appear = "true";
    }
    
    if(name.value === "")
    {
        name_err.innerHTML = "<div class='validate_error_messages'>please enter your name</div>";
        error_appear = "true";
    }

    
    if(bday.value === "") 
    {
        bday_err.innerHTML = "<div class='validate_error_messages'>please enter your birth date</div>";
        error_appear = "true";
    }
    
    if(error_appear === "false")
    {
        window.location = "index.html";
    }
}

/**
 * Validate all forms in Settings page and inform the user for bad inputs.
 */
function validateSettings()
{
    /** values of settings forms **/
    var name = document.getElementById('settings-name');
    var age = document.getElementById('settings-age');
    
    /** error divs **/
    var name_err = document.getElementById('settings-name-error');
    var age_err = document.getElementById('settings-age-error');
    
    /** clear all divs **/
    name_err.innerHTML = "";
    age_err.innerHTML = "";
    
    var error_appear = "false";
    
    if(name.value === "")
    {
        name_err.innerHTML = "<div class='validate_error_messages'>please enter your name</div>";
        error_appear = "true"; 
    }
    
    if(age.value === "")
    {
        age_err.innerHTML = "<div class='validate_error_messages'>please enter your birth date</div>";
        error_appear = "true";  
    }
    
    if(error_appear === "false")
    {
        window.location = "#index";
    }
}

function signout()
{
    window.location = "index.html";
}

/**
 * Validate all forms in New Post page and inform the user for bad inputs.
 */
function validateNewPost()
{
    /** values of new post forms **/
    var title = document.getElementById('add-post-title');
    var artist = document.getElementById('add-post-artist');
    var album_song = document.getElementById('add-post-album_song');
    var content = document.getElementById('add-post-content');
    var genre = document.getElementById('add-post-genre');
    
    /** error divs **/
    var title_err = document.getElementById('add-post-title-error');
    var artist_err = document.getElementById('add-post-artist-error');
    var album_song_err = document.getElementById('add-post-album_song-error');
    var content_err = document.getElementById('add-post-content-error');
    var genre_err = document.getElementById('add-post-genre-error');
    
    /** clean all error divs **/
    title_err.innerHTML = "";
    artist_err.innerHTML = "";
    album_song_err.innerHTML = "";
    content_err.innerHTML = "";
    genre_err.innerHTML = "";
    
    var error_appear = "false";
    
    if(title.value === "")
    {
        title_err.innerHTML = "<div class='validate_error_messages'>please enter a title to the post</div>";
        error_appear = "true";  
    }
    
    if(artist.value === "")
    {
        artist_err.innerHTML = "<div class='validate_error_messages'>please enter the artist name</div>";
        error_appear = "true";  
    }
    
    if(album_song.value === "")
    {
        album_song_err.innerHTML = "<div class='validate_error_messages'>please enter the name of the album / song</div>";
        error_appear = "true";  
    }
    
    if(content.value === "")
    {
        content_err.innerHTML = "<div class='validate_error_messages'>your post doesn't contain any content</div>";
        error_appear = "true";  
    }

    if(genre.value === "Default")
    {
        genre_err.innerHTML = "<div class='validate_error_messages'>please select a genre</div>";
        error_appear = "true";  
    }
    
    if(error_appear === "false")
    {
        window.location = "#index";
    }
}

/**
 * Validate all forms in Send Message page and inform the user for bad inputs.
 */
function validateMessage()
{
    /** values of new post forms **/
    var to = document.getElementById('send-message-to');
    var subject = document.getElementById('send-message-subject');
    var content = document.getElementById('send-message-content');
    
    
    /** error divs **/
    var to_err = document.getElementById('send-message-to-err');
    var subject_err = document.getElementById('send-message-subject-err');
    var content_err = document.getElementById('send-message-content-err');
    

    /** clean all error divs **/
    to_err.innerHTML = "";
    subject_err.innerHTML = "";
    content_err.innerHTML = "";
    
    var error_appear = "false";
    
    if(to.value === "")
    {
        to_err.innerHTML = "<div class='validate_error_messages'>please enter your message destination</div>";
        error_appear = "true";
    }

    if(subject.value === "")
    {
        subject_err.innerHTML = "<div class='validate_error_messages'>please enter a subject for your message</div>";
        error_appear = "true"; 
    }
    
    if(content.value === "")
    {     
        content_err.innerHTML = "<div class='validate_error_messages'>please enter a content for your message</div>";
        error_appear = "true"; 
    }
    
    if(error_appear === "false")
    {
        window.location = '#index';
    }
}

function unfriend()
{
    window.location = '#index';
}

function writeMessage(name)
{
    window.location.href = '#send-message?friendName=' + encodeURIComponent(name);
	setTimeout(function() { $("#send-message-to").val(queryData.friendName); }, 100);
}

function addNewMessage()
{
    var div = document.createElement('div');
    var msg = document.getElementById('replay');
    
    div.className = 'bubbledRight';
    
    div.innerHTML = msg.value;
    
    document.getElementById('new_messages').appendChild(div);
    
    msg.value = "";
}

/**
 * Change the color of like button and disable the color of the unlike button
 * Also, add 1 to the number of likes.
 *  * @param {type} index - the index of the like button.
 */
function like(index)
{
    var like = document.getElementById(index + 'L');
    var dislike = document.getElementById(index + 'D');
    var likeAmount = document.getElementById(index + "LikeAmount");
    var dislikeAmount = document.getElementById(index + "DislikeAmount");
    var likeNum = likeAmount.innerHTML;
    var dislikeNum = dislikeAmount.innerHTML;
    
    
    // If like was pressed 
    if (like.className === "like") {
        likeNum++;
        likeAmount.innerHTML = likeNum;
        like.className = "like-button-active";
  
        // If dislike was pressed before, cancel it
        if (dislike.className === "dislike-button-active") {            
            dislikeNum--;
            dislikeAmount.innerHTML = dislikeNum;
            dislike.className = "dislike";
        }
    }
    // If like was pressed before, cancel it
    else if (like.className === "like-button-active") {
        likeNum--;
        likeAmount.innerHTML = likeNum;
        like.className = "like";
    }
      
}


/**
 * Change the color of dislike button and disable the color of the like button
 * Also, add 1 to the number of dislikes.
 * @param {type} index - the index of the like button.
 */
function dislike(index)
{
    var dislike = document.getElementById(index + 'D');
    var dislikeAmount = document.getElementById(index + "DislikeAmount");
    var like = document.getElementById(index + 'L');
    var likeAmount = document.getElementById(index + "LikeAmount");
    var dislikeNum = dislikeAmount.innerHTML;
    var likeNum = likeAmount.innerHTML;
    
    
    // If dislike was pressed 
    if (dislike.className === "dislike") {
        dislikeNum++;
        dislikeAmount.innerHTML = dislikeNum;
        dislike.className = "dislike-button-active";
  
        // If like was pressed before, cancel it
        if (like.className === "like-button-active") {            
            likeNum--;
            likeAmount.innerHTML = likeNum;
            like.className = "like";
        }
    }
    
    // if dislike was pressed before, cancel it.
    else if (dislike.className === "dislike-button-active") {
        dislikeNum--;
        dislikeAmount.innerHTML = dislikeNum;
        dislike.className = "dislike";
    }
      
}

function addPostToFavorites(postObj) {
    var link = document.getElementById(postObj.id);
    link.innerHTML = "this post is part of your favorites";
    /*
     * This part should be entering the post to the mongoDB.
     */
}

/** create query string object */
function getQueryString() {
	// get current location
	var currentLocation = window.location.href;
	
	// check if there is any query string data available
	if (currentLocation.indexOf("?") > 0) {
		// create result object
		var data = new Object();
		
		// create an array of key value pairs, each pair is a string of the form "key=value"
		var stringDataArr = window.location.href.split("?")[1].split("&");
		
		// iterate on all pairs found
		for (var i = 0; i < stringDataArr.length; i++) {
			// for each pair create a temp array which holds 2 elements: [key, value]
			var pair = stringDataArr[i].split("=");
			
			// in the result object, add a field with the name of the key,
			// and a value for that field with name of the matching value
			data[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
		}
		
		// when done, return the result
		return data;
	}
	
	// return null if no query string was found
	return null;	
}

/** get query data on page load */
var queryData = null;

$(document).on('pageinit', function() {
	queryData = getQueryString();	
});

/** call init function of layout object **/
layout.init();
     
        
