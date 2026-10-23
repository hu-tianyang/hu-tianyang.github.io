// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-saga-lab",
          title: "SAGA Lab",
          description: "SAGA Lab at CUHK-Shenzhen connects statistical foundations with model design in vision and language, with a current focus on continuous diffusion language models.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-papers",
          title: "Papers",
          description: "Research papers, including preprints, listed by year.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Academic appointments and education.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-just-started-building-my-website",
          title: 'I just started building my website!',
          description: "",
          section: "News",},{id: "news-invited-talk-center-for-statistical-science-tsinghua-university",
          title: 'Invited talk @ Center for Statistical Science, Tsinghua University',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-invited-talk-conference-on-ml-amp-stat-east-china-normal-university",
          title: 'Invited talk @ Conference on ML &amp;amp; Stat, East China Normal University',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-two-papers-on-generative-modeling-are-accepted-to-neurips-2023-including-one-spotlight",
          title: 'Two papers on generative modeling are accepted to NeurIPS 2023, including one Spotlight...',
          description: "",
          section: "News",},{id: "news-i-will-be-hosting-a-session-on-ai4math-and-understanding-llms-in-the-2023-x-agi-conference",
          title: 'I will be hosting a session on AI4Math and Understanding LLMs in the...',
          description: "",
          section: "News",},{id: "news-invited-talk-on-the-duality-between-prompting-and-weight-update-in-transformers-2nd-workshop-on-ml-theory-amp-amp-practice-renmin-university-of-china",
          title: 'Invited talk on the Duality Between Prompting and Weight Update in Transformers @...',
          description: "",
          section: "News",},{id: "news-4-recent-papers-related-to-diffusion-models-are-accepted-2-on-efficient-sampling-and-2-on-training-free-conditional-guidance-i-am-now-shifting-towards-understanding-llms-and-my-first-work-on-the-duality-between-prompting-and-finetuning-is-accepted-by-icml-24",
          title: '4 recent papers related to diffusion models are accepted, 2 on efficient sampling...',
          description: "",
          section: "News",},{id: "news-i-started-a-postdoctoral-position-at-the-national-university-of-singapore-working-with-prof-kenji-kawaguchi",
          title: 'I started a postdoctoral position at the National University of Singapore, working with...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%75%74%69%61%6E%79%61%6E%67.%75%70@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/tianyang-hu-13791511a", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=mlA_3r0AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
