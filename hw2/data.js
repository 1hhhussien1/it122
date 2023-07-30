const items = [
  {
    id: 1,
    name: "Car A",
    make: "Ford",
    model: "Mustang",
    year: 2021
  },
  {
    id: 2,
    name: "Car B",
    make: "Tesla",
    model: "Model S",
    year: 2021
  },
  {
    id: 3,
    name: "Car C",
    make: "BMW",
    model: "M4",
    year: 2021
  },
  {
    id: 4,
    name: "Car D",
    make: "Chevrolet",
    model: "Corvette",
    year: 2021
  },
  {
    id: 5,
    name: "Car E",
    make: "Audi",
    model: "R8",
    year: 2021
  }
];

export const getAll = () => {
  return items;
};

export const getItem = (id) => {
  return items.find((item) => item.id === Number(id));
};
