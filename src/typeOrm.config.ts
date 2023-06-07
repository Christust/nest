import { DataSource } from 'typeorm';
 
 
export default new DataSource({
    type: 'sqlite',
    database: 'test.sqlite',
    entities: [__dirname + "/**/*.entity{.ts,.js}"],
    migrations: [__dirname + "/migrations/*{.ts,.js}"],
    migrationsTableName: 'migration_table',
});