const express = require('express')

const cors = require('cors')
const multer = require('multer')
const mysql = require('mysql2')

const app = express()
const PORT = 8888


// ============== database ===========
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hotel_db'
});

db.connect((err) => {
  if(err){
    console.log('error connicting to db ', err  );
    return;
    
  }
  console.log('connected to mysql');
  
})



// ===================================
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

app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'DB error' });
    }
    res.json(results);
  });
});

app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);

  db.query('SELECT * FROM products WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'DB error' });
    }

    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).json({ message: 'Product with this id not found' });
    }
  });
});


// ====================== delete ================
app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);

  db.query('DELETE FROM products WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'DB error' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Product with this id not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  });
});



// ===============POST===========
app.post('/products', upload.single('image'), (req, res) => {
  const { title, desc, price, star } = req.body;
  const image = req.file ? req.file.filename : null;

  db.query(
    'INSERT INTO products (title, `desc`, price, image, star) VALUES (?, ?, ?, ?, ?)',
    [title, desc, price, image, star],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'DB error' });
      }
      res.status(201).json({ id: result.insertId, title, desc, price, image, star });
    }
  );
});




// ==================== PUT =============
app.put('/products/:id', upload.single('image'), (req, res) => {
  const id = parseInt(req.params.id);
  const { title, desc, price, star } = req.body;

  // إلا كان كاين ملف صورة
  const image = req.file ? req.file.filename : null;

  // كنوّلي نبني query بشكل dynamic
  let fields = [];
  let values = [];

  if (title) {
    fields.push('title = ?');
    values.push(title);
  }
  if (desc) {
    fields.push('`desc` = ?');
    values.push(desc);
  }
  if (price) {
    fields.push('price = ?');
    values.push(price);
  }
  if (star) {
    fields.push('star = ?');
    values.push(star);
  }
  if (image) {
    fields.push('image = ?');
    values.push(image);
  }

  // إلا ما كان حتى تغيير
  if (fields.length === 0) {
    return res.status(400).json({ error: 'No data provided to update' });
  }

  values.push(id); // id فالأخير

  const sql = `UPDATE products SET ${fields.join(', ')} WHERE id = ?`;

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'DB error' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product updated successfully' });
  });
});



// ============= run server ==============
app.listen(PORT, () => {
    console.log(`PORT in my server is ${PORT}`);
    
})

