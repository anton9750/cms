import { defineField, defineType } from "sanity"

export const city = defineType({
  name: "city",
  title: "City",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Navn",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),

    defineField({
      name: "description",
      title: "Beskrivelse",
      type: "text",
    }),

    defineField({
      name: "image",
      title: "Billede",
      type: "image",
    }),

    defineField({
      name: "country",
      title: "Country",
      type: "reference",
      to: [{ type: "country" }],
    }),

    defineField({
      name: "translations",
      title: "Oversættelser",
      type: "array",
      of: [{ type: "translation" }],
    }),
  ],
})