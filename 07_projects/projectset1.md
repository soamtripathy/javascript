# Project related to DOM

# Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Findex.html)

# Solution Code

## Project 1

```javascript
console.log("Soumya")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener('click', function (event) {
    // console.log(event);
    // console.log(event.target);
    if (event.target.id == 'grey') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id == 'white') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id == 'blue') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id == 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
  });
});

```

## Project 2 Solution

```javascript
const form = document.querySelector('form');
//  this usecase will give you empty
//  const height = parseInt(document.querySelector('height').value);
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Please give a valid weight';
  } else {
    const bmi = ((weight / height / height) * 10000).toFixed(2);
    //show the results
    if (bmi < 18.6) {
      result.innerHTML = `<span> ${bmi} and You are Under Weight </span>`;
    }
    if (bmi < 18.6 && bmi > 24.9) {
      result.innerHTML = `<span> ${bmi} and You are Normal Weight </span>`;
    }
    if (bmi > 24.9) {
      result.innerHTML = `<span> ${bmi} and You are Over Weight </span>`;
    }
  }
});
```

## Project 3 Solution 
 ```javascript
 const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```