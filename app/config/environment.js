import providers from './providers';

const config = {
  providers,

  database: {
    client: 'postgresql',
    connection: {
      database: 'images',
      user:     process.env.USER,
      password: '',
    },
  }
};

if (process.env.DATABASE_URL) {
  config.database.connection = process.env.DATABASE_URL;
}

export default config;
