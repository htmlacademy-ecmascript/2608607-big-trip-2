
import { render, RenderPosition } from './render.js';
import ItineraryPresenter from './presenter/itinerary-presenter.js';
import EventsModel from './model/events-model.js';
import TripInfoView from './view/trip-info-view.js';
import FiltersView from './view/filters-view.js';

const siteHeaderElement = document.querySelector('.page-header');
const siteTripInfoElement = siteHeaderElement.querySelector('.trip-main');
const siteHeaderFiltersElement = siteHeaderElement.querySelector('.trip-controls');
const siteMainElement = document.querySelector('.page-main');
const siteTripEventsElement = siteMainElement.querySelector('.trip-events');

const eventsModel = new EventsModel();
const itineraryPresenter = new ItineraryPresenter({boardContainer: siteMainElement, EventsModel});

render(new TripInfoView(), siteTripInfoElement, RenderPosition.AFTERBEGIN);
render(new FiltersView(), siteHeaderFiltersElement);

itineraryPresenter.init();
