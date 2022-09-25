export interface Icon {
  id: string;
  label: string;
  img: string;
  elementState?: string;
}

const icons: Icon[] = [
  {
    id: "1",
    label: "Spaceghost",
    img: "../images/spaceghost.png",
  },
  {
    id: "2",
    label: "Ninja Turtles",
    img: "../images/tmnt.png",
  },
  {
    id: "3",
    label: "Batman",
    img: "../images/batman.png",
  },
  {
    id: "4",
    label: "Captain Caveman",
    img: "../images/captain-caveman.png",
  },
  {
    id: "5",
    label: "He-man",
    img: "../images/he-man.png",
  },
  {
    id: "6",
    label: "Tintin",
    img: "../images/tintin.png",
  },
  {
    id: "7",
    label: "Jabberjaw",
    img: "../images/jabberjaw.png",
  },
  {
    id: "8",
    label: "Darkwing Duck",
    img: "../images/darkwing-duck.png",
  },
  {
    id: "9",
    label: "Scooby Doo",
    img: "../images/scooby-doo.png",
  },
  {
    id: "10",
    label: "Havery Birdman",
    img: "../images/birdman.png",
  },
];

export default icons;
