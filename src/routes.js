import Home from "./components/home";
import About from "./components/about";
import Committee from "./components/committee";
import Events from "./components/events";
import FAQ from "./components/faq";
import Error from "./components/error";
import PreEvents from "./components/pre_events";
import Leaderboard from "./components/leaderboard";
import Anger from "./components/houses/anger";
import Sadness from "./components/houses/sadness";
import Disgust from "./components/houses/disgust";
import Fear from "./components/houses/fear";
const routes = [
  {
    id: 1,
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    id: 2,
    name: "About Us",
    path: "/about",
    component: <About />,
  },
  {
    id: 3,
    name: "Our Commmittee",
    path: "/committee",
    component: <Committee />,
  },
  {
    id: 4,
    name: "Events",
    path: "/events",
    component: <Events />,
  },
  {
    id: 5,
    name: "Pre-Events",
    path: "/pre_events",
    component: <PreEvents />,
  },
  {
    id: 6,
    name: "Leaderboard",
    path: "/leaderboard",
    component: <Leaderboard />,
  },
  {
    id: 7,
    name: "FAQ",
    path: "/faq",
    component: <FAQ />,
  },
  {
    id: 8,
    name: "anger",
    path: "/anger",
    component: <Anger />,
  },
  {
    id: 9,
    name: "sadness",
    path: "/sadness",
    component: <Sadness />,
  },
  {
    id: 10,
    name: "disgust",
    path: "/disgust",
    component: <Disgust />,
  },
  {
    id: 11,
    name: "fear",
    path: "/fear",
    component: <Fear />,
  },
  {
    id: 12,
    name: "Error Page",
    path: "*",
    component: <Error />,
  },
];

export default routes;
