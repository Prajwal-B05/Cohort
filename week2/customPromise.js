class Promise1
{
    constructor(fn){
    aftercall()
    {
    this.resolve();
    }
    //this gets called after the async operation has been done
    fn(aftercall)
}

then(callback)
{
    this.resolve = callback;
}
}


function readTheFile(resolve)
{
    setTimeout(function(){
        console.log("callback based settimeuot");
        resolve();
    },3000);
}

function setTimeoutPromisified()
{
    return new Promise1(readTheFile);
}

let p = setTimeoutPromisified();

function callback()
{
    console.log("callback has been called");
}

p.then(callback);