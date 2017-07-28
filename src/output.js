function outputbob(time) {
    var hexcolor = '#' + time;
    var element = document.createElement('DIV');
    element.textContent = hexcolor;
    element.style.backgroundColor = hexcolor;
    element.style.height = '60vh';
    element.style.width = '60vh';
    document.body.appendChild(element);
}

function output(time) {
    var hexcolor = '#' + time;
     document.body.bgColor = hexcolor;
    document.body.textContent = hexcolor;
   
   // document.body.style.color = hexcolor;
   var x = 20;
   var y = 00;
   var z = 00;
    //'rgb(' + x + ',' + y + ', 50)'
    document.body.style.color = 'rgb(' + x + ',' + y + ', 50)';
}

function startClick(callback) {
   document.body.addEventListener('dblclick', function(event) {
        callback(); //init()
    });
}

function stopClick(callback, intervalName) {
    document.body.addEventListener('click', function(event) {
        callback(intervalName); //=clearInterval(tick)
    });
}
function init() {
 var tick = setInterval( function() {  output(time()) }, 1000) ;  
 stopClick(clearInterval, tick);
 startClick(init);
}

init();