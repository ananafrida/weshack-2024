import hackathonLogo from "./Assets/hackathonLogo.png";

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from "./Assets/boy.png";
import actualfood from "./Assets/sponsorsLogos/actualfood.png";
import code_wes from "./Assets/sponsorsLogos/code_wes.png";
import oreilly from "./Assets/sponsorsLogos/oreilly.png";
import ourcampus from "./Assets/sponsorsLogos/ourcampus.png";
import wolfram from "./Assets/sponsorsLogos/wolfram.png";
import patricelli from "./Assets/sponsorsLogos/patricelli-center.png";
import leolabs from "./Assets/sponsorsLogos/LeoLabs.png";
import mlh from "./Assets/sponsorsLogos/mlh.png";
import qac from "./Assets/sponsorsLogos/qac.png";

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import chi from "./Assets/teami/chi.jpg";
import me from "./Assets/teami/me.png";
import nishant from "./Assets/teami/nishant.jpg";
import yenta from "./Assets/teami/yenta.png";
import ray from "./Assets/teami/ray.jpg";

// Importing all Judges  images  from Assets

import Daniel from "./Assets/Judges/DG.jpeg";
import Daniel2 from "./Assets/Judges/DK.jpeg";
import Caroline from "./Assets/Judges/caroline.jpg";
import Greg from "./Assets/Judges/greg.jpg";
import Mihika from "./Assets/Judges/mihika.jpg";
import placeholder from "./Assets/Judges/placeholder.png";
import { link } from "fs";


const TOP_SECTION = {
  TITLE: "Join WesHack!",
  Typed_effect: ["24 hours of creation", "Win awesome prizes"],
  SHORT_DESCRIPTION:
    "Join us on November 16-17 with over 200 students from across the nation for 24 hours of creation, innovation, and fun",
  IMG_SRC: boy,
  DISCORD_LINK: "",
  HACKERS_REGISTRATION_FORM_LINK:
    "https://docs.google.com/forms/d/1AKRo-4xfymMSnDOccwMDC61PIWVjawXmhPnuVIHa0Vg/",
};

const SOCIALS = {
  instagram: "https://www.instagram.com/code_wes/",
  // discord: '',
  linkedin: "https://www.linkedin.com/company/codewes/mycompany/",
  // twitter: '',
  // devpost: '',
  email: "mailto:weshack.2024@gmail.com",
  mail: "weshack.2024@gmail.com",
};

const MIDDLE_SECTION = {
  TITLE: "What is WesHack?",
  LONG_DESCRIPTION:
    "WesHack is a weekend-long hackathon calling coders, hackers, artists, designers, tech evangelists, and developers to collaborate and build innovative technologies. Throughout the weekend, participants will have the opportunity to attend workshops and speeches from industry experts. Meals, swag and more will be provided throughout, and valuable prizes will be awarded to top performing submissions.",
  LOGO: hackathonLogo,
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: "",
  },
  JOIN_TEAM: {
    required: true,
    src: "",
  },
  Privacy_policy: {
    required: true,
    src: "",
  },
  Terms_of_use: {
    required: true,
    src: "",
  },
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2024, 18-11-2024 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 11,
  year: 2024,
};

const schedule = [
  {
    day: "16-11-2024",
    events: [
      {
        title: "Check-in & Breakfast",
        timings: "9 AM",
        link: "https://google.com",
      },
      {
        title: "Opening Ceremony",
        timings: "10 AM",
        link: "https://google.com",
      },
      {
        title: "Hacking Begins",
        timings: "11 AM",
        link: "https://google.com",
      },
      {
        title: "Lunch",
        timings: "1 PM",
        link: "https://google.com",
      },
      {
        title: "ActualFood DevOps Workshop",
        timings: "2 PM",
        link: "https://google.com",
      },
      {
        title: "ActualFood Intern Soft Skills Workshop",
        timings: "3 PM",
        link: "https://google.com",
      },
      {
        title: "Fun games",
        timings: "3:30 PM",
        link: "https://google.com",
      },
      {
        title: "Dinner",
        timings: "6 PM",
        link: "https://google.com",
      },
      {
        title: "Snacks",
        timings: "10 PM",
        link: "https://google.com",
      },
    ],
  },
  {
    day: "17-11-2024",
    events: [
      {
        title: "Breakfast",
        timings: "9:30 AM",
        link: "https://google.com",
      },
      {
        title: "Hacking ends",
        timings: "11 AM",
        link: "https://google.com",
      },
      {
        title: "Lunch",
        timings: "12 PM",
        link: "https://google.com",
      },
      {
        title: "Judging Begins",
        timings: "1 PM",
        link: "https://google.com",
      },
      {
        title: "Closing Ceremony",
        timings: "3 PM",
        link: "https://google.com",
      },
    ],
  },
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    // Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: "First Prize",
      content: "The First Prize will be awarded to the project that truly stands out among all submissions. The winner will receive a state-of-the-art drone, perfect for capturing aerial footage and enhancing creativity.",
    },
    {
      icon: <i className="second fas fa-4x fa-medal"></i>,
      type: "Second Prize",
      content: "The Second Prize recognizes the second-best project of the hackathon. The winner will receive an innovative keyboard that enhances productivity and gaming experience.",
    },
    {
      icon: <i className="third fas fa-4x fa-skiing-nordic"></i>,
      type: "Third Prize",
      content: "The Third Prize will be given to the best third-place project, with exciting rewards that include high-quality headphones for an immersive audio experience.",
    },
  ],
  [
    // Array 2
    {
      icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
      type: "Best Women's Hacking Team - Prize 1",
      content: "This award celebrates the Best Women's Hacking Team. Your project will qualify for this prize if your team consists entirely of female participants. The winners will receive a mini projector, ideal for showcasing your innovative ideas.",
    },
    {
      icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
      type: "Best Women's Hacking Team - Prize 2",
      content: "In addition to the first women's prize, this award recognizes another outstanding all-female team. The winners will receive a stylish Polaroid camera, perfect for capturing memories and moments during the hackathon.",
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: "Best Beginner",
      content: "The Best Beginner prize is designed for those participating in their first hackathon. The winner will receive a collection of inspiring books and a portable Bluetooth speaker, perfect for learning and enjoying music on the go.",
    },
  ],
];


