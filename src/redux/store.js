import { createStore } from "redux";
import rootReudcer from "./reducer";

const store = createStore(rootReudcer, {})
export default store