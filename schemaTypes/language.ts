import { defineField, defineType } from "sanity"

export const language = defineType({
  name: "language",
  title: "Language",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Navn",
      type: "string",
      description: "Vises i dropdown'en, fx Mexican / Español (México)",
    }),
    defineField({
      name: "code",
      title: "Sprogkode",
      type: "string",
      description: "Fx es-MX, de, fr. Bruges til at finde oversættelserne.",
    }),
    defineField({
      name: "uiTexts",
      title: "Brugerflade-tekster",
      type: "array",
      of: [{ type: "uiText" }],
    }),
  ],

  preview: {
    select: { title: "name", subtitle: "code" },
  },
})