import ky from "ky";
import {
  IPaginationResponse,
  IPersonDto,
  IStarshipDto,
  SwapiResource,
} from "./types";

export const api = ky.create({
  prefixUrl: "https://swapi.dev/api/",
  headers: {
    "content-type": "application/json",
  },
});

export const convertToNumbers = (
  item: IPersonDto | IStarshipDto,
  resource: SwapiResource
) => {
  if (resource === SwapiResource.STARSHIPS) {
    return {
      ...item,
      length: +(item as IStarshipDto).length.replace(",", ""),
      cargo_capacity: +(item as IStarshipDto).cargo_capacity.replace(",", ""),
    };
  } else {
    return {
      ...item,
      mass: +(item as IPersonDto).mass,
      height: +(item as IPersonDto).height,
    };
  }
};

export const getResource = <Model extends SwapiResource>(
  resource: Model
): Promise<IPaginationResponse<Model>> => {
  return api.get(`${resource}`).json();
};
