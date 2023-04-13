function fnadd() {
    var inp=document.getElementsByTagName('input')[0];
    var lidom=document.createElement('li');
    var btndom=document.createElement('button');
    var uldom= document.getElementsByTagName('ul')[0]
    
    
    lidom.innerText=inp.value;
   
    uldom.append(lidom)
    btndom.innerText="刪除"
    lidom.append(btndom)
    btndom.addEventListener('click',remove)
    
    inp.value="";
}

function fndd() {
    var h=document.getElementById('hd')
    if(h.classList.contains('as')){
        h.classList.remove('as')
        h.classList.add('red')
    }
    else{
        h.classList.remove('red')
        h.classList.add('as')
    }
}

function remove(a) {
    var btnr=a.target.parentNode
    btnr.parentNode.removeChild(btnr)
}
var btnd=document.getElementById('btn')
btn.addEventListener('click',fndd)

var btns=document.getElementsByClassName('btnadd')[0];
btns.addEventListener('click',fnadd,false)