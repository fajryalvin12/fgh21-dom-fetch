const form = document.getElementById("form-survey");

const tableBody = document.getElementById("insert-data");

const endpoint = "https://st2lww-8888.csb.app/fajry/data";

form.addEventListener("submit", processData);

function processData(event) {
  event.preventDefault();
  const inputName = event.target.name.value;
  const inputAge = event.target.age.value;
  const inputGender = event.target.gender.value;
  const inputIsSmoke = event.target.ask.value;
  console.log(inputName);
  console.log(inputAge);
  console.log(inputGender);
  console.log(inputIsSmoke);

  const cigar = document.getElementsByName("smoke");
  let arrCigar = [];
  for (let i = 0; i < cigar.length; i++) {
    if (cigar[i].checked) {
      arrCigar.push(cigar[i].value);
    }
  }
  console.log(arrCigar.join("; "));

  const dataForm = new URLSearchParams();
  dataForm.append("name", inputName);
  dataForm.append("age", inputAge);
  dataForm.append("gender", inputGender);
  dataForm.append("isSmoker", inputIsSmoke);
  dataForm.append("cigarVariant", arrCigar);

  fetch(endpoint, {
    method: "POST",
    body: dataForm,
  }).then((response) => {
    response.json().then((data) => {
      if (data.success) {
        window.alert("Data disimpan");
      } else {
        window.alert(data.message);
      }
    });
  });
}

async function restAPI() {
  const tableRow = document.createElement("tr");
  const tableName = document.createElement("td");
  const tableAge = document.createElement("td");
  const tableGender = document.createElement("td");
  const tableSmoke = document.createElement("td");
  const tableVariant = document.createElement("td");

  const checkName = await fetch(endpoint);
  const data = await endpoint.json();
  for (let i = 0; i < data.length; i++) {
    tableRow.appendChild(tableAge);
    tableRow.appendChild(tableGender);
    tableRow.appendChild(tableSmoke);
    tableRow.appendChild(tableVariant);
    tableBody.appendChild(tableRow);
  }
}

restAPI();
