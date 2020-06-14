const express = require('express');
const app = express();

app.use(express.json())


app.get('/milha/:milha', (request, response) => {
    const milha = request.params.milha
    let km, valorKM = 1.609
    km = valorKM * milha
        response.json({
            km,
        })
})
app.get('/km/:km', (request, response) => {
    const km = request.params.km
    let Milha, valorMilha = 1.609
    Milha = valorMilha / km
        response.json({
            Milha,
        })
})


app.listen(1000, () => {
    console.log('Servidor rodando na porta 30000.')
})