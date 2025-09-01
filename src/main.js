//Импортируем класс в main.js...
import SortingView from './view/sorting-view.js';
import TripInfoView from './view/trip-info-view.js';
import FiltersView from './view/filters-view.js';
import { render } from './render.js';
import { renderBgn } from './render.js';
import ItineraryPresenter from './presenter/itinerary-presenter.js';

const siteMainElement = document.querySelector('.page-main');
const tripEventsElement = siteMainElement.querySelector('.page-body__container').querySelector('.trip-events');
const tripEventsFilters = document.querySelector('.trip-controls__filters');
const tripInfoElement = document.querySelector('.trip-main');
const itineraryPresenter = new ItineraryPresenter({ tripEventsList: siteMainElement });

render(new SortingView(), tripEventsElement); // ..и передадим экземпляр класса в рендер-функцию
render(new FiltersView(), tripEventsFilters);
renderBgn(new TripInfoView(), tripInfoElement);

itineraryPresenter.init();
