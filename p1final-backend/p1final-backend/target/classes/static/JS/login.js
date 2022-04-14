function loginEmp() {
	
	//gets the inputs from the employee's entry and assigns them to variables'
	var username = document.getElementById("username").value;
	
	var password = document.getElementById("password").value;
	
	let data = {username: username, password: password};
	
	console.log(data);
	
	fetch("/users/login", {
		 method: "POST",
  		headers: {'Content-Type': 'application/json'}, 
  		body: JSON.stringify(data)
	}).then(res => {
		
		if(res.status !== 200) {
			
			//if login attempt fails
			alert("Try again please");
		}
		
		else {
			
			// Redirecting to other page.
			window.location = "employeePage.html"; 
		}
		
	  console.log("Request complete! response:", res);
	});
};

function loginMan() {
	
	var manuser = document.getElementById("username2").value;
	
	var manpass = document.getElementById("password2").value;
	
	let data = {username: manuser, password: manpass};
	
	console.log(data);
	
	fetch("/users/login", {
		method: "POST",
		headers: {'Content-Type': 'application/json'}, 
  		body: JSON.stringify(data)
	}).then(res => {
		
		if(res.status !== 200) {
			
			//if login attempt fails
			alert("Try it again pussy");
		}
		
		else {
			
			// Redirecting to other page.
			window.location = "managerPage.html"; 
		}
		
	  console.log("Request complete! response:", res);
	});
	
}

function logOut() {
	
	window.location = "index.html";
}

function rembReq() {
	
	window.location = "request.html";
}

function oldReq() {
	
	window.location = "oldRequests.html";
}

function viewInfo() {
	
	window.location = "empInfo.html";
}


function appDeny() {
	
	window.location = "approveDeny.html";
}

function allPend() {
	
	window.location = "allPending.html";
}

function viewAll() {
	
	window.location = "allRequests.html";
}
function viewEmp() {
	
	window.location = "allEmployees.html";
}
function viewID() {
	
	window.location = "reqById.html";
}







