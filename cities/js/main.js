// import { cities } from "./data.js"; // we imported the array of the cities from the file data.js. you can use in your code the array with the name 'cities'


let input = document.getElementById('searchfield');
let output = document.getElementById('output');


input.addEventListener('input', test);

function test(){
    let inputText = input.value;
    output.innerHTML = '';

    if(inputText.length > 0){
        for(i = 0; i < cities.length; i++){

            let x = cities[i].city.toUpperCase().search(inputText.toUpperCase());
            let y = cities[i].state.toUpperCase().search(inputText.toUpperCase());
            let z = cities[i].population.toUpperCase().search(inputText.toUpperCase());
            
            
            if(x != -1 || y != -1 || z != -1){
                output.innerHTML += `<li>${mark(cities[i].city, inputText)} ${mark(cities[i].state, inputText)} ${mark(cities[i].population, inputText)}</li>`;
            }
        }
    }
}

function mark(text, search){
    var re = new RegExp(search, 'i');
    return text.replace(re, `<mark>${search}</mark>`);
}
