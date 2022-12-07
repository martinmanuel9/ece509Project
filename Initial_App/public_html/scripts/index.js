/**
 * JavaScript for index.html
 *
 * @file      index.js.
 * @author    Martin Lopez Diego Moscoso
 * @since     09/21/2022
 */

/**
 * This function verifies a user's credentials
 * @param   : None
 * @return  : None
 */
function verifyUser() {
  // window.location.href = "home.html";

  var httpRequest = new XMLHttpRequest();
    
  let username  = $('#username').val().trim();
  let password  = $('#psw').val().trim();

  if (username == '') {
    alert('Enter a username');
    return;
  }

  if (password == '') {
    alert('Enter a password');
    return;
  }

  username = safe_check(username);
  password = safe_check(password);

  let user = { 
    username : username,
    password : password
  };
  let user_str = JSON.stringify(user);

  // login to user
  $.ajax({
    url: '/user/login/',
    data: { user: user_str },
    method:'POST',
    statusCode: {
      200: function (response) {
        localStorage.setItem('user', response.username);
        window.location.href = "home.html";
      },
      401: function (response) {
        alert('Invalid Credentials');
      }
    }
  });
}

/**
 * Display entered password
 * @param   : None
 * @return  : None
 */
function showPassword() {
    var passInput = document.getElementById('passwordInput');
    if (passInput.type === 'password') {
        passInput.type = 'text';
    } else {
        passInput.type = 'password';
    }
}
