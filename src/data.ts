export const data = {
  bio: {
    name: 'Sthefano Carvalho',
    tagline: 'Full-Stack Developer',
    email: 'sthefano@masteradin.com',
    website: 'https://www.sthefanoc.com',
    location: 'São Paulo-SP, Brazil',
    phoneNumber: '+55 11 987-998-135',
    objective: 'Looking for opportunities to grow as a Full-Stack Developer. Python and JavaScript are preferred, but I am open to learning new technologies.',
    shortDescription: 'Full-Stack Developer with a focus on React Js for front-end, Node Js for backend, React Native for mobile, MongoDB for databases, and Python for process automation and business intelligence. Experience in the industry of Consumer Goods, in Digital Marketing (Ads, Content, and Social), business management, and investment analysis.',
  },
  socialLinks:[
    {
      id:"socialLink01",
      name:"github",
      url:"https://github.com/sthefanoc/",
      icon:"fab fa-github"
    },
    {
      id:"socialLink02",
      name:"linkedin",
      url:"https://linkedin.com/in/sthefanocarvalho",
      icon:"fab fa-linkedin-in"
    },
    {
      id:"socialLink03",
      name:"twitter",
      url:"https://twitter.com/sthefano_c",
      icon:"fab fa-twitter"
    },
    {
      id:"socialLink04",
      name:"medium",
      url:"https://medium.com/@sthefanoc",
      icon:"fab fa-medium"
    },
    {
      id:"socialLink05",
      name:"dev",
      url:"https://dev.to/sthefanoc",
      icon:"fab fa-dev"
    },
  ],
  languages:[
    {
      id:'language01',
      name: "English",
      level: "Fluent/ Native"
    },
    {
      id:'language02',
      name: "Portuguese",
      level: "Fluent/ Native"
    },
    {
      id:'language03',
      name: "Spanish",
      level: "Advanced"
    },
    {
      id:'language04',
      name: "French",
      level: "Intermediate"
    }
  ],
  technologies: [
    {
      id:'technology01',
      name:'Python',
      icon:'fab fa-python'
    },
    {
      id:'technology02',
      name:'JavaScript',
      icon:'fab fa-js-square'
    }, 
    {
      id:'technology03',
      name:'HTML',
      icon:'fab fa-html5'
    }, 
    {
      id:'technology04',
      name:'CSS',
      icon:'fab fa-css3-alt'
    }, 
    {
      id:'technology05',
      name:'ReactJS',
      icon:'fab fa-react'
    }, 
    {
      id:'technology06',
      name:'NodeJS',
      icon:'fab fa-node'
    }
  ],
  educations:[
    {
      id: 'education01',
      title: "Bootcamp Python & React Js",
      institution: "DIO",
      shortDescription:"Two bootcamps to accelerate my understanding about the tools I already worked with.",
      startDate: '2020-03-01',
      endDate: "2020-07-01",
    },
    {
      id: 'education02',
      title: "Growth Marketing Minidegree",
      institution: "CXL",
      shortDescription:"Study about growth marketing principles and techniques. Ads, Content, SEO, etc.",
      startDate: '2020-03-01',
      endDate: "2020-08-01",
    },
    {
      id: 'education03',
      title: "Computer Science (incomplete)",
      institution: "UFABC",
      shortDescription:"Interrupted studies on Computer Science. Algorithms, Programming logic, Mathematics.",
      startDate: '2018-02-01',
      endDate: "2019-12-01",
    },
    {
      id: 'education04',
      title: "Economics",
      institution: "Universidade Mackenzie",
      shortDescription:"Studies on Statistics, Econometrics and History.",
      startDate: '2010-01-01',
      endDate: "2014-06-01",
    }
  ],
  projects:[
    {
      id: 'project01',
      title: "SthefanoC.com",
      githubRepo: "https://github.com/sthefanoc/sthefanoc.com",
      liveProject: "https://www.sthefanoc.com/",
      shortDescription:"Personal website that serves as a resumè and I where I can showcase my projects. The website is deployed on Netlify.",
      technologies: [
        'ReactJS: to build pages and components',
        'GatsbyJs: for Static Site Generation',
        'Wordpress Headless CMS: as backend',
        'GraphQL: to query different data'
      ]
    },
    {
      id: 'project02',
      title: "Press.Masteradin.com",
      githubRepo: "https://github.com/sthefanoc/masteradin-press-frontend",
      liveProject: "https://press.masteradin.com/",
      shortDescription:"Website to share press releases with different journalists. It has authentication, allows users to follow profiles and comment on articles.",
      technologies: [
        'NextJS: for SEO friendly website and React syntax',
        'NodeJs and Express: for backend with authentication',
        'MongoDB: to store data',
        'Netlify and Heroku: for deployment'
      ]
    },
    {
      id: 'project03',
      title: "Resume.SthefanoC.com",
      githubRepo: "https://github.com/sthefanoc/graphql-resume",
      liveProject: "https://resume.sthefanoc.com/",
      shortDescription:"Website to showcase my CV built with NextJs, GraphQL, and TypeScript.",
      technologies: [
        'TypeScript: to build a type safe application',
        'NextJS: for React syntax and SEO performance',
        'GraphQL: to query resumè data',
        "ApolloServer: to serve the application"
      ]
    },
    {
      id: 'project04',
      title: "WhatsApp Tools (chrome extension)",
      githubRepo: "https://github.com/sthefanoc/sthefanoc.com",
      liveProject: "https://www.sthefanoc.com/WhatsappTools",
      shortDescription:"Chrome Extension to make WhatsApp audios faster.",
      technologies: [
        'HTML&CSS: to build and style the interface',
        'JavaScript: for functionality',
        'Chrome Store: to push to production',
      ]
    },
  ],
  positions: [
    {
      id: '1',
      title: 'Full-Stack Developer',
      company: 'SthefanoC.com',
      startDate: '2020-01-01',
      endDate: null,
      employmentType: 'PART_TIME',
      location: 'Remote',
      achievements: [
        'Automation Tools Development using Python',
        'Website development using HTML, CSS, and Javascript',
        'Frontend Development using ReactJs, GatsbyJS, NextJS, and Redux',
        'Backend Development using NodeJs, Express, Django, Flask, and Firebase',
        'Hybrid App Development using React Native (Android & IOs), and PWA',
      ],
    },
    {
      id: '2',
      title: 'Managing Director | Co-founder',
      company: 'Masteradin',
      startDate: '2018-11-01',
      endDate: null,
      employmentType: 'FULL_TIME',
      location: 'São Paulo, Brazil',
      achievements: [
        'Process Automation using Selenium',
        'E-commerce website performance evaluation: technical and strategic',
        'Business Analysis using Growth Hacking Techniques',
        'SEM (Google Ads), SEO (Content and Tech), Backlink Acquisition', 
        'Social Media Automation (WhatsApp & Instagram)',
      ],
    },
    {
      id: '3',
      title: 'Customer Development Analyst',
      company: 'Unilever',
      startDate: '2015-01-01',
      endDate: '2018-09-01',
      employmentType: 'FULL_TIME',
      location: 'São Paulo, Brazil',
      achievements: [
        'Website implementation',
        'Contract Management',
        'Investment Analysis',
        'Financial Management',
        'Training and Team Leadership'
      ],
    },
    {
      id: '4',
      title: 'Channel Strategy Analyst',
      company: 'Unilever',
      startDate: '2014-02-01',
      endDate: '2015-02-01',
      employmentType: 'FULL_TIME',
      location: 'São Paulo, Brazil',
      achievements: [
        'Performance KPIs',
        'Financial Management',
        'Strategy and relationship with Distributors',
        'Innovation Planning'
      ],
    },
    {
      id: '5',
      title: 'Marketing Intern',
      company: 'Unilever',
      startDate: '2012-01-01',
      endDate: '2013-12-01',
      employmentType: 'FULL_TIME',
      location: 'São Paulo, Brazil',
      achievements: [
        'Events and promotional campaigns and programs.',
        'Development and implementation of Visibility Materials.',
      ],
    },
  ],
};