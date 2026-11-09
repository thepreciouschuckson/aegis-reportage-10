export const CATEGORIES = {
  campus: { label: 'Campus', color: 'var(--campus)' },
  community: { label: 'Community', color: 'var(--community)' },
  trending: { label: 'Trending online', color: 'var(--trending)' },
  national: { label: 'National', color: 'var(--national)' },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export const readTime = (body = '') =>
  Math.max(1, Math.round(body.trim().split(/\s+/).length / 200));

export const byDate = (a: any, b: any) => b.data.date.valueOf() - a.data.date.valueOf();
