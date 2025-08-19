# Wonderla Theme Park Attraction Explorer

A modern, interactive web application built with Next.js and TypeScript that showcases various rides and attractions at Wonderla theme parks across India. The application features a unique circular navigation system and smooth animations to provide an engaging user experience.

## Tech Stack

- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Image Handling**: Next.js Image Component
- **Animations**: CSS Transforms & Transitions

## Key Features

- Interactive circular category navigation
- Smooth animations and transitions
- Responsive design
- Dynamic content loading
- Category-based ride filtering

## Component Highlight: CategorySidebar

The `CategorySidebar` component is the standout feature of this application, implementing a unique circular navigation system.

### Visual Design

The component creates a semi-circular interface with the following elements:

1. **Outer Ring**: A large circle (500px × 500px) with a yellow gradient background
2. **Inner Circle**: A smaller dark circle (340px × 340px) creating a ring effect
3. **Category Indicators**: Three interactive category buttons positioned along the right half of the ring
4. **Active Indicator**: A white circular highlight that moves along the ring to show the active category

### Technical Implementation

#### Props Interface
```typescript
interface CategorySidebarProps {
  activeCategory: "land" | "water" | "kids";
  onCategoryChange: (category: "land" | "water" | "kids") => void;
  categories: Category[];
}
```

#### Positioning System

The component uses a sophisticated positioning system with precise angles and distances:

```typescript
const angles = {
  land: -39,    // top-right position
  water: 0,     // center-right position
  kids: 39      // bottom-right position
};

const translate = {
  land: 247,    // distance from center
  water: 255,   // distance from center
  kids: 242     // distance from center
};
```

#### Active Indicator Animation

The active category indicator uses CSS transforms for smooth transitions:

```typescript
const rotateAngle = {
  land: -45,
  water: 0,
  kids: 47
};

const translateAngle = {
  land: 255,
  water: 250,
  kids: 250
};
```

These values work together to create smooth circular motion when switching between categories.

### Key Features

1. **Smooth Transitions**: All movements are animated using CSS transitions with a 500ms duration
2. **Visual Feedback**: 
   - Active categories are highlighted with a white circle
   - Hover states include subtle scaling effects
   - Category icons and text are clearly visible against the dark background

3. **Interactive Elements**:
   - Each category is clickable
   - Visual feedback on hover and active states
   - Count badges showing number of rides in each category

4. **Accessibility**:
   - Clear visual hierarchy
   - High contrast text
   - Meaningful icon and image alt text

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Structure

```
frontend-task/
├── app/
│   ├── components/
│   │   ├── CategorySidebar.tsx   # Circular navigation component
│   │   ├── CarouselControls.tsx  # Ride carousel navigation
│   │   └── RideCard.tsx         # Individual ride display
│   ├── types/
│   │   └── rides.ts            # TypeScript interfaces
│   ├── data/
│   │   └── rides.json         # Ride data
│   └── page.tsx              # Main page component
├── public/
│   └── [images]            # Static assets
└── [config files]         # Next.js configuration

## Future Improvements

1. Add mobile-responsive design for the circular navigation
2. Implement ride details modal/page
3. Add ride filtering by location
4. Enhance accessibility features
5. Add ride booking functionality
6. Implement user preferences storage
