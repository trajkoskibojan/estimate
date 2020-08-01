import software from '../../../assets/img/software.svg';
import mobile from '../../../assets/img/mobile.svg';
import website from '../../../assets/img/website.svg';
import camera from '../../../assets/img/camera.svg';
import upload from '../../../assets/img/upload.svg';
import person from '../../../assets/img/person.svg';
import persons from '../../../assets/img/persons.svg';
import info from '../../../assets/img/info.svg';
import bell from '../../../assets/img/bell.svg';
import people from '../../../assets/img/people.svg';
import usersIcon from '../../../assets/img/users.svg';
import iPhone from '../../../assets/img/iphone.svg';
import gps from '../../../assets/img/gps.svg';
import customized from '../../../assets/img/customized.svg';
import data from '../../../assets/img/data.svg';
import android from '../../../assets/img/android.svg';
import globe from '../../../assets/img/globe.svg';
import biometrics from '../../../assets/img/biometrics.svg';

export const defaultQuestions = [
  {
    id: 10,
    title: 'Which service are you interested in?',
    active: true,
    options: [
      {
        id: 1,
        title: 'Custom Software Development',
        subtitle: null,
        icon: software,
        iconAlt: 'three floating screens',
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: 'iOS/Android App Development',
        subtitle: null,
        icon: mobile,
        iconAlt: 'outlines of phones and tablets',
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: 'Website Development',
        subtitle: null,
        icon: website,
        iconAlt: 'computer outline',
        selected: false,
        cost: 0,
      },
    ],
  },
];

export const softwareQuestions = [
  {
    id: 1,
    title: 'Which platforms do you need supported?',
    subtitle: 'Select all that apply.',
    options: [
      {
        id: 1,
        title: 'Web Application',
        subtitle: null,
        icon: website,
        iconAlt: 'computer outline',
        selected: false,
        cost: 1000,
      },
      {
        id: 2,
        title: 'iOS Application',
        subtitle: null,
        icon: iPhone,
        iconAlt: 'outline of iphone',
        selected: false,
        cost: 1000,
      },
      {
        id: 3,
        title: 'Android Application',
        subtitle: null,
        icon: android,
        iconAlt: 'outlines of android phone',
        selected: false,
        cost: 1000,
      },
    ],
    selection: false,
  },
  {
    id: 2,
    title: 'Which features do you expect to use?',
    subtitle: 'Select all that apply.',
    options: [
      {
        id: 4,
        title: 'Photo/Video',
        subtitle: null,
        icon: camera,
        iconAlt: 'camera outline',
        selected: false,
        cost: 250,
      },
      {
        id: 5,
        title: 'GPS',
        subtitle: null,
        icon: gps,
        iconAlt: 'gps pin',
        selected: false,
        cost: 250,
      },
      {
        id: 6,
        title: 'File Transfer',
        subtitle: null,
        icon: upload,
        iconAlt: 'outline of cloud with arrow pointing up',
        selected: false,
        cost: 250,
      },
    ],
    selection: false,
  },
  {
    id: 3,
    title: 'Which features do you expect to use?',
    subtitle: 'Select all that apply.',
    options: [
      {
        id: 7,
        title: 'Users/Authentication',
        subtitle: null,
        icon: usersIcon,
        iconAlt: 'outline of a person with a plus sign',
        selected: false,
        cost: 250,
      },
      {
        id: 8,
        title: 'Biometrics',
        subtitle: null,
        icon: biometrics,
        iconAlt: 'fingerprint',
        selected: false,
        cost: 250,
      },
      {
        id: 9,
        title: 'Push Notifications',
        subtitle: null,
        icon: bell,
        iconAlt: 'outline of a bell',
        selected: false,
        cost: 250,
      },
    ],
    selection: false,
  },
  {
    id: 4,
    title: 'What type of custom features do you expect to need?',
    subtitle: 'Select one.',
    options: [
      {
        id: 10,
        title: 'Low Complexity',
        subtitle: '(Informational)',
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 250,
      },
      {
        id: 11,
        title: 'Medium Complexity',
        subtitle: '(Interactive, Customizable, Realtime)',
        icon: customized,
        iconAlt: 'two toggle switches',
        selected: false,
        cost: 500,
      },
      {
        id: 12,
        title: 'High Complexity',
        subtitle: '(Data Modeling and Computation)',
        icon: data,
        iconAlt: 'outline of line graph',
        selected: false,
        cost: 1000,
      },
    ],
    selection: false,
  },
  {
    id: 5,
    title: 'How many users do you expect?',
    subtitle: 'Select one.',
    options: [
      {
        id: 13,
        title: '0-10',
        subtitle: null,
        icon: person,
        iconAlt: 'person outline',
        selected: false,
        cost: 1,
      },
      {
        id: 14,
        title: '10-100',
        subtitle: null,
        icon: persons,
        iconAlt: 'outline of two people',
        selected: false,
        cost: 1.125,
      },
      {
        id: 15,
        title: '100+',
        subtitle: null,
        icon: people,
        iconAlt: 'outline of three people',
        selected: false,
        cost: 1.25,
      },
    ],
    selection: false,
    active: true,
  },
];

export const websiteQuestions = [
  {
    id: 1,
    title: 'Which type of website are you wanting?',
    subtitle: 'Select one.',
    options: [
      {
        id: 1,
        title: 'Basic',
        subtitle: '(Informational)',
        icon: info,
        iconAlt: 'person outline',
        selected: false,
        cost: 1000,
      },
      {
        id: 2,
        title: 'Interactive',
        subtitle: "(Users, API's, Messaging)",
        icon: customized,
        iconAlt: 'outline of two people',
        selected: false,
        cost: 2000,
      },
      {
        id: 3,
        title: 'E-Commerce',
        subtitle: '(Sales)',
        icon: globe,
        iconAlt: 'outline of three people',
        selected: false,
        cost: 2500,
      },
    ],
    selection: false,
    active: true,
  },
];
