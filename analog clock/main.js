setInterval(()=>{
    myDate=new Date();
    hour=myDate.getHours();
    minute=myDate.getMinutes();
    second=myDate.getSeconds();
    hRotation=(30*hour)+(minute/2);
    mRotation=6*minute;
    sRotation=6*second;
    h.style.transform=`rotate(${hRotation}deg)`
    m.style.transform=`rotate(${mRotation}deg)`
    s.style.transform=`rotate(${sRotation}deg)`

    document.getElementById("display").innerText=`${hour} : ${minute} : ${second}`
},1000)