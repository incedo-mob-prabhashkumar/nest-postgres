export default () => ({
  /**
   * Database settings
   */
  database: {
    type: process.env.POSTGRES_CONNECTION,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    keepConnectionAlive: false,
    synchronize: Boolean(process.env.POSTGRES_SYNCHRONIZE),
    logging: Boolean(process.env.POSTGRES_LOGGING),

    // This allows us to automatically load entities
    // when we register repositories. This is a nestjs
    // feature, not a typeorm feature.
    autoLoadEntities: true,
  },
})