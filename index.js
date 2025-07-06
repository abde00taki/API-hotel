const express = require('express')
const products = require("./data/data.js")
const cors = require('cors')
const multer = require('multer')

const app = express()
const PORT = 8888


app.use(express.json())
app.use(cors())
app.use("/uploads", express.static("uploads"));



// ============== MULTER ==============
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// ================= GET ============

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

// ====================== delete ================
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
app.post('/products', upload.single('image'), (req, res) => {
  const { title, desc, price } = req.body;

  // Vérification que tous les champs sont présents
  if (!title || !desc || !req.file || !price) {
    return res.status(400).json({ error: 'Tous les champs sont obligatoires.' });
  }

  // Création du produit
  const product = {
    id: products.length + 1,
    title,
    desc,
    image: req.file.filename, 
    price
  };

  // Ajout dans le tableau
  products.push(product);

  // Réponse avec le produit créé
  res.status(201).json(product);
});


// ==================== PUT =============
app.put("/products/:id", upload.single("image"), (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((f) => f.id === id);

  if (!product) {
    return res.status(404).json({ error: "Apartment non trouvée." });
  }

  const { title, desc, price } = req.body;

  if (title) product.title = title;
  if (desc) product.desc = desc;
  if (price) product.price = price;

  
  if (req.file) {
    product.image = req.file.filename;
  }

  res.json(product);
});



// ============= run server ==============
app.listen(PORT, () => {
    console.log(`PORT in my server is ${PORT}`);
    
})

