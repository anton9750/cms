import { defineField, defineType } from "sanity"

export const article = defineType({
  name: "article",
  title: "Article",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),

    defineField({
      name: "description",
      title: "teaser / kort beskrivelse",
      type: "text",
    }),

    defineField({
      name: "body",
      title: "Artikeltekst",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }),

    defineField({
      name: "image",
      title: "Billede",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "publishedAt",
      title: "Udgivelsesdato",
      type: "datetime",
    }),

    defineField({
      name: "author",
      title: "Forfatter",
      type: "reference",
      to: [
        {
          type: "user",
        },
      ],
    }),
  ],
})