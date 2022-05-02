type IType =
  | "taxi"
  | "bus"
  | "train"
  | "ship"
  | "transport"
  | "drive"
  | "flight"
  | "check-in"
  | "sightseeing"
  | "restaurant";

interface IOfferItem {
  title: string;
  price: number;
}

interface IOffer {
  type: IType;
  offers: IOfferItem[];
}

interface IDestination {
  description: string;
  name: string;
  pictures: IPicture[];
}

interface IPicture {
  src: string;
  description: string;
}

export interface IPoint {
  basePrice: number;
  dateFrom: Date;
  dateTo: Date;
  destination: IDestination;
  isFavorite: boolean;
  offers: IOffer[];
  type: IType;
}
