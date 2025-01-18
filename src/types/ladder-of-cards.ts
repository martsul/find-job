export type LadderCard = {
  title: string;
  text: string;
};

export type AllLaddersCards = [LadderCard, LadderCard, LadderCard];

export type LadderInCardsProps = { data: AllLaddersCards };
