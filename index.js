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
app.post('/products', (req, res) => {
  const { title, desc, image, price } = req.body;

  // Vérification que tous les champs sont présents
  if (!title || !desc || !image || !price) {
    return res.status(400).json({ error: 'Tous les champs sont obligatoires.' });
  }

  // Création de la formation
  const product = {
    id: products.length+1   ,
    title,
    desc,
    image,
    price
  };

  // Ajout dans le tableau
  products.push(product);

  // Réponse avec la formation créée
  res.status(201).json(product);
});
app.listen(PORT, () => {
    console.log(`PORT in my server is ${PORT}`);
    
})


// ==================== PUT =============
app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(f => f.id === id);

  // Vérification de l'existence
  if (!product) {
    return res.status(404).json({ error: 'apartment non trouvée.' });
  }

  // Mise à jour des champs si fournis
  const { title, desc, image, price } = req.body;
  if (title) product.title = title;
  if (desc) product.desc = desc;
  if (image) product.image = image;
  if (price) product.price = price;

  res.json(product);
});