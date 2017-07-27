//create the div elelment
function run2() {
    var div = document.createElement("DIV");

    //set height

    div.style.height = '100vh';

    document.body.appendChild(div);

    div.addEventListener('mousemove', function (event) {
       div.textContent= event.clientX + ', ' + event.clientY;
       var x = event.clientX; var y = event.clientY;
       div.style.backgroundColor=  'rgb('+x+','+y+', 100)';
       // console.log(event);
    });

}


