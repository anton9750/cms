import { defineField, defineType } from "sanity"

export const user = defineType({
  name: "user",
  title: "User",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Navn",
      type: "string",
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),

    defineField({
  name: "profileImage",
  title: "Profilbillede",
  type: "image",
  options: {
    hotspot: true,
  },
}),
defineField({
  name: "description",
  title: "Kort beskrivelse",
  type: "text",
}),
  ],

  
})