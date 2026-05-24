# How to Deploy Your Blog to Netlify (Free)

## Step 1: Create a GitHub Account (if you don't have one)
1. Go to [github.com](https://github.com)
2. Sign up (free)
3. Verify your email

## Step 2: Push Your Blog to GitHub

1. Open Terminal/Command Prompt
2. Navigate to your blog folder:
   ```bash
   cd path/to/lorenablog
   ```

3. Initialize git and create a repository:
   ```bash
   git init
   git add .
   git commit -m "Initial blog setup"
   ```

4. On GitHub, create a new repository:
   - Click the "+" icon → "New repository"
   - Name it `lorenablog`
   - Click "Create repository" (don't initialize with README)

5. Push your code to GitHub (copy the commands from GitHub):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/lorenablog.git
   git branch -M main
   git push -u origin main
   ```

## Step 3: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up" → Choose "GitHub"
3. Authorize Netlify to access your GitHub account
4. Click "New site from Git"
5. Select your `lorenablog` repository
6. **Important settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Leave other fields default
7. Click "Deploy site"

That's it! Netlify will build and deploy your site automatically.

## Your Site URL

Your blog will be live at: **yourname.netlify.app**

To change the subdomain:
1. Go to Site settings → Domain management
2. Click "Options" → "Edit site name"
3. Enter a custom name (e.g., `lorenablog`)

## Adding More Posts

After deployment, to add new posts:

1. Edit `app/posts.js` locally
2. Add your new post to the `posts` array
3. Save the file
4. Push to GitHub:
   ```bash
   git add app/posts.js
   git commit -m "Add new post: Your Title"
   git push
   ```

Netlify will automatically rebuild and redeploy your site!

## Contact Form Setup

The contact form uses Formspree (free service). To enable it:

1. Go to [formspree.io](https://formspree.io)
2. Sign up (free)
3. Create a new form
4. Copy the form endpoint (looks like: `https://formspree.io/f/ABC123XYZ`)
5. Replace the endpoint in `app/contact/page.js` (around line 31)

That's all! Your contact form will now work.

## Troubleshooting

**Build fails?**
- Make sure `node_modules` is listed in `.gitignore` (it is)
- Check that your code has no syntax errors

**Site looks broken?**
- Clear browser cache (Ctrl+Shift+Delete)
- Check Netlify build logs for errors

**Changes not showing?**
- Wait a few seconds after pushing to GitHub (Netlify rebuilds automatically)
- Check Netlify's "Deploys" tab to see build status

---

You're live! 🎉
