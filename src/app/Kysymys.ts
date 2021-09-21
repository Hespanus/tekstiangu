export interface Kysymys {
  id: number;
  kysymys?: String;
  kuva?: String;
  Vastaukset?: Array<{ nimi?: String, pisteet?: number, kysymys?:number, info?: String}>;
}
