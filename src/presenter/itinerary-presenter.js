import EventsListView from '../view/trip-events-list-view.js';
import NewPointView from '../view/add-new-point-view.js';

import { render } from '../render.js';


export default class ItineraryPresenter {
  eventListComponent = new EventsListView();
  newPointComponent = new NewPointView();

  constructor({ tripEventsElement }) {
    this.tripEventsElement = tripEventsElement;
  }

  init() {
    render(this.eventListComponent, this.tripEventsElement);
    // Render newPointComponent inside the event list
    render(this.newPointComponent, this.eventListComponent.getElement());
  }
}
