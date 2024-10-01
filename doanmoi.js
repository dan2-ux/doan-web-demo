const firebaseConfig = {
  apiKey: "AIzaSyA42nqZT73f5epwzefI5xNY5y4fWqwWb6E",
  authDomain: "doan-9a8fd.firebaseapp.com",
  databaseURL: "https://doan-9a8fd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "doan-9a8fd",
  storageBucket: "doan-9a8fd.appspot.com",
  messagingSenderId: "140758962502",
  appId: "1:140758962502:web:5c9a588a2ab470fa499547"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

const tenkiemtra = document.getElementById("tenkiemtra")
const nutkiemtra = document.getElementById("nutkiemtra")
const ngaykiemtra = document.getElementById("ngaykiemtra")
const addnew = document.getElementById("addnew")
const add = document.querySelector("#add")
const infors = document.getElementById("infors")
const line = document.querySelector("#line")
const home = document.getElementById("home")
const homepage= document.querySelector("#homepage")
const chuahinh = document.querySelector("#chuahinh")
const date = new Date()

function thoigian(){
  document.getElementById("trangthai").innerHTML = `Trạng thái cửa tại thời điểm${date}`
}

setInterval(thoigian)

nutkiemtra.onclick = function() {
  let ngaydekiemtra = ngaykiemtra.value
  
  chuahinh.style.display = "block"
  let tendekiemtra = tenkiemtra.value;
  const storageRef = storage.ref();
  const imageRef = storageRef.child(`picture/${tendekiemtra}-${ngaydekiemtra}.jpg`); // Corrected string interpolation

  // Get the download URL and set it to the img tag
  imageRef.getDownloadURL().then((url) => {
    document.getElementById('firebaseImage').src = url;
    document.getElementById("comat").innerHTML = "Có Mặt"
  }).catch((error) => {
    console.error('Error fetching image:', error);
    document.getElementById("comat").innerHTML = "Không Có Mặt"
 });
}







let count = 0
let countI = 0

home.onclick = function(){
    
        homepage.style.display = "block"
        line.style.display = "none"
        add.style.display = "none"
        
}
addnew.onclick = function(){
    
        add.style.display = "block"
        line.style.display = "none"
        homepage.style.display = "none"
}
infors.onclick = function(){
    
        line.style.display = "block"
        add.style.display = "none"
        homepage.style.display = "none"
}


const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const purposenho = document.querySelector("#purposenho")
const howtonho = document.querySelector("#howtonho")


let count1 = 0
button1.onclick = function(){
count1 ++
    if(count1 % 2 !== 0){
        purposenho.style.display = "block"
    }
    else if(count1 % 2 ===0){
        purposenho.style.display = "none"
    }
}
    let count2 =0
        button2.onclick = function(){
        count2 ++
    if(count2 % 2 !== 0){
        howtonho.style.display = "block"
    }
    else if(count2 % 2 ===0){
        howtonho.style.display = "none"
    }
}



