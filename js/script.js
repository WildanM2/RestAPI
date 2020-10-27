const data = "data.json";
const listKlg = document.querySelector('#klg-list');
var urlParams = new URLSearchParams(window.location.search);
var jk = (urlParams.get("jk"));

const getListKlg = ()=>{
    fetch(data)
        .then(response => {
            return response.json();
        }).then(responsJson => {
                console.log(responsJson.myfamily);
                if (jk == null) {
                showlistKlg(responsJson.myfamily);
                } else {
                    showlistKlgfromGender(responsJson.myfamily);
                }
        }).catch(error =>{
            console.error(error);
        });
}
 
const showlistKlg = klg =>{
    listKlg.innerHTML = "";
    klg.forEach(item => {
        listKlg.innerHTML += `
        <div class="col s12 m6 l3">
        <div class="card">
            <div class="card-image">
            <img src="${item.foto}">
            <span class="card-title">${item.status}</span>
            </div>
            <div class="card-content">
            <p>
            Nama          : ${item.nama}<br>
            Umur          : ${item.umur}<br>
            Jenis Kelamin : ${item.jk}<br>
            Hobi          : ${item.hobi}
            </p>
            </div>
            <div class="card-action">
            <a href="#">This is a link</a>
            </div>
        </div>
        </div>
        `
    });
}

const showlistKlgfromGender = klg => {
    listKlg.innerHTML = "";
    if (jk=="L"){
        jk = "Laki-laki";
    } else {
        jk = "Perempuan";
    }
    klg.forEach(item => {
        console.log(jk);
        if (item.jk == jk) {
        listKlg.innerHTML += `
        <div class="col s12 m6 l3">
        <div class="card">
            <div class="card-image">
            <img src="${item.foto}">
            <span class="card-title">${item.status}</span>
            </div>
            <div class="card-content">
            <p>
            Nama          : ${item.nama}<br>
            Umur          : ${item.umur}<br>
            Jenis Kelamin : ${item.jk}<br>
            Hobi          : ${item.hobi}
            </p>
            </div>
            <div class="card-action">
            <a href="#">This is a link</a>
            </div>
        </div>
        </div>
        `
    }
    });
}

document.addEventListener('DOMContentLoaded', function(){ 
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    getListKlg();
});