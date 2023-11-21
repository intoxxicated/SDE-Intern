const sql = require('mssql');

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

sql.connect(config)
  .then(pool => {
    // Insert a new row into the table
    return pool.request()
      .input('empno', sql.Int, 10) 
      .input('ename', sql.NVarChar(50), 'G') 
      .input('job', sql.NVarChar(50), 'Debugger')
      .input('sal', sql.Int, 10000)
      .query('INSERT INTO dbo.details (empno, ename, job, sal) VALUES (@empno, @ename, @job, @sal)');
  })
  .then(result => {
    console.log('Rows affected:', result.rowsAffected);
  })
  .catch(err => {
    console.error('Error:', err);
  })
  .finally(() => {
    // Close the connection
    sql.close();
  });
