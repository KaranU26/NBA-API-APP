import { EastTeams } from "./east-teams";

export class Players {
  id:            number;
  first_name:    string;
  height_feet:   number | null;
  height_inches: number | null;
  last_name:     string;
  weight_pounds: number | null;
  team: EastTeams[];
}
