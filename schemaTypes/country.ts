import { defineField, defineType } from "sanity"

export const country = defineType({
  name: "country",
  title: "Country",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Navn",
      type: "string",
    }),

    defineField({
      name: "countryCode",
      title: "Landekode",
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
  ],
})