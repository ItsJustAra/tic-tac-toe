let player = 'X' ;
const indexes = ['a','b','c','d','e','f','g','h','i'] ;
let gameState = ["", "", "", "", "", "", "", "", ""];
document.getElementById("txtX").innerHTML = "Your Turn" ;
let wins = false ;

const Conditions = [
    [0, 3, 6],[1, 4, 7],[2, 5, 8],
    [0, 1, 2],[3, 4, 5],[6, 7, 8],
    [0, 4, 8],[2, 4, 6]
];

document.getElementById("btn").onclick = function AutoReset () {

    document.getElementById("txtX").innerHTML = "Your Turn" ;
    document.getElementById("txtO").innerHTML = "" ;
    indexes.forEach(reset) ;
    player = 'X' ;
    let wins = false ;
    console.log("it works see");
}

function reset( ele , index ) {
    document.getElementById(ele).innerHTML = "" ;
    document.getElementById(ele).style.pointerEvents = "auto";
    gameState[index] = '';
}

indexes.forEach(print);

function print( ele , index ) {
    document.getElementById(ele).onclick = function() {
        if( player === 'X') {
            document.getElementById(ele).innerHTML = player;
            document.getElementById(ele).style.color = "rgb(5, 96, 233)" ;
            document.getElementById(ele).style.pointerEvents = "none";
            gameState[index] = player ;
            player = 'O' ; 
            document.getElementById("txtX").innerHTML = "" ;
            document.getElementById("txtO").innerHTML = "Your Turn" ;
        }

        else if( player === 'O') {
            document.getElementById(ele).innerHTML = player;
            document.getElementById(ele).style.color = "#f84a43";
            gameState[index] = player ;
            player = 'X' ;
            document.getElementById("txtX").innerHTML = "Your Turn" ;
            document.getElementById("txtO").innerHTML = "" ;
        }
        check(gameState) ;
    }
}

function check(ele){
    for (let i = 0; i <= 7; i++) {
        if ( ele[Conditions[i][0]] === '' || ele[Conditions[i][1]]  === '' || ele[Conditions[i][2]]  === '') {
            continue;
        }

        if (ele[Conditions[i][0]]  === ele[Conditions[i][1]]  && ele[Conditions[i][1]]  === ele[Conditions[i][2]] ) {

            if( ele[Conditions[i][0]] === 'X'){
                document.getElementById("txtX").innerHTML = "WINS" ;
                document.getElementById("txtO").innerHTML = "" ;
            }

            else if(ele[Conditions[i][0]] === 'O'){
                document.getElementById("txtX").innerHTML = "" ;
                document.getElementById("txtO").innerHTML = "WINS" ;
            }

            alert(`${ele[Conditions[i][0]]} WINS , Press The Reset Button For A Other Round`) ;

            indexes.forEach(function(ele, index){
                document.getElementById(ele).style.pointerEvents = "none";
            })
        }
    }

    if( wins !== true){

        let count = 0 ;

        for( var i = 0 ; i < 9 ; i++){
    
            if(ele[i] !== '')
                count++ ;
        }
    
        if( count == 9 ){
            document.getElementById("txtX").innerHTML = "DRAW" ;
            document.getElementById("txtO").innerHTML = "DRAW" ;
            alert(`DRAW , Press The Reset Button For A Other Round`) ;
            indexes.forEach(function(ele, index){
                document.getElementById(ele).style.pointerEvents = "none";
            })
        }
    }
}
