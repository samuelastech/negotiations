import { NegotiationController } from "./controllers/NegotiationController.js";
import { NegotiationsView } from "./views/NegotiationsView.js";
import { Negotiation, NegotiationList } from "./models/index.js";

const controller = new NegotiationController({
  views: [NegotiationsView],
  models: [Negotiation, NegotiationList],
});

document.querySelector<HTMLFormElement>('form').onsubmit = (event) => controller.add(event);
document.querySelector<HTMLButtonElement>('[type=button]').onclick = () => controller.clear();