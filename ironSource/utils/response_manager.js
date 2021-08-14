const fs = require('fs')
const FILE_PATH = 'stats.json'
const {getChuckNorrisJoke,getKanyeWestQuote,userNameSum,bonus}=require('./content-getter')

const surprisingResponses=[
    {
        type:'chuck-norris-joke',
        condition:(name,birth_year)=>{return birth_year<=2000},
        surprise:getChuckNorrisJoke
    },
    {
        type:'kanye-quote',
        condition:(name,birth_year)=>{return birth_year>2000 && name[0]!='A' && name[0]!='Z'},
        surprise:getKanyeWestQuote 
    },
    {
        type:'name-sum',
        condition:(name,birth_year)=>{return name[0]!='Q'},
        surprise:userNameSum 
    },
    {
        type:'bonus',
        condition:(name,birth_year)=>{return name.toLowerCase().includes('dor')},
        surprise:bonus 
    }
]

const chooseSurprise=(req,res,next)=>{
    
    const name=req.name = req.query.name
    const birth_year=req.birth_year =req.query.birth_year 

    const relevant_surprise=surprisingResponses.filter(s=>s.condition(name,birth_year));  //filter surprise by cond
    const selectedSurprise=relevant_surprise[Math.floor(Math.random() * relevant_surprise.length)] //choose randomly between relvent
    req.selectedSurprise=selectedSurprise
    
    next()
}

const updateStats=(req,res,next)=>{
    const {type}=req.selectedSurprise
    const stats = readStats()
    stats[type] = stats[type] ? stats[type] + 1 : 1
    stats['requests'] = stats['requests'] ? stats['requests'] + 1 : 1  

    dumpStats(stats)
    next()
}

const readStats = () => {
    let result = {}
    try {
        result = JSON.parse(fs.readFileSync(FILE_PATH))
    } catch (err) {
        console.error(err)
    }
    return result
}

const dumpStats = (stats) => {

    try {
        fs.writeFileSync(FILE_PATH, JSON.stringify(stats), { flag: 'w+' })
    } catch (err) {
        console.error(err)
    }
}

module.exports = {chooseSurprise,updateStats,readStats}