import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';

import Card from 'primevue/card';
export default function PrimeComponents(app){
    app.component('Toolbar', Toolbar);
    app.component('Button', Button);
    app.component('Card', Card);
}