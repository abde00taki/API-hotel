const express = require('express')
const products = require("./data/data.js")
const cors = require('cors')
const app = express()
const PORT = 8888
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send('home page')
} )
// hada api li kayjib json men data 
app.get('/products', (req, res) => {
    res.json(products)
})

app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const jjib = products.find(p => p.id === id)
    if(jjib) {
        res.json(jjib)
    } else {
        res.json({ message: ' id indefind'})
    }

})
app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(f => f.id === id);

  // Vérification de l'existence
  if (index === -1) {
    return res.status(404).json({ error: 'apartment non trouvée.' });
  }

  // Suppression avec splice
  const [deleted] = products.splice(index, 1);
  res.json({ message: 'Formation supprimée.', products: deleted });
});
// ===============POST===========
app.post('/product', (req, res) => {
    const { title, desc, price} = req.body;
     const id = products.length +1
    res.json({id, title, desc, price})
});

app.listen(PORT, () => {
    console.log(`PORT in my server is ${PORT}`);
    
})
