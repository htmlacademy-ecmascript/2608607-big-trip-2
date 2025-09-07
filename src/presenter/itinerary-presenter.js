import BoardView from '../view/board-view.js';
import EventsListView from '../view/trip-events-list-view.js';
import NewPointView from '../view/add-new-point-view.js';
import FiltersView from '../view/filters-view.js';
import SortingView from '../view/sorting-view.js';
import TripInfoView from '../view/trip-info-view.js';
// import { TYPES, siteMainElement, tripEventsElement, tripEventsFilters, tripInfoElement } from '../const.js';
import { render, RenderPosition } from '../render.js';

export default class ItineraryPresenter {
  boardComponent = new BoardView();
  eventListComponent = new EventsListView();
  newPointComponent = new NewPointView();

  constructor({ boardContainer, filtersContainer }) {
    this.boardContainer = boardContainer;
    this.tripEventsFilters = filtersContainer;
  }

  init() {
    render(new FiltersView(), this.tripEventsFilters, RenderPosition.BEFOREEND);
    render(new FiltersView(), this.tripEventsFilters, RenderPosition.BEFOREEND);
    render(new SortingView(), this.tripEventsElement, RenderPosition.BEFOREEND);
    render(new TripInfoView(), this.tripInfoElement, RenderPosition.AFTERBEGIN);
    render(this.eventListComponent, this.boardComponent.getElement());
    // Render newPointComponent inside the event list
    render(this.newPointComponent, this.boardComponent.getElement());
  }
}
