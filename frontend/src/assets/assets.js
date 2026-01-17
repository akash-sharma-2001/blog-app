import navbarLogo from './navbarLogo.png'
import arrowRight from './arrow-right.svg'
import dashbordIcon from './dashbord.svg'
import addIcon from './addItem.svg'
import listIcon from './list.svg'
import commentIcon from './comment.svg'
import deleteIcon from './delete.svg'
import uploadIcon from './upload.svg'

export const assests = {
    navbarLogo,
    arrowRight,
    dashbordIcon,
    addIcon,
    listIcon,
    commentIcon,
    deleteIcon,
    uploadIcon,
}

export const blog_Categories = [
  "Technology",
  "Health",
  "Lifestyle",
  "Travel",
];

// Dummy Data 
export const blog_Data = [
  {
    _id: 1,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "The Future of Artificial Intelligence",
    category: "Technology",
    author: "Admin",
    createdAt: "2026-01-01",
    isPublished: true,
    description: `
      <p>
      Artificial Intelligence (AI) is rapidly transforming the way humans interact with technology.
      From voice assistants to recommendation systems, AI has become deeply embedded in everyday life.
      Its ability to analyze data and learn from patterns makes it a powerful tool across industries.
      </p>

      <h2>Impact on Industries</h2>
      <p>
      AI is widely used in healthcare, finance, education, and manufacturing.
      In healthcare, it assists doctors in diagnosing diseases more accurately.
      In business, AI-driven analytics helps organizations make data-driven decisions and automate routine tasks.
      </p>

      <h2>Future Scope</h2>
      <p>
      As AI continues to evolve, ethical considerations and responsible development are crucial.
      The future of AI promises smarter systems, improved efficiency, and innovative solutions to complex problems.
      </p>
    `
  },
  {
    _id: 2,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Why JavaScript Is Essential for Web Development",
    category: "Technology",
    author: "John Doe",
    createdAt: "2026-01-02",
    isPublished: true,
    description: `
      <p>
      JavaScript is one of the most important programming languages in modern web development.
      It enables interactive features such as animations, form validation, and dynamic content updates.
      Without JavaScript, websites would be static and less engaging.
      </p>

      <h2>Frontend and Backend Usage</h2>
      <p>
      JavaScript is used on both frontend and backend through frameworks like React and Node.js.
      Developers can build full-stack applications using a single language, increasing productivity.
      </p>

      <h2>Career Benefits</h2>
      <p>
      Learning JavaScript opens doors to numerous career opportunities.
      Its strong community and continuous evolution make it a valuable skill for developers.
      </p>
    `
  },
  {
    _id: 3,
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6",
    title: "Building Healthy Morning Habits",
    category: "Health",
    author: "Priya Sharma",
    createdAt: "2026-01-03",
    isPublished: true,
    description: `
      <p>
      A healthy morning routine sets the tone for the entire day.
      Activities like stretching, hydration, and mindful breathing improve physical and mental health.
      </p>

      <h2>Physical and Mental Benefits</h2>
      <p>
      Morning exercise boosts metabolism and energy levels.
      Mental clarity improves when the day begins with calm and focus rather than stress.
      </p>

      <h2>Consistency Matters</h2>
      <p>
      Consistency is key to forming habits.
      Small daily improvements lead to long-term health benefits and overall well-being.
      </p>
    `
  },
  {
    _id: 4,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    title: "Yoga for Mental and Physical Balance",
    category: "Health",
    author: "Ananya Patel",
    createdAt: "2026-01-04",
    isPublished: true,
    description: `
      <p>
      Yoga is an ancient practice that combines physical postures, breathing techniques, and meditation.
      It helps balance the body and mind while improving flexibility and strength.
      </p>

      <h2>Mental Health Benefits</h2>
      <p>
      Yoga reduces stress, anxiety, and improves concentration.
      Regular practice enhances emotional stability and inner peace.
      </p>

      <h2>Daily Practice</h2>
      <p>
      Even a short daily yoga session can lead to long-term benefits.
      It promotes mindfulness and overall wellness.
      </p>
    `
  },
  {
    _id: 5,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Minimalism as a Lifestyle Choice",
    category: "Lifestyle",
    author: "Rahul Verma",
    createdAt: "2026-01-05",
    isPublished: true,
    description: `
      <p>
      Minimalism is about focusing on what truly matters.
      It encourages reducing clutter and unnecessary distractions from daily life.
      </p>

      <h2>Benefits of Simple Living</h2>
      <p>
      A minimalist lifestyle reduces stress and increases clarity.
      It allows individuals to spend time and energy on meaningful experiences.
      </p>

      <h2>Long-Term Impact</h2>
      <p>
      Over time, minimalism leads to better financial management and emotional well-being.
      It promotes intentional and mindful living.
      </p>
    `
  },
  {
    _id: 6,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "The Joy of Solo Travel",
    category: "Travel",
    author: "Neha Kapoor",
    createdAt: "2026-01-06",
    isPublished: true,
    description: `
      <p>
      Solo travel provides freedom and self-discovery.
      It allows travelers to explore destinations at their own pace.
      </p>

      <h2>Personal Growth</h2>
      <p>
      Traveling alone builds confidence and decision-making skills.
      It encourages cultural immersion and new perspectives.
      </p>

      <h2>Memorable Experiences</h2>
      <p>
      Solo journeys often lead to unforgettable experiences and meaningful connections.
      </p>
    `
  },
  {
    _id: 7,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    title: "Evolution of Modern Gaming",
    category: "Gaming",
    author: "Karan Mehta",
    createdAt: "2026-01-07",
    isPublished: true,
    description: `
      <p>
      Gaming has evolved from simple arcade machines to immersive virtual worlds.
      Technological advancements have transformed gameplay and graphics.
      </p>

      <h2>Online and Competitive Gaming</h2>
      <p>
      Multiplayer and esports have created global gaming communities.
      Players now compete professionally and socially.
      </p>

      <h2>Future of Gaming</h2>
      <p>
      Virtual reality and cloud gaming will redefine the gaming experience.
      </p>
    `
  },
  {
    _id: 8,
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    title: "Writing Clean and Maintainable Code",
    category: "Technology",
    author: "Admin",
    createdAt: "2026-01-08",
    isPublished: true,
    description: `
      <p>
      Clean code improves readability and reduces bugs.
      It allows teams to collaborate more effectively.
      </p>

      <h2>Best Practices</h2>
      <p>
      Using meaningful variable names and modular functions improves maintainability.
      Documentation also plays a key role.
      </p>

      <h2>Long-Term Benefits</h2>
      <p>
      Clean code saves time and cost in large projects.
      </p>
    `
  },
  {
    _id: 9,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
    title: "Importance of Quality Sleep",
    category: "Health",
    author: "Sneha Iyer",
    createdAt: "2026-01-09",
    isPublished: true,
    description: `
      <p>
      Sleep is vital for physical recovery and mental clarity.
      Lack of sleep affects mood, focus, and immunity.
      </p>

      <h2>Healthy Sleep Habits</h2>
      <p>
      Maintaining a consistent sleep schedule improves overall health.
      Reducing screen time before bed is beneficial.
      </p>

      <h2>Long-Term Health</h2>
      <p>
      Quality sleep reduces the risk of chronic diseases.
      </p>
    `
  },
  {
    _id: 10,
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
    title: "Boosting Daily Productivity",
    category: "Lifestyle",
    author: "Aditi Singh",
    createdAt: "2026-01-10",
    isPublished: false,
    description: `
      <p>
      Productivity is about working smarter, not harder.
      Planning and prioritization improve efficiency.
      </p>

      <h2>Time Management</h2>
      <p>
      Using tools like to-do lists and calendars reduces stress.
      Focused work sessions increase output.
      </p>

      <h2>Healthy Balance</h2>
      <p>
      Regular breaks help maintain long-term productivity.
      </p>
    `
  }
];

