const value = document.getElementById('result-hex')
const btn = document.getElementById('btn')
const hexround = document.getElementById('hex-round')
const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 

btn.addEventListener('click', changeHex)

function changeHex() {
    let hex = '#';
  
    for(let i = 0; i < 6; i++){
      const index = Math.floor(Math.random() * hexValues.length)
      hex += hexValues[index];
    }
  
    value.textContent = hex;
    hexround.style.backgroundColor = hex;
    value.style.color = hex
}