import images from "./images";

export const bloodTypes = [
  { id: 1, name: "AB-", receive: "AB-", image: `${images.ABN}` },
  { id: 2, name: "AB+", receive: "AB+ ,AB-", image: `${images.ABP}` },
  { id: 3, name: "A-", receive: "AB+ ,AB- ,A+ ,A-", image: `${images.AN}` },
  { id: 4, name: "A+", receive: "AB+ ,A+ ", image: `${images.AP}` },
  { id: 5, name: "B-", receive: "AB+ ,AB- ,B+ ,B-", image: `${images.BN}` },
  {
    id: 6,
    name: "B+",
    receive: "AB+ ,B+ ",

    image: `${images.BP}`,
  },
  {
    id: 7,
    name: "O positive blood type",
    receive: "AB+ ,A+ ,B+ ,O+",
    image: `${images.OP}`,
  },
  {
    id: 8,
    name: "O-",

    receive: " AB- ,A- ,B- ,O-",

    image: `${images.ON}`,
  },
];
