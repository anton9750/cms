import { defineField, defineType } from "sanity"

export const uiText = defineType({
  name: "uiText",
  title: "UI tekst",
  type: "object",

  fields: [
    defineField({ name: "key", title: "Nøgle", type: "string" }),
    defineField({ name: "value", title: "Tekst", type: "string" }),
  ],

  preview: {
    select: { title: "key", subtitle: "value" },
  },
})