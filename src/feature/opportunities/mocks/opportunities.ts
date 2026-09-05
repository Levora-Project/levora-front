import { OpportunitySummary } from "../types/opportunity";

// Full opportunity catalog, browsed on the Discover page (FR-3.x) and
// sampled from on the dashboard's "best opportunities" preview.
export const OPPORTUNITIES: OpportunitySummary[] = [
  {
    id: "o1",
    title: "Qatar Foundation Academic Excellence Scholarship",
    description:
      "Comprehensive scholarship for outstanding students pursuing degrees in science and engineering.",
    type: "Scholarship",
    matchScore: 98,
    daysLeft: 12,
    location: "Doha, Qatar",
    fieldOfStudy: "Engineering",
    imageUrl:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "o2",
    title: "Product Design Internship",
    description:
      "Work alongside senior product designers shipping consumer-facing experiences.",
    type: "Internship",
    matchScore: 82,
    daysLeft: 5,
    location: "Riyadh, Saudi Arabia",
    fieldOfStudy: "Design",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "o3",
    title: "Young Leaders Scholarship 2024",
    description:
      "International program empowering Arab youth in leadership and social impact.",
    type: "Scholarship",
    matchScore: 89,
    daysLeft: 30,
    location: "Dubai, UAE",
    fieldOfStudy: "Business",
    imageUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "o4",
    title: "Data Science Summer Internship",
    description:
      "Hands-on internship building data pipelines and ML models for real products.",
    type: "Internship",
    matchScore: 91,
    daysLeft: 18,
    location: "Cairo, Egypt",
    fieldOfStudy: "Computer Science",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "o5",
    title: "Frontier Research Fellowship",
    description:
      "Fully funded fellowship for early-career researchers in applied physics.",
    type: "Fellowship",
    matchScore: 76,
    daysLeft: 45,
    location: "Amman, Jordan",
    fieldOfStudy: "Physics",
    imageUrl:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "o6",
    title: "Women in STEM Grant",
    description:
      "Grant supporting women pursuing graduate studies in STEM fields.",
    type: "Scholarship",
    matchScore: 68,
    daysLeft: 3,
    location: "Beirut, Lebanon",
    fieldOfStudy: "Computer Science",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "o7",
    title: "Global Health Fellowship",
    description:
      "Fellowship placing graduates with NGOs tackling public health challenges.",
    type: "Fellowship",
    matchScore: 64,
    daysLeft: 60,
    location: "Amman, Jordan",
    fieldOfStudy: "Medicine",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "o8",
    title: "Marketing Analytics Internship",
    description:
      "Support growth campaigns with data-driven marketing insights and reporting.",
    type: "Internship",
    matchScore: 71,
    daysLeft: 21,
    location: "Doha, Qatar",
    fieldOfStudy: "Business",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "o9",
    title: "Middle East Legal Studies Scholarship",
    description:
      "Scholarship for students pursuing law degrees with a regional policy focus.",
    type: "Scholarship",
    matchScore: 58,
    daysLeft: 75,
    location: "Cairo, Egypt",
    fieldOfStudy: "Law",
    imageUrl:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "o10",
    title: "Renewable Energy Research Fellowship",
    description:
      "Fund graduate research into solar and wind energy systems for the region.",
    type: "Fellowship",
    matchScore: 85,
    daysLeft: 40,
    location: "Riyadh, Saudi Arabia",
    fieldOfStudy: "Engineering",
    imageUrl:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "o11",
    title: "Creative Arts Internship",
    description:
      "Assist a regional studio on brand campaigns spanning film, print, and digital.",
    type: "Internship",
    matchScore: 60,
    daysLeft: 9,
    location: "Beirut, Lebanon",
    fieldOfStudy: "Arts",
    imageUrl:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "o12",
    title: "Future Engineers Scholarship",
    description:
      "Merit-based scholarship covering full tuition for undergraduate engineering students.",
    type: "Scholarship",
    matchScore: 94,
    daysLeft: 27,
    location: "Dubai, UAE",
    fieldOfStudy: "Engineering",
    imageUrl:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "o13",
    title: "Applied AI Fellowship",
    description:
      "Twelve-month fellowship building applied machine learning products with mentors.",
    type: "Fellowship",
    matchScore: 88,
    daysLeft: 15,
    location: "Cairo, Egypt",
    fieldOfStudy: "Computer Science",
    imageUrl:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "o14",
    title: "Public Policy Internship",
    description:
      "Contribute to research briefs supporting regional public policy initiatives.",
    type: "Internship",
    matchScore: 55,
    daysLeft: 34,
    location: "Amman, Jordan",
    fieldOfStudy: "Business",
    imageUrl:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80&auto=format&fit=crop",
  },
];

// Top matches surfaced on the dashboard preview (FR-3.5/3.6).
export const RECOMMENDED_OPPORTUNITIES: OpportunitySummary[] = [...OPPORTUNITIES]
  .sort((a, b) => b.matchScore - a.matchScore)
  .slice(0, 2);
