// linear search
let a = 3
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12]

function linerserch(a, b) {
  for (let i = 0; i < b.length; i++) {
    if (b[i] == a) {
      return i // this will return the index
    }

  } return -1;
}

//console.log(linerserch(a,b))
let responce = linerserch(a, b)
if (responce === -1) {
  console.log(`element not found `)
} else {
  console.log(`element found at ${responce}`)
}


//

function ser(a, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == a) {
      return i;
    }

  }
  return -1
}

//console.log(ser(7,b))


function binary(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  while (r >= l) {
    let mid = Math.floor((l + r) / 2)

    if (arr[mid] == target) {
      return mid
    }

    if (target > arr[mid]) {
      l = arr[mid] + 1
    } else {
      r = arr[mid] - 1
    }

  }
  return -1
}

console.log(binary(b, 5))





function bin(arr) {
  let r = 0
  let l = arr.len - 1;

  while (r >= l) {
    let mid = Math.floor((r + l) / 2)
    for (let i = 0; i < arr.length; i++) {

     // const element = array[i];
 
     if (target==arr[mid]) {
      return mid;
    }

      if (target > arr[mid]) {
        r = mid + 1
      }
      else {
        l = mid - 1
      }

    }
  }
  return -1
}

