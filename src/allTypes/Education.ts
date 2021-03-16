import { objectType } from "@nexus/schema";

export const Education = objectType({
  name: "Education",
  definition(t) {
    t.id("id");
    t.string("title");
    t.string("institution");
    t.string("shortDescription");
    t.date("startDate", {
      description: "When I started this course",
      resolve: (education) => new Date(education.startDate),
    });
    t.date("endDate", {
      description:"When I finished/ left this course.",
      nullable: true,
      resolve: (education) =>
        education.endDate ? new Date(education.endDate) : null,
    });
  },
});
