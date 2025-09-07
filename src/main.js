/* //Импортируем класс в main.js...
import SortingView from './view/sorting-view.js';
import FiltersView from './view/filters-view.js';

import { render, RenderPosition } from './render.js'; */

import ItineraryPresenter from './presenter/itinerary-presenter.js';

const siteMainElement = document.querySelector('.page-main');
/* const siteHeaderElement = document.querySelector('.page-header'); */
const itineraryPresenter = new ItineraryPresenter({boardContainer: siteMainElement});

/* render(new SortingView(), siteMainElement);
render(new FiltersView(), siteHeaderElement); */


itineraryPresenter.init();
