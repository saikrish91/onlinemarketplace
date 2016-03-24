<html>
<body onload="signOut()">

<script>
  function signOut() {
  alert("hi");
  console.log('in signout');
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      
    });
    window.location.href = "index.html";
  }
</script>
</body>
</html>
