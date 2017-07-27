document.body.innerHTML = "Hello from javascript!!zzz"

var object = {
    name: 'BobK',
    address: {
        state: 'Florida'
    }
};

var myname=object.name;
function run() {
     object.address.state='CA';
    document.body.innerHTML =    
     'Hi ' + ' you\'re in sunny ' +object.address.state;

    var para = document.createElement('P');
    para.textContent = 'The dom is the bomb!';
    document.body.appendChild(para);
}