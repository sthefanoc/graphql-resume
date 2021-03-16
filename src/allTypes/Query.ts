import { queryType, idArg } from "@nexus/schema";
import { data } from "src/data";
import { Bio, Position, SocialLink, Education, Language, Project, Technology } from "./index";

export const Query = queryType({
  definition(t) {
    t.field("bio", {
      type: Bio,
      resolve: () => data.bio,
    });

    t.list.field("socialLinks", {
      type: SocialLink,
      resolve: () => data.socialLinks,
    });

    t.field("socialLink", {
      type: SocialLink,
      description: "Find a socialLink by its ID",
      nullable: true,
      args: { id: idArg() },
      resolve: (root, { id }: { id: string }, ctx) =>
        data.socialLinks.find((socialLink) => socialLink.id === id),
    });

    t.list.field("languages", {
      type: Language,
      resolve: () => data.languages,
    });

    t.field("language", {
      type: Language,
      description: "Find a language by its ID",
      nullable: true,
      args: { id: idArg() },
      resolve: (root, { id }: { id: string }, ctx) =>
        data.languages.find((language) => language.id === id),
    });

    t.list.field("educations", {
      type: Education,
      resolve: () => data.educations,
    });

    t.field("education", {
      type: Education,
      description: "Find a education by its ID",
      nullable: true,
      args: { id: idArg() },
      resolve: (root, { id }: { id: string }, ctx) =>
        data.educations.find((education) => education.id === id),
    });

    t.list.field("technologies", {
      type: Technology,
      resolve: () => data.technologies,
    });

    t.field("technology", {
      type: Technology,
      description: "Find a technology by its ID",
      nullable: true,
      args: { id: idArg() },
      resolve: (root, { id }: { id: string }, ctx) =>
        data.technologies.find((technology) => technology.id === id),
    });

    t.list.field("projects", {
      type: Project,
      resolve: () => data.projects,
    });

    t.field("project", {
      type: Project,
      description: "Find a project by its ID",
      nullable: true,
      args: { id: idArg() },
      resolve: (root, { id }: { id: string }, ctx) =>
        data.projects.find((project) => project.id === id),
    });

    t.list.field("positions", {
      type: Position,
      resolve: () => data.positions,
    });

    t.field("position", {
      type: Position,
      description: "Find a position by its ID",
      nullable: true,
      args: { id: idArg() },
      resolve: (root, { id }: { id: string }, ctx) =>
        data.positions.find((position) => position.id === id),
    });
  },
});
