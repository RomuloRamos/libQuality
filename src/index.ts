import config from 'config';
import { SetupServer } from './server';

/**
 * Its starts the App, creating a instance of the Server Class, calling for
 * the initializer method, and to start.
 *
 * @author Rômulo Ramos
 * @param -
 * @return -
 */
(async():Promise<void> =>{
    const server = new SetupServer(config.get('App.port'));
    await server.init();
    server.start();
})()