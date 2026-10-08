import { defineField, defineType } from "sanity"

export const attraction = defineType({
  name: "attraction",
  title: "Attraction",
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
      name: "address",
      title: "Adresse",
      type: "string",
    }),

    defineField({
      name: "city",
      title: "City",
      type: "reference",
      to: [{ type: "city" }],
    }),

    defineField({
      name: "translations",
      title: "Oversættelser",
      type: "array",
      of: [{ type: "translation" }],
    }),
  ],
})