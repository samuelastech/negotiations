import { NegotiationController, NegotiationList, NegotiationService, NegotiationsView } from "./negotiation/index.js";
import { Bind } from "./common/index.js";

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