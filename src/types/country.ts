export type NativeName = {
  [key: string]: {
    common: string;
  };
};

export type CountryName = {
  common: string;
  nativeName: NativeName;
};

export type Flags = {
  svg: string;
};

export type Currency = {
  name: string;
};

export type Country = {
  name: CountryName;
  borders?: string[];
  population: string;
  flags: Flags;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: {
    [key: string]: Currency;
  };
  languages: {
    [key: string]: string;
  };
};
