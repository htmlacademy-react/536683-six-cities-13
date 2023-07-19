import { TOffer } from '../types/offer';

type THost = {
  isPro: boolean;
  name: string;
  avatarUrl: string;
};

export type TDetail = Omit<TOffer, 'previewImage'> & {
  description: string;
  images: string[];
  goods: string[];
  host: THost;
  bedrooms: number;
  maxAdults: number;
};
