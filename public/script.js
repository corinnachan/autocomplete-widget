
let input = document.getElementById('inputBox');
let dataList = document.getElementById('json-datalist');
let dropdown = document.getElementById('dropdown');

/* Script to get list of pokemon when typing in input box */

fetchData(function (result) {
  createOption(result);
  eventHandler(result);
});

/* Create list of options for datalist tag */

function createOption (result) {
  for (i in result.pokemon) {
    var option = document.createElement('option');
    var text = result.pokemon[i].name;
    option.value = text;
    dropdown.appendChild(option);
  }
}

/* Event handler for inputs in input box */

function eventHandler (result) {
  input.addEventListener('input', function (e) {
    var newValue = e.target.value;
    createList(result, newValue);
  });
}

/* Function for creating output */

function createList(result, x) {
  for (i in result.pokemon) {
    if (x == result.pokemon[i].name) {
      var outputType = result.pokemon[i].type[0];
      var poketype = document.getElementById('poketype');
      poketype.innerHTML.textContent = outputType;
    }
  }
}
