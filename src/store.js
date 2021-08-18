import Immer from "immer";
import globalHook from "use-global-hook";
import * as actions from "./actions";
import { initialState } from "./initialState";

//Add Immer lib to your options to use Immer setState functions
const options = {
  Immer
};

const useGlobal = globalHook(initialState, actions, options);

export default useGlobal;
