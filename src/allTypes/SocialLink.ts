import { objectType } from "@nexus/schema";

export const SocialLink = objectType({
  name: "SocialLink",
  definition(t) {
    t.id("id");
    t.string("name");
    t.url("url", (socialLink) => new URL(socialLink.url));
    t.string("icon");
  },
});
