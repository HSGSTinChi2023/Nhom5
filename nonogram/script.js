var num = 0;
var cmp = 0;
lose = 0;
turn = 1
const row = ["", "", "", "", "", ""]
const col = ["", "", "", "", "", ""]

function change() {
    if(turn == 1) {
        document.getElementById("change").style.backgroundColor = 'black';
        turn = 2;
    }
    else if(turn == 2) {
        document.getElementById("change").style.backgroundColor = 'bisque';
        turn = 1;
    }
}

const matrix = [[1, 0, 1, 1, 1, 1],
                [1, 1, 0, 0, 1, 1],
                [1, 0, 1, 0, 1, 0],
                [0, 1, 1, 0, 1, 1],
                [1, 1, 1, 1, 0, 1],
                [0, 1, 1, 1, 0, 1]]

const check = [[0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0]]

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        cmp += matrix[i][j]
    }
}

for (let i = 0; i < 6; i++) {
    var count = 0
    for(let j = 0; j < 6; j++) {
        if(matrix[i][j] == 1) {
            count++
        }
        else if(count >= 1) {
            row[i] = row[i].concat(count.toString(), " ")
            count = 0
        }
    }
    if(count != 0) {
        row[i] = row[i].concat(count.toString())
    }    
}

for (let j = 0; j < 6; j++) {
    var count = 0
    for(let i = 0; i < 6; i++) {
        if(matrix[i][j] == 1) {
            count++
        }
        else if(count != 0) {
            col[j] = col[j].concat(count.toString(), " ")
            count = 0
        }
    }
    if(count != 0) {
        col[j] = col[j].concat(count.toString())
    }    
}

function myfunction(id) {
    r = parseInt((id - 1) / 6)
    c = (id - 1) % 6
    if(turn == 1) {
        if(matrix[r][c] == 1)
        {
            document.getElementById(id).style.backgroundColor = "bisque";
            if(check[r][c] == 0)
            {
                check[r][c] = 1
                num++   
            }
        }
        else
        {
            lose++
            document.getElementById(id).style.backgroundColor = "black";
            if(lose == 3000) 
            {
                document.getElementById("lose").style.display = "block";
            }
            else
            {
                document.getElementById("wrong").style.display = "block";
            }
        }        
    }
    else if(turn == 2) {
        if(matrix[r][c] == 0)
        {
            document.getElementById(id).style.backgroundColor = "black";
        }
        else
        {
            lose++
            document.getElementById(id).style.backgroundColor = "bisque";
            if(lose == 3000) 
            {
                document.getElementById("lose").style.display = "block";
            }
            else
            {
                
                document.getElementById("wrong").style.display = "block";
            }
        }  
    }
    if(num == cmp)
    {
        document.getElementById("win").style.display = 'block';
    }
}

function replay() {
    document.getElementById("wrong").style.display = 'none';
}

function on() {
    location.reload()
}

function reset() {
    document.getElementById("reset").style.display = 'none';
    document.getElementById("dcmvinh").style.display = 'block';

    document.getElementById("r1").innerHTML = row[0];
    document.getElementById("r2").innerHTML = row[1];
    document.getElementById("r3").innerHTML = row[2];
    document.getElementById("r4").innerHTML = row[3];
    document.getElementById("r5").innerHTML = row[4];
    document.getElementById("r6").innerHTML = row[5];

    document.getElementById("37").innerHTML = col[0];
    document.getElementById("38").innerHTML = col[1];
    document.getElementById("39").innerHTML = col[2];
    document.getElementById("40").innerHTML = col[3];
    document.getElementById("41").innerHTML = col[4];
    document.getElementById("42").innerHTML = col[5];
}
