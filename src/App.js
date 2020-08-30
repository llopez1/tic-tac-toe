import React from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = React.useState("");
  const [isPlayer1Turn, setIsPlayer1Turn] = React.useState(true); 

  const [box1, setBox1] = React.useState("");
  const [box4, setBox4] = React.useState("");
  const [box2, setBox2] = React.useState("");
  const [box3, setBox3] = React.useState(""); 
  const [box5, setBox5] = React.useState("");
  const [box6, setBox6] = React.useState("");
  const [box7, setBox7] = React.useState("");
  const [box8, setBox8] = React.useState("");
  const [box9, setBox9] = React.useState(""); // x, null, o

//logic
const handleClick = (boxFunc) =>{
  console.log("working");

  if (isPlayer1Turn == true) {
    boxFunc("X");
    setIsPlayer1Turn(false); 
  } else {
    boxFunc("O");
    setIsPlayer1Turn(true); 
  }
  
  //boxFunc("X"); 

}

  return (
    <>
    <div style={styles.rowContainer}>
  <div style={styles.box} onClick = {() => handleClick(setBox1)}><span style={styles.item}>{box1}</span></div>
     <div style={styles.box} onClick = {() => handleClick(setBox2)}><span style={styles.item}>{box2}</span></div>
     <div style={styles.box} onClick = {() => handleClick(setBox3)}><span style={styles.item}>{box3}</span></div>
    </div>
    
    <div style={styles.rowContainer}>
      <div style={styles.box} onClick = {() => handleClick(setBox4)}><span style={styles.item}>{box4}</span></div>
      <div style={styles.box} onClick = {() => handleClick(setBox5)}><span style={styles.item}>{box5}</span></div>
      <div style={styles.box} onClick = {() => handleClick(setBox6)}><span style={styles.item}>{box6}</span></div>
    </div>

    <div style={styles.rowContainer}>
      <div style={styles.box} onClick = {() => handleClick(setBox7)}><span style={styles.item}>{box7}</span></div>
      <div style={styles.box} onClick = {() => handleClick(setBox8)}><span style={styles.item}>{box8}</span></div>
      <div style={styles.box} onClick = {() => handleClick(setBox9)}><span style={styles.item}>{box9}</span></div>
    </div>
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
  }
}

export default App;
