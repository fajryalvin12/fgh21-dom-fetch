const form = document.getElementById("form-survey");

const tableBody = document.getElementById("insert-data");

const myButton = document.getElementById("button");
myButton.addEventListener("click", processData);

function processData(event) {
  event.preventDefault();

  // create element
  const tableRow = document.createElement("tr");
  const tableName = document.createElement("td");
  const tableAge = document.createElement("td");
  const tableGender = document.createElement("td");
  const tableSmoke = document.createElement("td");
  const tableVariant = document.createElement("td");

  // pick the value from name section on HTML
  const dataName = document.getElementById("name");
  const valueName = dataName.value;
  tableName.textContent = valueName;
  tableRow.appendChild(tableName);

  // conditional alert for empty valueName
  if (valueName === "") {
    window.alert("Jaka sembung bawa golok,..");
    return;
  }

  // pick the value from age section on HTML
  const dataAge = document.getElementById("age");
  const valueAge = dataAge.value;
  tableAge.textContent = valueAge;

  // conditional alert for empty valueAge
  if (valueAge === "") {
    window.alert("Gitar kupetik, bas kubetot...");
    return;
  }

  // pick the value from gender section on HTML
  const dataMale = document.getElementById("male").checked;
  const dataFemale = document.getElementById("female").checked;

  //conditional (if-else) for choosing gender
  if (dataMale === true) {
    const male = document.getElementById("male");
    const valueMale = male.value;
    tableGender.textContent = valueMale;
  }
  if (dataFemale === true) {
    const female = document.getElementById("female");
    const valueFemale = female.value;
    tableGender.textContent = valueFemale;
  }

  // pick the value from ask-smoke section on HTML
  const dataYes = document.getElementById("yes").checked;
  const dataNo = document.getElementById("no").checked;

  //conditional (if-else) for choosing gender
  if (dataYes === true) {
    const yes = document.getElementById("yes");
    const valueYes = yes.value;
    tableSmoke.textContent = valueYes;
  }
  if (dataNo === true) {
    const no = document.getElementById("no");
    const valueNo = no.value;
    tableSmoke.textContent = valueNo;
  }

  // pick the value from smoke-variant section on HTML
  const dataGudang = document.getElementById("gudang").checked;
  const dataLucky = document.getElementById("lucky").checked;
  const dataMarl = document.getElementById("marl").checked;
  const dataEsse = document.getElementById("esse").checked;

  // initial container for filling the tableVariant selected checkbox
  let variantChoosen = "";

  if (dataGudang === true) {
    const gudang = document.getElementById("gudang");
    const valueGudang = gudang.value;
    variantChoosen += valueGudang + ", ";
  }
  if (dataLucky === true) {
    const lucky = document.getElementById("lucky");
    const valueLucky = lucky.value;
    variantChoosen += valueLucky + ", ";
  }
  if (dataMarl === true) {
    const marl = document.getElementById("marl");
    const valueMarl = marl.value;
    variantChoosen += valueMarl + ", ";
  }
  if (dataEsse === true) {
    const esse = document.getElementById("esse");
    const valueEsse = esse.value;
    variantChoosen += valueEsse;
  }
  tableVariant.textContent = variantChoosen;

  tableRow.appendChild(tableAge);
  tableRow.appendChild(tableGender);
  tableRow.appendChild(tableSmoke);
  tableRow.appendChild(tableVariant);
  tableBody.appendChild(tableRow);

  form.reset();
}
