export interface Icon {
  id: string;
  label: string;
  img: string;
  draggable: boolean;
  elementState?: string;
}

const icons: Icon[] = [
  {
    id: "1",
    label: "Spaceghost",
    img: "../images/spaceghost.png",
    draggable: false,
  },
  {
    id: "2",
    label: "Ninja Turtles",
    img: "../images/tmnt.png",
    draggable: false,
  },
  {
    id: "3",
    label: "Batman",
    img: "../images/batman.png",
    draggable: false,
  },
  {
    id: "4",
    label: "Captain Caveman",
    img: "../images/captain-caveman.png",
    draggable: false,
  },
  {
    id: "5",
    label: "He-man",
    img: "../images/he-man.png",
    draggable: false,
  },
  {
    id: "6",
    label: "Tintin",
    img: "../images/tintin.png",
    draggable: false,
  },
  {
    id: "7",
    label: "Jabberjaw",
    img: "../images/jabberjaw.png",
    draggable: false,
  },
  {
    id: "8",
    label: "Darkwing Duck",
    img: "../images/darkwing-duck.png",
    draggable: false,
  },
  {
    id: "9",
    label: "Scooby Doo",
    img: "../images/scooby-doo.png",
    draggable: false,
  },
  {
    id: "10",
    label: "Havery Birdman",
    img: "../images/birdman.png",
    draggable: false,
  },
];

export default icons;
