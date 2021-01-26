import { objectType } from "@nexus/schema";
import { differenceInYears, differenceInMonths } from "date-fns";

export const Position = objectType({
  name: "Position",
  definition(t) {
    t.id("id");
    t.string("title");
    t.string("company");
    t.string("location");
    t.date("startDate", {
      description: "When I started at this position",
      resolve: (position) => new Date(position.startDate),
    });
    t.date("endDate", {
      description:"The date that I started working at this position. It is nullable, since I can still be working on a determined position.",
      nullable: true,
      resolve: (position) =>
        position.endDate ? new Date(position.endDate) : null,
    });
    t.int("years", ({ endDate, startDate }) =>
      differenceInYears(
        endDate ? new Date(endDate) : new Date(),
        new Date(startDate)
      )
    );
    t.int(
      "months",
      ({ endDate, startDate }) =>
        differenceInMonths(
          endDate ? new Date(endDate) : new Date(),
          new Date(startDate)
        ) % 12
    );
    t.list.string("achievements", (position) => position.achievements);
  },
});
