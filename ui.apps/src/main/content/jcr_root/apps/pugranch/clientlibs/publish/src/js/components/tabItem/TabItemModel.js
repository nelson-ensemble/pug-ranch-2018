import { DOMModel } from "react-dom-components";

export default class TabItemModel extends DOMModel {
  constructor(element) {
    super(element);
    this.getTextContent();
  }
}
