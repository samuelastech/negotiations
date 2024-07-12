import { NegotiationController } from "./controllers/NegotiationController.js";
import { NegotiationsView } from "./views/NegotiationsView.js";
import { Negotiation, NegotiationList } from "./models/index.js";

const controller = new NegotiationController({
  views: [NegotiationsView],
  models: [Negotiation, NegotiationList],
});

document.querySelector('form').onsubmit = (event) => controller.add(event);
document.querySelector('[type=button]').onclick = (event) => controller.clear(event);