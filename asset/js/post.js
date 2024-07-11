const form = document.getElementById("form-survey");
const tableBody = document.getElementById("insert-data");
const endpoint = "https://st2lww-8888.csb.app/fajry/data";

async function insertTable() {
  const data = await fetch(endpoint);
  const dataTable = await data.json();
  tableBody.textContent = "";

  dataTable.results.forEach((e) => {
    const tableRow = document.createElement("tr");
    const tableName = document.createElement("td");
    const tableAge = document.createElement("td");
    const tableGender = document.createElement("td");
    const tableSmoke = document.createElement("td");
    const tableVariant = document.createElement("td");
    tableName.textContent = e.name;
    tableAge.textContent = e.age;
    tableGender.textContent = e.gender;
    tableVariant.textContent = e.cigarVariant.join("; ");

    tableRow.appendChild(tableName);
    tableRow.appendChild(tableAge);
    tableRow.appendChild(tableGender);
    if (e.isSmoker) {
      tableSmoke.textContent = "Ya";
      tableRow.appendChild(tableSmoke);
    } else {
      tableSmoke.textContent = "Tidak";
      tableRow.appendChild(tableSmoke);
    }
    tableRow.appendChild(tableVariant);
    tableBody.appendChild(tableRow);
  });
}

insertTable();
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const inputName = e.target.name.value;
  const inputAge = e.target.age.value;
  const inputGender = e.target.gender.value;
  const inputIsSmoke = e.target.ask.value;
  // console.log(inputName);
  // console.log(inputAge);
  // console.log(inputGender);
  // console.log(inputIsSmoke);

  const cigar = document.getElementsByName("smoke");
  let arrCigar = [];
  for (let i = 0; i < cigar.length; i++) {
    if (cigar[i].checked) {
      arrCigar.push(cigar[i].value);
    }
  }
  // console.log(arrCigar.join("; "));

  const dataForm = new URLSearchParams();
  dataForm.append("name", inputName);
  dataForm.append("age", inputAge);
  dataForm.append("gender", inputGender);
  dataForm.append("isSmoker", inputIsSmoke);
  dataForm.append("cigarVariant", arrCigar);

  const askData = await fetch(endpoint, {
    method: "POST",
    body: dataForm,
  });
  const data = await askData.json();
  if (data.success) {
    window.alert(data.message);
  } else {
    window.alert("mohon maaf, data anda salah cok");
  }
  insertTable();
});
// fetch(endpoint, {
//   method: "POST",
//   body: dataForm,
// }).then((response) => {
//   response.json().then((data) => {
//     if (data.success) {
//       window.alert("Data disimpan");
//     } else {
//       window.alert(data.message);
//     }
//   });
// });
