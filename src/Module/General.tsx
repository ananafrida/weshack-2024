import hackathonLogo from './Assets/hackathonLogo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from './Assets/boy.png';
import actualfood from './Assets/sponsorsLogos/actualfood.png';
import code_wes from './Assets/sponsorsLogos/code_wes.png';
import oreilly from './Assets/sponsorsLogos/oreilly.png';
import ourcampus from './Assets/sponsorsLogos/ourcampus.png';
import wolfram from './Assets/sponsorsLogos/wolfram.png';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import chi from './Assets/teami/chi.jpg';
import me from './Assets/teami/me.png';
import nishant from './Assets/teami/nishant.png';
import yenta from './Assets/teami/yenta.png';

const TOP_SECTION = {
  TITLE: 'Join WesHack!',
  Typed_effect: ['24 hours of creation', 'Win awesome prizes'],
  SHORT_DESCRIPTION:
    'Join us on 16-17th November 2024 with over 200 students from across the nation for 24 hours of creation, innovation, & fun.',
  IMG_SRC: boy,
  DISCORD_LINK: '',
  HACKERS_REGISTRATION_FORM_LINK:
    'https://docs.google.com/forms/d/1AKRo-4xfymMSnDOccwMDC61PIWVjawXmhPnuVIHa0Vg/'
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/code_wes/',
  discord: '',
  linkedin: 'https://www.linkedin.com/company/codewes/mycompany/',
  twitter: '',
  devpost: '',
  email: 'mailto:aafrida@wesleyan.edu',
  mail: 'aafrida@wesleyan.edu'
};

const MIDDLE_SECTION = {
  TITLE: 'What is WesHack?',
  LONG_DESCRIPTION:
    'WesHack is 24 hour long running hackathon will be held on November 16th & 17th , We calls for hackers, artists, coders, designers, tech evangelists, creatives, and developers from all disciplines to take a part to win awesome prizes and collaborate with other developers . Throughout the weekend hackers at WesHack will have unique opportunities to learn from each other trying hands in new technologies We are determined to have an all-inclusive and diverse group of students attending.',
  LOGO: hackathonLogo
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: ''
  },
  JOIN_TEAM: {
    required: true,
    src: ''
  },
  Privacy_policy: {
    required: true,
    src: ''
  },
  Terms_of_use: {
    required: true,
    src: ''
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2024, 18-11-2024 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 11,
  year: 2024
};

const schedule = [
  {
    day: '16-11-2024',
    events: [
      {
        title: 'Check-in & Breakfast',
        timings: '9 AM',
        link: 'https://google.com'
      },
      {
        title: 'Opening Ceremony',
        timings: '10 AM',
        link: 'https://google.com'
      },
      {
        title: 'Hacking Begins',
        timings: '11 AM',
        link: 'https://google.com'
      },
      {
        title: 'Lunch',
        timings: '1 PM',
        link: 'https://google.com'
      },
      {
        title: 'ActualFood DevOps Workshop',
        timings: '2 PM',
        link: 'https://google.com'
      },
      {
        title: 'ActualFood Intern Soft Skills Workshop',
        timings: '3 PM',
        link: 'https://google.com'
      },
      {
        title: 'Fun games',
        timings: '3:30 PM',
        link: 'https://google.com'
      },
      {
        title: 'Dinner',
        timings: '6 PM',
        link: 'https://google.com'
      },
      {
        title: 'Snacks',
        timings: '10 PM',
        link: 'https://google.com'
      }
    ]
  },
  {
    day: '17-11-2024',
    events: [
      {
        title: 'Breakfast',
        timings: '9:30 AM',
        link: 'https://google.com'
      },
      {
        title: 'Hacking ends',
        timings: '11 AM',
        link: 'https://google.com'
      },
      {
        title: 'Lunch',
        timings: '12 PM',
        link: 'https://google.com'
      },
      {
        title: 'Judging Begins',
        timings: '1 PM',
        link: 'https://google.com'
      },
      {
        title: 'Closing Ceremony',
        timings: '3 PM',
        link: 'https://google.com'
      }
    ]
  }
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
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'overall First',
      content:
        'First Overall prize will be given to a project that outstands all other submissions'
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: 'overall second',
      content:
        'Second Overall prize will be given to the second best project of the hackathon'
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: 'overall third',
      content:
        'Best third overall project of the hackathon will win some awesome prizes'
    }
  ],
  [
    //Array 2
    {
      icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
      type: 'Best Women Hacking Team',
      content:
        'Your project will qualify for this prize if your team consists of all females'
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: ' Best Beginner',
      content: 'Your project will qualify for this category if atleast 50% '
    }
  ]
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
      Name: 'Anan',
      role: 'Anan Afrida',
      github: 'https://github.com/ananafrida',
      linkedin: 'https://www.linkedin.com/in/anan-afrida-2080a4190/',
      img: me
    },
    {
      Name: 'Yenta',
      role: 'Yenta Bick',
      github: '',
      linkedin: '',
      img: yenta
    },
    {
      Name: 'Nishant',
      role: 'Nishant Aggarwal',
      github: 'https://github.com/n-aggarwal',
      linkedin: '',
      img: nishant
    }
  ],
  [
    //Array 2
    {
      Name: 'Chi',
      role: 'Chi Phan',
      github: 'https://github.com/cphann',
      linkedin: '',
      img: chi
    }
  ]
];

