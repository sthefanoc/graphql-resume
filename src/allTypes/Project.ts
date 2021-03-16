import { objectType } from "@nexus/schema";

export const Project = objectType({
  name: "Project",
  definition(t) {
    t.id("id");
    t.string("title");
    t.string("githubRepo");
    t.string("liveProject");
    t.string("shortDescription");
    t.list.string("technologies", (project) => project.technologies);
  },
});

