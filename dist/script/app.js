// const arr = ['karl', 'ramy', 'patric', 'chris', 'elin', 'sam', 'john', 'shan', 'fanny', 'jude'];


const createRandmArr = names => {
  let newArr = [];



  while (newArr.length < names.length) {
    let ran = Math.floor(Math.random() * names.length);
    if (!newArr.includes(names[ran])) {
      newArr.push(names[ran]);
    }
  }

  return newArr;
};

const restNumbers = (grps, newArr, oldArr, groupNumbers) => {
  let randNum = Math.floor(Math.random() * grps);

  if (newArr[randNum].length > groupNumbers) {
    restNumbers(grps, newArr, oldArr, groupNumbers);
  } else {
    newArr[randNum].push(oldArr[0]);
    oldArr.shift();
  }
};

let randArr = createRandmArr(names);

const chunkArray = (arr, numOfGrp) => {
  let x = [];
  let createdgrpFromArray = Math.floor(arr.length / numOfGrp);

  if (numOfGrp <= arr.length) {
    while (x.length < numOfGrp) {
      x.push(arr.splice(0, createdgrpFromArray));
    }

    if (arr.length !== 0) {
      for (let i = 0; i <= arr.length; i++) {
        restNumbers(numOfGrp, x, arr, createdgrpFromArray);
      }
    }

    return x;
  } else {
    return '';
  }
};


let form = document.querySelector('.shuffle-setup__form')
let results = document.querySelector('.shuffle-results')

form.addEventListener('submit', (e) => {


  e.preventDefault();
  if (document.querySelector('.card')) {
    document.querySelectorAll('.card').forEach(elm => {
      elm.remove()
    })

  } else if (document.querySelector('.error')) {
    document.querySelector('.error').remove()
  }
  let userInput = parseInt(form.antal.value)
  let groups = chunkArray(randArr, userInput)

  if (groups === '') {
    let error = document.createElement('p')
    error.classList = 'error'
    error.textContent = 'Input Is Greater Than List'
    results.appendChild(error)

  } else {
    groups.forEach(items => {
      let card = document.createElement('div')
      card.classList = 'card'
      items.forEach(item => {
        let p = document.createElement('p')
        p.textContent = item
        card.appendChild(p)
        results.appendChild(card)
      })

    })

    let footer = document.querySelector('.footer');
    if (results.childElementCount !== 0) {
      footer.style.display = 'flex'
    }
  }

  document.getElementById("test").scrollIntoView();
  randArr = createRandmArr(names)


})