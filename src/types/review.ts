type TUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type TComment = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: TUser;
};

export type TReview = {
  id: string;
  reviewComments: TComment[];
};
