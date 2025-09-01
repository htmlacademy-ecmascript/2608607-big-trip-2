import EventsListView from '../view/trip-events-list-view.js';
import NewPointVeiw from '../view/addNewPoint-view.js';
import { render } from '../render.js';


export default class ItineraryPresenter {
  eventListComponent = new EventsListView();
  newPointComponent = new NewPointVeiw();

  constructor({ container }) {
    this.container = container;
  }

  init() {
    render(this.eventListComponent, this.container);
    render(newPointComponent, this.container);
  }
}
