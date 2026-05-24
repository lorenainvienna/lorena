# Lorena's Blog

A warm, personal blog built with Next.js and hosted on Netlify.

## Getting Started

### Prerequisites
- Node.js 16+ installed
- Git installed

### Local Development

1. Navigate to the project directory:
```bash
cd lorenablog
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding New Posts

To add a new blog post:

1. Open `app/posts.js`
2. Add a new object to the `posts` array:

```javascript
{
  id: 'unique-post-slug',
  title: 'Your Post Title',
  date: new Date('YYYY-MM-DD'),
  excerpt: 'A short excerpt',
  content: `Your post content here...`
}
```

The content supports:
- Multiple paragraphs (separated by `\n\n`)
- Images: `![Alt text](image-url)`
- Videos and GIFs can be embedded

## Deploying to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Set build command to: `npm run build`
6. Set publish directory to: `.next`
7. Deploy!

Your site will be live at `[your-username].netlify.app`

## Features

- **Responsive Design**: Beautiful on all devices
- **Fast**: Optimized Next.js static generation
- **Media Support**: Images, videos, and GIFs
- **Contact Form**: Simple contact form for readers
- **SEO Friendly**: Proper metadata and structured content

## Customization

### Colors
The design uses warm, sensual tones. To customize colors, edit:
- `app/globals.css` - Global color variables
- `app/components/*.module.css` - Component-specific colors

### Typography
Font settings are in `app/globals.css`

### Bio
Update your bio in `app/about/page.js`

## License

All content and design © Lorena. All rights reserved.
