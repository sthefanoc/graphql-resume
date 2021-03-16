import { objectType } from "@nexus/schema";

export const Language = objectType({
  name: "Language",
  definition(t) {
    t.id("id");
    t.string("name");
    t.string("level");
  },
});
