// resources/js/plugins/primevue.js
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css'; // Iconos
import PrimeVue from 'primevue/config';

export default function (app) {
    app.use(PrimeVue, {
        theme: {
            preset: Aura,
        },
    });
}
