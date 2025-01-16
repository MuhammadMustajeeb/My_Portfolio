import {
    react,
    frontend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    bitesup,
    gaming,
    gpt3,
    currency_tales,
    threejs,
    fasdeem,
    deploy_1,
    deploy_2,
    deploy_3,
    deploy_4,
    deploy_5
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: react,
    },
    {
      title: "Front-End Engineer",
      icon: frontend,
    },
    {
      title: "UI/UX Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Shoaib Sohail",
  //     designation: "CHRO",
  //     company: "B.B Tech",
  //     image: "https://res.cloudinary.com/dsqeevxdd/image/upload/v1736903078/reucly8u2okktnwa7qef.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "Fasdeem",
      description:
        "An E-commerce app that delivers full functionality for precise searching, efficient order placement, straightforward adjustment of product quantities, effective filtering of items, and simple cart options.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react-toastify",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: fasdeem,
      icon: deploy_1,
      source_code_link: "https://github.com/MuhammadMustajeeb/Ecommerce_App",
      deploy_link: "https://fasdeem.com"
    },
    {
      name: "Bite Sup",
      description:
        "A simple Restaurant and ordering-based application with a neat and clean user interface and user experience with additional functionalities covering the front-end part of the app.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "contextapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: bitesup,
      icon: deploy_2,
      source_code_link: "https://github.com/MuhammadMustajeeb/Food_DeliveryApp.git",
      deploy_link: "https://bitesup.store"
    },
    {
      name: "Gaming UI/UX",
      description:
        "This web application allows users to engage with modern gaming UI/UX design and re-render video animations, featuring tilt motion capabilities on cards to enhance the user experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "gsap",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: gaming,
      icon: deploy_3,
      source_code_link: "https://github.com/MuhammadMustajeeb/Gaming_UI-UX_Design.git",
      deploy_link: "https://gaming-ui-ux-design.vercel.app/"
    },
    {
      name: "GPT-3",
      description:
        "A web application made by Figma design, React JS, and BEM CSS.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "figma design",
          color: "green-text-gradient",
        },
        {
          name: "bem css",
          color: "pink-text-gradient",
        },
      ],
      image: gpt3,
      icon: deploy_4,
      source_code_link: "https://github.com/MuhammadMustajeeb/UI-UX-GPT-3.git",
      deploy_link: "https://gpt-3-one-pink.vercel.app/#wgpt3"
    },
    {
      name: "Curruncy Tales",
      description:
        "A currency converter app developed by using API, JS, and CSS.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: currency_tales,
      icon: deploy_5,
      source_code_link: "https://github.com/MuhammadMustajeeb/Currency_App.git",
      deploy_link: "https://www.currencytales.online/#"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };