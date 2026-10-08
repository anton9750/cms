import { defineField, defineType } from "sanity"

export const translation = defineType({
  name: "translation",
  title: "Oversættelse",
  type: "object",

  fields: [
    defineField({
      name: "language",
      title: "Sprogkode",
      type: "string",
      description: "Fx es-MX, en, de. Skal matche et Language-dokument.",
    }),
    defineField({ name: "name", title: "Navn", type: "string" }),
    defineField({ name: "description", title: "Beskrivelse", type: "text" }),
    defineField({ name: "address", title: "Adresse", type: "string" }),
  ],

  preview: {
    select: { title: "language", subtitle: "name" },
  },
})