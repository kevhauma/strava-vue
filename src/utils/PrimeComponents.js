import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
export default function PrimeComponents(app){
    app.component('Toolbar', Toolbar);
    app.component('Button', Button);
    app.component('Dialog', Dialog);
}