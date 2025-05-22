const pages = {
  experience: {
    hero: {
      name: "Hi, I'm Michael.",
      title: 'I build Android apps.',
    },
    list: [
      {
        id: 1,
        title: 'Verizon Home App',
        subtitle: 'Role: Android Developer',
        description:
          'Manage your Verizon home network settings and integrate with motion sensing devices. Available on the Google Play Store with over 50,000 downloads!',
        technologies: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Retrofit', 'Play Store', 'IoT'],
        logo: '../assets/verizon-home-logo.png',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.verizon.homeapp&hl=en'
      },
      {
        id: 2,
        title: 'Smart Display',
        subtitle: 'Role: Junior Android Developer',
        description:
          'A hardware device with several built-in Android apps designed around integrating with your Verizon home network. Also integrates Alexa and a custom Verizon voice assistant.',
        technologies:
          ['Kotlin', 'XML Views', 'MVVM', 'Java', 'Retrofit', 'Broadcast Receivers', 'Alexa Skills Kit', 'BLE'],
        logo: '../assets/smart-display-logo.png',
        playStoreUrl: 'https://www.verizon.com/content/dam/verizon/support/consumer/documents/verizon-smart-display-datasheet.pdf'

      },
    ],
  },
  projects: {
    hero: {
      name: 'Projects',
      title: 'Here is my personal portfolio!',
    },
    list: [
      {
        id: 1,
        title: 'EchoJournal',
        subtitle: 'A voice memo app that allows users to track their moods.',
        technologies: 'Kotlin, Jetpack Compose, MVI, Clean Code',
      },
      {
        id: 2,
        title: 'Snoozeloo',
        subtitle: 'A simple alarm manager.',
        technologies: 'Kotlin, Jetpack Compose, MVI, Clean Code',
      },
      {
        id: 3,
        title: 'Inscribe',
        subtitle:
          'A notes / todo application that takes inspiration from the Orgzly app.',
        technologies: 'Kotlin, Jetpack Compose, MVI, Clean Code',
      },
      {
        id: 4,
        title: 'Catacomb',
        subtitle:
          'A crypto tracker application complete with a recent history line graph.',
        technologies: 'Kotlin, Jetpack Compose, MVI, Clean Code',
      },
    ],
  },
  education: {
    hero: {
      name: 'Education',
      title: 'Go Dawgs!',
    },
    list: [
      {
        id: 1,
        title: 'University of Georgia',
        subtitle: 'Bachelor of Science in Computer Systems Engineering',
        description:
          'I also minored in Computer Science and did well enough in my course work to graduate early!',
      },
    ],
  },
  contact: {
    hero: {
      name: 'Contact Me',
      title: 'Send me a message',
    },
    list: [],
  },
};

export default pages;
