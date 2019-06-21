import { createRDC } from "react-dom-components";
import TabItem from "./TabItem";
import TabItemModel from "./TabItemModel";

const tabItemRDC = createRDC("tab-item", TabItemModel, TabItem);
export default tabItemRDC;
