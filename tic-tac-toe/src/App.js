import React from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = React.useState("");
  const [isPlayer1Turn, setIsPlayer1Turn] = React.useState(true);
  const [acc, setAcc] = React.useState(0);
  const [isGameOver, setIsGameOver] = React.useState(false); 
 
  const [box1, setBox1] = React.useState("");
  const [box4, setBox4] = React.useState("");
  const [box2, setBox2] = React.useState("");
  const [box3, setBox3] = React.useState(""); 
  const [box5, setBox5] = React.useState("");
  const [box6, setBox6] = React.useState("");
  const [box7, setBox7] = React.useState("");
  const [box8, setBox8] = React.useState("");
  const [box9, setBox9] = React.useState(""); 
  

//logic
React.useEffect(()=>{
  console.log("PLAYA", isPlayer1Turn , checkDiagonal() || checkHortizontal() || checkVertical())
  if(checkDiagonal() || checkHortizontal() || checkVertical()) {
    const player = isPlayer1Turn?"X":"0" //ternary statement
    setDisplay("WINNER! " + player); 
    setIsGameOver(true); 
  }
}, [box1, box2, box3, box4, box5, box6, box7, box8, box9])

const handleClick = (boxFunc, accumulator) => {
  console.log("working");

  if(isGameOver) {
   return 
  }
  if (isPlayer1Turn === true) {
    boxFunc("X");
    
    setDisplay("It's player O's turn");
    if (acc === 4) {
      setDisplay("NO WINNERS. TRY AGAIN!"); 
          };
    accumulator(acc + 1);
    console.log(acc); 
    
  } else {
    boxFunc("O");
    setDisplay("It's player X's turn");
  } 
  setIsPlayer1Turn(!isPlayer1Turn); 
  
} 

// ensures that nulls are not counted as answers
const nullIsNotAnswer = () => {
  // this function will return true so that CHECKS can ensure that if is false
  //row1
  if(box1== "" && box2 == "" && box3 == "") {
    return true;
  }
  //row2
if(box4 == "" && box5 == "" && box6 == "") {
  return true; 
}
  //row3
if (box7 == "" && box8 == ""  && box9 == "") {
  return true; 
}
  //vert1
if (box1 == "" && box5 == "" && box9=="")  {
  return true; 
}
  //vert2
if (box3 == "" && box5 == "" && box7 =="") {
  return true
} 
return false; 
}

nullIsNotAnswer(); 

// CHECKS
const checkDiagonal = () => {
  if ( acc > 2  ) {

      if (box1 != box1 && box1 == box5 && box5 == box9 && box1 == box9 && box1 != "") {
        console.log("We have a winner! " + box1);
        return true; 
      } else if (box1 != box1 && box3 == box5 && box5 == box7 && box3 == box7) {
        console.log("The winner is! " + box3);
        return true
      }
    }

}


const checkHortizontal = () => {
  if (acc > 2) {
   
      if(box1 != box1 && box1 == box2 && box2 == box3 && box1 == box3) {
        console.log(box1 + " WON Row 1");
        return true; 
      } else if (box4 != box4 && box4 == box5 && box5 == box6 && box4 == box6) {
        console.log(box4 + " WON! Row2");
        return true; 
      } else if(box7!== box7 && box7 == box8 && box8 == box9 && box7 == box9 ){
        console.log(box7 + " FACK WON! Row3"); 
        return true; 
      }

    return false; 
  } 
}

const checkVertical = () => {
  if (acc > 2) {

      if(box1 != box1 && box1 == box4 && box4 == box7 && box1==box7){
        console.log(box1 + " WON Row 1");
        return true; 
      } else if(box2 != box2 && box2 == box5 && box5 == box8 && box2==box8) {
        return true; 
      } else if (box3 != box3 && box3 == box6 && box6 == box9 && box3 == box9) {
        return true; 
      } 
    
    return false;
  }
}


  return (
    <>
    <div style={styles.rowContainer}>
  <div style={styles.box} onClick = {() => handleClick(setBox1, setAcc)}><span style={styles.item}>{box1}</span></div>
     <div style={styles.box} onClick = {() => handleClick(setBox2, setAcc)}><span style={styles.item}>{box2}</span></div>
     <div style={styles.box} onClick = {() => handleClick(setBox3, setAcc)}><span style={styles.item}>{box3} </span></div>
    </div>
    
    <div style={styles.rowContainer}>
      <div style={styles.box} onClick = {() => handleClick(setBox4, setAcc)}><span style={styles.item}>{box4}</span></div>
      <div style={styles.box} onClick = {() => handleClick(setBox5, setAcc)}><span style={styles.item}>{box5}</span></div>
      <div style={styles.box} onClick = {() => handleClick(setBox6, setAcc)}><span style={styles.item}>{box6}</span></div>
    </div>

    <div style={styles.rowContainer}>
      <div style={styles.box} onClick = {() => handleClick(setBox7, setAcc)}><span style={styles.item}>{box7}</span></div>
      <div style={styles.box} onClick = {() => handleClick(setBox8, setAcc)}><span style={styles.item}>{box8}</span></div>
      <div style={styles.box} onClick = {() => handleClick(setBox9, setAcc)}><span style={styles.item}>{box9}</span></div>
    </div>
    <div style={styles.messaging}>{display}</div>
    </>
  );
}

const styles = {
  box: {
    height: 100,
    width: 100, 
    border: "2px solid black", 
    borderColor: "black", 
    fontSize: 50,
    alignItems: "center", 
    justifyContent: "center", 
    
  },

  rowContainer: {
    display: "flex",
    textAlign: "center"
  },
  item: {
    margin: "auto",
    position:"absolute"
  }, 
  messaging: {
    color: "red",
    fontSize:35
  }
}

export default App;  
