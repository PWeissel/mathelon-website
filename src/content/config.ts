import { defineCollection, z } from 'astro:content';

const homepage = defineCollection({
  type: 'content',
  schema: z.object({
    hero: z.object({
      headline: z.string(),
      subline: z.string(),
      primary_button_text: z.string(),
      secondary_button_text: z.string(),
      primary_button_link: z.string(),
      secondary_button_link: z.string(),
      philipp_image: z.string().optional(),
      product_image: z.string().optional(),
    }),
    problem: z.object({
      headline: z.string(),
      problems: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        }),
    })
    solution: z.object({
      headline: z.string(),
    }),
    success: z.object({
      headline: z.string(),
    }),
    applications: z.object({
      headline: z.string(),
    }),
    authority: z.object({
      headline: z.string(),
      empathy_text: z.string(),
    }),
    main_cta: z.object({
      headline: z.string(),
      description: z.string(),
      button_text: z.string(),
      button_link: z.string(),
    }),
  }),
});

export const collections = {
  homepage,
};