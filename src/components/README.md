# Components

Reusable, component-based structure for the Webisha app.

## Structure

- **`layout/`** – App shell: `MainLayout` (header + outlet + footer). Use for pages that share the same navbar and footer.
- **`sections/`** – Full-width section components (Hero, Services, ByTheNumbers, Portfolio, Testimonials). Use on Home or any page that needs them.
- **`ui/`** – Shared UI primitives: `Button`, `SectionTitle`, `SectionSubtitle`.
- **`navbar/`** – Top navigation (used inside MainLayout).
- **`footer/`** – Site footer (used inside MainLayout).

## Usage

```tsx
// Use layout on a route (see App.tsx)
<Route element={<MainLayout />}>
  <Route path="/" element={<Home />} />
</Route>

// Compose sections on any page
import { Hero, Services, Portfolio } from '../components/sections';

// Or use the root barrel
import { MainLayout, Hero, SectionTitle } from '../components';
```

## Theming

Colors and layout use CSS variables from `src/index.css` (e.g. `--header-nav-bg`, `--content-max-width`, `--primary-text`). Update those to change the look app-wide.
