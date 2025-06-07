import createMDX from '@next/mdx';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    extension: /\.(md|mdx)$/,
    options: {
        rehypePlugins: [
            rehypeSlug,
        ],
        remarkPlugins: [remarkGfm],
    },
});

//module.exports = withMDX(nextConfig);
export default withMDX(nextConfig)
