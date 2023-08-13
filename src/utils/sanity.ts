import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'mbh58i22',
  dataset: 'production',
  apiVersion: '2023-08-13',
  useCdn: false
});
