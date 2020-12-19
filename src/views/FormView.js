import View from "./View.js";
import { DOM } from "../utils/constants.js";

export default class FormView extends View {
  constructor() {
    super();
    this.tag = "[FormView]";
  }

  setup(el) {
    this.init(el);
    this.el.innerHTML = this.render();
    return this;
  }

  render() {
    return `
      <h2>🚇 지하철 길찾기</h2>
      <form>
        <div>
          <label for=${DOM.DEPARTURE_STATION_NAME_INPUT_ID}>출발역</label>
          <input
            type="text"
            id=${DOM.DEPARTURE_STATION_NAME_INPUT_ID}
            autocomplete="off"
          />
        </div>
  
        <div>
          <label for=${DOM.ARRIVAL_STAION_NAME_INPUT_ID}>도착역</label>
          <input type="text" id=${DOM.ARRIVAL_STAION_NAME_INPUT_ID} autocomplete="off" />
        </div>
  
        <div>
          <input
            type="radio"
            id=${DOM.SHORTEST_DISTANCE_RADIO_ID}
            name="search-type"
            value="shortest"
            checked
          />
          <label for=${DOM.SHORTEST_DISTANCE_RADIO_ID}>최단거리</label>
  
          <input
            type="radio"
            id=${DOM.MINIMUM_DISTANCE_RADIO_ID}
            name="search-type"
            value="minimum"
          />
          <label for=${DOM.MINIMUM_DISTANCE_RADIO_ID}>최소거리</label>
        </div>
  
        <button id=${DOM.SEARCH_BUTTON_ID}>길 찾기</button>
      </form>
      `;
  }
}
