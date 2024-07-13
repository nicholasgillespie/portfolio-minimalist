# Progress Log

## Project Duration

<!-- The Portfolio Design project was actively developed over a period of 4 days, starting on June 24, 2024, and concluding on July 3, 2024. -->

## 2024-07-03 - Afternoon

### Project Development

- Set up the project using Astro.

### Layout Design

- Integrated a layout called `BaseLayout`.

### Component Integration

- Integrated the following components:
  - `Navigation`
  - `SkipLink`
  - `SiteFooter`
  - `SiteHead`
  - `SiteHeader`

### Page Setup

- Created the `index` (home) file, as well as the `contact` and `portfolio` index pages.

### Content Addition

- Added content for the portfolio under the collection named "projects".
- Added 2 collection "items" for testing purposes.

### TODO

- ~~Create a second Layout to be used on all pages except the home page, which includes an additional `margin-block-start` on the main element.~~
- ~~Mutate the files in `docs/content` to Markdown format to be usable within the content.~~
- ~~Define the project design tokens.~~
- ~~Initialize the project on GitHub and deploy.~~
- ~~Identify the sections, main elements/components, and the macro & micro layout.~~

## 2024-07-04 - Morning

### Layout Development

- Developed `LayoutDefault` for diverse page designs, distinct from the home page layout, with `SiteHeader` and `SiteFooter`. This layout introduces styling for visual distinction and content presentation. Adjusted `BaseLayout` for SEO enhancements and clarified the distinct purposes of `LayoutDefault` and `LayoutLanding`, emphasizing design flexibility across the site.

## 2024-07-04 - Afternoon

### SVG Integration

- Addressed SVG integration in the Astro project by consolidating SVGs into a single file for efficient use. This approach enhanced the project's SVG management, aligning with Astro's build process and architecture, and included dynamic SVG icon rendering for improved accessibility and style consistency.

### Content

- Converted project files to .md for dynamic content display and improved content management.

### Base Value Configuration

- Addressed `base` value configuration by integrating `CONFIG_SITE` and `CONFIG_BASE` constants, optimizing navigation for GitHub Pages deployment.

### Deployment

- Successfully deployed the site to GitHub Pages, enhancing project visibility and providing a platform for live testing and feedback.

### TODO

- ~~Identify the sections, main elements/components, and the macro & micro layout.~~
- ~~Define the project design tokens.~~

## 2024-07-05 - Morning

### Link Configuration

- Sorted out the links in the project to ensure proper navigation in both development and production environments.

### Image Configuration

- Configured portfolio page images for responsive display across devices, optimizing load times and visual experience. Images are sorted and displayed by their collection order.

## 2024-07-05 - Afternoon

### Design Review

- Reviewed the [Figma file](https://www.figma.com/design/3TJeqjHpvPOGOIloWgz9xM/minimalist-portfolio-website?node-id=52-22&t=AQh37MlHGMSCFgM5-0) to:

  - Defined the project [design tokens](https://github.com/nicholasgillespie/portfolio-minimalist/tree/main/src/styles/00-settings).
  - Identified the sections, main elements/components, and the [macro layout](../design/01-composition.jpg).

### TODO

- ~~Convert and import Public Sans font.~~
- ~~Insure all content is avaialable and displaying in Portfolio page and Project pages (images, links, etc.)~~

## 2024-07-06 - Morning

### Technology-Specific Pages

- Developed technology-specific page to showcase projects by the technologies used.

### TODO

- Develop pages in alignment with design specifications. Lets go!

## 2024-07-11 - Full day

### Homepage Implementation

- Created homepage.

## 2024-07-12 - Morning

### Navigation links

- Implemented `aria-current="page"` attribute in navigation links programmatically.

## 2024-07-12 - Afternoon

### About Page

- Created the About page.

### Navigation and Skip Links

- Adjusted URL paths in the navigation to ensure consistency and correct redirection.
- Enhanced skip links for better accessibility, ensuring they correctly bypass navigation to main content.

## 2024-07-13 - Morning

### Detail Page

- Created the Detail page.

### Pagination

- Develop the pagination component. Currently, it's structured to display previous and next project links visually. However, it still requires the capability to dynamically receive information about the page coming before (previous) and after (next).

### TODO

- Create Project page.
- Deal with the different possible button variants.

---

## [Date] - [Session]

### [Task Category]

- [Your tasks here]
