

var rotate = function(matrix) {
    let rows = colums = matrix.length;
    for (let i=0;i<rows;i++) {
        for (let j=i;j<colums;j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
         matrix[i]  =  matrix[i].reverse()
    }
    console.log(matrix)
}

rotate([[1,2,3],[4,5,6],[7,8,9]])
