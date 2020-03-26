const express = require('express');

const app = express();

app.get('/', (request,response) => {
    return response.json({
        evento: 'Semana omini Stack 11.0',
        aluno: 'Paulo Barcelos 222 222'
    });
});
app.listen(3333);