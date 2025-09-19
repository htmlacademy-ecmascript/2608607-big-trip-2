import { CITIES } from '../const.js';
import { getRandomEvent, mockDestination, mockOffers } from '../mocked-data/mock-data.js';
import { humanizeEventDate } from '../utils.js';


export default class EventsModel {
  events = Array.from({ length: CITIES.length - 1 }, getRandomEvent);
  offers = mockOffers;
  destinations = mockDestination;

  getEvents() {
    return this.events;
  }

  getOffers() {
    return this.offers;
  }

  getOffersByType(type) {
    const allOffers = this.getOffers();
    return allOffers.find((offer) => offer.type === type);
  }

  getOffersById(type, itemsId) {
    const offersType = this.getOffersByType(type);
    if (!offersType || !itemsId) {
      return [];
    }
    return offersType.offers.filter((item) => itemsId.includes(item.id));
  }

  getDestinations() {
    return this.destinations;
  }

  getDestinationsById(id) {
    const allDestinations = this.getDestinations();
    return allDestinations.find((item) => item.id === id) ?? null;
  }

  getTripTitle() {
    const events = this.getEvents();
    if (events.length === 0) {
      return 'Add an event into itinerary';
    }

    const destinationNames = events.map((event))
  }

}
