
const express = require('express');
const sql = require('mssql');

const app = express();
const port = 4000;

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
      const displayQuery='SELECT * FROM dbo.department';
      const insertQuery="IF NOT EXISTS (SELECT * FROM dbo.department WHERE s_id= 006) INSERT INTO dbo.department (s_id,s_name,stream,percentage,result) VALUES (006,'xyz','CSE',80,'pass')"; 
      const updateQuery = "UPDATE dbo.department SET s_name = 'prateek' WHERE s_id=006";

      pool.request().query(insertQuery);
      pool.request().query(updateQuery);

      return pool.request().query(displayQuery);
    })
    .then(result => {
      res.json(result.recordset);
    })
    .catch(err => {
      // Handle errors
      console.error('Error:', err);
      res.status(500).send('Internal Server Error');
    })
    .finally(() => {
      sql.close();
    });
});



app.post('/tranzita/data', (req, res) => {
    sql.connect(config)
      .then(pool => {
        const deleteQuery = 'DELETE FROM dbo.department WHERE s_id=005';
        pool.request().query(deleteQuery);
        return pool.request().query('SELECT * FROM dbo.department');
      })
      .then(result => {
        res.json(result.recordset);
      })
      .catch(err => {
        // Handle errors
        console.error('Error:', err);
        res.status(500).send('Internal Server Error');
      })
      .finally(() => {
        sql.close();
      });
  });
  

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
