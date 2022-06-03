export type DataOptionType = { [key: number]: number };

export interface IParsedData {
  date: string;
  data: DataOptionType;
}

export interface IContentHeaderProps {
  capitalize?: boolean;
}
