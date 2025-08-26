export type Property = {
  id: string;
  name: string;
  city: string;
  price: string;
  type: "Apartment" | "House" | "Commercial";
  image: string;
};

export const properties: Property[] = [
  {
    id: "p1",
    name: "Eastwell Residence",
    city: "Jakarta",
    price: "Rp 1.2 M",
    type: "Apartment",
    image: "/images/p1.jpg",
  },
  {
    id: "p2",
    name: "Eastwell Park",
    city: "Bandung",
    price: "Rp 950 Jt",
    type: "House",
    image: "/images/p2.jpg",
  },
  {
    id: "p3",
    name: "Eastwell Prime",
    city: "Surabaya",
    price: "Rp 2.8 M",
    type: "Commercial",
    image: "/images/p3.jpg",
  },
];
