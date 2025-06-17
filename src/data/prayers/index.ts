// src/data/prayers/index.ts
import { Prayer } from '../../../types';
import { xungToiPrayers } from './xungtoiPrayers';
import { themSucPrayers } from './themsucPrayers';
import { songDaoPrayers } from './songdaoPrayers';

export const allPrayers: Prayer[] = [
  ...xungToiPrayers,
  ...themSucPrayers,
  ...songDaoPrayers,
];

export const prayersByCategory = {
  xungtoi: xungToiPrayers,
  themsuc: themSucPrayers,
  songdao: songDaoPrayers,
};
