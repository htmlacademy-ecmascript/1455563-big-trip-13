import {createEditingFormTemplate} from "./view/editing-form.js";
import {createFormTemplate} from "./view/creation-form";
import {createFilterTemplate} from "./view/filters";
import {createSiteMenuTemplate} from "./view/menu.js";
import {createRoutePointTemplate} from "./view/route-point";
import {createSortingTemplate} from "./view/sorting";
import {createTripInfoTemplate} from "./view/trip-info";
import {createTripPriceTemplate} from "./view/trip-price";

const ROUTE_POINT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

for (let i = 0; i < ROUTE_POINT; i++) {
  render(?, createRoutePointTemplate(), `beforeend`);
}
/*
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`); 
*/