export const comment_Data = [
  {
    _id: 1,
    blog: blog_Data[1],
    name: "Amit Sharma",
    profileUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    content: "This blog explains the topic very clearly. I especially liked the practical examples mentioned.",
    isApproved: true,
    createdAt: "2026-01-01T10:15:00Z"
  },
  {
    _id: 2,
    blog: blog_Data[1],
    name: "Priya Verma",
    profileUrl: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    content: "Well-written article. It helped me understand the concept in a much simpler way.",
    isApproved: true,
    createdAt: "2026-01-01T12:40:00Z"
  },
  {
    _id: 3,
    blog: blog_Data[1],
    name: "Rahul Singh",
    profileUrl: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
    content: "Good content, but I would love to see more real-world examples in future posts.",
    isApproved: false,
    createdAt: "2026-01-01T03:25:00Z"
  },
  {
    _id: 4,
    blog: blog_Data[1],
    name: "Sneha Patel",
    profileUrl: "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
    content: "Very informative and easy to read. Looking forward to more blogs like this.",
    isApproved: true,
    createdAt: "2026-01-02T14:10:00Z"
  },
  {
    _id: 5,
    blog: blog_Data[1],
    name: "Karan Mehta",
    profileUrl: "https://cdn-icons-png.flaticon.com/512/4140/4140061.png",
    content: "Nice explanation overall. The structure of the blog made it easy to follow.",
    isApproved: true,
    createdAt: "2026-01-03T09:00:00Z"
  }
];


