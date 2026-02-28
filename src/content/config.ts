import { defineCollection, z } from 'astro:content';

const donors = defineCollection({
    type: 'data',
    schema: z.array(
        z.object({
            name: z.string(),
            amount: z.number(),
            lastDonation: z.string(),
            isAnonymous: z.boolean().default(false),
        })
    ),
});

export const collections = { donors };
