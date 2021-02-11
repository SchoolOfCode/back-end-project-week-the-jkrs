const { Pool } = require("pg");
const { credentials } = require("../config");

const pool = new Pool(credentials);

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
