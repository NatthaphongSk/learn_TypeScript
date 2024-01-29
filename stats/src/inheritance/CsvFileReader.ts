import fs from 'fs';

export abstract class CsvFileReader<T> {
  // T is just for convension for naming generic type
  data: T[] = [];
  constructor(public fileName: string) {}
  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync('football.csv', {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}