export const footerData = [
  {
    title: "Quick Links",
    links: [
      "Home",
      "Blogs",
      "Categories",
      "About Us",
      "Contact"
    ]
  },
  {
    title: "Follow Us",
    links: [
      "Facebook",
      "Twitter",
      "Instagram",
      "LinkedIn",
      "GitHub"
    ]
  }
];

// Admin Data
export const dashboard_Data = {
  totalBlogs: 20,        // total number of blogs
  totalComments: 5,      // total number of comments

  recentBlogs: [
    {
      _id: 20,
      title: "Top Gaming Trends to Watch in 2026",
      isPublished: true,
      createdAt: "2026-01-03T10:30:00Z"
    },
    {
      _id: 19,
      title: "Healthy Lifestyle Habits for a Better Life",
      isPublished: true,
      createdAt: "2026-01-02T14:15:00Z"
    },
    {
      _id: 18,
      title: "How AI Is Transforming Modern Technology",
      isPublished: false,
      createdAt: "2026-01-02T09:45:00Z"
    },
    {
      _id: 17,
      title: "Travel Guide: Hidden Gems in India",
      isPublished: true,
      createdAt: "2026-01-01T16:00:00Z"
    },
    {
      _id: 16,
      title: "Balancing Work and Life in a Digital World",
      isPublished: true,
      createdAt: "2026-01-01T11:20:00Z"
    }
  ]
};

