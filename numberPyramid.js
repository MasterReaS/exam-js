function generatePyramid() {
  totalNumberofRows = 5;
  output = '';
  for (i = 1; i <= totalNumberofRows; i++) {
    for (j = 1; j <= i; j++) {
      output += j + '  ';
    }
    console.log(output);
    output = '';
  }
}

generatePyramid();