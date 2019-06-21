import { createRDC } from "react-dom-components";
import TabControl from "./TabControl";
import TabControlModel from "./TabControlModel";

const tabControlRDC = createRDC("tab-control", TabControlModel, TabControl);
export default tabControlRDC;
