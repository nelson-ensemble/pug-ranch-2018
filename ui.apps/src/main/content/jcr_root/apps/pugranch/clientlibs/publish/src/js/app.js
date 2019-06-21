import React from "react";
import { render } from "react-dom";
import { DOMRegistry } from "react-dom-components";

import tabControlRDC from "./components/tabControl/TabControlRDC";
import tabItemRDC from "./components/tabItem/TabItemRDC";
import helloWorldRDC from "./components/helloworld/helloWorldRDC";

const domRegistry = new DOMRegistry(React, render);
domRegistry.register({ helloWorldRDC, tabControlRDC, tabItemRDC });
domRegistry.init(document); // init defaults to `document` if not no param is defined
