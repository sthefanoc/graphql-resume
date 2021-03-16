import { decorateType } from "@nexus/schema";
import { GraphQLDate, GraphQLURL } from "graphql-scalars";

export const GQLDate = decorateType(GraphQLDate, {
  rootTyping: "Date",
  asNexusMethod: "date",
});

export const GQLURL = decorateType(GraphQLURL, {
  rootTyping: "URL",
  asNexusMethod: "url",
});

export * from "./Query";
export * from "./Bio";
export * from "./Position";
export * from "./Education";
export * from "./Language";
export * from "./SocialLink";
export * from "./Project";
export * from "./Technology";
