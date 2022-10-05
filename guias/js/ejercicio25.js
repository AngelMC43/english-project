

for (let row = 1; row <= 10; row++) {
    let line = ""
    for (let column = 1; column <= 10; column++) {
        if( row === 1 || row === 10 || column === 1 || column === 10) {
            line = line + "*";
        } else {
            line = line + " ";
        }
    }
    console.log(line);
}