import data from '../data/data.json';
import { Pages } from '../interfaces/pages';

const allData: Pages = data;
export const getDestinations = () => {
  return allData.destinations;
};

export const getCrewMembers = () => {
  return allData.crew;
};

export const getTechnologiesInfo = () => {
  return allData.technology;
};
