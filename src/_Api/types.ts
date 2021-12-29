export interface IResource {
  name: string;
}

export interface IPerson extends IResource {
  mass: number;
  height: number;
}

export interface IStarship extends IResource {
  length: number;
  cargo_capacity: number;
}
export interface IPersonDto extends IResource {
  mass: string;
  height: string;
}

export interface IStarshipDto extends IResource {
  length: string;
  cargo_capacity: string;
}
export type ResultType<Type extends SwapiResource> =
  Type extends SwapiResource.PEOPLE
    ? IPersonDto
    : Type extends SwapiResource.STARSHIPS
    ? IStarshipDto
    : unknown;

export interface IPaginationResponse<ResourceType extends SwapiResource> {
  count: number;
  next: string;
  previous?: string;
  results: ResultType<ResourceType>[];
}

export const enum SwapiResource {
  PEOPLE = "people",
  STARSHIPS = "starships",
}
