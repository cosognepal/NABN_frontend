import HeroImage from "../assets/nabn_hero.jpg";
import Icon1 from "../assets/icons/first.png";
import Icon2 from "../assets/icons/second.png";
import Icon3 from "../assets/icons/third.png";

const data = {
  heroSection: {
    title: "National Adolescent Boys Network Nepal",
    subtitle: "Empowering Nepal's youth",
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
    mission3: "Youth Advocacy",
    mission3subtitle:
      "Empowering adolescents across all seven provinces to speak up for change",
    icon3: { url: Icon3 },
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
    CTAsubtitle: "Join us in empowering Nepal's youth",
    CTAbutton: "Learn More",
    CTAbuttonLink: "/about",
  },
};

export default data;
