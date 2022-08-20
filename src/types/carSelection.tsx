export interface carData {
  [index: string]: carYear;
}
export interface carYear {
  [index: string]: carBrand;
}
export interface carBrand {
  [index: string]: carModel;
}
export interface carModel {
  [index: string]: string;
}

export type currentPick = {
  year: string;
  brand: string;
  model: string;
  trim: string;
  image: string;
};
