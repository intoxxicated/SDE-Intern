
const express = require('express');
const sql = require('mssql');

const app = express();
const port = 3000;

const config = {
  user: 'ankita_tranzita',
  password: 'qwertyui',
  server: 'localhost',
  database: 'Demo',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

// API GET
app.get('/tranzita/data', (req, res) => {
  sql.connect(config)
    .then(pool => {
      // Execute SELECT query
      return pool.request().query('SELECT * FROM dbo.Details');
    })
    .then(result => {
      // Send the query result as JSON response
      res.json(result.recordset);
    })
    .catch(err => {
      // Handle errors
      console.error('Error:', err);
      res.status(500).send('Internal Server Error');
    })
    .finally(() => {
      // Close the connection
      sql.close();
    });
});



app.post('/tranzita/data', (req, res) => {
    sql.connect(config)
      .then(pool => {
        // Execute SELECT query
        return pool.request().query('SELECT * FROM dbo.Details');
      })
      .then(result => {
        // Send the query result as JSON response
        res.json(result.recordset);
      })
      .catch(err => {
        // Handle errors
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
      })
      .finally(() => {
        // Close the connection
        sql.close();
      });
  });
  

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