export const blog_Data2 = [
  {
    _id: 1,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "The Future of Artificial Intelligence",
    category: "Technology",
    author: "Admin",
    createdAt: "2026-01-01",
    isPublished: true,
    description: `
      <p>Artificial Intelligence (AI) is rapidly transforming modern technology.</p>
      <h2>Industry Impact</h2>
      <p>AI improves healthcare, finance, and automation with smarter decision-making.</p>
      <h2>Future Scope</h2>
      <p>Responsible AI development will shape innovation and efficiency.</p>
    `
  },
  {
    _id: 2,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Why JavaScript Is Essential for Web Development",
    category: "Technology",
    author: "John Doe",
    createdAt: "2026-01-02",
    isPublished: true,
    description: `
      <p>JavaScript enables dynamic and interactive web applications.</p>
      <h2>Frontend & Backend</h2>
      <p>Frameworks like React and Node.js power full-stack apps.</p>
      <h2>Career Growth</h2>
      <p>JavaScript skills unlock vast job opportunities.</p>
    `
  },
  {
    _id: 3,
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6",
    title: "Building Healthy Morning Habits",
    category: "Health",
    author: "Priya Sharma",
    createdAt: "2026-01-03",
    isPublished: true,
    description: `
      <p>Morning routines boost energy and mental clarity.</p>
      <h2>Health Benefits</h2>
      <p>Exercise and hydration improve overall wellness.</p>
      <h2>Consistency</h2>
      <p>Small daily habits lead to long-term health.</p>
    `
  },
  {
    _id: 4,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    title: "Yoga for Mental and Physical Balance",
    category: "Health",
    author: "Ananya Patel",
    createdAt: "2026-01-04",
    isPublished: true,
    description: `
      <p>Yoga strengthens the body and calms the mind.</p>
      <h2>Mental Health</h2>
      <p>Regular practice reduces stress and anxiety.</p>
      <h2>Daily Routine</h2>
      <p>Short sessions bring long-term benefits.</p>
    `
  },
  {
    _id: 5,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Minimalism as a Lifestyle Choice",
    category: "Lifestyle",
    author: "Rahul Verma",
    createdAt: "2026-01-05",
    isPublished: true,
    description: `
      <p>Minimalism focuses on meaningful living.</p>
      <h2>Simple Living</h2>
      <p>Reducing clutter lowers stress.</p>
      <h2>Long-Term Impact</h2>
      <p>Intentional choices improve well-being.</p>
    `
  },
  {
    _id: 6,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "The Joy of Solo Travel",
    category: "Travel",
    author: "Neha Kapoor",
    createdAt: "2026-01-06",
    isPublished: true,
    description: `
      <p>Solo travel builds independence.</p>
      <h2>Self Discovery</h2>
      <p>Traveling alone increases confidence.</p>
      <h2>Experiences</h2>
      <p>Solo journeys create unforgettable memories.</p>
    `
  },
  {
    _id: 7,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    title: "Evolution of Modern Gaming",
    category: "Gaming",
    author: "Karan Mehta",
    createdAt: "2026-01-07",
    isPublished: true,
    description: `
      <p>Gaming has evolved into immersive experiences.</p>
      <h2>Online Gaming</h2>
      <p>Esports connects global communities.</p>
      <h2>Future</h2>
      <p>VR and cloud gaming redefine play.</p>
    `
  },
  {
    _id: 8,
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    title: "Writing Clean and Maintainable Code",
    category: "Technology",
    author: "Admin",
    createdAt: "2026-01-08",
    isPublished: false,
    description: `
      <p>Clean code improves collaboration.</p>
      <h2>Best Practices</h2>
      <p>Readable structure reduces bugs.</p>
      <h2>Benefits</h2>
      <p>Maintainable code saves time.</p>
    `
  },
  {
    _id: 9,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
    title: "Importance of Quality Sleep",
    category: "Health",
    author: "Sneha Iyer",
    createdAt: "2026-01-09",
    isPublished: true,
    description: `
      <p>Sleep restores body and mind.</p>
      <h2>Healthy Habits</h2>
      <p>Consistent sleep improves focus.</p>
      <h2>Long-Term Health</h2>
      <p>Quality sleep prevents illness.</p>
    `
  },
  {
    _id: 10,
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
    title: "Boosting Daily Productivity",
    category: "Lifestyle",
    author: "Aditi Singh",
    createdAt: "2026-01-10",
    isPublished: true,
    description: `
      <p>Productivity is smart work.</p>
      <h2>Time Management</h2>
      <p>Planning improves efficiency.</p>
      <h2>Balance</h2>
      <p>Breaks prevent burnout.</p>
    `
  },

  /* ---- Additional 10 Blogs ---- */

  {
    _id: 11,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Top Travel Destinations in 2026",
    category: "Travel",
    author: "Rohit Malhotra",
    createdAt: "2026-01-11",
    isPublished: true,
    description: `
      <p>Travel trends are evolving.</p>
      <h2>Popular Destinations</h2>
      <p>Hidden gems attract travelers.</p>
      <h2>Planning Tips</h2>
      <p>Smart planning saves money.</p>
    `
  },
  {
    _id: 12,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    title: "Managing Stress in Daily Life",
    category: "Health",
    author: "Meera Joshi",
    createdAt: "2026-01-12",
    isPublished: true,
    description: `
      <p>Stress affects mental health.</p>
      <h2>Relaxation</h2>
      <p>Meditation calms the mind.</p>
      <h2>Healthy Living</h2>
      <p>Balanced life reduces stress.</p>
    `
  },
  {
    _id: 13,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    title: "Work From Home Productivity Tips",
    category: "Lifestyle",
    author: "Arjun Rao",
    createdAt: "2026-01-13",
    isPublished: true,
    description: `
      <p>Remote work needs discipline.</p>
      <h2>Routine</h2>
      <p>Schedules improve focus.</p>
      <h2>Environment</h2>
      <p>Proper workspace boosts output.</p>
    `
  },
  {
    _id: 14,
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980",
    title: "Top Mobile Games of the Year",
    category: "Gaming",
    author: "Vikas Sharma",
    createdAt: "2026-01-14",
    isPublished: true,
    description: `
      <p>Mobile gaming is booming.</p>
      <h2>Popular Games</h2>
      <p>Competitive games dominate charts.</p>
      <h2>Future</h2>
      <p>Mobile esports is growing fast.</p>
    `
  },
  {
    _id: 15,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Understanding Web Performance",
    category: "Technology",
    author: "Admin",
    createdAt: "2026-01-15",
    isPublished: false,
    description: `
      <p>Performance affects user experience.</p>
      <h2>Optimization</h2>
      <p>Fast sites rank better.</p>
      <h2>Tools</h2>
      <p>Analytics improve performance.</p>
    `
  },
  {
    _id: 16,
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    title: "Backpacking on a Budget",
    category: "Travel",
    author: "Simran Kaur",
    createdAt: "2026-01-16",
    isPublished: true,
    description: `
      <p>Budget travel is achievable.</p>
      <h2>Saving Tips</h2>
      <p>Plan ahead to save money.</p>
      <h2>Experience</h2>
      <p>Low budget, rich memories.</p>
    `
  },
  {
    _id: 17,
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    title: "Healthy Eating Habits",
    category: "Health",
    author: "Nisha Gupta",
    createdAt: "2026-01-17",
    isPublished: true,
    description: `
      <p>Healthy food fuels the body.</p>
      <h2>Balanced Diet</h2>
      <p>Nutrition improves immunity.</p>
      <h2>Long Term</h2>
      <p>Good habits prevent disease.</p>
    `
  },
  {
    _id: 18,
    image: "https://images.unsplash.com/photo-1542831371-d531d36971e6",
    title: "Introduction to Cloud Computing",
    category: "Technology",
    author: "Admin",
    createdAt: "2026-01-18",
    isPublished: true,
    description: `
      <p>Cloud computing powers modern apps.</p>
      <h2>Advantages</h2>
      <p>Scalability and cost efficiency.</p>
      <h2>Future</h2>
      <p>Cloud adoption is rising.</p>
    `
  },
  {
    _id: 19,
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
    title: "Mental Wellness Through Hobbies",
    category: "Lifestyle",
    author: "Ritu Malhotra",
    createdAt: "2026-01-19",
    isPublished: true,
    description: `
      <p>Hobbies reduce stress.</p>
      <h2>Creative Activities</h2>
      <p>Art and music improve mood.</p>
      <h2>Balance</h2>
      <p>Personal time is essential.</p>
    `
  },
  {
    _id: 20,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    title: "Future of Virtual Reality Gaming",
    category: "Gaming",
    author: "Kunal Shah",
    createdAt: "2026-01-20",
    isPublished: true,
    description: `
      <p>VR gaming is immersive.</p>
      <h2>Technology</h2>
      <p>Hardware is rapidly improving.</p>
      <h2>Experience</h2>
      <p>Next-level realism awaits.</p>
    `
  }
];
