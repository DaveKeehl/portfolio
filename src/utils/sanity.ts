import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'mbh58i22',
  dataset: 'production',
  apiVersion: '2022-10-12',
  useCdn: true
});
