let prev = {
    0: '😑',
    1: '😘',
    2: '😘',
    3: '😑',
    4: '😑',
    5: '😕',
};

window.onload = (event) => {
    //fetch the prev days feelings

    let week = document.getElementsByClassName("day");

    for(let i = 0; i < week.length -1; i++){
        let day = document.createElement('P');
        let mood = document.createElement('P');
        
        mood.classList.add("DayValue");
        mood.innerHTML = prev[i];

        day.classList.add("innertext");
        day.innerHTML = i + 1;

        week[i].appendChild(day);
        week[i].appendChild(mood);

        if(prev[i] == '😘'){
            week[i].style.background = "#4D96FF";
        }
        else if(prev[i] == '😑'){
            week[i].style.background = "#6BCB77";
        }
        else{
            week[i].style.background = "#FF6B6B";
        }
    }
}

async function onEmoteClick(node){

    let data = node.children[0].innerHTML;

    let week = document.getElementsByClassName("day");
    let day = document.createElement('P');
    let mood = document.createElement('P');
    
    mood.classList.add("DayValue");
    mood.innerHTML = data;

    day.classList.add("innertext");
    day.innerHTML = 7;


    week[6].innerHTML = "";
    week[6].appendChild(day);
    week[6].appendChild(mood);


    if(data == '😘'){
        week[6].style.background = "#4D96FF";
    }
    else if(data == '😑'){
        week[6].style.background = "#6BCB77";
    }
    else{
        week[6].style.background = "#FF6B6B";
    }
}

