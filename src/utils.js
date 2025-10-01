import { TIME_FORMAT, DATE_FORMAT } from './const';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

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

function getTimeDifference(dateStart, dateEnd) {
  const timeDuration = dayjs.duration(dayjs(dateEnd).diff(dateStart));
  const days = timeDuration.days();
  const hours = timeDuration.hours();
  const minutes = timeDuration.minutes();

  switch (true) {
    case days > 0:
      return `${days}D ${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
    case hours > 0:
      return `${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
    default:
      return `${minutes}M`;
  }
}

export {
  getRandomArrayElement,
  getRandomInteger,
  getRandomBoolean,
  getRandomOffers,
  humanizeEventDate,
  humanizeEventTime,
  getTimeDifference,
};
