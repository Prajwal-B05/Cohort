let ctr = 0;

function callback()
{
    document.querySelectorAll("h2")[0].innerHTML=ctr;
    console.log(ctr);
    ctr = ctr+1;
}


setInterval(callback,1000);