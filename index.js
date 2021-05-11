const fetch = require('node-fetch');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // This works with www & without www also.
    fetch('https://www.mswipelive.com/SaleApi/api/Sale/WizzTnCallBack', {
            method: 'POST',
            body: JSON.stringify({ "ref_id": "SLS0000000000000000001199777", "payload": "16423840EA40C1FA" }),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
        .then(json => {
            console.log(json);
            res.send(json);
        });
});

app.listen(port, () => {
    console.log(`Wizzit Example app listening at http://localhost:${port}`)
});