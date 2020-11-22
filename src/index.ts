import express from 'express'; 

const app = express()


const PORT = process.env.PORRT || 4000;

type Fn = ()=>  void;

interface Params {
    a:number, 
    b:number
}

type Add = (x:Params) => number

type Params2 = {
    a: number, 
    b:number
}



const add:Add = x => {
    return x.a + x.b
}

app.get('/', (req, res) => {
    console.log(add({a: 4, b:4}),'add 7777777 from params2'); 
    res.send('hello')
})

app.listen(PORT, ()=> {
    console.log(`App started on port ${PORT}`);
    
})