import { Lesson } from '../types';

export const LESSONS: Lesson[] = [
  {
    id: 'cute-cat',
    title: 'Cute Cat',
    category: 'Cute',
    difficulty: 'Beginner',
    estimatedTime: '8 min',
    description: 'Learn to sketch an adorable kitten sitting sweetly with big shining eyes and a tiny collar bell.',
    tags: ['Cat', 'Pet', 'Kitten', 'Kawaii'],
    isFeatured: true,
    isPopular: true,
    thumbnailSvg: `<circle cx="150" cy="115" r="55" fill="#fdf2f4" stroke="#ec4899" stroke-width="4"/>
      <polygon points="110,75 130,40 145,70" fill="#fbcfe8" stroke="#ec4899" stroke-width="3.5" stroke-linejoin="round"/>
      <polygon points="190,75 170,40 155,70" fill="#fbcfe8" stroke="#ec4899" stroke-width="3.5" stroke-linejoin="round"/>
      <ellipse cx="130" cy="112" rx="7" ry="9" fill="#1e293b"/>
      <ellipse cx="170" cy="112" rx="7" ry="9" fill="#1e293b"/>
      <circle cx="128" cy="109" r="2.5" fill="#ffffff"/>
      <circle cx="168" cy="109" r="2.5" fill="#ffffff"/>
      <polygon points="150,123 145,119 155,119" fill="#f43f5e"/>
      <path d="M145,125 Q150,131 150,125 Q150,131 155,125" fill="none" stroke="#334155" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="95" y1="120" x2="120" y2="122" stroke="#64748b" stroke-width="2" stroke-linecap="round"/>
      <line x1="95" y1="128" x2="120" y2="126" stroke="#64748b" stroke-width="2" stroke-linecap="round"/>
      <line x1="205" y1="120" x2="180" y2="122" stroke="#64748b" stroke-width="2" stroke-linecap="round"/>
      <line x1="205" y1="128" x2="180" y2="126" stroke="#64748b" stroke-width="2" stroke-linecap="round"/>
      <path d="M125,170 C125,230 175,230 175,170" fill="#fdf2f4" stroke="#ec4899" stroke-width="4"/>
      <ellipse cx="140" cy="225" rx="10" ry="7" fill="#ffffff" stroke="#ec4899" stroke-width="3"/>
      <ellipse cx="160" cy="225" rx="10" ry="7" fill="#ffffff" stroke="#ec4899" stroke-width="3"/>
      <path d="M175,210 Q215,200 205,170" fill="none" stroke="#ec4899" stroke-width="4.5" stroke-linecap="round"/>
      <circle cx="150" cy="172" r="5" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>`,
    steps: [
      {
        stepNumber: 1,
        title: 'Basic Head & Body Shapes',
        instruction: 'Draw a gentle circle for the head and an oval guideline underneath for the kitten body.',
        tip: 'Keep your wrist loose. These light guide shapes help you place everything in balance.',
        cumulativeSvg: `<circle cx="150" cy="115" r="55" fill="none" stroke="#f43f5e" stroke-width="3.5" stroke-dasharray="6,4"/>
          <ellipse cx="150" cy="195" rx="45" ry="40" fill="none" stroke="#f43f5e" stroke-width="3" stroke-dasharray="6,4"/>`,
      },
      {
        stepNumber: 2,
        title: 'Pointed Cat Ears',
        instruction: 'Add two perky triangular ears on top of the head circle, pointing slightly outward.',
        tip: 'Round the very tips slightly so they look soft and friendly instead of sharp.',
        cumulativeSvg: `<circle cx="150" cy="115" r="55" fill="none" stroke="#475569" stroke-width="3"/>
          <ellipse cx="150" cy="195" rx="45" ry="40" fill="none" stroke="#475569" stroke-width="2" stroke-dasharray="4,4"/>
          <polygon points="110,78 130,40 145,70" fill="none" stroke="#f43f5e" stroke-width="3.5" stroke-linejoin="round"/>
          <polygon points="190,78 170,40 155,70" fill="none" stroke="#f43f5e" stroke-width="3.5" stroke-linejoin="round"/>`,
      },
      {
        stepNumber: 3,
        title: 'Inner Ears & Cheek Curves',
        instruction: 'Draw smaller triangles inside the ears and soft cheek tufts widening toward the base of the head.',
        tip: 'Cat cheeks flare out gently below eye level.',
        cumulativeSvg: `<circle cx="150" cy="115" r="55" fill="none" stroke="#475569" stroke-width="3"/>
          <ellipse cx="150" cy="195" rx="45" ry="40" fill="none" stroke="#475569" stroke-width="2" stroke-dasharray="4,4"/>
          <polygon points="110,78 130,40 145,70" fill="none" stroke="#475569" stroke-width="3" stroke-linejoin="round"/>
          <polygon points="190,78 170,40 155,70" fill="none" stroke="#475569" stroke-width="3" stroke-linejoin="round"/>
          <polygon points="116,73 130,48 140,68" fill="#fee2e2" stroke="#f43f5e" stroke-width="2.5"/>
          <polygon points="184,73 170,48 160,68" fill="#fee2e2" stroke="#f43f5e" stroke-width="2.5"/>
          <path d="M96,120 Q92,130 102,135" fill="none" stroke="#f43f5e" stroke-width="3"/>
          <path d="M204,120 Q208,130 198,135" fill="none" stroke="#f43f5e" stroke-width="3"/>`,
      },
      {
        stepNumber: 4,
        title: 'Shining Eyes & Sweet Expression',
        instruction: 'Draw two oval eyes with tiny white circular highlights inside, plus a small triangular nose.',
        tip: 'Placing the highlights on the top-left of both eyes creates a lively, focused glance.',
        cumulativeSvg: `<circle cx="150" cy="115" r="55" fill="none" stroke="#475569" stroke-width="3"/>
          <polygon points="110,78 130,40 145,70" fill="none" stroke="#475569" stroke-width="3" stroke-linejoin="round"/>
          <polygon points="190,78 170,40 155,70" fill="none" stroke="#475569" stroke-width="3" stroke-linejoin="round"/>
          <polygon points="116,73 130,48 140,68" fill="#fee2e2" stroke="#475569" stroke-width="2"/>
          <polygon points="184,73 170,48 160,68" fill="#fee2e2" stroke="#475569" stroke-width="2"/>
          <ellipse cx="130" cy="112" rx="7" ry="9" fill="#1e293b" stroke="#f43f5e" stroke-width="2"/>
          <ellipse cx="170" cy="112" rx="7" ry="9" fill="#1e293b" stroke="#f43f5e" stroke-width="2"/>
          <circle cx="128" cy="109" r="2.5" fill="#ffffff"/>
          <circle cx="168" cy="109" r="2.5" fill="#ffffff"/>
          <polygon points="150,123 145,119 155,119" fill="#f43f5e"/>`,
      },
      {
        stepNumber: 5,
        title: 'Mouth & Whisker Lines',
        instruction: 'Sketch the classic inverted "w" curved mouth under the nose, then add two whiskers on each cheek.',
        tip: 'Keep whiskers light and confident with quick flicks.',
        cumulativeSvg: `<circle cx="150" cy="115" r="55" fill="none" stroke="#475569" stroke-width="3"/>
          <polygon points="110,78 130,40 145,70" fill="none" stroke="#475569" stroke-width="3" stroke-linejoin="round"/>
          <polygon points="190,78 170,40 155,70" fill="none" stroke="#475569" stroke-width="3" stroke-linejoin="round"/>
          <ellipse cx="130" cy="112" rx="7" ry="9" fill="#1e293b"/>
          <ellipse cx="170" cy="112" rx="7" ry="9" fill="#1e293b"/>
          <circle cx="128" cy="109" r="2.5" fill="#ffffff"/>
          <circle cx="168" cy="109" r="2.5" fill="#ffffff"/>
          <polygon points="150,123 145,119 155,119" fill="#f43f5e"/>
          <path d="M145,125 Q150,131 150,125 Q150,131 155,125" fill="none" stroke="#f43f5e" stroke-width="3" stroke-linecap="round"/>
          <line x1="95" y1="120" x2="120" y2="122" stroke="#f43f5e" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="95" y1="128" x2="120" y2="126" stroke="#f43f5e" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="205" y1="120" x2="180" y2="122" stroke="#f43f5e" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="205" y1="128" x2="180" y2="126" stroke="#f43f5e" stroke-width="2.5" stroke-linecap="round"/>`,
      },
      {
        stepNumber: 6,
        title: 'Body Outline & Front Paws',
        instruction: 'Outline the cozy chest and two rounded front paws resting on the ground.',
        tip: 'Small vertical notch lines define the individual kitten toes.',
        cumulativeSvg: `<circle cx="150" cy="115" r="55" fill="none" stroke="#475569" stroke-width="3"/>
          <polygon points="110,78 130,40 145,70" fill="none" stroke="#475569" stroke-width="3" stroke-linejoin="round"/>
          <polygon points="190,78 170,40 155,70" fill="none" stroke="#475569" stroke-width="3" stroke-linejoin="round"/>
          <ellipse cx="130" cy="112" rx="7" ry="9" fill="#1e293b"/>
          <ellipse cx="170" cy="112" rx="7" ry="9" fill="#1e293b"/>
          <circle cx="128" cy="109" r="2.5" fill="#ffffff"/>
          <circle cx="168" cy="109" r="2.5" fill="#ffffff"/>
          <polygon points="150,123 145,119 155,119" fill="#f43f5e"/>
          <path d="M145,125 Q150,131 150,125 Q150,131 155,125" fill="none" stroke="#475569" stroke-width="2.5"/>
          <path d="M125,170 C125,230 175,230 175,170" fill="none" stroke="#f43f5e" stroke-width="3.5"/>
          <ellipse cx="140" cy="225" rx="10" ry="7" fill="#ffffff" stroke="#f43f5e" stroke-width="3"/>
          <ellipse cx="160" cy="225" rx="10" ry="7" fill="#ffffff" stroke="#f43f5e" stroke-width="3"/>`,
      },
      {
        stepNumber: 7,
        title: 'Curled Tail & Bell Collar',
        instruction: 'Draw a playful tail curving up from behind the kitten and a small collar with a golden jingle bell.',
        tip: 'The tail curve conveys a relaxed, happy kitten mood.',
        cumulativeSvg: `<circle cx="150" cy="115" r="55" fill="none" stroke="#475569" stroke-width="3"/>
          <polygon points="110,78 130,40 145,70" fill="none" stroke="#475569" stroke-width="3"/>
          <polygon points="190,78 170,40 155,70" fill="none" stroke="#475569" stroke-width="3"/>
          <ellipse cx="130" cy="112" rx="7" ry="9" fill="#1e293b"/>
          <ellipse cx="170" cy="112" rx="7" ry="9" fill="#1e293b"/>
          <polygon points="150,123 145,119 155,119" fill="#f43f5e"/>
          <path d="M125,170 C125,230 175,230 175,170" fill="none" stroke="#475569" stroke-width="3"/>
          <ellipse cx="140" cy="225" rx="10" ry="7" fill="#ffffff" stroke="#475569" stroke-width="2.5"/>
          <ellipse cx="160" cy="225" rx="10" ry="7" fill="#ffffff" stroke="#475569" stroke-width="2.5"/>
          <path d="M175,210 Q215,200 205,170" fill="none" stroke="#f43f5e" stroke-width="4.5" stroke-linecap="round"/>
          <path d="M130,170 Q150,176 170,170" fill="none" stroke="#f43f5e" stroke-width="3"/>
          <circle cx="150" cy="174" r="5" fill="#fbbf24" stroke="#f43f5e" stroke-width="2"/>`,
      },
      {
        stepNumber: 8,
        title: 'Soft Blush & Final Ink Details',
        instruction: 'Finish up with warm blush circles under the eyes and soft pink accents on the kitten ears!',
        tip: 'Congratulations! Your cute cat is complete. You can sign your name in the corner!',
        cumulativeSvg: `<circle cx="150" cy="115" r="55" fill="#fdf2f4" stroke="#ec4899" stroke-width="4"/>
          <polygon points="110,75 130,40 145,70" fill="#fbcfe8" stroke="#ec4899" stroke-width="3.5" stroke-linejoin="round"/>
          <polygon points="190,75 170,40 155,70" fill="#fbcfe8" stroke="#ec4899" stroke-width="3.5" stroke-linejoin="round"/>
          <ellipse cx="130" cy="112" rx="7" ry="9" fill="#1e293b"/>
          <ellipse cx="170" cy="112" rx="7" ry="9" fill="#1e293b"/>
          <circle cx="128" cy="109" r="2.5" fill="#ffffff"/>
          <circle cx="168" cy="109" r="2.5" fill="#ffffff"/>
          <ellipse cx="118" cy="122" rx="6" ry="4" fill="#fca5a5" opacity="0.6"/>
          <ellipse cx="182" cy="122" rx="6" ry="4" fill="#fca5a5" opacity="0.6"/>
          <polygon points="150,123 145,119 155,119" fill="#f43f5e"/>
          <path d="M145,125 Q150,131 150,125 Q150,131 155,125" fill="none" stroke="#334155" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="95" y1="120" x2="120" y2="122" stroke="#64748b" stroke-width="2" stroke-linecap="round"/>
          <line x1="95" y1="128" x2="120" y2="126" stroke="#64748b" stroke-width="2" stroke-linecap="round"/>
          <line x1="205" y1="120" x2="180" y2="122" stroke="#64748b" stroke-width="2" stroke-linecap="round"/>
          <line x1="205" y1="128" x2="180" y2="126" stroke="#64748b" stroke-width="2" stroke-linecap="round"/>
          <path d="M125,170 C125,230 175,230 175,170" fill="#fdf2f4" stroke="#ec4899" stroke-width="4"/>
          <ellipse cx="140" cy="225" rx="10" ry="7" fill="#ffffff" stroke="#ec4899" stroke-width="3"/>
          <ellipse cx="160" cy="225" rx="10" ry="7" fill="#ffffff" stroke="#ec4899" stroke-width="3"/>
          <path d="M175,210 Q215,200 205,170" fill="none" stroke="#ec4899" stroke-width="4.5" stroke-linecap="round"/>
          <circle cx="150" cy="172" r="5" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>`,
      },
    ],
  },
  {
    id: 'butterfly',
    title: 'Graceful Butterfly',
    category: 'Nature',
    difficulty: 'Beginner',
    estimatedTime: '7 min',
    description: 'Sketch a symmetrical butterfly with graceful heart-contoured wings and delicate curled antennae.',
    tags: ['Butterfly', 'Wings', 'Insects', 'Nature'],
    isPopular: true,
    thumbnailSvg: `<ellipse cx="150" cy="150" rx="6" ry="40" fill="#334155"/>
      <circle cx="150" cy="105" r="9" fill="#334155"/>
      <path d="M148,98 Q140,75 130,80" fill="none" stroke="#334155" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M152,98 Q160,75 170,80" fill="none" stroke="#334155" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M145,130 C100,70 60,110 95,160 C120,195 145,170 145,150 Z" fill="#fed7aa" stroke="#f97316" stroke-width="3"/>
      <path d="M155,130 C200,70 240,110 205,160 C180,195 155,170 155,150 Z" fill="#fed7aa" stroke="#f97316" stroke-width="3"/>
      <path d="M145,155 C110,170 85,210 120,230 C140,240 145,190 145,170 Z" fill="#fbcfe8" stroke="#ec4899" stroke-width="3"/>
      <path d="M155,155 C190,170 215,210 180,230 C160,240 155,190 155,170 Z" fill="#fbcfe8" stroke="#ec4899" stroke-width="3"/>
      <circle cx="108" cy="140" r="6" fill="#ffffff" opacity="0.8"/>
      <circle cx="192" cy="140" r="6" fill="#ffffff" opacity="0.8"/>`,
    steps: [
      {
        stepNumber: 1,
        title: 'Center Body & Head Guideline',
        instruction: 'Draw a central vertical line, a small circular head, and a slender oval thorax and abdomen.',
        tip: 'The center body serves as an anchor for wing symmetry.',
        cumulativeSvg: `<line x1="150" y1="70" x2="150" y2="250" stroke="#f43f5e" stroke-width="2" stroke-dasharray="6,4"/>
          <circle cx="150" cy="105" r="9" fill="none" stroke="#f43f5e" stroke-width="3.5"/>
          <ellipse cx="150" cy="150" rx="6" ry="40" fill="none" stroke="#f43f5e" stroke-width="3.5"/>`,
      },
      {
        stepNumber: 2,
        title: 'Top Forewing Arches',
        instruction: 'Curve a broad sweeping arc upward and outward from the body for the top left and right wings.',
        tip: 'Notice how the wings arch higher than the butterfly head.',
        cumulativeSvg: `<circle cx="150" cy="105" r="9" fill="#475569"/>
          <ellipse cx="150" cy="150" rx="6" ry="40" fill="#475569"/>
          <path d="M145,130 C100,70 60,110 95,160" fill="none" stroke="#f43f5e" stroke-width="3.5"/>
          <path d="M155,130 C200,70 240,110 205,160" fill="none" stroke="#f43f5e" stroke-width="3.5"/>`,
      },
      {
        stepNumber: 3,
        title: 'Closing the Forewings',
        instruction: 'Loop the bottom edges of the upper wings back toward the center body to close the shape.',
        tip: 'Both wings should mirror each other as closely as possible.',
        cumulativeSvg: `<circle cx="150" cy="105" r="9" fill="#475569"/>
          <ellipse cx="150" cy="150" rx="6" ry="40" fill="#475569"/>
          <path d="M145,130 C100,70 60,110 95,160 C120,195 145,170 145,150 Z" fill="none" stroke="#f43f5e" stroke-width="3.5"/>
          <path d="M155,130 C200,70 240,110 205,160 C180,195 155,170 155,150 Z" fill="none" stroke="#f43f5e" stroke-width="3.5"/>`,
      },
      {
        stepNumber: 4,
        title: 'Lower Hindwings',
        instruction: 'Draw smaller, rounded petal-like teardrop wings on either side below the forewings.',
        tip: 'The lower wings are about two-thirds the size of the upper wings.',
        cumulativeSvg: `<circle cx="150" cy="105" r="9" fill="#475569"/>
          <ellipse cx="150" cy="150" rx="6" ry="40" fill="#475569"/>
          <path d="M145,130 C100,70 60,110 95,160 C120,195 145,170 145,150 Z" fill="none" stroke="#475569" stroke-width="3"/>
          <path d="M155,130 C200,70 240,110 205,160 C180,195 155,170 155,150 Z" fill="none" stroke="#475569" stroke-width="3"/>
          <path d="M145,155 C110,170 85,210 120,230 C140,240 145,190 145,170 Z" fill="none" stroke="#f43f5e" stroke-width="3.5"/>
          <path d="M155,155 C190,170 215,210 180,230 C160,240 155,190 155,170 Z" fill="none" stroke="#f43f5e" stroke-width="3.5"/>`,
      },
      {
        stepNumber: 5,
        title: 'Curled Antennae',
        instruction: 'Add two graceful arching lines sprouting from the top of the head with curled ends.',
        tip: 'A small dot or curl on the tip makes antennae feel whimsical and elegant.',
        cumulativeSvg: `<circle cx="150" cy="105" r="9" fill="#475569"/>
          <ellipse cx="150" cy="150" rx="6" ry="40" fill="#475569"/>
          <path d="M145,130 C100,70 60,110 95,160 C120,195 145,170 145,150 Z" fill="none" stroke="#475569" stroke-width="3"/>
          <path d="M155,130 C200,70 240,110 205,160 C180,195 155,170 155,150 Z" fill="none" stroke="#475569" stroke-width="3"/>
          <path d="M145,155 C110,170 85,210 120,230 C140,240 145,190 145,170 Z" fill="none" stroke="#475569" stroke-width="3"/>
          <path d="M155,155 C190,170 215,210 180,230 C160,240 155,190 155,170 Z" fill="none" stroke="#475569" stroke-width="3"/>
          <path d="M148,98 Q140,75 130,80" fill="none" stroke="#f43f5e" stroke-width="3" stroke-linecap="round"/>
          <path d="M152,98 Q160,75 170,80" fill="none" stroke="#f43f5e" stroke-width="3" stroke-linecap="round"/>`,
      },
      {
        stepNumber: 6,
        title: 'Wing Patterns & Veins',
        instruction: 'Sketch inner radiating branch lines and circular spot ornaments on the wings.',
        tip: 'Wing spots help butterflies camouflage in nature.',
        cumulativeSvg: `<circle cx="150" cy="105" r="9" fill="#475569"/>
          <ellipse cx="150" cy="150" rx="6" ry="40" fill="#475569"/>
          <path d="M145,130 C100,70 60,110 95,160 C120,195 145,170 145,150 Z" fill="#fdf2f4" stroke="#475569" stroke-width="3"/>
          <path d="M155,130 C200,70 240,110 205,160 C180,195 155,170 155,150 Z" fill="#fdf2f4" stroke="#475569" stroke-width="3"/>
          <path d="M145,155 C110,170 85,210 120,230 C140,240 145,190 145,170 Z" fill="#fdf2f4" stroke="#475569" stroke-width="3"/>
          <path d="M155,155 C190,170 215,210 180,230 C160,240 155,190 155,170 Z" fill="#fdf2f4" stroke="#475569" stroke-width="3"/>
          <circle cx="108" cy="140" r="7" fill="none" stroke="#f43f5e" stroke-width="3"/>
          <circle cx="192" cy="140" r="7" fill="none" stroke="#f43f5e" stroke-width="3"/>
          <circle cx="125" cy="205" r="5" fill="none" stroke="#f43f5e" stroke-width="2.5"/>
          <circle cx="175" cy="205" r="5" fill="none" stroke="#f43f5e" stroke-width="2.5"/>`,
      },
      {
        stepNumber: 7,
        title: 'Vibrant Sunset Wing Colors',
        instruction: 'Fill the wings with sunny amber and rose gradient hues and bring the artwork alive!',
        tip: 'Butterflies come in every color imaginable—feel free to experiment!',
        cumulativeSvg: `<ellipse cx="150" cy="150" rx="6" ry="40" fill="#334155"/>
          <circle cx="150" cy="105" r="9" fill="#334155"/>
          <path d="M148,98 Q140,75 130,80" fill="none" stroke="#334155" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M152,98 Q160,75 170,80" fill="none" stroke="#334155" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M145,130 C100,70 60,110 95,160 C120,195 145,170 145,150 Z" fill="#fed7aa" stroke="#ea580c" stroke-width="3"/>
          <path d="M155,130 C200,70 240,110 205,160 C180,195 155,170 155,150 Z" fill="#fed7aa" stroke="#ea580c" stroke-width="3"/>
          <path d="M145,155 C110,170 85,210 120,230 C140,240 145,190 145,170 Z" fill="#fbcfe8" stroke="#db2777" stroke-width="3"/>
          <path d="M155,155 C190,170 215,210 180,230 C160,240 155,190 155,170 Z" fill="#fbcfe8" stroke="#db2777" stroke-width="3"/>
          <circle cx="108" cy="140" r="6" fill="#ffffff" opacity="0.9"/>
          <circle cx="192" cy="140" r="6" fill="#ffffff" opacity="0.9"/>`,
      },
    ],
  },
  {
    id: 'rose',
    title: 'Blooming Rose',
    category: 'Flowers',
    difficulty: 'Intermediate',
    estimatedTime: '10 min',
    description: 'Master the spiral layering technique to draw a romantic blooming garden rose with thorny stem and leaves.',
    tags: ['Rose', 'Flower', 'Botanical', 'Love'],
    isPopular: true,
    thumbnailSvg: `<path d="M150,180 Q152,240 148,270" stroke="#15803d" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M150,215 Q125,210 115,225 Q135,235 150,225" fill="#22c55e" stroke="#15803d" stroke-width="2.5"/>
      <path d="M150,235 Q175,230 185,245 Q165,255 150,245" fill="#22c55e" stroke="#15803d" stroke-width="2.5"/>
      <path d="M140,90 Q150,80 160,90 Q160,110 140,110 Z" fill="#f43f5e" stroke="#be123c" stroke-width="3"/>
      <path d="M130,100 C120,120 140,140 150,140 C160,140 180,120 170,100" fill="#fb7185" stroke="#be123c" stroke-width="3"/>
      <path d="M115,115 C100,140 130,170 150,175 C170,170 200,140 185,115" fill="#fda4af" stroke="#be123c" stroke-width="3"/>
      <path d="M135,175 Q150,190 165,175" fill="#15803d" stroke="#15803d" stroke-width="3"/>`,
    steps: [
      {
        stepNumber: 1,
        title: 'Center Bud Spiral',
        instruction: 'Start at the center with a small curved swirl resembling an unfolding teardrop.',
        tip: 'The center of a rose is tight and gradually unfurls outward.',
        cumulativeSvg: `<path d="M145,95 Q150,85 155,95 Q155,105 145,105 Z" fill="none" stroke="#f43f5e" stroke-width="3.5"/>`,
      },
      {
        stepNumber: 2,
        title: 'Inner Petal Layer',
        instruction: 'Cup the center spiral with two curved petals wrapping closely around each side.',
        tip: 'Overlapping edges create depth.',
        cumulativeSvg: `<path d="M145,95 Q150,85 155,95 Q155,105 145,105 Z" fill="#ffe4e6" stroke="#475569" stroke-width="2.5"/>
          <path d="M138,98 C130,112 145,122 150,122 C155,122 170,112 162,98" fill="none" stroke="#f43f5e" stroke-width="3.5"/>`,
      },
      {
        stepNumber: 3,
        title: 'Heart-Shaped Mid Petals',
        instruction: 'Draw wider petals that fold around the bud with gentle dips along the top margins.',
        tip: 'Notice how the upper lip of real rose petals rolls backward slightly.',
        cumulativeSvg: `<path d="M145,95 Q150,85 155,95 Q155,105 145,105 Z" fill="#ffe4e6" stroke="#475569" stroke-width="2"/>
          <path d="M138,98 C130,112 145,122 150,122 C155,122 170,112 162,98" fill="#fecdd3" stroke="#475569" stroke-width="2.5"/>
          <path d="M125,110 C110,132 135,152 150,155 C165,152 190,132 175,110" fill="none" stroke="#f43f5e" stroke-width="3.5"/>`,
      },
      {
        stepNumber: 4,
        title: 'Outer Broad Blossom Petals',
        instruction: 'Add wide, flared outer petals at the bottom of the blossom to form a full bowl shape.',
        tip: 'Give these petals generous curves.',
        cumulativeSvg: `<path d="M145,95 Q150,85 155,95 Q155,105 145,105 Z" fill="#ffe4e6" stroke="#475569" stroke-width="2"/>
          <path d="M138,98 C130,112 145,122 150,122 C155,122 170,112 162,98" fill="#fecdd3" stroke="#475569" stroke-width="2"/>
          <path d="M125,110 C110,132 135,152 150,155 C165,152 190,132 175,110" fill="#fda4af" stroke="#475569" stroke-width="2.5"/>
          <path d="M110,125 C95,150 128,178 150,180 C172,178 205,150 190,125" fill="none" stroke="#f43f5e" stroke-width="3.5"/>`,
      },
      {
        stepNumber: 5,
        title: 'Stem & Little Sepals',
        instruction: 'Draw small pointed green calyx sepals right under the bloom and a strong curved stem heading downward.',
        tip: 'A slight bend in the stem makes the rose feel natural and organic.',
        cumulativeSvg: `<path d="M110,125 C95,150 128,178 150,180 C172,178 205,150 190,125" fill="#fda4af" stroke="#475569" stroke-width="2"/>
          <path d="M150,180 Q152,240 148,270" stroke="#f43f5e" stroke-width="5" fill="none" stroke-linecap="round"/>
          <polygon points="142,180 135,190 146,183" fill="#f43f5e"/>
          <polygon points="158,180 165,190 154,183" fill="#f43f5e"/>`,
      },
      {
        stepNumber: 6,
        title: 'Leaves & Veins',
        instruction: 'Add two pointed oval leaves branching from the stem, each with a center rib.',
        tip: 'Rose leaves have subtle serrated edges.',
        cumulativeSvg: `<path d="M150,180 Q152,240 148,270" stroke="#15803d" stroke-width="5" fill="none" stroke-linecap="round"/>
          <path d="M150,215 Q125,210 115,225 Q135,235 150,225" fill="none" stroke="#f43f5e" stroke-width="3"/>
          <line x1="150" y1="218" x2="120" y2="224" stroke="#f43f5e" stroke-width="2"/>
          <path d="M150,235 Q175,230 185,245 Q165,255 150,245" fill="none" stroke="#f43f5e" stroke-width="3"/>
          <line x1="150" y1="238" x2="180" y2="244" stroke="#f43f5e" stroke-width="2"/>`,
      },
      {
        stepNumber: 7,
        title: 'Crimson Rose Finishing Touches',
        instruction: 'Layer in rich crimson and rose pink shading to give your flower velvety texture and depth!',
        tip: 'Gorgeous work! Your blooming rose is ready for a greeting card or sketchbook.',
        cumulativeSvg: `<path d="M150,180 Q152,240 148,270" stroke="#15803d" stroke-width="5" fill="none" stroke-linecap="round"/>
          <path d="M150,215 Q125,210 115,225 Q135,235 150,225" fill="#22c55e" stroke="#15803d" stroke-width="2.5"/>
          <path d="M150,235 Q175,230 185,245 Q165,255 150,245" fill="#22c55e" stroke="#15803d" stroke-width="2.5"/>
          <path d="M140,90 Q150,80 160,90 Q160,110 140,110 Z" fill="#f43f5e" stroke="#be123c" stroke-width="3"/>
          <path d="M130,100 C120,120 140,140 150,140 C160,140 180,120 170,100" fill="#fb7185" stroke="#be123c" stroke-width="3"/>
          <path d="M115,115 C100,140 130,170 150,175 C170,170 200,140 185,115" fill="#fda4af" stroke="#be123c" stroke-width="3"/>
          <path d="M135,175 Q150,190 165,175" fill="#15803d" stroke="#15803d" stroke-width="3"/>`,
      },
    ],
  },
  {
    id: 'sunflower',
    title: 'Happy Sunflower',
    category: 'Flowers',
    difficulty: 'Beginner',
    estimatedTime: '8 min',
    description: 'Draw a radiant sunflower with sunny golden petals and a rich textured seed center.',
    tags: ['Sunflower', 'Garden', 'Summer', 'Yellow'],
    isPopular: true,
    thumbnailSvg: `<circle cx="150" cy="140" r="38" fill="#78350f" stroke="#451a03" stroke-width="3"/>
      <g fill="#f59e0b" stroke="#d97706" stroke-width="2">
        <polygon points="150,90 142,104 158,104"/>
        <polygon points="150,190 142,176 158,176"/>
        <polygon points="100,140 114,132 114,148"/>
        <polygon points="200,140 186,132 186,148"/>
        <polygon points="115,105 125,117 135,107"/>
        <polygon points="185,105 165,107 175,117"/>
        <polygon points="115,175 135,173 125,163"/>
        <polygon points="185,175 175,163 165,173"/>
      </g>
      <path d="M150,178 L150,265" stroke="#15803d" stroke-width="6" stroke-linecap="round"/>
      <path d="M150,225 C120,215 105,235 125,245 C145,245 150,230 150,225" fill="#22c55e" stroke="#15803d" stroke-width="2.5"/>`,
    steps: [
      {
        stepNumber: 1,
        title: 'Center Seed Disc',
        instruction: 'Draw a clear circle right in the upper middle area of your canvas for the seed disc.',
        tip: 'This circle sets the scale for all the surrounding petals.',
        cumulativeSvg: `<circle cx="150" cy="140" r="38" fill="none" stroke="#f43f5e" stroke-width="3.5"/>`,
      },
      {
        stepNumber: 2,
        title: 'Compass Petals (North, South, East, West)',
        instruction: 'Draw four pointed teardrop petals at 12, 3, 6, and 9 o’clock around the circle.',
        tip: 'Starting at cardinal points ensures your petals will be evenly spaced.',
        cumulativeSvg: `<circle cx="150" cy="140" r="38" fill="none" stroke="#475569" stroke-width="3"/>
          <polygon points="150,85 140,103 160,103" fill="none" stroke="#f43f5e" stroke-width="3"/>
          <polygon points="150,195 140,177 160,177" fill="none" stroke="#f43f5e" stroke-width="3"/>
          <polygon points="95,140 113,130 113,150" fill="none" stroke="#f43f5e" stroke-width="3"/>
          <polygon points="205,140 187,130 187,150" fill="none" stroke="#f43f5e" stroke-width="3"/>`,
      },
      {
        stepNumber: 3,
        title: 'Diagonal Petal Fillers',
        instruction: 'Add four more petals in between each of the initial petals.',
        tip: 'Keep the petals roughly equal in length for a harmonious look.',
        cumulativeSvg: `<circle cx="150" cy="140" r="38" fill="none" stroke="#475569" stroke-width="3"/>
          <polygon points="150,85 140,103 160,103" fill="none" stroke="#475569" stroke-width="2.5"/>
          <polygon points="150,195 140,177 160,177" fill="none" stroke="#475569" stroke-width="2.5"/>
          <polygon points="95,140 113,130 113,150" fill="none" stroke="#475569" stroke-width="2.5"/>
          <polygon points="205,140 187,130 187,150" fill="none" stroke="#475569" stroke-width="2.5"/>
          <polygon points="112,102 122,118 134,106" fill="none" stroke="#f43f5e" stroke-width="3"/>
          <polygon points="188,102 166,106 178,118" fill="none" stroke="#f43f5e" stroke-width="3"/>
          <polygon points="112,178 134,174 122,162" fill="none" stroke="#f43f5e" stroke-width="3"/>
          <polygon points="188,178 178,162 166,174" fill="none" stroke="#f43f5e" stroke-width="3"/>`,
      },
      {
        stepNumber: 4,
        title: 'Sturdy Stem & Wide Leaf',
        instruction: 'Draw a bold, tall stalk descending from the base of the flower with a broad leaf.',
        tip: 'Sunflower stems are thick and robust to hold the heavy bloom.',
        cumulativeSvg: `<circle cx="150" cy="140" r="38" fill="none" stroke="#475569" stroke-width="3"/>
          <path d="M150,178 L150,265" stroke="#f43f5e" stroke-width="6" stroke-linecap="round"/>
          <path d="M150,225 C120,215 105,235 125,245 C145,245 150,230 150,225" fill="none" stroke="#f43f5e" stroke-width="3"/>`,
      },
      {
        stepNumber: 5,
        title: 'Golden Petals & Seed Shading',
        instruction: 'Color the center with warm chocolate brown and brighten the petals with sunny yellow!',
        tip: 'Your cheerful sunflower is finished and shining bright!',
        cumulativeSvg: `<circle cx="150" cy="140" r="38" fill="#78350f" stroke="#451a03" stroke-width="3"/>
          <g fill="#f59e0b" stroke="#d97706" stroke-width="2">
            <polygon points="150,90 142,104 158,104"/>
            <polygon points="150,190 142,176 158,176"/>
            <polygon points="100,140 114,132 114,148"/>
            <polygon points="200,140 186,132 186,148"/>
            <polygon points="115,105 125,117 135,107"/>
            <polygon points="185,105 165,107 175,117"/>
            <polygon points="115,175 135,173 125,163"/>
            <polygon points="185,175 175,163 165,173"/>
          </g>
          <path d="M150,178 L150,265" stroke="#15803d" stroke-width="6" stroke-linecap="round"/>
          <path d="M150,225 C120,215 105,235 125,245 C145,245 150,230 150,225" fill="#22c55e" stroke="#15803d" stroke-width="2.5"/>`,
      },
    ],
  },
  {
    id: 'cupcake',
    title: 'Strawberry Cupcake',
    category: 'Food',
    difficulty: 'Beginner',
    estimatedTime: '6 min',
    description: 'Sketch a sweet bakery cupcake with fluffy swirled frosting, rainbow sprinkles, and a cherry.',
    tags: ['Cupcake', 'Dessert', 'Baking', 'Cute'],
    isPopular: true,
    thumbnailSvg: `<path d="M105,160 L120,240 L180,240 L195,160 Z" fill="#fed7aa" stroke="#ea580c" stroke-width="3"/>
      <line x1="125" y1="165" x2="133" y2="235" stroke="#f97316" stroke-width="2"/>
      <line x1="150" y1="165" x2="150" y2="235" stroke="#f97316" stroke-width="2"/>
      <line x1="175" y1="165" x2="167" y2="235" stroke="#f97316" stroke-width="2"/>
      <path d="M95,160 C95,140 120,135 150,135 C180,135 205,140 205,160 Z" fill="#fbcfe8" stroke="#db2777" stroke-width="3"/>
      <path d="M110,135 C110,115 130,110 150,110 C170,110 190,115 190,135 Z" fill="#fbcfe8" stroke="#db2777" stroke-width="3"/>
      <circle cx="150" cy="85" r="14" fill="#ef4444" stroke="#b91c1c" stroke-width="2.5"/>
      <path d="M152,72 Q165,55 170,60" fill="none" stroke="#15803d" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="130" cy="145" r="2.5" fill="#fbbf24"/>
      <circle cx="170" cy="148" r="2.5" fill="#38bdf8"/>
      <circle cx="145" cy="120" r="2.5" fill="#a855f7"/>`,
    steps: [
      {
        stepNumber: 1,
        title: 'Trapezoid Cupcake Wrapper',
        instruction: 'Draw an upside-down trapezoid for the pleated baking paper cup.',
        tip: 'Make the bottom line slightly narrower than the top.',
        cumulativeSvg: `<path d="M105,160 L120,240 L180,240 L195,160 Z" fill="none" stroke="#f43f5e" stroke-width="3.5"/>`,
      },
      {
        stepNumber: 2,
        title: 'Wrapper Pleats',
        instruction: 'Add vertical lines across the wrapper to represent the paper folds.',
        tip: 'Angle the outer lines slightly to follow the slant of the cup.',
        cumulativeSvg: `<path d="M105,160 L120,240 L180,240 L195,160 Z" fill="none" stroke="#475569" stroke-width="3"/>
          <line x1="125" y1="165" x2="133" y2="235" stroke="#f43f5e" stroke-width="2.5"/>
          <line x1="150" y1="165" x2="150" y2="235" stroke="#f43f5e" stroke-width="2.5"/>
          <line x1="175" y1="165" x2="167" y2="235" stroke="#f43f5e" stroke-width="2.5"/>`,
      },
      {
        stepNumber: 3,
        title: 'Bottom Frosting Swirl',
        instruction: 'Draw a fluffy, cloud-like mound resting on top of the wrapper.',
        tip: 'The frosting curves slightly over the paper edges.',
        cumulativeSvg: `<path d="M105,160 L120,240 L180,240 L195,160 Z" fill="none" stroke="#475569" stroke-width="3"/>
          <path d="M95,160 C95,140 120,135 150,135 C180,135 205,140 205,160 Z" fill="none" stroke="#f43f5e" stroke-width="3.5"/>`,
      },
      {
        stepNumber: 4,
        title: 'Top Frosting Swirl & Peak',
        instruction: 'Add a second smaller tier of frosting curving up into a sweet dollop.',
        tip: 'Stacking tiers gives cupcakes that classic bakery appearance.',
        cumulativeSvg: `<path d="M105,160 L120,240 L180,240 L195,160 Z" fill="none" stroke="#475569" stroke-width="3"/>
          <path d="M95,160 C95,140 120,135 150,135 C180,135 205,140 205,160 Z" fill="none" stroke="#475569" stroke-width="3"/>
          <path d="M110,135 C110,115 130,110 150,110 C170,110 190,115 190,135 Z" fill="none" stroke="#f43f5e" stroke-width="3.5"/>`,
      },
      {
        stepNumber: 5,
        title: 'Cherry on Top & Sprinkles',
        instruction: 'Top off the swirl with a round glossy cherry, a curved green stem, and sprinkles.',
        tip: 'Yum! Your delicious strawberry cupcake is ready to serve.',
        cumulativeSvg: `<path d="M105,160 L120,240 L180,240 L195,160 Z" fill="#fed7aa" stroke="#ea580c" stroke-width="3"/>
          <line x1="125" y1="165" x2="133" y2="235" stroke="#f97316" stroke-width="2"/>
          <line x1="150" y1="165" x2="150" y2="235" stroke="#f97316" stroke-width="2"/>
          <line x1="175" y1="165" x2="167" y2="235" stroke="#f97316" stroke-width="2"/>
          <path d="M95,160 C95,140 120,135 150,135 C180,135 205,140 205,160 Z" fill="#fbcfe8" stroke="#db2777" stroke-width="3"/>
          <path d="M110,135 C110,115 130,110 150,110 C170,110 190,115 190,135 Z" fill="#fbcfe8" stroke="#db2777" stroke-width="3"/>
          <circle cx="150" cy="85" r="14" fill="#ef4444" stroke="#b91c1c" stroke-width="2.5"/>
          <path d="M152,72 Q165,55 170,60" fill="none" stroke="#15803d" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="130" cy="145" r="2.5" fill="#fbbf24"/>
          <circle cx="170" cy="148" r="2.5" fill="#38bdf8"/>
          <circle cx="145" cy="120" r="2.5" fill="#a855f7"/>`,
      },
    ],
  },
  {
    id: 'mushroom',
    title: 'Forest Mushroom',
    category: 'Nature',
    difficulty: 'Beginner',
    estimatedTime: '5 min',
    description: 'Draw a whimsical forest toadstool with polka dots, soft gills, and a cute little grass patch.',
    tags: ['Mushroom', 'Forest', 'Fairy', 'Nature'],
    isPopular: false,
    thumbnailSvg: `<path d="M130,150 C130,220 125,230 135,240 L165,240 C175,230 170,220 170,150" fill="#fef08a" stroke="#ca8a04" stroke-width="3"/>
      <path d="M80,150 C80,85 220,85 220,150 C190,165 110,165 80,150 Z" fill="#f87171" stroke="#dc2626" stroke-width="3.5"/>
      <circle cx="120" cy="120" r="8" fill="#ffffff"/>
      <circle cx="160" cy="105" r="10" fill="#ffffff"/>
      <circle cx="185" cy="130" r="6" fill="#ffffff"/>
      <ellipse cx="142" cy="190" rx="3" ry="5" fill="#334155"/>
      <ellipse cx="158" cy="190" rx="3" ry="5" fill="#334155"/>
      <path d="M146,202 Q150,206 154,202" fill="none" stroke="#334155" stroke-width="2" stroke-linecap="round"/>
      <path d="M115,245 L125,235 L135,245 L145,235 L155,245 L165,235 L175,245" stroke="#22c55e" stroke-width="3" fill="none"/>`,
    steps: [
      {
        stepNumber: 1,
        title: 'Mushroom Cap Dome',
        instruction: 'Draw a wide curved umbrella dome shape for the top mushroom cap.',
        tip: 'Think of an upside-down tea bowl.',
        cumulativeSvg: `<path d="M80,150 C80,85 220,85 220,150 Z" fill="none" stroke="#f43f5e" stroke-width="3.5"/>`,
      },
      {
        stepNumber: 2,
        title: 'Cap Rim & Chubby Stem',
        instruction: 'Close the bottom of the dome with a soft upward curve, then sketch the thick stem.',
        tip: 'Giving the stem a slight flare at the bottom keeps it grounded.',
        cumulativeSvg: `<path d="M80,150 C80,85 220,85 220,150 C190,165 110,165 80,150 Z" fill="none" stroke="#475569" stroke-width="3"/>
          <path d="M130,150 C130,220 125,230 135,240 L165,240 C175,230 170,220 170,150" fill="none" stroke="#f43f5e" stroke-width="3.5"/>`,
      },
      {
        stepNumber: 3,
        title: 'Polka Dots & Little Face',
        instruction: 'Place varying-sized white circular spots on the cap, and draw a tiny smiling kawaii face on the stem.',
        tip: 'Varying circle sizes makes polka dots look organic.',
        cumulativeSvg: `<path d="M80,150 C80,85 220,85 220,150 C190,165 110,165 80,150 Z" fill="none" stroke="#475569" stroke-width="3"/>
          <circle cx="120" cy="120" r="8" fill="none" stroke="#f43f5e" stroke-width="3"/>
          <circle cx="160" cy="105" r="10" fill="none" stroke="#f43f5e" stroke-width="3"/>
          <circle cx="185" cy="130" r="6" fill="none" stroke="#f43f5e" stroke-width="3"/>
          <ellipse cx="142" cy="190" rx="3" ry="5" fill="#f43f5e"/>
          <ellipse cx="158" cy="190" rx="3" ry="5" fill="#f43f5e"/>
          <path d="M146,202 Q150,206 154,202" fill="none" stroke="#f43f5e" stroke-width="2" stroke-linecap="round"/>`,
      },
      {
        stepNumber: 4,
        title: 'Woodland Colors & Grass',
        instruction: 'Paint the cap with bright berry red, fill the dots with crisp white, and add forest grass tufts at the base.',
        tip: 'Magical! Your forest mushroom looks right out of a fairy tale.',
        cumulativeSvg: `<path d="M130,150 C130,220 125,230 135,240 L165,240 C175,230 170,220 170,150" fill="#fef08a" stroke="#ca8a04" stroke-width="3"/>
          <path d="M80,150 C80,85 220,85 220,150 C190,165 110,165 80,150 Z" fill="#f87171" stroke="#dc2626" stroke-width="3.5"/>
          <circle cx="120" cy="120" r="8" fill="#ffffff"/>
          <circle cx="160" cy="105" r="10" fill="#ffffff"/>
          <circle cx="185" cy="130" r="6" fill="#ffffff"/>
          <ellipse cx="142" cy="190" rx="3" ry="5" fill="#334155"/>
          <ellipse cx="158" cy="190" rx="3" ry="5" fill="#334155"/>
          <path d="M146,202 Q150,206 154,202" fill="none" stroke="#334155" stroke-width="2" stroke-linecap="round"/>
          <path d="M115,245 L125,235 L135,245 L145,235 L155,245 L165,235 L175,245" stroke="#22c55e" stroke-width="3" fill="none"/>`,
      },
    ],
  },
  {
    id: 'cute-bunny',
    title: 'Cute Bunny',
    category: 'Animals',
    difficulty: 'Beginner',
    estimatedTime: '8 min',
    description: 'Learn to sketch a fluffy little bunny rabbit with tall pink ears and a tiny button nose.',
    tags: ['Bunny', 'Rabbit', 'Animals', 'Cute'],
    isPopular: true,
    thumbnailSvg: `<ellipse cx="150" cy="130" rx="45" ry="42" fill="#fff" stroke="#ec4899" stroke-width="3.5"/>
      <ellipse cx="125" cy="65" rx="14" ry="42" fill="#fff" stroke="#ec4899" stroke-width="3.5"/>
      <ellipse cx="125" cy="65" rx="7" ry="28" fill="#fbcfe8"/>
      <ellipse cx="175" cy="65" rx="14" ry="42" fill="#fff" stroke="#ec4899" stroke-width="3.5"/>
      <ellipse cx="175" cy="65" rx="7" ry="28" fill="#fbcfe8"/>
      <ellipse cx="135" cy="125" rx="6" ry="7" fill="#1e293b"/>
      <ellipse cx="165" cy="125" rx="6" ry="7" fill="#1e293b"/>
      <circle cx="133" cy="123" r="2" fill="#fff"/>
      <circle cx="163" cy="123" r="2" fill="#fff"/>
      <polygon points="150,135 146,132 154,132" fill="#f43f5e"/>
      <path d="M146,138 Q150,142 150,138 Q150,142 154,138" stroke="#334155" stroke-width="2" fill="none"/>
      <ellipse cx="150" cy="205" rx="40" ry="32" fill="#fff" stroke="#ec4899" stroke-width="3.5"/>
      <circle cx="195" cy="210" r="12" fill="#fff" stroke="#ec4899" stroke-width="3"/>
      <ellipse cx="135" cy="235" rx="14" ry="8" fill="#fff" stroke="#ec4899" stroke-width="3"/>
      <ellipse cx="165" cy="235" rx="14" ry="8" fill="#fff" stroke="#ec4899" stroke-width="3"/>`,
    steps: [
      {
        stepNumber: 1,
        title: 'Head and Body Guidelines',
        instruction: 'Draw an upper oval for the head and a slightly larger oval below for the cozy bunny body.',
        tip: 'Keep the head slightly rounded for maximum cuteness.',
        cumulativeSvg: `<ellipse cx="150" cy="130" rx="45" ry="42" fill="none" stroke="#f43f5e" stroke-width="3.5"/>
          <ellipse cx="150" cy="205" rx="40" ry="32" fill="none" stroke="#f43f5e" stroke-width="3" stroke-dasharray="6,4"/>`,
      },
      {
        stepNumber: 2,
        title: 'Tall Bunny Ears',
        instruction: 'Draw two long, graceful ears standing upright above the head, tilted slightly outward.',
        tip: 'Add an inner contour line for the soft pink ear lining.',
        cumulativeSvg: `<ellipse cx="150" cy="130" rx="45" ry="42" fill="none" stroke="#475569" stroke-width="3"/>
          <ellipse cx="125" cy="65" rx="14" ry="42" fill="none" stroke="#f43f5e" stroke-width="3.5"/>
          <ellipse cx="125" cy="65" rx="7" ry="28" fill="#fee2e2" stroke="#f43f5e" stroke-width="2.5"/>
          <ellipse cx="175" cy="65" rx="14" ry="42" fill="none" stroke="#f43f5e" stroke-width="3.5"/>
          <ellipse cx="175" cy="65" rx="7" ry="28" fill="#fee2e2" stroke="#f43f5e" stroke-width="2.5"/>`,
      },
      {
        stepNumber: 3,
        title: 'Expressive Face & Nose',
        instruction: 'Draw shiny oval eyes, a tiny nose triangle, and cheerful cheeks with blush spots.',
        tip: 'Bunny eyes sit slightly apart.',
        cumulativeSvg: `<ellipse cx="150" cy="130" rx="45" ry="42" fill="none" stroke="#475569" stroke-width="3"/>
          <ellipse cx="125" cy="65" rx="14" ry="42" fill="none" stroke="#475569" stroke-width="3"/>
          <ellipse cx="175" cy="65" rx="14" ry="42" fill="none" stroke="#475569" stroke-width="3"/>
          <ellipse cx="135" cy="125" rx="6" ry="7" fill="#1e293b" stroke="#f43f5e" stroke-width="2"/>
          <ellipse cx="165" cy="125" rx="6" ry="7" fill="#1e293b" stroke="#f43f5e" stroke-width="2"/>
          <polygon points="150,135 146,132 154,132" fill="#f43f5e"/>
          <path d="M146,138 Q150,142 150,138 Q150,142 154,138" stroke="#f43f5e" stroke-width="2" fill="none"/>`,
      },
      {
        stepNumber: 4,
        title: 'Paws and Fluffy Tail',
        instruction: 'Sketch the bottom foot pads and a cotton-ball tail peeking from the side.',
        tip: 'Such a sweet little creature! Your bunny is complete.',
        cumulativeSvg: `<ellipse cx="150" cy="130" rx="45" ry="42" fill="#fff" stroke="#ec4899" stroke-width="3.5"/>
          <ellipse cx="125" cy="65" rx="14" ry="42" fill="#fff" stroke="#ec4899" stroke-width="3.5"/>
          <ellipse cx="125" cy="65" rx="7" ry="28" fill="#fbcfe8"/>
          <ellipse cx="175" cy="65" rx="14" ry="42" fill="#fff" stroke="#ec4899" stroke-width="3.5"/>
          <ellipse cx="175" cy="65" rx="7" ry="28" fill="#fbcfe8"/>
          <ellipse cx="135" cy="125" rx="6" ry="7" fill="#1e293b"/>
          <ellipse cx="165" cy="125" rx="6" ry="7" fill="#1e293b"/>
          <circle cx="133" cy="123" r="2" fill="#fff"/>
          <circle cx="163" cy="123" r="2" fill="#fff"/>
          <polygon points="150,135 146,132 154,132" fill="#f43f5e"/>
          <path d="M146,138 Q150,142 150,138 Q150,142 154,138" stroke="#334155" stroke-width="2" fill="none"/>
          <ellipse cx="150" cy="205" rx="40" ry="32" fill="#fff" stroke="#ec4899" stroke-width="3.5"/>
          <circle cx="195" cy="210" r="12" fill="#fff" stroke="#ec4899" stroke-width="3"/>
          <ellipse cx="135" cy="235" rx="14" ry="8" fill="#fff" stroke="#ec4899" stroke-width="3"/>
          <ellipse cx="165" cy="235" rx="14" ry="8" fill="#fff" stroke="#ec4899" stroke-width="3"/>`,
      },
    ],
  },
  {
    id: 'kawaii-cloud',
    title: 'Kawaii Cloud & Rainbow',
    category: 'Cute',
    difficulty: 'Beginner',
    estimatedTime: '5 min',
    description: 'Draw a dreamy smiling cloud floating peacefully above a colorful pastel rainbow arch.',
    tags: ['Cloud', 'Rainbow', 'Sky', 'Kawaii'],
    isPopular: true,
    thumbnailSvg: `<path d="M85,150 A65,65 0 0,1 215,150" fill="none" stroke="#fca5a5" stroke-width="10"/>
      <path d="M95,150 A55,55 0 0,1 205,150" fill="none" stroke="#fde047" stroke-width="10"/>
      <path d="M105,150 A45,45 0 0,1 195,150" fill="none" stroke="#93c5fd" stroke-width="10"/>
      <path d="M85,180 C70,180 65,160 80,145 C75,125 105,110 125,120 C140,95 180,95 195,120 C215,115 235,135 225,155 C240,175 220,195 200,190 C185,205 145,205 130,190 C115,200 95,195 85,180 Z" fill="#ffffff" stroke="#38bdf8" stroke-width="3.5"/>
      <circle cx="130" cy="155" r="4.5" fill="#1e293b"/>
      <circle cx="170" cy="155" r="4.5" fill="#1e293b"/>
      <circle cx="120" cy="165" r="6" fill="#fca5a5" opacity="0.6"/>
      <circle cx="180" cy="165" r="6" fill="#fca5a5" opacity="0.6"/>
      <path d="M144,163 Q150,170 156,163" stroke="#334155" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
    steps: [
      {
        stepNumber: 1,
        title: 'Background Rainbow Arches',
        instruction: 'Draw concentric curved rainbow arches across the upper background.',
        tip: 'Keep the curves smooth and parallel.',
        cumulativeSvg: `<path d="M85,150 A65,65 0 0,1 215,150" fill="none" stroke="#f43f5e" stroke-width="8"/>
          <path d="M95,150 A55,55 0 0,1 205,150" fill="none" stroke="#f43f5e" stroke-width="8"/>
          <path d="M105,150 A45,45 0 0,1 195,150" fill="none" stroke="#f43f5e" stroke-width="8"/>`,
      },
      {
        stepNumber: 2,
        title: 'Puffy Cloud Outline',
        instruction: 'Draw 5 or 6 connected billowy scallops to form a soft puffy cloud.',
        tip: 'Make the center scallop the tallest puff.',
        cumulativeSvg: `<path d="M85,150 A65,65 0 0,1 215,150" fill="none" stroke="#fca5a5" stroke-width="8"/>
          <path d="M95,150 A55,55 0 0,1 205,150" fill="none" stroke="#fde047" stroke-width="8"/>
          <path d="M105,150 A45,45 0 0,1 195,150" fill="none" stroke="#93c5fd" stroke-width="8"/>
          <path d="M85,180 C70,180 65,160 80,145 C75,125 105,110 125,120 C140,95 180,95 195,120 C215,115 235,135 225,155 C240,175 220,195 200,190 C185,205 145,205 130,190 C115,200 95,195 85,180 Z" fill="#ffffff" stroke="#f43f5e" stroke-width="3.5"/>`,
      },
      {
        stepNumber: 3,
        title: 'Smiling Cloud Expression & Blush',
        instruction: 'Add two happy twinkling eyes, sweet cheek blush, and a smiling mouth.',
        tip: 'So peaceful and joyful! Your sky illustration is finished.',
        cumulativeSvg: `<path d="M85,150 A65,65 0 0,1 215,150" fill="none" stroke="#fca5a5" stroke-width="10"/>
          <path d="M95,150 A55,55 0 0,1 205,150" fill="none" stroke="#fde047" stroke-width="10"/>
          <path d="M105,150 A45,45 0 0,1 195,150" fill="none" stroke="#93c5fd" stroke-width="10"/>
          <path d="M85,180 C70,180 65,160 80,145 C75,125 105,110 125,120 C140,95 180,95 195,120 C215,115 235,135 225,155 C240,175 220,195 200,190 C185,205 145,205 130,190 C115,200 95,195 85,180 Z" fill="#ffffff" stroke="#38bdf8" stroke-width="3.5"/>
          <circle cx="130" cy="155" r="4.5" fill="#1e293b"/>
          <circle cx="170" cy="155" r="4.5" fill="#1e293b"/>
          <circle cx="120" cy="165" r="6" fill="#fca5a5" opacity="0.6"/>
          <circle cx="180" cy="165" r="6" fill="#fca5a5" opacity="0.6"/>
          <path d="M144,163 Q150,170 156,163" stroke="#334155" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
      },
    ],
  },
  {
    id: 'mountain-landscape',
    title: 'Alpine Mountains',
    category: 'Landscapes',
    difficulty: 'Intermediate',
    estimatedTime: '12 min',
    description: 'Create a breathtaking mountain vista featuring snowcapped peaks, evergreen pines, and a tranquil lake.',
    tags: ['Mountain', 'Landscape', 'Nature', 'Travel'],
    thumbnailSvg: `<circle cx="150" cy="80" r="28" fill="#fef08a" opacity="0.9"/>
      <polygon points="60,190 130,95 190,190" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2.5"/>
      <polygon points="120,190 190,75 260,190" fill="#60a5fa" stroke="#1e3a8a" stroke-width="2.5"/>
      <polygon points="130,95 145,118 130,122 118,115" fill="#ffffff"/>
      <polygon points="190,75 205,105 190,110 178,102" fill="#ffffff"/>
      <rect x="40" y="190" width="220" height="60" fill="#a7f3d0"/>
      <polygon points="85,210 75,235 95,235" fill="#15803d"/>
      <polygon points="105,200 95,235 115,235" fill="#166534"/>
      <polygon points="215,205 205,235 225,235" fill="#15803d"/>
      <path d="M40,240 Q150,230 260,240 L260,260 L40,260 Z" fill="#38bdf8" opacity="0.7"/>`,
    steps: [
      {
        stepNumber: 1,
        title: 'Horizon Line & Peaks',
        instruction: 'Draw a flat horizontal base line and two prominent triangular mountain peaks.',
        tip: 'Make one mountain taller and overlapping the other for perspective.',
        cumulativeSvg: `<line x1="40" y1="190" x2="260" y2="190" stroke="#f43f5e" stroke-width="3"/>
          <polygon points="60,190 130,95 190,190" fill="none" stroke="#f43f5e" stroke-width="3"/>
          <polygon points="120,190 190,75 260,190" fill="none" stroke="#f43f5e" stroke-width="3"/>`,
      },
      {
        stepNumber: 2,
        title: 'Snow Caps & Ridge Lines',
        instruction: 'Sketch jagged zigzag lines near the mountain summits to define snowcaps.',
        tip: 'Angular zigzag strokes capture the craggy rock faces.',
        cumulativeSvg: `<polygon points="60,190 130,95 190,190" fill="none" stroke="#475569" stroke-width="2.5"/>
          <polygon points="120,190 190,75 260,190" fill="none" stroke="#475569" stroke-width="2.5"/>
          <polygon points="130,95 145,118 130,122 118,115" fill="#ffffff" stroke="#f43f5e" stroke-width="2.5"/>
          <polygon points="190,75 205,105 190,110 178,102" fill="#ffffff" stroke="#f43f5e" stroke-width="2.5"/>`,
      },
      {
        stepNumber: 3,
        title: 'Morning Sun & Foothill Pines',
        instruction: 'Add a glowing sun rising between the summits and evergreen pine tree silhouettes in the foreground.',
        tip: 'Stagger the tree heights to create depth.',
        cumulativeSvg: `<circle cx="150" cy="80" r="28" fill="#fef08a" stroke="#f43f5e" stroke-width="2"/>
          <polygon points="60,190 130,95 190,190" fill="#93c5fd" stroke="#475569" stroke-width="2"/>
          <polygon points="120,190 190,75 260,190" fill="#60a5fa" stroke="#475569" stroke-width="2"/>
          <polygon points="85,210 75,235 95,235" fill="none" stroke="#f43f5e" stroke-width="3"/>
          <polygon points="105,200 95,235 115,235" fill="none" stroke="#f43f5e" stroke-width="3"/>
          <polygon points="215,205 205,235 225,235" fill="none" stroke="#f43f5e" stroke-width="3"/>`,
      },
      {
        stepNumber: 4,
        title: 'Reflective Alpine Lake & Color',
        instruction: 'Fill the mountains with cool slate blues and add the calm lake reflecting the sky at the base.',
        tip: 'Magnificent! You’ve created a serene mountain sanctuary.',
        cumulativeSvg: `<circle cx="150" cy="80" r="28" fill="#fef08a" opacity="0.9"/>
          <polygon points="60,190 130,95 190,190" fill="#93c5fd" stroke="#1e3a8a" stroke-width="2.5"/>
          <polygon points="120,190 190,75 260,190" fill="#60a5fa" stroke="#1e3a8a" stroke-width="2.5"/>
          <polygon points="130,95 145,118 130,122 118,115" fill="#ffffff"/>
          <polygon points="190,75 205,105 190,110 178,102" fill="#ffffff"/>
          <rect x="40" y="190" width="220" height="60" fill="#a7f3d0"/>
          <polygon points="85,210 75,235 95,235" fill="#15803d"/>
          <polygon points="105,200 95,235 115,235" fill="#166534"/>
          <polygon points="215,205 205,235 225,235" fill="#15803d"/>
          <path d="M40,240 Q150,230 260,240 L260,260 L40,260 Z" fill="#38bdf8" opacity="0.7"/>`,
      },
    ],
  },
  {
    id: 'small-house',
    title: 'Cozy Cottage House',
    category: 'Objects',
    difficulty: 'Beginner',
    estimatedTime: '8 min',
    description: 'Draw a welcoming storybook cottage with a pitched tile roof, warm window light, and flower garden.',
    tags: ['House', 'Cottage', 'Home', 'Architecture'],
    thumbnailSvg: `<rect x="90" y="140" width="120" height="90" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
      <polygon points="80,145 150,80 220,145" fill="#f87171" stroke="#b91c1c" stroke-width="3"/>
      <rect x="180" y="90" width="18" height="30" fill="#dc2626" stroke="#b91c1c" stroke-width="2"/>
      <rect x="135" y="175" width="30" height="55" rx="3" fill="#92400e" stroke="#78350f" stroke-width="2.5"/>
      <circle cx="160" cy="205" r="2.5" fill="#fbbf24"/>
      <rect x="102" y="160" width="24" height="24" rx="2" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
      <line x1="114" y1="160" x2="114" y2="184" stroke="#1d4ed8" stroke-width="1.5"/>
      <line x1="102" y1="172" x2="126" y2="172" stroke="#1d4ed8" stroke-width="1.5"/>`,
    steps: [
      {
        stepNumber: 1,
        title: 'Square Base & Triangle Roof',
        instruction: 'Draw a sturdy rectangle for the cottage walls and a triangular roof prism above it.',
        tip: 'Extend the roof slightly beyond the walls for a cozy overhang.',
        cumulativeSvg: `<rect x="90" y="140" width="120" height="90" fill="none" stroke="#f43f5e" stroke-width="3.5"/>
          <polygon points="80,145 150,80 220,145" fill="none" stroke="#f43f5e" stroke-width="3.5"/>`,
      },
      {
        stepNumber: 2,
        title: 'Chimney & Arched Doorway',
        instruction: 'Add a vertical chimney to the roof and a friendly rectangular door in the center of the wall.',
        tip: 'Don’t forget the small round doorknob!',
        cumulativeSvg: `<rect x="90" y="140" width="120" height="90" fill="none" stroke="#475569" stroke-width="3"/>
          <polygon points="80,145 150,80 220,145" fill="none" stroke="#475569" stroke-width="3"/>
          <rect x="180" y="90" width="18" height="30" fill="none" stroke="#f43f5e" stroke-width="3"/>
          <rect x="135" y="175" width="30" height="55" rx="3" fill="none" stroke="#f43f5e" stroke-width="3"/>
          <circle cx="160" cy="205" r="2.5" fill="#f43f5e"/>`,
      },
      {
        stepNumber: 3,
        title: 'Window Panes & Warm Color',
        instruction: 'Draw square windows with cross panes on each side of the door, and color the home with warm welcoming tones.',
        tip: 'Home sweet home! What a lovely cottage.',
        cumulativeSvg: `<rect x="90" y="140" width="120" height="90" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
          <polygon points="80,145 150,80 220,145" fill="#f87171" stroke="#b91c1c" stroke-width="3"/>
          <rect x="180" y="90" width="18" height="30" fill="#dc2626" stroke="#b91c1c" stroke-width="2"/>
          <rect x="135" y="175" width="30" height="55" rx="3" fill="#92400e" stroke="#78350f" stroke-width="2.5"/>
          <circle cx="160" cy="205" r="2.5" fill="#fbbf24"/>
          <rect x="102" y="160" width="24" height="24" rx="2" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
          <line x1="114" y1="160" x2="114" y2="184" stroke="#1d4ed8" stroke-width="1.5"/>
          <line x1="102" y1="172" x2="126" y2="172" stroke="#1d4ed8" stroke-width="1.5"/>`,
      },
    ],
  },
  {
    id: 'tree',
    title: 'Oak Tree',
    category: 'Nature',
    difficulty: 'Beginner',
    estimatedTime: '7 min',
    description: 'Learn how to sketch a grand leafy oak tree with thick roots, textured bark, and flourishing summer canopy.',
    tags: ['Tree', 'Oak', 'Nature', 'Foliage'],
    thumbnailSvg: `<path d="M135,160 C135,220 120,240 110,250 L190,250 C180,240 165,220 165,160 Z" fill="#854d0e" stroke="#583101" stroke-width="3"/>
      <path d="M110,130 C90,130 80,105 100,90 C95,65 125,50 150,60 C175,50 205,65 200,90 C220,105 210,130 190,130 C190,150 110,150 110,130 Z" fill="#22c55e" stroke="#15803d" stroke-width="3"/>
      <path d="M140,180 Q145,200 142,220" stroke="#713f12" stroke-width="2" fill="none"/>
      <path d="M158,175 Q155,195 160,215" stroke="#713f12" stroke-width="2" fill="none"/>`,
    steps: [
      {
        stepNumber: 1,
        title: 'Trunk & Root Base',
        instruction: 'Sketch two vertical trunk lines that flare out into solid ground roots at the base.',
        tip: 'Trees taper narrower as they branch upward toward the sky.',
        cumulativeSvg: `<path d="M135,160 C135,220 120,240 110,250 L190,250 C180,240 165,220 165,160 Z" fill="none" stroke="#f43f5e" stroke-width="3.5"/>`,
      },
      {
        stepNumber: 2,
        title: 'Billowing Leafy Canopy',
        instruction: 'Draw rounded cloud puffs curving around the top of the trunk to create the lush crown.',
        tip: 'Organic overlapping lumps make foliage look thick and natural.',
        cumulativeSvg: `<path d="M135,160 C135,220 120,240 110,250 L190,250 C180,240 165,220 165,160 Z" fill="none" stroke="#475569" stroke-width="3"/>
          <path d="M110,130 C90,130 80,105 100,90 C95,65 125,50 150,60 C175,50 205,65 200,90 C220,105 210,130 190,130 C190,150 110,150 110,130 Z" fill="none" stroke="#f43f5e" stroke-width="3.5"/>`,
      },
      {
        stepNumber: 3,
        title: 'Bark Texture & Green Foliage',
        instruction: 'Add gentle vertical bark grain lines to the trunk and shade the foliage with vivid forest greens.',
        tip: 'A timeless tree standing tall in nature.',
        cumulativeSvg: `<path d="M135,160 C135,220 120,240 110,250 L190,250 C180,240 165,220 165,160 Z" fill="#854d0e" stroke="#583101" stroke-width="3"/>
          <path d="M110,130 C90,130 80,105 100,90 C95,65 125,50 150,60 C175,50 205,65 200,90 C220,105 210,130 190,130 C190,150 110,150 110,130 Z" fill="#22c55e" stroke="#15803d" stroke-width="3"/>
          <path d="M140,180 Q145,200 142,220" stroke="#713f12" stroke-width="2" fill="none"/>
          <path d="M158,175 Q155,195 160,215" stroke="#713f12" stroke-width="2" fill="none"/>`,
      },
    ],
  },
  {
    id: 'peacock',
    title: 'Majestic Peacock',
    category: 'Animals',
    difficulty: 'Advanced',
    estimatedTime: '15 min',
    description: 'Draw a royal peacock displaying its spectacular iridescent fan feathers and crown plumage.',
    tags: ['Peacock', 'Bird', 'Feather', 'Royal'],
    thumbnailSvg: `<ellipse cx="150" cy="180" rx="20" ry="30" fill="#0284c7" stroke="#0369a1" stroke-width="3"/>
      <circle cx="150" cy="130" r="14" fill="#0284c7" stroke="#0369a1" stroke-width="3"/>
      <polygon points="150,136 142,142 150,146" fill="#fbbf24"/>
      <path d="M150,116 L150,100" stroke="#0284c7" stroke-width="2.5"/>
      <circle cx="150" cy="98" r="3.5" fill="#10b981"/>
      <path d="M140,117 L132,102" stroke="#0284c7" stroke-width="2.5"/>
      <circle cx="130" cy="100" r="3.5" fill="#10b981"/>
      <path d="M160,117 L168,102" stroke="#0284c7" stroke-width="2.5"/>
      <circle cx="170" cy="100" r="3.5" fill="#10b981"/>
      <path d="M150,180 Q90,110 80,70" stroke="#10b981" stroke-width="3" fill="none"/>
      <circle cx="80" cy="70" r="9" fill="#0284c7" stroke="#fbbf24" stroke-width="2"/>
      <path d="M150,180 Q150,90 150,55" stroke="#10b981" stroke-width="3" fill="none"/>
      <circle cx="150" cy="55" r="9" fill="#0284c7" stroke="#fbbf24" stroke-width="2"/>
      <path d="M150,180 Q210,110 220,70" stroke="#10b981" stroke-width="3" fill="none"/>
      <circle cx="220" cy="70" r="9" fill="#0284c7" stroke="#fbbf24" stroke-width="2"/>`,
    steps: [
      {
        stepNumber: 1,
        title: 'S-Curved Neck & Body',
        instruction: 'Draw an elegant slender head circle and oval body with an arched neck.',
        tip: 'Peacocks hold their heads with regal poise.',
        cumulativeSvg: `<ellipse cx="150" cy="180" rx="20" ry="30" fill="none" stroke="#f43f5e" stroke-width="3.5"/>
          <circle cx="150" cy="130" r="14" fill="none" stroke="#f43f5e" stroke-width="3.5"/>`,
      },
      {
        stepNumber: 2,
        title: 'Crown Crest Feathers',
        instruction: 'Draw three fine feather stems radiating up from the head, each tipped with a rounded crest fan.',
        tip: 'These delicate crests are a trademark peacock feature.',
        cumulativeSvg: `<ellipse cx="150" cy="180" rx="20" ry="30" fill="none" stroke="#475569" stroke-width="3"/>
          <circle cx="150" cy="130" r="14" fill="none" stroke="#475569" stroke-width="3"/>
          <path d="M150,116 L150,100" stroke="#f43f5e" stroke-width="2.5"/>
          <circle cx="150" cy="98" r="3.5" fill="#f43f5e"/>
          <path d="M140,117 L132,102" stroke="#f43f5e" stroke-width="2.5"/>
          <circle cx="130" cy="100" r="3.5" fill="#f43f5e"/>
          <path d="M160,117 L168,102" stroke="#f43f5e" stroke-width="2.5"/>
          <circle cx="170" cy="100" r="3.5" fill="#f43f5e"/>`,
      },
      {
        stepNumber: 3,
        title: 'Feather Fan Spine & Ocelli Eye-Spots',
        instruction: 'Arch feather quill stems outward in a magnificent halo, placing concentric colored rings on each tip.',
        tip: 'The center of each feather eye has a deep cobalt center surrounded by turquoise and gold.',
        cumulativeSvg: `<ellipse cx="150" cy="180" rx="20" ry="30" fill="none" stroke="#475569" stroke-width="3"/>
          <circle cx="150" cy="130" r="14" fill="none" stroke="#475569" stroke-width="3"/>
          <path d="M150,180 Q90,110 80,70" stroke="#f43f5e" stroke-width="3" fill="none"/>
          <circle cx="80" cy="70" r="9" fill="none" stroke="#f43f5e" stroke-width="2.5"/>
          <path d="M150,180 Q150,90 150,55" stroke="#f43f5e" stroke-width="3" fill="none"/>
          <circle cx="150" cy="55" r="9" fill="none" stroke="#f43f5e" stroke-width="2.5"/>
          <path d="M150,180 Q210,110 220,70" stroke="#f43f5e" stroke-width="3" fill="none"/>
          <circle cx="220" cy="70" r="9" fill="none" stroke="#f43f5e" stroke-width="2.5"/>`,
      },
      {
        stepNumber: 4,
        title: 'Royal Sapphire & Emerald Colors',
        instruction: 'Color the peacock body with rich cobalt blue and illuminate the fan feathers with vibrant emerald and gold.',
        tip: 'Astounding masterpiece! Your royal peacock is radiant.',
        cumulativeSvg: `<ellipse cx="150" cy="180" rx="20" ry="30" fill="#0284c7" stroke="#0369a1" stroke-width="3"/>
          <circle cx="150" cy="130" r="14" fill="#0284c7" stroke="#0369a1" stroke-width="3"/>
          <polygon points="150,136 142,142 150,146" fill="#fbbf24"/>
          <path d="M150,116 L150,100" stroke="#0284c7" stroke-width="2.5"/>
          <circle cx="150" cy="98" r="3.5" fill="#10b981"/>
          <path d="M140,117 L132,102" stroke="#0284c7" stroke-width="2.5"/>
          <circle cx="130" cy="100" r="3.5" fill="#10b981"/>
          <path d="M160,117 L168,102" stroke="#0284c7" stroke-width="2.5"/>
          <circle cx="170" cy="100" r="3.5" fill="#10b981"/>
          <path d="M150,180 Q90,110 80,70" stroke="#10b981" stroke-width="3" fill="none"/>
          <circle cx="80" cy="70" r="9" fill="#0284c7" stroke="#fbbf24" stroke-width="2"/>
          <path d="M150,180 Q150,90 150,55" stroke="#10b981" stroke-width="3" fill="none"/>
          <circle cx="150" cy="55" r="9" fill="#0284c7" stroke="#fbbf24" stroke-width="2"/>
          <path d="M150,180 Q210,110 220,70" stroke="#10b981" stroke-width="3" fill="none"/>
          <circle cx="220" cy="70" r="9" fill="#0284c7" stroke="#fbbf24" stroke-width="2"/>`,
      },
    ],
  },
];
