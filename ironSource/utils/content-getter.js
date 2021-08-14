const fetch = require('node-fetch')

//Api url`s
const chuckNorrisUrl="https://api.chucknorris.io/jokes/random"
const KanyeWestUrl="https://api.kanye.rest/"



const getChuckNorrisJoke=async()=>{
    const response = await fetch(chuckNorrisUrl);
    const parsedJson = await response.json();
    const status=response.status;
    const joke=parsedJson.value

    return joke
}

const getKanyeWestQuote =async()=>{
    const response = await fetch(KanyeWestUrl);
    const parsedJson = await response.json();
    const status=response.status;
    const quote=parsedJson.quote

    return quote
}

const userNameSum=(name)=>{
    name=name.toLowerCase().replace( /[^a-z]/g, '' );  //remove all the chars not in a-z 
    var sum=0
    for(let i=0;i<name.length;i++){
        sum+=(name.charCodeAt(i)+1-"a".charCodeAt(0))  
    }
    return sum
} 

const bonus=()=>'Hired!'




module.exports = {getChuckNorrisJoke,getKanyeWestQuote,userNameSum,bonus}