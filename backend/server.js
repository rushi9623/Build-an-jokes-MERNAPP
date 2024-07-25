const express = require('express')
const app = express()
const port = 3000 

app.get('/',(req,res) =>{
    res.send('app is working ')
})

app.get('/api/jokes',(req,res)=> {
    const jokes = [
        {
            id : 1,
            title : 'A joke',
            content : 'This is a joke'
        },
        
        {
            id : 2,
            title : 'A joke',
            content : 'This is a another joke'
        },
        
        {
            id : 3,
            title : 'A joke',
            content : 'This is a  good joke'
        },
        
        {
            id : 4,
            title : 'A joke',
            content : 'This is a bad  joke'
        },
        
        {
            id : 5,
            title : 'A joke',
            content : 'This is a  funny joke'
        },
        
    ];
    res.send(jokes) ;
})
app.listen(port, () => {
    console.log('app is listing on port ${port}')
})