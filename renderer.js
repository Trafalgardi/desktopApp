const remote = require('electron').remote
const main = remote.require('./main.js')

var win = remote.getCurrentWindow()

document.getElementById('headerClose').addEventListener('click', (event) => {
	
	win.close()

});
document.getElementById('btnClose').addEventListener('click', (event) => {
	
	win.close()

});
document.getElementById('minimize').addEventListener('click', (event) => {
	
	win.minimize()

});
document.getElementById('maximize').addEventListener('click', (event) => {
	
	win.isMaximized() ? win.unmaximize() : win.maximize() 

});

document.getElementById('button').addEventListener('click', (event) => {

	var login = $( "input#inputLogin" ).val();
	var password = $( "input#inputPassword" ).val();
  var parms = '{ "type" : "auth" , "login" : "' + login + '" , "password" : "' + password + '" }';

  connect(parms)

  main.openWindow('loading')
	
});

function connect(parms) {
 
  var url = "http://php/api.php";
  var method = "POST";
  //var postData = '{ "type" : "auth", "login" : "admin", "password" : "admin" }';
  var postData = parms;


  // You REALLY want shouldBeAsync = true.
  // Otherwise, it'll block ALL execution waiting for server response.
  var shouldBeAsync = true;

  var request = new XMLHttpRequest();

  request.onload = function () {

     var status = request.status; // HTTP response status, e.g., 200 for "200 OK"
     var data = request.responseText; // Returned data, e.g., an HTML document.
     data = JSON.parse(data);
     console.log(data.access)
  }

  request.open(method, url, shouldBeAsync);

  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  // Actually sends the request to the server.
  request.send(postData);

}