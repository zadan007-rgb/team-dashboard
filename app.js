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
  window.location="index.html";
}

function getUser(){
  return JSON.parse(localStorage.getItem("user"));
}

if(document.getElementById("userInfo")){
  const user=getUser();
  if(user) document.getElementById("userInfo").innerText="Logged in as: "+user.name+" ("+user.role+")";
}

// Attendance & Tasks functions
function markAttendance(status){
  const user=getUser();
  if(!user) return alert("Login first");
  const data={ name:user.name, status:status, date:new Date().toISOString().slice(0,10), time:new Date().toLocaleTimeString() };
  fetch(API_URL,{ method:"POST", body:JSON.stringify(data) });
  alert("Attendance marked: "+status);
}

let tasks=[];
function addTask(){
  const taskInp=document.getElementById("tInp");
  if(!taskInp.value) return;
  const teamSel=document.getElementById("tTeam");
  const assignSel=document.getElementById("tAssign");
  const statSel=document.getElementById("tStat");
  tasks.push({ text: taskInp.value, team: teamSel.value, assignee: assignSel.value, status: statSel.value });
  renderTasks();
  taskInp.value="";
}

function renderTasks(){
  ['todo','inprogress','done'].forEach(s=>{
    const col=document.getElementById('col-'+s);
    col.innerHTML=tasks.filter(t=>t.status===s).map(t=>{
      return `<div class="ti2">${t.text} — ${t.assignee}</div>`;
    }).join('');
  });
}
