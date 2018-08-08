module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///knex_drill_3'
  },
  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};