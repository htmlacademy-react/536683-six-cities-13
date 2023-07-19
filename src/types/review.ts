type TUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type TComments = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: TUser;
};

export type TReview = {
  id: string;
  comments: TComments[];
};
