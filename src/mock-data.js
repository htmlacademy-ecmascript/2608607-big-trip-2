import { getRandomArrayElement } from './utils';
import { TYPES } from './const';

const mockEvents = [
  {
    type: getRandomArrayElement(TYPES),
    destination: 'Amsterdam',
    timeFrom: new Date(2025,3,18,10,30),
    timeTill: new Date(2025,3,18,11,0),
    price: '€ 20',
    offers: {

    },
    isFavorite: true,
  }
];

function getRandomPoint() {
  return getRandomArrayElement(mockEvents);
}

export {getRandomPoint};
