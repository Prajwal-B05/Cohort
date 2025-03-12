function doAsync(resolve)
{
    //operation to promisify

    setTimeout(resolve,3000); //old callback syntax setTimeout(3000).then(callback) promisifided syntax

}

function setTimeoutPromisified()
{
    return new Promise(doAsync);
}

function callback()
{
    console.log("3 second pased");
}
p.then(callback);