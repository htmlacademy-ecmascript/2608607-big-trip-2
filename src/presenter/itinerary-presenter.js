import TripInfoView from '../view/trip-info-view.js';
import BoardView from '../view/board-view.js';
import NewPointView from '../view/add-new-point-view.js';
import EventEditView from '../view/event-edit-form-view.js';
import EventItemView from '../view/events-item-view.js';
import FiltersView from '../view/filters-view.js';
import SortingView from '../view/sorting-view.js';
import EventsListView from '../view/trip-events-list-view.js';
import NewPointVeiw from '../view/add-new-point-view.js';


import { render, RenderPosition } from '../render.js';

export class TripInfoPresenter {
  constructor({infoContainer, eventsModel}) {
    this.infoContainer = infoContainer;
    this.eventsModel = eventsModel;
  }

  init() {
    const tripTitle = this.eventsModel.getTripTitle();
    const tripDateRange = this.eventsModel.getTripDateRange();
    const totalCost = this.eventsModel.getTotalCost();

    this.infoComponent = new TripInfoView({
      title: tripTitle,
      dateRange: tripDateRange,
      totalCost: totalCost
    });

    render(this.infoComponent, this.container, RenderPosition.AFTERBEGIN);
  }
}

export default class ItineraryPresenter {
  boardComponent = new EventsListView();
  
  eventsListComponent = new EventsListView();
  newPointComponent = new NewPointView();
  tripInfoComponent = new TripInfoView();

  constructor({ boardContainer, eventsModel }) {
    this.boardContainer = boardContainer;
    this.eventsModel = eventsModel;

  }

  init() {
    this.boardPoints = [...this.eventsModel.getPoints()];
    render(this.tripInfoComponent, this.boardContainer);
    render(this.boardComponent, this.boardContainer);
    render(new FiltersView(), this.infoContainer.getElement(), RenderPosition.BEFOREEND);
    render(new SortingView(), this.boardComponent.getElement(), RenderPosition.BEFOREEND);

    for (let i = 0; i < this.boardPoints.length; i++) {
      const point = this.boardPoints[i];

      render(new EventItemView({
        point: this.boardPoints[i],
        offers: [...this.eventsModel.getOffersById(point.type, point.offers)],
        destination: this.eventsModel.getDestinationsById(point.destination)
      }), this.boardComponent.getElement());
    }

    render(this.eventsListComponent, this.boardComponent.getElement());
    render(this.newPointComponent, this.boardComponent.getElement());

  }
}
