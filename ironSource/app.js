const {chooseSurprise,updateStats,readStats}=require('./utils/response_manager')
const {validateRequestSchema}=require('./utils/validate-request-schema')
const express = require('express')
const {query,validationResult}=require('express-validator')


const app = express()
const port = process.env.PORT || 3000

app.get('/api/surprise' ,
    query('name','name is required').not().isEmpty(),
    query('name','name is not valid').isAlphanumeric(),
    query('birth_year','birth year is requierd').not().isEmpty(),
    query('birth_year','birth year is not valid').isNumeric(),
    validateRequestSchema,
    chooseSurprise,
    updateStats,
    async (req,res)=>{

        const {selectedSurprise,name,birth_year}=req
        try{
            result=await req.selectedSurprise.surprise(name,birth_year)
            res.status(200).send({type:selectedSurprise.type,result})
        }
        catch(err){
            console.log(err)
            res.status(500).send('server error')
        }

})

app.get('/api/stats',(req,res)=>{
    const stats=readStats()
    let result={
        requests:0,
        distribution:[]
    } 
    
    for (const [type, count] of Object.entries(stats)) {
        if (type!='requests'){
        result.distribution.push({type,count})
        }
        else{
            result.requests=count
        }
    }
    
    res.status(200).json(result)
})



app.get('*',(req,res)=>{
    res.send('we are sorry but the page is not found')
})

app.listen(port, () => {
    console.log(`Server is up on port:${port}` )
})