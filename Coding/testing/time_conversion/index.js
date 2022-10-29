const fixTimeString = (time) => (time < 10 ? `0${time}` : time);

function timeConversion(time){

    if(time < 1000){
        var milliseconds = Math.floor((time % 1000) / 100);
        return milliseconds;
    }

    else if(time < 60000){
        var milliseconds = Math.floor((time % 1000) / 100),
        seconds = Math.floor((time / 1000) % 60);
        return seconds;
    }

    else if(time < 3600000){
        var milliseconds = Math.floor((time % 1000) / 100),
        seconds = Math.floor((time / 1000) % 60),
        minutes = Math.floor((time / (1000 * 60)) % 60);
        if(seconds < 1){
            return minutes;
        }else{
            return minutes + ":" + seconds;
        }
        
    }

    else if(time >= 3600000){
        var milliseconds = Math.floor((time % 1000) / 100),
        seconds = Math.floor((time / 1000) % 60),
        minutes = Math.floor((time / (1000 * 60)) % 60),
        hours = Math.floor((time / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    }

}

console.log(timeConversion(200000));

module.exports = timeConversion;