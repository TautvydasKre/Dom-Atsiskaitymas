/** @format */

const doc = document;
// Set body background color to light blue
document.body.style.backgroundColor = "#c2b290";

//  Uzduotis Nr.1

// const div = doc.createElement("div");
// doc.body.appendChild(div);
// const btn1 = doc.createElement("button");
// div.appendChild(btn1);
// const btn2 = doc.createElement("button");
// div.appendChild(btn2);
// const para = doc.createElement("p");
// btn1.textContent = "btnUp";
// btn2.textContent = "btnDown";
// btn1.setAttribute("class", "btnUp");
// btn2.setAttribute("class", "btnDown");

// div.appendChild(para);

// const buttonStyle =
//   "width: 150px; height: 20px; margin-right: 30px; border-radius: 25px; background-color: pink; color: black";
// btn1.style = buttonStyle;
// btn2.style = buttonStyle;

// let countClicks = 0;
// btn1.addEventListener("click", (event) => {
//   event.preventDefault();
//   countClicks++;
//   console.log(countClicks);

//   para.textContent = countClicks;
//   if (para.textContent % 2 === 0) {
//     btn1.style.backgroundColor = "red";
//   } else {
//     btn1.style.backgroundColor = "pink";
//   }
// });

// btn2.addEventListener("click", (event) => {
//   event.preventDefault();
//   countClicks--;
//   console.log(countClicks);

//   para.textContent = countClicks;
//   if (para.textContent % 2 === 0) {
//     btn2.style.backgroundColor = "red";
//   } else {
//     btn2.style.backgroundColor = "pink";
//   }
// });

//  Uzduotis Nr.2

// const div = doc.createElement("div");
// const inputContainer = doc.createElement("div");
// const firstInt = doc.createElement("input");
// const secondInt = doc.createElement("input");
// const btn = doc.createElement("button");
// const listContainer = doc.createElement("div");

// firstInt.placeholder = "Nenumeruotas sarasas";
// secondInt.placeholder = "Numeruotas sarasas";
// btn.textContent = "Create LIST";

// const commonStyle =
//   "width: 300px; height: 30px; margin-top: 20px; display: block; border-radius: 10px; background-color:pink";
// const buttonStyle =
//   "border-radius: 10px; background-color:pink;width: 300px; height: 30px; margin-top: 20px; display: block ";
// firstInt.style = commonStyle;
// secondInt.style = commonStyle;
// btn.style = commonStyle;
// btn.style = buttonStyle;
// firstInt.setAttribute("required", "true");
// secondInt.setAttribute("required", "true");
// btn.setAttribute("type", "button");
// div.appendChild(inputContainer);
// inputContainer.appendChild(firstInt);
// inputContainer.appendChild(secondInt);
// inputContainer.appendChild(btn);
// div.appendChild(listContainer);

// doc.body.appendChild(div);

// btn.addEventListener("click", function () {
//   if (!firstInt.value || !secondInt.value) {
//     alert("Ivedimo laukeliai turi buti uzpildyti");
//   } else {
//     const regex = /^[0-9]+$/;
//     if (!regex.test(firstInt.value) || !regex.test(secondInt.value)) {
//       alert("Ivedimo laukeliuose gali buti tik skaiciai");
//     } else {
//       const numFirstInt = parseInt(firstInt.value, 10);
//       const numSecondInt = parseInt(secondInt.value, 10);

//       if (
//         isNaN(numFirstInt) ||
//         isNaN(numSecondInt) ||
//         numFirstInt <= 0 ||
//         numSecondInt <= 0
//       ) {
//         alert("Prasau iveskite teigiama skaiciu abiejuose laukeliuose");
//       } else {
//         listContainer.innerHTML = "";

//         for (let i = 1; i <= numFirstInt; i++) {
//           const unorderedList = document.createElement("ul");

//           const listItem = document.createElement("li");
//           const textContent = document.createTextNode("Unordered");
//           listItem.appendChild(textContent);
//           unorderedList.appendChild(listItem);

//           const orderedList = document.createElement("ol");

//           for (let j = 1; j <= numSecondInt; j++) {
//             const orderedListItem = document.createElement("li");
//             const eilText = document.createTextNode("Ordered");
//             orderedListItem.appendChild(eilText);
//             orderedList.appendChild(orderedListItem);
//           }

//           unorderedList.appendChild(orderedList);
//           listContainer.appendChild(unorderedList);
//         }

//         firstInt.value = "";
//         secondInt.value = "";
//       }
//     }
//   }
// });
//   Uzduotis Nr.3

