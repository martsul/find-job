export type FilterCardInfo = { text: string; name: string };

export type FilterCard = {
  title: string;
  info: FilterCardInfo[];
};

export type DetailsProps = { data: FilterCard[] };
