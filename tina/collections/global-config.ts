import type { Collection } from "tinacms";

export const GlobalConfigCollection: Collection = {
  name: "config",
  label: "Site Config",
  path: "src/content/config",
  format: "json",
  ui: {
    global: true,
  },
  fields: [
    {
      name: "author",
      label: "Author Info",
      type: "object",
      fields: [
        {
          name: "name",
          label: "Your Name",
          type: "string",
          required: true,
        },
        {
          name: "nickname",
          label: "Nickname",
          type: "string",
        },
        {
          name: "email",
          label: "Email",
          type: "string",
        },
      ],
    },
    {
      name: "social",
      label: "Social Links",
      type: "object",
      fields: [
        {
          name: "tiktok",
          label: "TikTok URL",
          type: "string",
        },
        {
          name: "instagram",
          label: "Instagram URL",
          type: "string",
        },
        {
          name: "x",
          label: "X (Twitter) URL",
          type: "string",
        },
        {
          name: "github",
          label: "GitHub URL",
          type: "string",
        },
        {
          name: "linkedin",
          label: "LinkedIn URL",
          type: "string",
        },
      ],
    },
    {
      name: "seo",
      label: "SEO Settings",
      type: "object",
      fields: [
        {
          name: "title",
          label: "Site Title",
          type: "string",
          required: true,
        },
        {
          name: "description",
          label: "Site Description",
          type: "string",
        },
      ],
    },
    {
      name: "cta",
      label: "Call to Action Button",
      type: "object",
      fields: [
        {
          name: "title",
          label: "Button Text",
          type: "string",
        },
        {
          name: "link",
          label: "Button Link",
          type: "string",
        },
      ],
    },
    // Homepage Sections
    {
      name: "hero",
      label: "Hero Section",
      type: "object",
      fields: [
        {
          name: "tagline",
          label: "Tagline",
          type: "string",
          description: "Main headline text",
        },
        {
          name: "highlightWord",
          label: "Highlight Word",
          type: "string",
          description: "Word to highlight with yellow background",
        },
        {
          name: "description",
          label: "Description",
          type: "string",
          ui: { component: "textarea" },
        },
        {
          name: "ctaText",
          label: "CTA Button Text",
          type: "string",
        },
        {
          name: "ctaLink",
          label: "CTA Button Link",
          type: "string",
        },
        {
          name: "profileImage",
          label: "Profile Image URL",
          type: "string",
          description: "URL for the profile image",
        },
      ],
    },
    {
      name: "tools",
      label: "Tools/Tags Section",
      type: "object",
      fields: [
        {
          name: "items",
          label: "Tags",
          type: "string",
          list: true,
          description: "List of tags displayed in the scrolling carousel",
        },
      ],
    },
    {
      name: "serviceSection",
      label: "Services Section",
      type: "object",
      fields: [
        {
          name: "heading",
          label: "Section Heading",
          type: "string",
        },
        {
          name: "stats",
          label: "Statistics",
          type: "object",
          list: true,
          fields: [
            { name: "name", label: "Stat Label", type: "string" },
            { name: "value", label: "Stat Value", type: "string" },
          ],
        },
        {
          name: "services",
          label: "Services",
          type: "object",
          list: true,
          fields: [
            { name: "name", label: "Service Name", type: "string" },
            { name: "description", label: "Description", type: "string" },
            {
              name: "icon",
              label: "Icon",
              type: "string",
              options: ["research", "wire", "ui", "proto"],
              description: "Select from predefined service icons",
            },
          ],
        },
      ],
    },
    {
      name: "portfolio",
      label: "Portfolio Section",
      type: "object",
      fields: [
        {
          name: "heading",
          label: "Section Heading",
          type: "string",
        },
        {
          name: "items",
          label: "Portfolio Items",
          type: "object",
          list: true,
          fields: [
            { name: "name", label: "Project Name", type: "string" },
            { name: "description", label: "Description", type: "string" },
            { name: "image", label: "Cover Image URL", type: "string" },
            { name: "link", label: "Project Link", type: "string" },
          ],
        },
      ],
    },
    {
      name: "reviews",
      label: "Reviews Section",
      type: "object",
      fields: [
        {
          name: "heading",
          label: "Section Heading",
          type: "string",
        },
        {
          name: "testimonials",
          label: "Testimonials",
          type: "object",
          list: true,
          fields: [
            {
              name: "quote",
              label: "Quote",
              type: "string",
              ui: { component: "textarea" },
            },
            { name: "clientName", label: "Client Name", type: "string" },
            { name: "clientPosition", label: "Position/Company", type: "string" },
            { name: "clientPhoto", label: "Client Photo URL", type: "string" },
          ],
        },
      ],
    },
    {
      name: "callToAction",
      label: "Call To Action Section",
      type: "object",
      fields: [
        { name: "title", label: "Title", type: "string" },
        {
          name: "description",
          label: "Description",
          type: "string",
          ui: { component: "textarea" },
        },
        { name: "buttonText", label: "Button Text", type: "string" },
        { name: "buttonLink", label: "Button Link", type: "string" },
        { name: "enabled", label: "Enable Section", type: "boolean" },
      ],
    },
  ],
};
