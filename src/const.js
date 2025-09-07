// Import ItineraryPresenter
import ItineraryPresenter from './presenter/itinerary-presenter';

export const TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

export const siteMainElement = document.querySelector('.page-main');
export const tripEventsElement = siteMainElement.querySelector('.page-body__container .trip-events');
export const tripEventsFilters = document.querySelector('.trip-controls__filters');
export const tripInfoElement = document.querySelector('.trip-main');
export const itineraryPresenter = new ItineraryPresenter({ tripEventsList: siteMainElement });


