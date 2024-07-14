import { NegotiationController } from "./controllers/NegotiationController.js"
import { NegotiationService } from "./services/NegotiationService.js";
import { NegotiationList } from "./models/NegotiationList.js";
import { NegotiationsView } from "./views/NegotiationsView.js";
import { Bind } from "./helpers/Bind.js";

const list = Bind.create<NegotiationList>({
  model: new NegotiationList(),
  view: new NegotiationsView('#negotiations'),
  props: ['add', 'clear'],
});
const service = new NegotiationService(list);
const controller = new NegotiationController(service);

const form = document.querySelector<HTMLFormElement>('form');
const button = document.querySelector<HTMLButtonElement>('[type=button]');

if (form && button) {
  form.onsubmit = (event) => controller.add(event);
  button.onclick = () => controller.clear();
}