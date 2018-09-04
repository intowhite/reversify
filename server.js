const express = require('express')
const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//send app
app.get('/', (req, res) => res.send('mainapps'))

//reversify
app.get('/reversify/:string', (req, res) => res.send(reversify(req.params.string)))

//restful
app.route('/restful')
  .get((req, res) => {
    console.log('GET Success!'); 
    res.send('GET Success!')
  })
  .post((req, res) => {
    console.log('POST Success!'); 
    res.send('POST Success!');
  })

app.listen(4000, () => console.log('Example app listening on port 4000!'))

function reversify(string) {
    return string.split('').reverse().join('');
}