import React from "react";

import * as AiIcons from "react-icons/ai";
import {
  GiHoneycomb,
  GiArtificialIntelligence,
  GiTabletopPlayers,
} from "react-icons/gi";
import { BsFillBarChartFill } from "react-icons/bs";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Locations",
    path: "/locations",
    icon: <GiHoneycomb />,
    cName: "nav-text",
  },
  {
    title: "Popularity",
    path: "/popularity",
    icon: <BsFillBarChartFill />,
    cName: "nav-text",
  },
  {
    title: "Models",
    path: "/models",
    icon: <GiArtificialIntelligence />,
    cName: "nav-text",
  },
  {
    title: "Players",
    path: "/players",
    icon: <GiTabletopPlayers />,
    cName: "nav-text",
  },
];
