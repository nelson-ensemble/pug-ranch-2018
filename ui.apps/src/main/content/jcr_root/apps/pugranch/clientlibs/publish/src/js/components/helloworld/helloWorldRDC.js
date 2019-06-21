import { createRDC } from "react-dom-components";
import HelloWorld from "./HelloWorld";
import HelloWorldModel from "./HelloWorldModel";

const helloWorldRDC = createRDC("hello-world", HelloWorldModel, HelloWorld);
export default helloWorldRDC;