const JudgesInfo = [
  [
    // //Array 1
    // {
    //   Name: 'Uber',
    //   role: '',
    //   github: '',
    //   linkedin: '',
    //   img: me
    // },
    // {
    //   Name: 'Caroline',
    //   role: 'Caroline Liu',
    //   github: '',
    //   linkedin: '',
    //   img: moon
    // },
    // {
    //   Name: 'Greg',
    //   role: 'Greg',
    //   github: '',
    //   linkedin: '',
    //   img: Ryah
    // }
  ],
  [
    // //Array 2
    // {
    //   Name: 'Daniel',
    //   role: 'Daniel Knopf',
    //   github: '',
    //   linkedin: '',
    //   img: lyin
    // },
    // {
    //   Name: 'Daniel',
    //   role: 'Daniel Goldelman',
    //   github: '',
    //   linkedin: '',
    //   img: zoha
    // }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: code_wes, link: "https://wesleyan.campuslabs.com/engage/organization/code_wes"}, {src: actualfood, link: "https://www.echoar.xyz"}, {src: oreilly, link: "https://www.oreilly.com/"}], //Array 1
  [{src: wolfram, link: "https://www.wolframalpha.com/"}, {src: ourcampus, link: "https://www.replit.com"}], //Array 2
  [] //Array 3
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is a hackathon?',
        content:
          'A hackathon is a 24 hour event where "hackers" all over the globe will collaborate on creating a functioning software and hardware by the end of the event.'
      },
      {
        label: 'Who can attend?',
        content:
          'WesHack is open to all undergraduate students across different US universities.'
      },
      {
        label: 'What is the cost of attending the hackathon?',
        content:
          'WesHack is free of cost.'
      },
      {
        label: 'I am a first time hacker, what should I do?',
        content:
          'No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathon and hacking in general.'
      },
      {
        label: 'How does team formation work?',
        content:
          "You can form team with 4 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team!"
      }
    ],
    [
      {
        label: 'What are the tracks?',
        content: 'Education, health, entertainments, sustainability, and more hidden tracks!'
      },
      {
        label: 'I have more questions?',
        content:
          'Reach us directly at aafrida@wesleyan.edu and we would happy to help you.'
      },
      {
        label: 'How to register myself in the hackathon?',
        content:(
          <span>
            All you need is to fill our <a href="https://docs.google.com/forms/d/1AKRo-4xfymMSnDOccwMDC61PIWVjawXmhPnuVIHa0Vg/">form</a>, we will guide you through everything there.
          </span>
        )
      },
      {
        label: 'Where will the hackathon be?',
        content: (
          <span>
            'WesHack 2024 will be in-person at <a href="https://maps.app.goo.gl/nLLQfcUfktdD4kyKA">Exley Science Center, Wesleyan University</a>
          </span>

        )
      },
      {
        label: 'Will there be swag?',
        content: 'Yes! Participants will be recieveing WesHack swag!'
      }
    ]
  ]
];

export { FOOTER, JudgesInfo, MIDDLE_SECTION, Prizeinfo, SOCIALS, TOP_SECTION, TeamInfo, calenderStartingDate, frequentlyAskedQuestions, schedule, sponsorLogos };
