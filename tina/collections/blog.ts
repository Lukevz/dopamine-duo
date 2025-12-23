import type { Collection } from "tinacms";

export const BlogCollection: Collection = {
  name: "blog",
  label: "Blog Posts",
  path: "src/content/blog",
  format: "md",
  ui: {
    router({ document }) {
      return `/posts/${document._sys.filename}`;
    },
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      name: "author",
      label: "Author",
      type: "object",
      fields: [
        {
          name: "name",
          label: "Author Name",
          type: "string",
        },
        {
          name: "url",
          label: "Author Image URL",
          type: "string",
        },
      ],
    },
    {
      name: "image",
      label: "Featured Image",
      type: "object",
      fields: [
        {
          name: "url",
          label: "Image URL",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      name: "tags",
      label: "Tags",
      type: "string",
      list: true,
    },
    {
      name: "pubDate",
      label: "Publication Date",
      type: "string",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
};
