let  express = require('express')
let app = express()

app.get('/',(req,res)=> {
    console.log('Hell World')
    res.send('Hell world')
})
app.get('/crash',(req,res)=>{
    console.log('Cresh!!')
    res.send('Crash')
    process.exit(1)
})

app.listen(process.env.PORT,
    () => console.log('server is run ', process.env.PORT))