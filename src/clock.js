// create a hex clock that changes color based on time

function time() {
    var date = new Date();
    var hours = date.getHours();
    hours=hours+1;
    var minutes = date.getMinutes();
    minutes = minutes+5;
    var seconds = date.getSeconds();
    var arr = [hours, minutes, seconds].map(function (num) {
        return num < 10 ? '0' + num : String(num);
    });

    hours = arr[0];
    minutes = arr[1];
    seconds = arr[2];

    return hours + minutes + seconds;
}

//console.log('clock.js:'+time());