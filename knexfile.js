// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/sprint.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migartions'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
