const form = document.getElementById("formAtividade");
const imgAprovado =
  '<img src="./images/aprovado.png" alt="Emoji Festejando" />';
const imgReprovado =
  '<img src="./images/reprovado.png" alt="Emoji Decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima"));

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addLinha();
  updateTable();
  updateGradeAverage();
});

function addLinha() {
  const inputNomeAtividade = document.getElementById("nomeAtividade");
  const inputNotaAtividade = document.getElementById("notaAtividade");

  if (atividades.includes(inputNomeAtividade.value)) {
    alert(`A atividade ${inputNomeAtividade.value} já foi inserida`);
  } else {
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = "<tr>";
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${
      inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado
    }</td>`;
    linha += "</tr>";
    linhas += linha;
  }
  inputNomeAtividade.value = "";
  inputNotaAtividade.value = "";
}

function updateTable() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

function resultGradeAverage() {
  let somaNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
  }
  return somaNotas / notas.length;
}

function updateGradeAverage() {
  const finalGradeAverage = resultGradeAverage();
  const limitGradeAverage = finalGradeAverage.toFixed(1);

  document.getElementById("gradeAverage").innerHTML = limitGradeAverage4;
  document.getElementById("resultGradeAverage").innerHTML =
    limitGradeAverage >= notaMinima ? spanAprovado : spanReprovado;
}
