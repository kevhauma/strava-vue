import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Message from "primevue/message";
import Card from "primevue/card";
import ProgressSpinner from "primevue/progressspinner";
export default function PrimeComponents(app) {
  app.component("Toolbar", Toolbar);
  app.component("Button", Button);
  app.component("Card", Card);
  app.component("Message", Message);
  app.component("ProgressSpinner", ProgressSpinner);
}
