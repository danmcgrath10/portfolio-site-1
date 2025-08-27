# Daniel McGrath - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This site showcases my professional experience, projects, and skills as a full-stack software engineer.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light mode support
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized for Core Web Vitals and fast loading
- **SEO Optimized**: Built-in SEO with meta tags, Open Graph, and structured data
- **Accessible**: WCAG AA compliant with proper semantic markup
- **TypeScript**: Full type safety throughout the application
- **Content Management**: Easy to update content via JSON files

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + shadcn/ui
- **Forms**: React Hook Form + Zod validation
- **Theming**: next-themes for dark/light mode
- **Icons**: Lucide React
- **Email**: Resend (for contact form)

## 📁 Project Structure

```
/
├── data/
│   └── resume.json          # Resume data (parsed from PDF)
├── public/
│   └── images/              # Static images
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── (site)/          # Main site pages
│   │   ├── projects/        # Project pages
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # Reusable components
│   │   ├── ui/              # Base UI components
│   │   └── layout/          # Layout components
│   └── lib/                 # Utilities and helpers
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-site-1
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking
- `pnpm format` - Format code with Prettier
- `pnpm analyze` - Analyze bundle size

## 🎨 Customization

### Updating Content

The site content is managed through the `/data/resume.json` file. To update your information:

1. **Edit the JSON file**: Modify `/data/resume.json` with your information
2. **Add images**: Place project images in `/public/images/`
3. **Update metadata**: Edit the metadata in `src/app/layout.tsx`

### Styling

- **Colors**: Update CSS variables in `src/app/globals.css`
- **Components**: Modify components in `src/components/ui/`
- **Layout**: Adjust layout components in `src/components/layout/`

### Adding New Pages

1. Create a new page in `src/app/`
2. Add the route to navigation in `src/components/layout/header.tsx`
3. Update the sitemap if needed

## 📧 Contact Form Setup

The contact form is currently set up to simulate email sending. To enable real email functionality:

1. **Set up Resend**:
   - Create an account at [resend.com](https://resend.com)
   - Get your API key
   - Add environment variables:
     ```env
     RESEND_API_KEY=your_api_key_here
     CONTACT_TO=your_email@example.com
     CONTACT_FROM=noreply@yourdomain.com
     ```

2. **Create API route** (optional):
   - Add email sending logic to `src/app/api/contact/route.ts`

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**:
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Deploy automatically

2. **Environment Variables**:
   - Add any required environment variables in Vercel dashboard

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 Performance

The site is optimized for performance with:
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages where possible
- **Bundle Analysis**: Use `pnpm analyze` to check bundle size

## 🔍 SEO

Built-in SEO features:
- **Meta Tags**: Dynamic meta tags for each page
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

## ♿ Accessibility

The site follows accessibility best practices:
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and descriptions
- **Color Contrast**: WCAG AA compliant color ratios
- **Focus Management**: Visible focus indicators

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide](https://lucide.dev/) for icons

## 📞 Contact

- **Email**: danmcgrath1035@gmail.com
- **Phone**: +1 (603) 548-1168
- **Location**: Malden, MA

---

Built with ❤️ using Next.js and TypeScript