/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: "Anan",
      role: "Anan Afrida",
      github: "https://github.com/ananafrida",
      linkedin: "https://www.linkedin.com/in/anan-afrida-2080a4190/",
      img: me,
    },
    {
      Name: "Yenta",
      role: "Yenta Bick",
      github: "",
      linkedin: "https://www.linkedin.com/in/yenta-bick-a9681b2a0/",
      img: yenta,
    },
    {
      Name: "Nishant",
      role: "Nishant Aggarwal",
      github: "https://github.com/n-aggarwal",
      linkedin: "",
      img: nishant,
    },
  ],
  [
    //Array 2
    {
      Name: "Chi",
      role: "Chi Phan",
      github: "https://github.com/cphann",
      linkedin: "",
      img: chi,
    },
    {
      Name: "Ray",
      role: "Ray Huang",
      github: "",
      linkedin: "https://www.linkedin.com/in/ray-huang-0baa73193/",
      img: ray,
    },
  ],
];

const JudgesInfo = [
  [
     //Array 1
     {
       Name: 'Mihika Aggarwal',
       role: 'Mihika Aggarwal',
       github: '',
       linkedin: '',
       img: Mihika
     },
     {
       Name: 'Caroline Liu',
       role: 'Caroline Liu',
       github: '',
       linkedin: '',
       img: Caroline
     },
     {
       Name: 'Greg Grinberg',
       role: 'Greg Grinberg',
       github: '',
       linkedin: '',
       img: Greg
     }
  ],
  [
     //Array 2
     {
       Name: 'Daniel Knopf',
       role: 'Daniel Knopf',
       github: '',
       linkedin: '',
       img: Daniel2
     },
     {
       Name: 'Daniel Goldelman',
       role: 'Daniel Goldelman',
       github: '',
       linkedin: '',
       img: Daniel
     }
  ],
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [
    { src: patricelli, link: "https://www.patricelli.center/" },
    { src: actualfood, link: "https://www.echoar.xyz" },
    { src: leolabs, link: "https://leolabs.space/" },
  ], //Array 1
  [
    {
      src: code_wes,
      link: "https://wesleyan.campuslabs.com/engage/organization/code_wes",
    },
    { src: oreilly, link: "https://www.oreilly.com/" },
    { src: wolfram, link: "https://www.wolframalpha.com/" },
  ], //Array 2
  [    { src: ourcampus, link: "https://ourcampuswes.org/"},
    { src: qac, link: "https://www.qac.com/" },
    { src: mlh, link: "https://mlh.io/" },

  ], //Array 3
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: "What is a hackathon?",
        content:
          "A hackathon is a 24 hour event where teams rapidly collaborate to develop innovative software or hardware solutions.",
      },
      {
        label: "Who can attend?",
        content:
          "WesHack is open to all undergraduate students across US universities. We encourage all skill levels to participate.",
      },
      {
        label: "What is the cost of attending the hackathon?",
        content: "WesHack is free of cost.",
      },
      {
        label: "I am a first time hacker. What should I do?",
        content:
          "No worries, we love to welcome first time hackers and start their hacking journey. We will have some awesome workshops and events onsite which will help you get started!",
      },
      {
        label: "How does team formation work?",
        content:
          "You can form a team with up to 4 members. If you don't have a team, there'll be plenty of opportunities for you to meet hackers through discord or onsite to form a team!",
      },
    ],
    [
      {
        label: "What are the tracks?",
        content:
          "Education, health, entertainment, sustainability, and more hidden tracks!",
      },
      {
        label: "What if I have more questions?",
        content:
          "Reach us directly at weshack.2024@gmail.com and we would happy to help you.",
      },
      {
        label: "How can I register for the hackathon?",
        content: (
          <span>
            All you need is to fill our{" "}
            <a href="https://docs.google.com/forms/d/1AKRo-4xfymMSnDOccwMDC61PIWVjawXmhPnuVIHa0Vg/">
              form
            </a>
            , and we will guide you after that.
          </span>
        ),
      },
      {
        label: "Where will the hackathon take place?",
        content: (
          <span>
            'WesHack 2024 will be in-person at{" "}
            <a href="https://maps.app.goo.gl/nLLQfcUfktdD4kyKA">
              Exley Science Center, Wesleyan University, Middletown, CT
            </a>
          </span>
        ),
      },
      {
        label: "Will there be swag?",
        content: "Yes! Participants will be recieveing WesHack swag!",
      },
      {
        label: "Is there a code of conduct?",
        content: (
          <span>
            All participants are expected to follow the{" "}
            <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
              {" "}
              MLH Code of Conduct{" "}
            </a>{" "}
            throughout the duration of the conference.
          </span>
        ),
      },
    ],
  ],
];

export {
  FOOTER,
  JudgesInfo,
  MIDDLE_SECTION,
  Prizeinfo,
  SOCIALS,
  TOP_SECTION,
  TeamInfo,
  calenderStartingDate,
  frequentlyAskedQuestions,
  schedule,
  sponsorLogos,
};
