import { NegotiationController } from "./controllers/NegotiationController.js";
import { NegotiationsView } from "./views/NegotiationsView.js";
import { Negotiation, NegotiationList } from "./models/index.js";

const controller = new NegotiationController({
  views: [NegotiationsView],
  models: [Negotiation, NegotiationList],
});

const form = document.querySelector<HTMLFormElement>('form');
const button = document.querySelector<HTMLButtonElement>('[type=button]');

if(form && button) {
  form.onsubmit = (event) => controller.add(event);
  button.onclick = () => controller.clear();
}
