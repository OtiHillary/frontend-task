## Tech Stack

- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Image Handling**: Next.js Image Component
- **Animations**: Framer Motion/ CSS Transforms & Transitions


## Component Highlight: CategorySidebar

The `CategorySidebar` component is the standout feature of this application, implementing a unique circular navigation system. [P.S] I do not have a lot of experience using Framer motion so i had to do this one myself(Sorry)

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

These values work together to create smooth circular motion when switching between categories(I literally tweaked these angles till it looked visually appealing LOL).


## Deployment
this project was deployed on vercel and is accessible [here](https://frontend-task-delta-blond.vercel.app/)

## Structure
i renamed the main page to..```page.tsx```
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


