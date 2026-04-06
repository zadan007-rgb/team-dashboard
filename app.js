const USERS = {
zain:{password:"zain123",role:"manager",name:"Zain"},
naseem:{password:"naseem123",role:"director",name:"Naseem"},
umar:{password:"umar123",role:"employee",name:"Umar"},
jahanzeb:{password:"jahanzeb123",role:"employee",name:"Jahanzeb"},
iqrar:{password:"iqrar123",role:"employee",name:"Iqrar"},
moin:{password:"moin123",role:"employee",name:"Moin"},
arslan:{password:"arslan123",role:"employee",name:"Arslan"},
hina:{password:"hina123",role:"employee",name:"Hina"},
warzan:{password:"warzan123",role:"employee",name:"Warzan"},
shahbaz:{password:"shahbaz123",role:"employee",name:"Shahbaz"},
ishaq:{password:"ishaq123",role:"employee",name:"Ishaq"},
junaid:{password:"junaid123",role:"employee",name:"Junaid"}
};

function login(){

const u=document.getElementById("username").value;
const p=document.getElementById("password").value;

if(USERS[u] && USERS[u].password===p){

localStorage.setItem("user",JSON.stringify(USERS[u]));

window.location="dashboard.html";

}else{

document.getElementById("msg").innerText="Invalid login";

}

}

function logout(){

localStorage.removeItem("user");

window.location="login.html";

}

function getUser(){

return JSON.parse(localStorage.getItem("user"));

}

if(document.getElementById("userInfo")){

const user=getUser();

document.getElementById("userInfo").innerText=
"Logged in as: "+user.name+" ("+user.role+")";

}

function markAttendance(status){

const user=getUser();

const data={
name:user.name,
status:status,
date:new Date().toISOString().slice(0,10),
time:new Date().toLocaleTimeString()
};

fetch(API_URL,{
method:"POST",
body:JSON.stringify(data)
});

alert("Attendance marked: "+status);

}

function addTask(){

const task=document.getElementById("taskInput").value;

const li=document.createElement("li");

li.innerText=task;

document.getElementById("taskList").appendChild(li);

document.getElementById("taskInput").value="";

}
