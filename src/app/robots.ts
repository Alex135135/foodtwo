import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
    return { rules: { userAgent: '*', allow: '/' }, sitemap: 'https://foodflow-demo.vercel.app/sitemap.xml' };
}