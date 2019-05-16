var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/windows-and-drapes.jpg') {
      myImage.setAttribute ('src','images/sunset-at-sea.png');
    } else {
      myImage.setAttribute ('src','images/windows-and-drapes.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Ulrich ist wundervoll, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Ulrich ist wundervoll, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
