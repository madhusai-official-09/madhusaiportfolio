export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "AWS Cloud Computing",
    issuer: "APSSDC",
    date: "August 2024",
    image: "/certificates/AWS Certificate.png",
  },
  {
    id: 2,
    title: "AWS Solutions Architecture",
    issuer: "Forage",
    date: "April 2025",
    image: "/certificates/AWS Solutions Architecture Job Simulation Certificate.png",
  },
  {
    id: 3,
    title: "ServiceNow CSA",
    issuer: "ServiceNow",
    date: "2025",
    image: "/certificates/ServiceNow Certified System Administrator.png",
  },
  {
    id: 4,
    title: "ServiceNow Administration",
    issuer: "ServiceNow",
    date: "2025",
    image: "/certificates/Servicenow Administration Smartinternz Certificate.png",
  },
  {
    id: 5,
    title: "Microsoft Azure AI",
    issuer: "Microsoft",
    date: "2025",
    image: "/certificates/Microsoft AI Azure Certificate.png",
  },
  {
    id: 6,
    title: "Eduexpose",
    issuer: "Eduexpose",
    date: "2025",
    image: "/certificates/Eduexpose Certificate of Training.png",
  },
];