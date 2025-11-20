// Este archivo puede exportar uno de los configs o hacer merge según env
import { config as bs } from  './src/config/wdio.browserstack.conf';
export const config = bs; // por defecto correr BrowserStack. Cambia si necesitas otro