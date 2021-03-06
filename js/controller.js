$(document).ready(function () {
// myFunction();
  // if (localStorage.getItem("cartProducts") == null) {
  //   localStorage.setItem('checkout', 0);
  // }
  // else {
  //   let cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
  //   console.log('controller - ', cartProducts);

  //   $("#checkout").html(" " + cartProducts.length + "");
  // }
    if (localStorage.getItem("cartProducts") == null) {
    localStorage.setItem("checkout", 0);
  } else {
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    console.log("controller - ", cartProducts);
    document.getElementById("checkout").style.display = "block";

    $("#checkout").html(" " + cartProducts.length + "");
  }

  // check if user is logged in or logged out..
  var loggedin = localStorage.getItem('loggedIn');


  if (loggedin == 1) {
    // change the text from Login to Logout
    $("#loginlogout").html("Logout");
    // hide User details nav item by applying bootstrap d-none which hides the nav item
    $("#accountdetails").removeClass("d-none");
    $("#accountdetails").removeClass("show"); // this is put in automatically by bootstrap so we have to remove the class

  } else {
    // use addClass to hide the display of User Details
    $("#accountdetails").addClass("d-none");
    // change the text from Logout to Login
    $("#loginlogout").html("Login / Register");
    // set the href propery to point to login.html if user clicks on it
    $("#loginlogout").prop("href", "login.html");
  }

  if (localStorage.getItem('userdetails') === null) {
    // if userdetails is null, that means it has not been loaded before. we not initialise userdetails object
    var userDetails = {firstName:"Walter", lastName:"Mitty", dob:"1990-12-01",address1:"Buenos Ayres Drive", address2:"Strandhill", address3:"Co. Sligo"};
    // now we store the userdetails object as a localstorage object but localstore only stores text and userdetails is a javascript object
    // we convert a javascript object ot a string using JSON.stringify - we are being expedient!
    localStorage.setItem('userdetails', JSON.stringify(userDetails));
  } else {
    // if localstorage variable userdetails is already created - load it to javascript oject. JSON.parse turns it back into an javascript object
    userDetails = JSON.parse(localStorage.getItem('userdetails'));
  }

  if ($('#udetails').length > 0) {
    $('input[name="firstname"]').val(userDetails.firstName);
    $('input[name="lastname"]').val(userDetails.lastName);
    $('input[name="dob"]').val(userDetails.dob);
    $('input[name="address1"]').val(userDetails.address1);
    $('input[name="address2"]').val(userDetails.address2);
    $('input[name="country"]').val(userDetails.country);
  }

  $("#loginlogout").button().click(function () {
    if (loggedin == 1) {
      // set the flag so that user is not logged in
      localStorage.setItem('loggedIn', 0);
      window.location.href = "login.html";
    } else
      window.location.href = "login.html";

  });


  // wait for submit button to be clicked on login form - this code only invoked if login form submit button clicked
  $('form[name="login"]').submit(function (event) {
    var email = $('input[name="email"]').val();
    var password = $('input[name="password"]').val();
    if (email == "useremailtest@gmail.com" && password == "password1") {
      // successful login, user redirected to shop.html
      localStorage.setItem('loggedIn', 1);
      window.location.href = "shop.html";  // redirect to shop page
    }
    else {
      // login unsuccessful, error message appears
      localStorage.setItem('loggedIn', 0);
      $("#loginerror").addClass("d-block");
    }
    return false;
  });


  // wait for submit button to be clicked on userdetails update form
  $('form[name="userdetails"]').submit(function (event) {
    // if the user updates the user details - we update the userDetails javascript object
    userDetails.firstName = $('input[name="firstname"]').val();
    userDetails.lastName = $('input[name="lastname"]').val();
    userDetails.address1 = $('input[name="address1"]').val();
    userDetails.address2 = $('input[name="address2"]').val();
    userDetails.address3 = $('input[name="address3"]').val();
    // finally we convert the javascript object to a string with JSON.stringify and save it to localstorage
    localStorage.setItem('userdetails', JSON.stringify(userDetails));
    return false;
  });

  // wait for submit button to be clicked on userdetails update form
  $('form[name="paymentdetails"]').submit(function (event) {
    var cardnumber = $('input[name="cardnumber"]').val();
    if (cardnumber == "1234 5678 9102 3456") {
      $("#payment-failure").addClass("d-none");
      $("#payment-success").removeClass("d-none");
      $("#buy-button").addClass("d-none");
      var total = 0;
      localStorage.setItem('checkout', total); // makes sure that when we goto another page - the total help in localstorage is zero
      $("#checkout").html(total);

    } else {
      $("#payment-failure").removeClass("d-none");
    }
    return false;
  });


  $(".addtocart").click(function () {
    var total = localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout', total);
    $("#checkout").html(total);
  });
});

// function myFunction() {
//   let cartProducts = JSON.parse(localStorage.getItem("cartProducts"));
//   console.log(cartProducts);
//   console.log(document.getElementById("checkout").innerHTML);
//   if (document.getElementById("checkout").innerHTML > 0) {
//     document.getElementById("checkout").style.display = "block";
//   } else {
//     // document.getElementById("checkout").innerHTML == cartProducts?.length;
//     document.getElementById("checkout").style.display = "none";
//   }
// }


