//create the div elelment
function fullScreen(element) {
    var newElement = document.createElement(element);
    var button = document.createElement('button');
    button.backgroundColor = 'pink';
    
    
    newElement.style.height = '20vh';
    newElement.style.width = '30vh'
    document.body.appendChild(newElement);
    return newElement;
}

function input(inputType, DOMElement, callback) {
   DOMElement.addEventListener(inputType,function(event) {
    var y = event.clientY;
    var x = event.clientX;
    callback(DOMElement,x,y);  //output in our case
   });
}

function output(element, x, y) {
   element.textContent = x + ', ' + y;
   element.style.backgroundColor = 'rgb(' + x + ',' + y + ', 50)';
}

function partScreen(element) {
    var box = document.createElement(element);
    //var button = document.createElement(button);
    box.style.height = '40vh';
    box.style.width = '40vh';
    box.textContent='my button';
    box.style.backgroundColor = 'blue';

  var box2 = document.createElement('DIV');
    //var button = document.createElement(button);
    box2.style.height = '20vh';
    box2.style.width = '20vh';
    box2.textContent='my div';
    box2.style.backgroundColor = 'green';

    document.body.appendChild(box);
    document.body.appendChild(box2);
    return box;
}

