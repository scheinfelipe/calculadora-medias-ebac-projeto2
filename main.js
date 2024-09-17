const form = document.getElementById("main_form")
const imgAprovado = "<img width='30px' src='./images/aprovado.svg' alt='Emoji feliz' />"
const imgReprovado = "<img width='30px' src='./images/reprovado.svg' alt='Emoji triste' />"
const activities = []
const grades = []
const minGrade = parseFloat(prompt("Digite a nota minima para aprovação"))

form.addEventListener("submit", function (e) {
  e.preventDefault();
  createRow()
  updateResult()
});


function createRow() {
  const inputName = document.getElementById("input_name")
  const inputGrade = document.getElementById("input_grade")

  if (activities.includes(inputName.value)) {
    alert(`A atividade: ${inputName.value} já foi inserida`)
  } else {

    activities.push(inputName.value);
    grades.push(parseFloat(inputGrade.value));

    let linha = "<tr>";
    linha += `<td>${inputName.value}</td>`;
    linha += `<td>${inputGrade.value}</td>`;
    linha += `<td>${inputGrade.value >= minGrade ? imgAprovado : imgReprovado}</td>`;
    linha += "</tr>";
    addRow(linha)
  }
  form.reset()
}

function addRow(row) {
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML += row
}

function updateResult() {
  const result = calcResult();
  document.getElementById("result_value").innerHTML = result
  document.getElementById("result_text").className = result >= minGrade ? "resultado aprovado" : "resultado reprovado"
}

function calcResult() {
  let total = 0

  for (let i = 0; i < grades.length; i++) {
    total += grades[i]
  }

  return total / grades.length
}