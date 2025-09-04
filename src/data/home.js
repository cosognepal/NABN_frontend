import HeroImage from "../assets/nabn_hero.jpg";
import Icon1 from "../assets/icons/1First.png";
import Icon2 from "../assets/icons/2Second.png";
import Icon3 from "../assets/icons/3Third.png";
import Icon4 from "../assets/icons/4Fourth.png";
import Icon5 from "../assets/icons/5Fifth.png";
import Icon6 from "../assets/icons/6Sixth.png";
import Icon7 from "../assets/icons/7Seventh.png";
import Icon8 from "../assets/icons/8Eighth.png";
import Icon9 from "../assets/icons/9Nineth.png";

const data = {
  heroSection: {
    title: "National Adolescent Girl Network Nepal",
    subtitle: "Empowering Nepal's adolescent",
    CTAbutton: "Get Involved",
    CTAbuttonlink: "https://www.facebook.com/nabn.nepal/",
    image: {
      url: HeroImage,
    },
  },
  missionSection: {
    mission1: "Adolescent Rights",
    mission1subtitle:
      "Advocating for the protection and fulfillment of adolescent rights in Nepal",
    icon1: { url: Icon1 },
    mission2: "Gender Equality",
    mission2subtitle:
      "Ending gender-based violence and promoting equality for all adolescents",
    icon2: { url: Icon2 },
    mission3: "Adolescent Advocacy",
    mission3subtitle:
      "Empowering adolescents across all seven provinces to speak up for change",
    icon3: { url: Icon3 },

                               ///NEW MISSIONS.

    mission4: "Adolescent Participation",
    mission4subtitle:
      "Empowering adolescents to raise their voices, lead movements, and shape the future of Nepal.",
    icon4:{url: Icon4},

    mission5:"Child Marriage Prevention",
    mission5subtittle:
      "Ending child marriage through awareness, advocacy, and action for a brighter tomorrow.",
    icon5:{url: Icon5},  

    mission6:"Breaking Barriers",
    mission6subtitle:
      "Reaching remote villages, ending silence, and empowering adolescents to speak out for change.",
    icon6:{url: Icon6},  

    mission7:"Equal Opportunities",
    mission7subtittle:
      "Ensuring equal access to education, resources, and rights for every adolescent, everywhere.",
    icon7:{url: Icon7},

    mission8:"From Local to National",
    mission8subtittle:
      "Strengthening adolescents’ voices from grassroots to policy level for lasting impact.",
    icon8:{url: Icon8},

    mission9:"Leadership Development",
    mission9subtittle:
      "Building strong, confident, and skilled adolescent leaders for social change.",
    icon9:{url: Icon9},  


  },
  impactSection: {
    title: "Our Impact",
    fact1: "500+",
    fact1description: "Students Taught",
    fact2: "20+",
    fact2description: "Educational Programs",
    fact3: "15",
    fact3description: "Partner Schools",
  },
  ctaSection: {
    CTAtitle: "Ready to Make a Difference?",
    CTAsubtitle: "Join us in empowering Nepal's Adolescent",
    CTAbutton: "Learn More",
    CTAbuttonLink: "/about",
  },
};

export default data;
