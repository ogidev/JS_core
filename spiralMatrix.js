function spiralMatrix(rows, columns) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push('0'.repeat(columns).split(''));
    }
    let operations = rows*columns;
    let rotations = 0;
    let lastNumber = 1;
    let currentRow = 0;
    let currentCol = 0;


while(lastNumber<=operations) {

    //go right

    for (currentCol;currentCol<columns-rotations;currentCol++) {
        matrix[currentRow][currentCol]=lastNumber;
        lastNumber++;
        }


    //go down
    currentCol--;
    currentRow++;
    for (currentRow; currentRow<rows-rotations;currentRow++){
        matrix[currentRow][currentCol]=lastNumber;
        lastNumber++;
    }

    //go left
    currentRow--;
    currentCol--;
    for (currentCol; currentCol>=0+rotations; currentCol--) {
        matrix[currentRow][currentCol]=lastNumber;
        lastNumber++;
    }

    //go up
currentCol++;
    currentRow--;
    for (currentRow; currentRow>0+rotations; currentRow--){
        matrix[currentRow][currentCol]=lastNumber;
        lastNumber++;
    }
    rotations++;
    currentRow++;
    currentCol++;
}
    for (let line of matrix){
    console.log(line.join(' '))
    }

}


spiralMatrix(4,4);