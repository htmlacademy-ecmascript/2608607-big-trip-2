import dayjs from 'dayjs';
import { TIME_FORMAT } from './const';

const DATE_FORMAT = 'D MMMM';

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomBoolean(){
  return Math.random() > 0.5;
}

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function humanizeEventDate(tripDate) {
  return tripDate ? dayjs(tripDate).format(DATE_FORMAT) : '';
}
function humanizeEventTime(tripDate) {
  return tripDate ? dayjs(tripDate).format(TIME_FORMAT) : '';
}

function getRandomOffers(offersType) {
  if (!offersType || !offersType.offers) {
    return [];
  }
  return offersType.offers
    .filter(() => Math.random() > 0.5)
    .map((offer) => offer.id);
}

export {
  getRandomArrayElement,
  getRandomInteger,
  getRandomBoolean,
  getRandomOffers,
  humanizeEventDate,
  humanizeEventTime,
};
