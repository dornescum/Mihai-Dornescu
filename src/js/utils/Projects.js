// <span style='color: #000000; font-weight: bold'></span>
const project= 'https://github.com/dornescum/angularIonic-store';
export const projects = [

	{
		id: 12 - 30,
		title: "Handymen Proof Of Concept",
		description: "A full stack with ssr for seo",
		tools: " <span  style='color: #ef3333;'>Angular 16</span>, Universal Engine, <span  style='color: #000000;'>Express</span>, Tailwind Css",
		linkRepo: "",
		linkPage: "https://mp.dornescu.ro/home",
		img: "@../../src/img/projects/instalator40.webp",
		tagJs: "Angular",
		tagCss: "Tailwind",
		tagTutorial: false,
		desc: "Angular",
		extra: "This full-stack web application,  <span style='color: #ef3333; font-weight: bold'> POC Meseriași </span> , showcases a robust frontend built with Angular, employing the latest features for dynamic content rendering and interactive user experiences. Key frontend technologies include <span style='color: #000000; font-weight: bold'>Angular Universal</span>  for server-side rendering, enhancing <span  style='color: #000000; font-weight: bold'>SEO </span> and performance, and Tailwind CSS for sleek, responsive designs." +
			"The inclusion of custom directives and services in Angular ensures a modular and efficient frontend architecture. " +
			"On the backend, <span  style='color: #000000; font-weight: bold'>Express </span>serves as the backbone, providing a lightweight yet powerful framework for handling server-side logic. " +
			"The use of middleware like <span style='color: #000000; font-weight: bold'>Bcrypt</span>  for secure password handling, CORS for cross-origin resource sharing, and <span style='color: #000000; font-weight: bold'>Helmet</span>  for security headers, together with <span style='color: #000000; font-weight: bold'>JWT</span>  for authentication, ensures a secure and scalable environment, additionally, the integration of <span style='color: #000000; font-weight: bold'>html-es6cape</span>  fortifies the application against XSS attacks by safely escaping HTML entities, <span style='color: #000000; font-weight: bold'>Express Validator</span> and  is also employed to validate and sanitize user inputs, further enhancing the security and robustness of the application." +
			" The application is further augmented with <span  style='color: #f29221; font-weight: bolder'>MySql</span> for reliable data storage and <span  style='color: #000000; font-weight: bold'>Sequelize ORM</span>  for efficient database interactions, making it an exemplary demonstration of full-stack capabilities in a modern web application. Hosted on a dedicated <span style='color: #000000; font-weight: bold'>Linux</span>  cloud server, " +
			"the server environment is tuned with essential packages, supporting Angular's dynamic capabilities and Express's efficient processing. Additionally, MySQL is seamlessly integrated, offering robust data management and storage solutions, this setup ensures optimal interaction between the server, the database, and all the applications on the server."

	},

	{
		id: 1 / 5 / 2023,
		title: "Full stack admin panel",
		description: "node js express, jsonwebtoken, md5, joi, sqlite, angular form, typescript, tailwind css",
		tools: "Node js, <span  style='color: #000000;'>Express</span>, Sqlite, <span  style='color: #ef3333;'>Angular</span>, Typescript",
		linkRepo: "https://github.com/dornescum/sqliteAdminPanel",
		linkPage: "http://62.171.167.229:4200/client/#/home",
		img: "@../../src/img/projects/admin.webp",
		tagJs: "Angular",
		tagCss: "Tailwind",
		tagTs: "Typescript",
		tagTutorial: false,
		tagDB: 'Sqlite',
		tagNode: true,
		desc: "Node js , Express, Sqlite, Angular",
		extra: "This full-stack SaaS project is an  electronic warehouse simulation platform where users, after account creation, can manage a plethora of electronic products across various categories and brands. Embracing a mobile-first design philosophy, the client-side is crafted using <span style='color: #000000; font-weight: bold'>Angular</span> , ensuring an optimal and responsive experience across devices. The system facilitates full CRUD operations, allowing for the addition, modification, and movement of inventory items between virtual storages. A key feature is the real-time transactional database management powered by <span style='color: #000000; font-weight: bold'>SQLite</span> , ensuring data integrity as items are transferred across storages. The backend, constructed with Express, delivers robust MVC architecture for efficient data filtering by brand, category, and price, as well as search functionality for product names and fallback brand searches. Each product is uniquely identified by a barcode, incorporating storage, category, brand, and owner details. <span style='color: #000000; font-weight: bold'>Chart js</span>  integration provides insightful visualizations of storage metrics. Moreover, users can download complete SQL product lists, enabling easy data portability and backup. This platform exemplifies a comprehensive warehouse management solution with a keen focus on user-centric design, data accuracy, and operational efficiency."
	},
	{
		id: 13 - 6 - 24,
		title: "Convert image",
		description: "Convert jpeg to webp, png. Tiff to jpeg, BMP to png. ",
		tools: " <span  style='color: #6b9e11;'>Python</span>,Flask , Pillow, Jinja2, Mysql",
		linkRepo: "https://github.com/dornescum",
		linkPage: "https://images.dornescu.ro",
		img: "@../../src/img/projects/python_images.webp",
		tagJs: "Python",
		tagCss: "Bootstrap",
		tagTutorial: false,
		tagDB: 'Mysql',
		tagPy: true,
		desc: "FastApi  Python, Sqlite, React",
		extra: "This project is a web application that allows users to upload, process, and view various image formats, JPEG, PNG, WEBP, TIFF . It utilizes Flask as the web framework and leverages several libraries for image handling, database management, and session management. Key functionalities include: Image Processing | GeoIP Location | Session Management | Database Interaction. Integrates Geolite2 to retrieve geographic information based on the user's IP address. Implements Flask-Session for server-side session management. Uses Flask-Limiter to manage request rates and avoid abuse. Utilizes python-dotenv to load environment variables from a .env file, ensuring secure configuration management. Connects to a MySQL database using SQLAlchemy and pymysql for ORM capabilities and session management."
	},
	{
		id: 4-9-24,
		title: "Laravel CRUD",
		description: "Users add books, filter by category, title, author.",
		tools: " <span  style='color: #ef3333;'>Laravel 11</span>,  <span  style='color: #000000; font-weight: bolder'>Php</span>, Mysql",
		linkRepo: "https://github.com/dornescum/books-laravel11",
		linkPage: "http://books.dornescu.ro/books",
		img: "@../../src/img/projects/laravelBooks.webp",
		tagJs: "PHP",
		tagCss: "Tailwind",
		tagTutorial: false,
		desc: "Angular",
		extra: ` This is a simple Create, Read, Update, and Delete (CRUD) application for managing books. Each user can add their own books, 
		and while the books added are visible to all users, only the user who added a book can update or delete it. The primary intent of this exercise was to test and showcase proficiency in Laravel and PHP, rather than focusing on the design aspects. 
		Thus, the app may not have advanced design features or styles but has full functionality a CRUD application requires, implemented using Laravel and PHP.`

	},
	{
		id: 15 / 8,
		title: " Ionic ecommerce simulator",
		description: "Ionic,Angular, Capacitor, @ngrx/store",
		tools: " <span  style='color: #ef3333;'>Angular 14</span>, Typescript, Ionic, Capacitor",
		linkRepo: "https://github.com/dornescum/angularIonic-store",
		linkPage: "https://ionic-lecommerce.web.app/login",
		img: "@../../src/img/projects/ionic-angular.webp",
		tagJs: "Angular",
		tagCss: "Css",
		tagTutorial: false,
		desc: "Ionic Angular",
		extra: "Dive into the world of mobile commerce with this <span style='color: #000000; font-weight: bold'>Ionic</span> -based e-commerce simulation app, designed to deliver a complete shopping experience on both <span style='color: #000000; font-weight: bold'>Android </span> devices and web platforms. The app encapsulates the essence of e-commerce, allowing customers to seamlessly add products to their cart, update quantities, and manage their selections with ease. Developed with a mobile-first approach, the app is rigorously tested on Android to ensure a flawless user experience, while maintaining full functionality on web browsers for a broader reach. Built upon the robust foundations of <span style='color: #000000; font-weight: bold'> Angular </span>and the latest version of Ionic, the app promises high performance and a native-like feel. Leveraging <span style='color: #000000; font-weight: bold'>Capacitor's</span>  cross-platform APIs, the application offers a range of device features and integrations, such as haptics feedback, status bar customization, and secure storage preferences. With state management powered by <span style='color: #000000; font-weight: bold'>NgRx</span> , the app ensures predictability in state transitions, immutability, and performance. "
		// extra: `This mockup e-commerce project is designed to cater to both Android and web platforms, offering a seamless and responsive user experience. Utilizing the robust Angular framework (v14), the application ensures a dynamic and interactive frontend, suitable for modern retail needs
		// 	The project leverages the latest Ionic technologies (v6) for mobile-first design, ensuring optimal performance and a native-like experience on Android devices. Enhanced by Capacitor (v4) plugins, the application integrates native functionalities like haptics, keyboard interactions, and efficient app preferences management
		// 	At its core, the application connects to a reliable back-end service built with Express and MySQL. This backend integration ensures robust data handling, secure transactions, and dynamic content management, making the platform ideal for real-time e-commerce operations`


	},
	{
		id: 1 /15/ 24,
		title: " Ionic node mysql docker",
		description: "Simple express with docker mysql, for <b><i><a href='https://github.com/dornescum/angularIonic-store' target='_blank'>Ionic ecommerce simulator</a> </i></b> ",
		tools: " <span  style='color: #000000;'>Express</span>, Ionic, Typescript, <b>Docker</b>",
		linkRepo: "https://github.com/dornescum/ionicNodeExpress",
		linkPage: "https://ionic-lecommerce.web.app/login",
		img: "@../../src/img/projects/nodejs.webp",
		tagJs: "Express",
		tagCss: "",
		tagTutorial: false,
		desc: "Express",
		// extra: "Dive into the world of mobile commerce with this <span style='color: #000000; font-weight: bold'>Ionic</span> -based e-commerce simulation app, designed to deliver a complete shopping experience on both <span style='color: #000000; font-weight: bold'>Android </span> devices and web platforms. The app encapsulates the essence of e-commerce, allowing customers to seamlessly add products to their cart, update quantities, and manage their selections with ease. Developed with a mobile-first approach, the app is rigorously tested on Android to ensure a flawless user experience, while maintaining full functionality on web browsers for a broader reach. Built upon the robust foundations of <span style='color: #000000; font-weight: bold'> Angular </span>and the latest version of Ionic, the app promises high performance and a native-like feel. Leveraging <span style='color: #000000; font-weight: bold'>Capacitor's</span>  cross-platform APIs, the application offers a range of device features and integrations, such as haptics feedback, status bar customization, and secure storage preferences. With state management powered by <span style='color: #000000; font-weight: bold'>NgRx</span> , the app ensures predictability in state transitions, immutability, and performance. "
		extra: `This Express backend integrates with MySQL, offering a powerful database solution, and is neatly containerized using Docker, ensuring consistent environments across development and production. This project is designed to complement the Ionic Angular project.
		Leveraging TypeScript, the project offers strong typing and modern JavaScript features, leading to more maintainable and error-resistant code.`
	},
	{
		id: 2 - 23,
		title: "Mockup Ecommerce, context api",
		description: "Ecommerce, Next js, Node js <span style='color: #FF0000FF'><b>Because is a free service of node, it will take 15 sec to be online</b></span>",
		tools: "Next js, Tailwind Css",
		linkRepo: "",
		linkPage: "https://electronic-store-next-js.vercel.app/",
		img: "@../../src/img/projects/ecommerce.webp",
		tagJs: "Next",
		tagCss: "Tailwind",
		tagTutorial: false,
		desc: "Next js",
		extra: "This e-commerce mockup project, developed as an online electronic store platform, leverages <span style='color: #000000; font-weight: bold'>Next js</span> , a formidable framework for server-rendered React applications. Emphasizing a mobile-first design approach, the platform ensures optimal usability and aesthetics on smaller screens, progressively enhancing the experience for larger devices. This strategy is pivotal in today's mobile-centric world, ensuring a broad reach and user satisfaction. The project capitalizes on Next js's strengths in efficient page rendering and routing, contributing to an exceptionally performant user experience. Interactive charts powered by <span style='color: #000000; font-weight: bold'>Chart js</span> , and engaging visual elements like  <span style='color: #000000; font-weight: bold'>React Icons</span> and <span style='color: #000000; font-weight: bold'>Slick Carousel</span> , are seamlessly integrated to enrich the interface. React Popup enhances interactivity, offering intuitive modal and dialogue display. Frontend styling with <span style='color: #000000; font-weight: bold'>Tailwind CSS</span>  guarantees a modern, responsive design that elegantly adapts across various devices. The application's robust setup includes dotenv for environment variable management and ESLint for code quality assurance, embodying best practices in configuration and development. This project stands out as a state-of-the-art e-commerce solution, with its focus on interactivity, mobile-first user engagement, and compelling aesthetic appeal."
	},
	{
		id: 1/10/24,
		title: "Statistics ",
		description: "Analyzing statistics for <span style='color: #000000'><b><a href='https://mp.dornescu.ro' target='_blank'>Handymen Proof Of Concept</a> </b></span>",
		tools: "<span  style='color: #ef3333;'>Angular 16</span>, Tailwind Css",
		linkRepo: "https://github.com/dornescum/admin-dashboard",
		linkPage: "https://statistics-api-414df.web.app/browsers",
		img: "@../../src/img/projects/devices.webp",
		tagJs: "Angular",
		tagCss: "Tailwind",
		tagTutorial: false,
		desc: "Angular",
		extra: "This project is built for displaying and analyzing statistics, specifically focused on client search data. It is designed to provide insights into various metrics such as device type, operating system, brand, and IP location details (country and town)"
	},
	{
		id: 7 - 6 - 24,
		title: "Express EJS",
		description: " Express.js, TypeScript, Mysql ",
		tools: "Express validator, Express-sessions, Cookie-parser, Express-rate-limit, Express-helmet",
		linkRepo: "https://github.com/dornescum/cleanUpAgency",
		linkPage: "http://62.171.167.229:3003/",
		img: "@../../src/img/projects/garden.webp",
		tagJs: "Express",
		tagCss: "Typescript",
		tagTutorial: false,
		tagDB: 'Mysql',
		tagNode: true,
		desc: "Node js  Express Typescript Mysql",
		extra: "Features<br> Server Setup: Utilizes Express js for server management. Template Engine: Employs EJS for dynamic HTML generation. Security: Implements security best practices using Helmet and Express Rate Limit. Validation: Integrates Express Validator for request validation. Session Management: Manages user sessions with Express Session and Cookie Parser. Environment Variables: Uses Dotenv to manage environment variables. Database Integration: Connects to MySQL databases using MySQL2. Dependencies<br> Express: Framework for building web applications. cookie-parser: Middleware for parsing cookies. dotenv: Loads environment variables from a env file. ejs: Embedded JavaScript templates. express-rate-limit: Middleware for rate limiting. express-session: Middleware for managing sessions. express-validator: Middleware for validating requests. helmet: Security middleware. mysql2: MySQL client for Node js. ts-node: TypeScript execution environment for Node js."

	},
	{
		id: 8 - 25,
		title: "FastApi Todo",
		description: "CRUD app",
		tools: "FastApi, <span  style='color: #6b9e11;'>Python</span>, Sqlite, React",
		linkRepo: "https://github.com/dornescum/fastApi_Todo_React_Sqlite",
		linkPage: "",
		img: "@../../src/img/projects/todo_fastApi.webp",
		tagJs: "React",
		tagCss: "Bootstrap",
		tagTutorial: false,
		tagDB: 'Sqlite',
		tagPy: true,
		desc: "FastApi  Python, Sqlite, React",
		extra: "A simple task management  with FastAPI_Todo_React_Sqlite, a full-stack to-do application fusing the swift and efficient <span style='color: #000000; font-weight: bold'>FastAPI</span> with the dynamic interactivity of <span style='color: #000000; font-weight: bold'>React</span> , all underpinned by the robustness of <span style='color: #000000; font-weight: bold'>SQLite</span> . This project represents a harmonious blend of a Python-powered backend and a JavaScript-driven frontend, encapsulating the ease of <span style='color: #000000; font-weight: bold'>Python</span> programming with the seamless user interface design of React. It offers a straightforward installation process, requiring Python and Node.js environments, followed by <span style='color: #000000; font-weight: bold'>FastAPI and Uvicorn</span>  setup. With a minimalist yet powerful <span style='color: #000000; font-weight: bold'> React</span> frontend, this application has been intricately tailored to accommodate the backend integration, providing a comprehensive CRUD interface for to-do list items. The backend's <span style='color: #000000; font-weight: bold'>SQLite</span>  database ensures durable and transactional data storage, while FastAPI endows the application with high performance and swift response times. Coupled with <span style='color: #000000; font-weight: bold'>Swagger </span> documentation, the app promises an intuitive API exploration experience."
	},

	{
		id: 7 - 8,
		title: "Todo App Jest testing",
		description: "Jest testing api, Supertest",
		tools: "Jest,SuperTest, <span  style='color: #000000;'>Express</span>, Sqlite",
		linkRepo: "https://github.com/dornescum/nodeJestTodo",
		linkPage: "",
		img: "@../../src/img/projects/jestTodo.webp",
		tagJs: "Express",
		tagCss: "Css",
		tagTutorial: false,
		tagDB: 'Sqlite',
		tagNode: true,
		desc: "Node js  Express Sqlite",
		extra: ""

	},
	{
		id: 15 - 7,
		title: "Resume parser with python",
		description: "Pdf parser for certain words",
		tools: "Flask, spacy, pdfminer.six, pytest, <span  style='color: #6b9e11;'>Python</span>",
		linkRepo: "https://github.com/dornescum/resume_parser_py",
		linkPage: "",
		img: "@../../src/img/projects/resume_parser.webp",
		tagCss: "Css",
		tagTutorial: false,
		tagPy: true,
		desc: "Flask  spacy, pdfminer.six, pytest, Python",
		extra: "Search for different words inside a pdf ."

	},
	{
		id: 2 - 15,
		title: "Movie search",
		description: "Fetching movies from DB and search for the movies",
		tools: "React js, Tailwind Css",
		linkRepo: "https://github.com/dornescum/moviedDb",
		linkPage: "https://movie-db-188e7.web.app/",
		img: "@../../src/img/projects/movieDb.webp",
		tagJs: "React",
		tagCss: "Tailwind",
		tagTutorial: false,
		desc: "React js  Tailwind Css",
		extra: ""

	},
	{
		id: "09-08-23",
		title: "Admin panel ecommerce",
		description: "node js express, jsonwebtoken, md5, express-validator, express-rate-limit, helmet, mysql, angular, primeng",
		tools: " <span  style='color: #000000;'>Express</span>, <span  style='color: #ef3333;'>Angular</span>, Mysql",
		linkRepo: "https://github.com/dornescum/quizExpressMysqlAngular",
		linkPage: "",
		img: "@../../src/img/projects/primeng-admin.gif",
		tagJs: "Angular",
		tagCss: "Primeng",
		tagTs: "Typescript",
		tagTutorial: false,
		tagDB: "Mysql",
		tagNode: true,
		desc: "Node js  Express, Mysql, Angular",
		extra: ""

	},

	{
		id: 1,
		title: "Mock Up Delivery Website",
		description: " Next js and Tailwind Css to create a website for an imaginary company that produces and processes food. Using ISR & SSR, hybrid",
		tools: "Next js, Tailwind Css",
		linkRepo: "https://github.com/dornescum/tailwind-nextJs-setup",
		linkPage: "https://tailwind-next-js-menu.vercel.app/",
		img: "@../../src/img/projects/mockUpMenu.webp",
		tagJs: "Next",
		tagCss: "Tailwind",
		tagTutorial: false,
		desc: "Next js  React",
		extra: ""

	},
	{
		id: '8-04-23',
		title: "Express server for Ecommerce",
		description: "Express routes for an ecommerce, on render",
		tools: "<span  style='color: #000000;'>Express</span>, Sqlite",
		linkRepo: "https://github.com/dornescum/node_Ecommerce_NextJs",
		linkPage: "",
		img: "@../../src/img/projects/nodejs.webp",
		tagJs: "Javascript",
		tagCss: "Css",
		tagTutorial: false,
		tagDB: 'Sqlite',
		tagNode: true,
		desc: "Node js  Express, Sqlite",
		extra: ""

	},

	{
		id: 12,
		title: "Menu cart",
		description: "Context Api for state management",
		tools: "React js, Tailwind Css",
		linkRepo: "https://github.com/dornescum/menu-cart",
		linkPage: "https://menu-cart-21724.web.app/",
		img: "@../../src/img/projects/menuCart.webp",
		tagJs: "React",
		tagCss: "Tailwind",
		tagTutorial: false,
		desc: "React js  Tailwind Css",
		extra: ""

	}, {
		id: 3 - 3,
		title: "Challenge",
		description: "FrontEndMentor challenge, Sunnyside agency landing page",
		tools: "React js, Tailwind Css",
		linkRepo: "https://github.com/dornescum/sunnySide-agency-FM",
		linkPage: "https://frontendmentor-sunnyagency.web.app/",
		img: "@../../src/img/projects/sunnyAgency.webp",
		tagJs: "React",
		tagCss: "Tailwind",
		tagTutorial: false,
		desc: "React js  Tailwind Css",
		extra: ""

	}, {
		id: 3 - 8,
		title: "Challenge time-tracking",
		description: "FrontEndMentor challenge",
		tools: "Tailwind Css, Javascript",
		linkRepo: "https://github.com/dornescum/frontEndMentor-timeTracking",
		linkPage: "https://frontendm-timetracking.web.app/",
		img: "@../../src/img/projects/timeTracking.webp",
		tagJs: "Javascript",
		tagCss: "Tailwind",
		tagTutorial: false,
		desc: "Javascript  Tailwind Css",
		extra: ""

	}, {
		id: 3 - 9,
		title: "Challenge accordion",
		description: "FrontEndMentor challenge",
		tools: "Tailwind Css, React js",
		linkRepo: "https://github.com/dornescum/frontEndMentor-accordionCard",
		linkPage: "https://frontendmentor-accordion.web.app//",
		img: "@../../src/img/projects/accordion.webp",
		tagJs: "React",
		tagCss: "Tailwind",
		tagTutorial: false,
		desc: "React js  Tailwind Css",
		extra: ""

	}, {
		id: 3 - 13,
		title: "Challenge testimonial bootCamp",
		description: "FrontEndMentor challenge",
		tools: "Tailwind Css, Javascript",
		linkRepo: "https://github.com/dornescum/codingBootCamp-FEMentor",
		linkPage: "https://fem-bootcamptestimonials2.web.app/",
		img: "@../../src/img/projects/bootcamp.webp",
		tagJs: "Javascript",
		tagCss: "Tailwind",
		tagTutorial: false,
		desc: "Javascript  Tailwind Css",
		extra: ""

	}, {
		id: 3 - 25,
		title: "Challenge count down timer",
		description: "FrontEndMentor challenge",
		tools: "Tailwind Css, Javascript",
		linkRepo: "https://github.com/dornescum/frontendMentor-countDownTimer",
		linkPage: "https://spiffy-cranachan-47ef3c.netlify.app/",
		img: "@../../src/img/projects/count_down_timer.webp",
		tagJs: "Javascript",
		tagCss: "Tailwind",
		tagTutorial: false,
		desc: "Javascript  Tailwind Css",
		extra: ""

	}, {
		id: 3,
		title: "Admin Panel",
		description: "An admin panel in which I tested Cypress together with React js",
		tools: "React js, Styled-Components, Cypress, Context Api",
		linkRepo: "https://github.com/dornescum/adminPannel",
		linkPage: "",
		img: "@../../src/img/projects/cypress.webp",
		tagJs: "Cypress",
		tagCss: "Styled-Components",
		tagTutorial: false,
		desc: "React js Styled-Components, Cypress, Context Api",
		extra: ""

	}, {
		id: 4,
		title: "Cypress testing FirmeCadastru.ro",
		description: "Cypress testing FirmeCadastru.ro",
		tools: "Cypress",
		linkRepo: "https://github.com/dornescum/FC",
		linkPage: "https://firmecadastru.ro/",
		img: "@../../src/img/projects/cypress.webp",
		tagJs: "Cypress",
		tagCss: "",
		tagTutorial: false,
		desc: "Cypress",
		extra: ""

	}, {
		id: 2,
		title: "Best Car Ever",
		description: "An exercise in which I used Next js and Scss to create a website where I sell a car",
		tools: "Next js, Scss, Simple-react-lightbox, React Icons",
		linkRepo: "https://github.com/dornescum/car_next",
		linkPage: "https://car-next.vercel.app/",
		img: "@../../src/img/projects/opelDan.webp",
		tagJs: "Next",
		tagCss: "Scss",
		tagTutorial: false,
		desc: "Next js  Scss, Simple-react-lightbox, React Icons",
		extra: ""

	}, {
		id: 2 - 17,
		title: "Search for images",
		description: "React, Unsplash api",
		tools: "React js, React-Icons, Tailwind css",
		linkRepo: "https://github.com/dornescum/unsplash-photos",
		linkPage: "",
		img: "@../../src/img/projects/searchPhoto.webp",
		tagJs: "React",
		tagCss: "Tailwind",
		tagTutorial: false,
		desc: "React js  React-Icons, Tailwind css",
		extra: ""

	},
	{
		id: 6,
		title: "Card",
		description: "Basic article card, challenge from FrontEndMentor.io",
		tools: "Html, Scss",
		linkRepo: "https://github.com/dornescum/FrontEndMentor-article",
		linkPage: "https://front-end-mentor-article.vercel.app/",
		img: "@../../src/img/projects/article_card.webp",
		tagJs: "Html",
		tagCss: "Scss",
		tagTutorial: false,
		desc: "Html Scss",
		extra: ""

	}, {
		id: 7,
		title: "Card",
		description: "Equilibrium card, challenge from FrontEndMentor.io",
		tools: "Html, Scss",
		linkRepo: "https://github.com/dornescum/Frontend-mentor-NFT",
		linkPage: "https://nft-beige.vercel.app/",
		img: "@../../src/img/projects/challenge-card.webp",
		tagJs: "Html",
		tagCss: "Scss",
		tagTutorial: false,
		desc: "Html Scss",
		extra: ""

	}, {
		id: 3 - 4,
		title: "Challenge testimonials",
		description: "FrontEndMentor challenge, Testimonials, grid section ",
		tools: "Tailwind Css",
		linkRepo: "https://github.com/dornescum/testimonials-frontEndMentor",
		linkPage: "https://frontmentor-testimonials.web.app/",
		img: "@../../src/img/projects/testimonials.webp",
		tagJs: "",
		tagCss: "Tailwind",
		tagTutorial: false,
		desc: "Tailwind Css",
		extra: ""

	},
	{
		id: 10,
		title: "Vuetify",
		description: "Vue js and Vuetify, a Material Design Framework",
		tools: "Vue Js",
		linkRepo: "https://github.com/dornescum/retetarVue",
		linkPage: "",
		img: "@../../src/img/projects/vuetify.webp",
		tagJs: "Vue Js",
		tagCss: "Vuetify",
		tagTutorial: false,
		desc: "Vue  and Vuetify, a Material Design Framework",
		extra: ""

	}, {
		id: 9,
		title: "You are looking at it 😃",
		description: "I am using Vanilla Js, ES6 modules with Tailwind Css",
		tools: "Vanilla Js, Tailwind Css",
		linkRepo: "https://github.com/dornescum/Mihai-Dornescu",
		linkPage: "https://dornescum.github.io/Mihai-Dornescu/",
		img: "@../../src/img/projects/mihai-dornescu.webp",
		tagJs: "Javascript",
		tagCss: "Tailwind",
		tagTutorial: false,
		desc: "Javascript , Tailwind Css",
		extra: ""

	},
	{
		id: 1 - 2,
		title: "My version of a resume",
		description: "Minimalist Resume",
		tools: "Scss, Javascript",
		linkRepo: "https://github.com/dornescum/cv-spa",
		linkPage: "https://dornescu.ro/",
		img: "@../../src/img/projects/dornescu-ro.webp",
		tagJs: "Javascript",
		tagCss: "Scss",
		tagTutorial: false,
		desc: "Javascript",
		extra: ""

	},
	{
		id: 11 - 13 - 2022,
		title: "CRUD",
		description: "Simple node js. POST, PUT, GET, DELETE and use of <b  style='color: #6b9e11;'>sqlite</b> for database",
		tools: "Node js, Sqlite3 ",
		linkRepo: "https://github.com/dornescum/coursesHOME",
		linkPage: "",
		img: "@../../src/img/projects/nodejs.webp",
		tagJs: "Nodejs",
		tagCss: "",
		tagTs: "",
		tagTutorial: false,
		desc: "Node js , Sqlite3 ",
		extra: ""

	},
	{
		id: 12 / 10 / 23,
		title: " Simple image recognition",
		description: "For good accuracy, use a photo with a face and good light.",
		tools: "<span  style='color: #ef3333;'>Angular</span>, Typescript, FaceApi.js",
		linkRepo: "https://github.com/dornescum/faceApiAngular",
		linkPage: "",
		img: "@../../src/img/projects/angular2.webp",
		tagJs: "Angular",
		tagCss: "Css",
		tagTutorial: false,
		desc: "Angular FaceApi.js , Typescript",
		extra: ""


	}
];
