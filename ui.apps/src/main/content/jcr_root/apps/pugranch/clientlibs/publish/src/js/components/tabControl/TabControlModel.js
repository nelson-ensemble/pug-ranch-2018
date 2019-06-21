import { DOMModel } from "react-dom-components";
import TabItemModel from "../tabItem/TabItemModel";

class SubTitleModel extends DOMModel {
  constructor(element) {
    super(element);
    this.getTextContent();
  }
}

export default class TabControlModel extends DOMModel {
  constructor(element) {
    super(element);
    this.getDataAttribute("title");
    this.getDataAttribute("model");
    this.getChildDOMModel("h2", SubTitleModel);
    this.getChildDOMModelArray("tab-item", TabItemModel);
  }
}

export { SubTitleModel, TabItemModel };
