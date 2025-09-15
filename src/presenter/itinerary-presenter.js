import BoardView from '../view/board-view.js';
import NewPointView from '../view/add-new-point-view.js';
import EventEditView from '../view/event-edit-form-view.js';
import EventItemView from '../view/events-item-view.js';
import FiltersView from '../view/filters-view.js';
import SortingView from '../view/sorting-view.js';
import EventsListView from '../view/trip-events-list-view.js';
import TripInfoView from '../view/trip-info-view.js';

import { render, RenderPosition } from '../render.js';

export default class ItineraryPresenter {
  boardComponent = new BoardView();
  eventsListComponent = new EventsListView();
  newPointComponent = new NewPointView();
  tripInfoComponent = new TripInfoView();

  constructor({ boardContainer, infoContainer }) {
    this.boardContainer = boardContainer;
    this.infoContainer = infoContainer;

  }

  init() {
    render(this.tripInfoComponent, this.boardContainer);
    render(this.boardComponent, this.boardContainer);
    render(new SortingView(), this.boardComponent.getElement(), RenderPosition.BEFOREEND);
    render(this.eventsListComponent, this.boardComponent.getElement());
    render(this.newPointComponent, this.boardComponent.getElement());
 
  }
}
