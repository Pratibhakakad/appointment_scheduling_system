
export const DOCTORS = [
  {
    id: 1,
    name: "Dr. Priya Kapoor",
    specialization: "Psychologist",
    image: "/doctor1.png",
    experience: 5,
    gender: "Female",
    sessionTime: "01:00 Hr",
    fee: 700
  },
  {
    id: 2,
    name: "Dr. Arjun Mehta",
    specialization: "Clinical Psychologist",
    image: "/doctor2.png",
    experience: 8,
    gender: "Male",
    sessionTime: "45 Min",
    fee: 900
  },
  {
    id: 3,
    name: "Dr. Neeta Sharma",
    specialization: "Child Psychologist",
    image: "/doctor3.png",
    experience: 6,
    gender: "Female",
    sessionTime: "30 Min",
    fee: 600
  },
  {
    id: 4,
    name: "Dr. Karan Malhotra",
    specialization: "Counseling Psychologist",
    image: "/doctor4.png",
    experience: 10,
    gender: "Male",
    sessionTime: "01:00 Hr",
    fee: 1100
  }
  
];


export const PATIENTS = [
  { id: "p1", name: "Shubham Naik", phone: "+91 98765 43210" },
  { id: "p2", name: "Manjunath Naik", phone: "+91 91234 56789" },
];

export function makeTimeSlots() {
  const slots = [];
  for (let h = 9; h < 18; h++) {
    slots.push(`${h}:00`, `${h}:30`);
  }
  return slots;
}
