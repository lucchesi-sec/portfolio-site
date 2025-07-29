export interface Education {
  degree: string;
  institution: string;
  expected?: string;
  completed?: boolean;
}

export interface Certification {
  name: string;
  status: "Certified" | "Scheduled" | "In Progress";
  date?: string;
}

export const educationData: Education[] = [
  {
    degree: "B.S. Information Technology",
    institution: "Western Governors University",
    expected: "May 2027",
    completed: false
  }
];

export const certificationsData: Certification[] = [
  {
    name: "CompTIA A+",
    status: "Certified"
  }
];
