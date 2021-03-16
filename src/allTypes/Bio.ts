import { objectType } from "@nexus/schema";
import { data } from "src/data";

export const Bio = objectType({
  name: "Bio",
  definition(t) {
    t.string("name");
    t.string("tagline");
    t.string("location");
    t.string("email");
    t.string("website");
    t.string("objective");
    t.string("shortDescription");
  },
});
