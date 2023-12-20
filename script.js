document.body.onload = function() {
  document.querySelector('header').classList.add('loaded');
};
function calculateBMI() {
    var heightInput = document.getElementById("height");
    var weightInput = document.getElementById("weight");
    var resultDiv = document.getElementById("result");
    var resultTable = document.getElementById("result-table");
  
    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);
  
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      resultDiv.innerText = "Por favor, insira valores válidos para altura e peso.";
      resultTable.innerHTML = "";
      return;
    }
  
    var bmi = weight / Math.pow(height / 100, 2);
    var bmiCategory = getBMICategory(bmi);
  
    resultTable.innerHTML = `
      <tr>
        <td>Altura</td>
        <td>${height} cm</td>
      </tr>
      <tr>
        <td>Peso</td>
        <td>${weight} kg</td>
      </tr>
      <tr>
        <td>IMC</td>
        <td>${bmi.toFixed(2)}</td>
      </tr>
      <tr>
        <td>Categoria</td>
        <td>${bmiCategory}</td>
      </tr>
    `;
  
    resultDiv.innerText = "";
  }
  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return "Abaixo do Peso";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Peso Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Sobrepeso";
    } else if (bmi >= 30 && bmi < 34.9) {
      return "Obesidade Grau 1";
    } else if (bmi >= 35 && bmi < 39.9) {
      return "Obesidade Grau 2";
    } else {
      return "Obesidade Grau 3";
    }
  }
function matricular() {
    alert("Você foi matriculado com sucesso!");
  }
function generateMotivationalPhrase() {
    const motivationalPhrases = [
      "Acredite em você mesmo e tudo será possível.",
      "Cada passo que você dá é um passo em direção ao seu objetivo.",
      "Persistência é a chave do sucesso.",
      "Você é mais forte do que pensa.",
      "Seja a mudança que você deseja ver no mundo."
    ];
    const motivationalPhraseElement = document.getElementById("motivationalPhrase");
    const randomIndex = Math.floor(Math.random() * motivationalPhrases.length);
    const selectedPhrase = motivationalPhrases[randomIndex];
    motivationalPhraseElement.textContent = selectedPhrase;
  }
      