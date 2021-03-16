import { objectType } from "@nexus/schema";

export const Technology = objectType({
  name: "Technology",
  definition(t) {
    t.id("id");
    t.string("name");
    t.string("icon");
  }
});
