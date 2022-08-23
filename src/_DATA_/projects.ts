import { Project } from "../Types/types";

export const myPrjects: Project[] = [
  {
    id: 1,
    img: "https://i.ibb.co/YZKCKjm/p1.png",
    link: "https://github.com/aliamerj/share_Files_system",
    name: "Share File System",
    description:
      "It's a full-stack website for uploading and downloading files. When you upload a file, you get a link to this file, and with this link you can download this file.. You can secure your file with a password , so if somebody wants to download this file, he has to enter the correct password, or you can make your file public, so anyone with your file link can download it",
    techUsedFrontend: ["React", "Material UI", "@emotion/styled"],
    techUsedBackend: ["Node-express", "MongoDB", "json web token"],
    language:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    id: 2,
    img: "https://i.ibb.co/80C7TXm/p2.png",
    link: "https://github.com/aliamerj/chat-app",
    name: "Chat App",
    description:
      "It's a full-stack chat website ( Realtime ) . To use this app , first of all, you need to login with Google { Social authentication }, and then you can see other users that you have had conversations with. In the other column, you can search for somebody to chat with . Also, you can see who is online now . The app is so responsive and smooth.",
    techUsedFrontend: ["React", "Redux", "Material UI", "@emotion/styled"],
    techUsedBackend: ["Node-express", "MongoDB", "OAuth 2.0", "Socket.io"],
    language:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    id: 3,
    img: "https://i.ibb.co/FsD9NWn/2.png",
    link: "https://github.com/aliamerj/xy-store",
    name: "XY-Store",
    description:
      "It's my big, complete online store with all the functionality that a regular store has. All products have their own page. It uses Stripe for making payments, JWT for authentication and cookies for authorization, and it fetches products from other api (commerceJs). The last thing I did was test the server 100%. ",
    techUsedFrontend: ["React", "Redux", "Material UI", "@emotion/styled"],
    techUsedBackend: [
      "Node-express",
      "MongoDB",
      "Jwt",
      "Testing -jest & superTest",
      "commercejs",
    ],
    language:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
  },
  {
    id: 4,
    img: "https://i.ibb.co/WtKb9nN/pt.png",
    link: "https://github.com/aliamerj/typing_fast_training",
    name: "Type Fast Training",
    description:
      "Simple web app typing training. The app fetches quotes from the api and displays them to you. You have to write it fast because there is a timer above, and every time you type a wrong character, the app will make the wrong character red, or if it is right , the character will be green.",
    techUsed: ["HTML", "CSS", "Typescript"],
    language:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    id: 5,
    img: "https://i.ibb.co/QpBqFK1/p4.png",
    link: "https://github.com/aliamerj/snakeGameWithTypescript",
    name: "Snake Game",
    description:
      "I used Typescript for this simple web Game. Under the hood, it uses Vanila javascript.",
    techUsed: ["HTML", "CSS", "Typescript"],
    language:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    id: 6,
    img: "https://i.ibb.co/sH3h19c/6p.png",
    link: "https://github.com/aliamerj/My-SimpleDrawingPlayerx",
    name: "Simple Drawing Player",
    description:
      "My Final Project for UBC's Software Construction: Data Abstraction and Object-Oriented Programming",
    techUsed: ["Swing", "java"],
    language: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
  },
];
