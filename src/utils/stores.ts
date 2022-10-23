import { writable } from 'svelte/store';

export const open = writable(false);

export const section = writable('welcome');
