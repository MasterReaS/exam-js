function generatePyramid() {
  let totalNumberofRows = 5;
  let output = '';
  for (let i = 1; i <= totalNumberofRows; i++) {
    for (let j = 1; j <= i; j++) {
      output += j + '  ';
    }
    console.log(output);
    output = '';
  }
}

generatePyramid();