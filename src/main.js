//Импортируем класс в main.js...
import SortingView from './view/sorting-view.js';
import TripInfoView from './view/trip-info-view.js';
import FiltersView from './view/filters-view.js';
import { render, RenderPosition } from './render.js';
import ItineraryPresenter from './presenter/itinerary-presenter.js';

const siteMainElement = document.querySelector('.page-main');
const tripEventsElement = siteMainElement.querySelector('.page-body__container .trip-events');
const tripEventsFilters = document.querySelector('.trip-controls__filters');
const tripInfoElement = document.querySelector('.trip-main');
const itineraryPresenter = new ItineraryPresenter({ tripEventsList: siteMainElement });

render(new SortingView(), tripEventsElement, RenderPosition.BEFOREEND); // ..и передадим экземпляр класса в рендер-функцию
render(new FiltersView(), tripEventsFilters, RenderPosition.BEFOREEND);
render(new TripInfoView(), tripInfoElement, RenderPosition.AFTERBEGIN);

itineraryPresenter.init();
