const colors = {
  primary: "#90CAF9",
  secondary: "#E0E0E0",
  background: "#FFFFFF",
}

const about = {
  firstName: "John",
  lastName: "Smith",
  shortDesc: `I'm a web developer located in Irvine, CA.`,
  longDesc: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Est placerat in egestas erat imperdiet sed euismod nisi. Tincidunt praesent semper feugiat nibh. Facilisis sed odio morbi quis commodo odio aenean sed. Sit amet venenatis urna cursus eget nunc scelerisque. Pulvinar mattis nunc sed blandit libero volutpat. Elementum facilisis leo vel fringilla est. Adipiscing vitae proin sagittis nisl. Erat imperdiet sed euismod nisi porta lorem mollis. Pellentesque eu tincidunt tortor aliquam nulla. Eget nulla facilisi etiam dignissim diam.",
    "Sed felis eget velit aliquet sagittis id. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Morbi enim nunc faucibus a pellentesque sit. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Feugiat nibh sed pulvinar proin gravida. Erat nam at lectus urna duis convallis. Ultrices tincidunt arcu non sodales neque sodales ut etiam. Viverra mauris in aliquam sem fringilla ut. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Ut tellus elementum sagittis vitae et leo duis ut diam.",
    "Elementum facilisis leo vel fringilla est. Adipiscing vitae proin sagittis nisl. Erat imperdiet sed euismod nisi porta lorem mollis. Pellentesque eu tincidunt tortor aliquam nulla. Eget nulla facilisi etiam dignissim diam.",
  ],
  email: "",
  github: "https://github.com",
  linkedIn: "https://linkedin.com",
}

const projects = [
  {
    name: "Calculator",
    desc:
      "jQuery calculator that utilizes state machine logic to efficently perform advanced tasks",
    image: "https://picsum.photos/400/410",
    demo: "",
    source: "",
  },
  {
    name: "Student Grade Table",
    desc: "React + Firebase website with CRUD functionalities",
    image: "https://picsum.photos/400/410",
    demo: "",
    source: "",
  },
  {
    name: "When In Rome",
    desc:
      "React and Node social media website for finding events around the world",
    image: "https://picsum.photos/400/410",
    demo: "",
    source: "",
  },
]

//Tengo que exportar doblemente los objetos de js
export default { colors, about, projects }

export { colors, about, projects }
