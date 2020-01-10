const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const createRandmArr = arr => {
  let newArr = [];

  while (newArr.length < arr.length) {
    let ran = Math.floor(Math.random() * arr.length);
    if (!newArr.includes(arr[ran])) {
      newArr.push(arr[ran]);
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

let randArr = createRandmArr(arr);

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
let body=document.querySelector('body')

form.addEventListener('submit',(e)=>{
  
 
 e.preventDefault();
  if (document.querySelector('.card')) {
    document.querySelectorAll('.card').forEach(elm=>{
      elm.remove()
    })
  }
   let userInput = parseInt(form.antal.value)
  let groups=chunkArray(randArr, userInput)

 if(groups===''){
   let error= document.createElement('p')
   error.classList = 'error'
   error.textContent = 'Input Is Greater Than List'
   body.appendChild(error)
   
 }else{
    groups.forEach(items => {
     let card = document.createElement('div')
     card.classList = 'card'
     items.forEach(item => {
       let p = document.createElement('p')
       p.textContent = item
       card.appendChild(p)
       body.appendChild(card)
     })
   })
 }

  document.getElementById("test").scrollIntoView();
  randArr = createRandmArr(arr)

  
})


