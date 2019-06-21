import { DOMModel } from "react-dom-components";

export default class HelloWorldModel extends DOMModel {
  constructor(element) {
    super(element);
    this.getDataAttribute("name");
    this.getAttribute("data-title", "title");
    this.getTextContent();
  }
}
