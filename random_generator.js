/*creare buton deschidere fereastra de introducere nume*/
const createButton= document.createElement('button');
createButton.innerHTML= 'Adauga';
createButton.type= "button";
createButton.name= "adaugare";
document.body.appendChild(createButton)

/*createButton.onclick = adaugare(){
    document.getElementById("f_code").innerHTML= document.getElementById
}*/

var counter=1;
createButton.onclick= adaugare(){
    var completelist=document.getElementById("listaafisare");
    completelist.innerHTML+="<li>"+counter+"</li>"
    counter++;
}

function repeatvalue() {
    document.getElementById("listaMail").innerHTML= document.getElementById("f_email").value;
}

var vector_valori = [ a, b, c, d, e];

var cont= document.getElementById('listaMail');
var ul = document.createElement('ul');

ul.setAttribute('id', 'listaMail');
for(i=0;i<=arr.length-1;i++){
    var li = document.createElement('li'); //creaza element in lista
    li.innerHTML= arr[i]; //atribuie o valoare lui li folosind valorile din vector
    li.setAttribute('style', 'display:block;');
    ul.appendChild(li);
    let x=Math.floor((Math.random()*100000000));
    document.getElementById('text').innerHTML=this.value;
}

cont.appendChild(ul);

function random(max, min){
    var cod=Math.floor((Math.random()*(max-min+1)+min));
}

