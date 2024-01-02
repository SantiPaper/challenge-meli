import express from 'express'

const app = express();

const puerto = 3001;

app.get("/", (req,res) => {
    
    res.json({
        message:'Hello'
    })
})

app.listen(puerto,() => {
    console.log(`Se esta escuchando en el puerto ${puerto}`);
});

