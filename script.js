let initialData = JSON.parse(localStorage.getItem("formData")) || [];

//   let table = document.getElementById("content-table");
//   create table
let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById("body").appendChild(table);
if (initialData.length > 0) {
  console.log(initialData, "initialData 1");
  initialData.map((data) => {
    //destructuring name, email, and track, team, suspend, expelled
    let { name, email, track, team, suspend, expelled } = data;

    let row = table.insertRow();
    var cell = row.insertCell();
    cell.innerHTML = `${name}`;
    var cell = row.insertCell();
    cell.innerHTML = `${email}`;
    var cell = row.insertCell();
    cell.innerHTML = `${track}`;
    var cell = row.insertCell();
    cell.innerHTML = `${team}`;
    var cell = row.insertCell();
    cell.innerHTML = `${suspend}`;
    var cell = row.insertCell();
    cell.innerHTML = `${expelled}`;
    var cell = row.insertCell();
    cell.innerHTML = `Edit`;
    cell.setAttribute("id", "submit-btn");
    cell.addEventListener("click", () => {
      // update item
      let namePrompt = prompt("Enter the name");
      let emailPrompt = prompt("Enter the email");
      let trackPrompt = prompt("Enter the track");
      let teamPrompt = prompt("Is Team lead?");
      let suspendPrompt = prompt("Is suspended?");
      let expelledPrompt = prompt("Is expelled?");
      let updatedData = {
        name: namePrompt,
        email: emailPrompt,
        track: trackPrompt,
        team: teamPrompt,
        suspend: suspendPrompt,
        expelled: expelledPrompt,
      };

      //   let updatedDataArray = initialData.map((e) => {
      //     if (e.name === name) {
      //       return updatedData;
      //     }
      //   });
      objIndex = initialData.findIndex((obj) => obj.name == name);
      console.log(objIndex, "objIndex");
      initialData[objIndex].name = updatedData.name;
      initialData[objIndex].email = updatedData.email;
      initialData[objIndex].track = updatedData.track;
      initialData[objIndex].team = updatedData.team;
      initialData[objIndex].suspend = updatedData.suspend;
      initialData[objIndex].expelled = updatedData.expelled;
      console.log(name, "name");
      localStorage.setItem("formData", JSON.stringify(initialData));
      console.log(initialData, "initialData");
      window.location.reload();
    });

    var cell = row.insertCell();
    cell.innerHTML = `Delete`;
    cell.setAttribute("id", "submit-btn");

    cell.addEventListener("click", () => {
      // delete data from localStorage
      // filter
      let filteredData = initialData.filter((data) => {
        return data.name !== name;
      });
      localStorage.setItem("formData", JSON.stringify(filteredData));
      window.location.reload();
      //   localStorage.setItem("formData", JSON.stringify(initialData));
      console.log(filteredData, "initialData 3");
    });
  });
}

const addContent = (e) => {
  if (document.getElementById("name").value) {
    let formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      track: document.getElementById("track").value,
      team: document.getElementById("team").value,
      suspend: document.getElementById("suspend").value,
      expelled: document.getElementById("expelled").value,
    };
    initialData.push(formData);

    console.log(initialData, "initialData 2");
    e.preventDefault();

    appendRow(
      formData.name,
      formData.email,
      formData.track,
      formData.team,
      formData.suspend,
      formData.expelled
    );
    localStorage.setItem("formData", JSON.stringify(initialData));
    window.location.reload();
  }
};

function appendRow(name, email, track, team, suspend, expelled) {
  let row = table.insertRow();
  var cell = row.insertCell();
  cell.innerHTML = `${name}`;
  var cell = row.insertCell();
  cell.innerHTML = `${email}`;
  var cell = row.insertCell();
  cell.innerHTML = `${track}`;
  var cell = row.insertCell();
  cell.innerHTML = `${team}`;
  var cell = row.insertCell();
  cell.innerHTML = `${suspend}`;
  var cell = row.insertCell();
  cell.innerHTML = `${expelled}`;
  var cell = row.insertCell();
  cell.innerHTML = `Edit`;
  cell.setAttribute("id", "submit-btn");
  var cell = row.insertCell();
  cell.innerHTML = `Delete`;
  cell.setAttribute("id", "submit-btn");
}
