// document.onload = function () {
//   let input = document.getElementById('inputBox');
//
//   input.onkeydown = function () {
//     console.log(input.textContent);
//   }
// }

let input = document.getElementById('inputBox');
let dataList = document.getElementById('json-datalist');


input.addEventListener('input', function(e) {
  e.preventDefault();
  const inputValue = e.target.value;
  const sendUrl = `/autocomplete?pokemon=${inputValue}`;

  var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.status == 200 && xhr.readyState == 4) {
        const response = JSON.parse(xhr.response);
        dataList.innerHTML = '';

        for (var i = 0; i < response.length; i++) {
          const optionElem = document.createElement('option');
          optionElem.textContent = response[i];
          dataList.appendChild(optionElem);
        }
      }

    };

    xhr.open('GET',sendUrl, true);
    xhr.send();
  });

//check textContent and fix it
//make ajax request where pass search input as query parameter
//render result on the page
