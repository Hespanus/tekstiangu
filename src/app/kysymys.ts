export interface Kysymys {
  id: number;
  kysymys: string;
  kuva?: string;
  Vastaukset?: Array<{ nimi?: string, pisteet?: number, kysymys?:number, info?: string}>;
}


