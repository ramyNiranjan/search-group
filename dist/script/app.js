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
    console.log("recurse motherfucker");
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
    return "too much";
  }
};

console.log(chunkArray(randArr, 5));