const div = doc.createElement("div");
const forma = doc.createElement("form");
const firstInt = doc.createElement("input");
const secondInt = doc.createElement("select");
const highOption = doc.createElement("option");
const mediumOption = doc.createElement("option");
const lowOption = doc.createElement("option");
const appendBtn = doc.createElement("button");
const deleteBtn = doc.createElement("button");
const table = doc.createElement("table");
const thead = doc.createElement("thead");
const tbody = doc.createElement("tbody");

firstInt.style.backgroundColor = "pink";
firstInt.style.width = "300px";
firstInt.style.height = "30px";
firstInt.style.borderRadius = "10px";

secondInt.style.backgroundColor = "pink";
secondInt.style.borderRadius = "10px";
secondInt.style.height = "35px";

appendBtn.style.backgroundColor = "pink";
appendBtn.style.borderRadius = "10px";
appendBtn.style.height = "35px";

doc.body.appendChild(div);
div.appendChild(forma);
forma.appendChild(firstInt);
forma.appendChild(secondInt);
forma.appendChild(appendBtn);
div.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);

thead.innerHTML =
  "<tr><th id='uzduotisHeader'>Užduotis</th><th id='svarbaHeader'>Svarba</th><th id='deleteHeader'></th></tr>";

doc.getElementById("deleteHeader").textContent = "";

doc.getElementById("uzduotisHeader").style.paddingRight = "50px";
doc.getElementById("svarbaHeader").style.paddingRight = "50px";
doc.getElementById("uzduotisHeader").style.paddingTop = "50px";
doc.getElementById("svarbaHeader").style.paddingTop = "50px";
doc.getElementById("uzduotisHeader").style.borderBottom = "2px solid black";
doc.getElementById("svarbaHeader").style.borderBottom = "2px solid black";

table.style.borderBottom = "2px solid black";

appendBtn.textContent = "Prideti";
deleteBtn.textContent = "Delete";

highOption.value = "high";
highOption.textContent = "High";

mediumOption.value = "medium";
mediumOption.textContent = "Medium";

lowOption.value = "low";
lowOption.textContent = "Low";

secondInt.appendChild(highOption);
secondInt.appendChild(mediumOption);
secondInt.appendChild(lowOption);

appendBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const firstInputValue = firstInt.value;
  const secondInputValue = secondInt.value;

  if (firstInputValue.trim() === "" || secondInputValue.trim() === "") {
    alert("Iveskite kokia uzduoti norite prideti.");
    return;
  }

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const checkedStates = JSON.parse(localStorage.getItem("checkedStates")) || [];

  tasks.push({ firstInputValue, secondInputValue });
  checkedStates.push(false);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("checkedStates", JSON.stringify(checkedStates));

  updateTable();
});

deleteBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const selectedIndex = parseInt(prompt("Enter the row index to delete:"));

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const checkedStates = JSON.parse(localStorage.getItem("checkedStates")) || [];

  tasks.splice(selectedIndex, 1);
  checkedStates.splice(selectedIndex, 1);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("checkedStates", JSON.stringify(checkedStates));

  updateTable();
});

function updateTable() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const checkedStates = JSON.parse(localStorage.getItem("checkedStates")) || [];

  tbody.innerHTML = "";

  if (tasks.length === 0) {
    table.style.display = "none";
    return;
  } else {
    table.style.display = "";
  }

  tasks.forEach((task, index) => {
    const newRow = doc.createElement("tr");

    const cell1 = doc.createElement("td");
    cell1.textContent = task.firstInputValue;
    cell1.style.borderRight = "2px solid black";

    const cell2 = doc.createElement("td");
    cell2.textContent = task.secondInputValue;

    const checkboxCell = doc.createElement("td");
    const checkbox = doc.createElement("input");
    checkbox.type = "checkbox";

    checkbox.checked = checkedStates[index];

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        cell1.style.backgroundColor = "lightgreen";
        cell2.style.backgroundColor = "lightgreen";
      } else {
        cell1.style.backgroundColor = "";
        cell2.style.backgroundColor = "";
      }

      checkedStates[index] = checkbox.checked;
      localStorage.setItem("checkedStates", JSON.stringify(checkedStates));
    });

    checkboxCell.appendChild(checkbox);

    const deleteCell = doc.createElement("td");
    const deleteButton = doc.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.style.borderRadius = "50px";
    deleteButton.style.backgroundColor = "red";
    deleteButton.addEventListener("click", function () {
      tasks.splice(index, 1);
      checkedStates.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      localStorage.setItem("checkedStates", JSON.stringify(checkedStates));
      updateTable();
    });

    deleteCell.appendChild(deleteButton);

    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(checkboxCell);
    newRow.appendChild(deleteCell);

    if (checkbox.checked) {
      cell1.style.backgroundColor = "lightgreen";
      cell2.style.backgroundColor = "lightgreen";
    }

    tbody.appendChild(newRow);
  });
}

updateTable();
