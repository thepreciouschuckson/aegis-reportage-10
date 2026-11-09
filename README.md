Aegis Reportage

Run it on your computer
1. Install Node.js 18.20 or newer from nodejs.org.
2. Open this folder in VS Code and open the terminal.
3. Run: npm install
4. Run: npm run dev
5. Open the address the terminal shows (usually http://localhost:4321).

Add a story
1. Copy any file in src/content/stories and rename it. The file name becomes the web address.
2. Edit the info block at the top, then write the story under it.
3. Put photos in public/images and set image: /images/your-photo.jpg in the info block.
4. Save. The site updates by itself.

Style a story in markdown
Link: [link text](https://example.com)
Subheading: ## Your subheading
Pull quote: start a line with > 
Photo with caption inside the text:
<figure><img src="/images/photo.jpg" alt="Describe the photo"><figcaption>Caption. Photo: Name</figcaption></figure>

Put it online with Vercel
1. Push the folder to a GitHub repository.
2. On vercel.com choose Add New, then Project, and pick the repository.
3. Vercel detects Astro. Click Deploy.

Ad images
Put your ad files in public/images/ads with these exact names:
ad-728x90.jpg (banner on the homepage)
ad-300x250.jpg (sidebar, top)
ad-300x600.jpg (sidebar, bottom)
Until you add them, the site shows a grey placeholder box.

Change the headline font
Open src/layouts/Base.astro and src/styles/global.css. Swap "Libre Franklin" for another Google font in both places.
