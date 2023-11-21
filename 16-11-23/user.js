const sql = require('mssql');
const express = require('express');
const { Sequelize } = require('sequelize');
const port=3000;

const sequelize = new Sequelize('Demo', 'ankita_tranzita', 'qwertyui', {
    define:{

        freezeTableName: true
    },
    host: 'localhost',
    dialect: 'mssql',
    port: 1433 
});

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


try {
  sequelize.authenticate();
  sql.connect(config);
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


const User = sequelize.define('User', {
  // model attributes are defined here
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull:false
    },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'first_name'
    },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'last_name'
    },
  email: {
    type: Sequelize.STRING,
    allowNull: false
    },
  address: {
    type: Sequelize.STRING,
    allowNull: false
    }
  });

async function insertUser(userData) {
  try {
    await User.create(userData); // Create a new user in the 'User' table
    console.log('User inserted successfully.');
  } catch (err) {
    console.error('Error inserting user:', err);
  } finally {
    await sequelize.close(); // Close the database connection
  }
}

async function dropUserTable() {
  try {
    await User.sync(); // Synchronize the model with the database
    await User.drop(); // Drop the 'User' table
    console.log('User table dropped successfully.');
  } catch (err) {
    console.error('Error dropping User table:', err);
  } finally {
    await sequelize.close(); // Close the database connection
  }
}

async function deleteUser(userId) {
  try {
    const user = await User.findByPk(userId); // Find user by primary key
    if (user) {
      await user.destroy(); // Delete the user
      console.log('User deleted successfully.');
    } else {
      console.error('User not found.');
    }
  } catch (err) {
    console.error('Error deleting user:', err);
  } finally {
    await sequelize.close(); // Close the database connection
  }
}

async function updateUser(userId, updatedUserData) {
  try {
    const user = await User.findByPk(userId); // Find user by primary key
    if (user) {
      await user.update(updatedUserData); // Update the user data
      console.log('User updated successfully.');
    } else {
      console.error('User not found.');
    }
  } catch (err) {
    console.error('Error updating user:', err);
  } finally {
    await sequelize.close(); // Close the database connection
  }
}


insertUser({
  id:1,
  firstName: 'Abhi',
  lastName: "Saxena",
  email: "qwer@gmail.com",
  address: 'Gorakhpur'
});




sequelize.sync({alter:true,await:true});
try{
user.save();
console.log("User Saved Succesfully");
}
catch(err){
  console.log(err);
}

