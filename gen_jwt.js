const jwt = require('jsonwebtoken');
const secretKey = 'petshelter69420';

const token = jwt.sign({
  id: 1,
  username: 'pets'
}, secretKey, { expiresIn: '1h' });

console.log(token);
