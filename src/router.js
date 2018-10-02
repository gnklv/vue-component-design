import Vue from 'vue';
import Router from 'vue-router';
import Form from '@/views/Form';
import News from '@/views/News';
import Articles from '@/views/Articles';
import Contacts from '@/views/Contacts';
import Tags from '@/views/Tags';
import Profile from '@/views/Profile';
import Accordion from '@/views/Accordion';
import SortContacts from '@/views/SortContacts';
import Select from '@/views/Select';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/form',
      component: Form,
      name: 'Form'
    },
    {
      path: '/news',
      component: News,
      name: 'News'
    },
    {
      path: '/articles',
      component: Articles,
      name: 'Articles'
    },
    {
      path: '/contacts',
      component: Contacts,
      name: 'Contacts'
    },
    {
      path: '/tags',
      component: Tags,
      name: 'Tags'
    },
    {
      path: '/profile',
      component: Profile,
      name: 'Profile'
    },
    {
      path: '/accordion',
      component: Accordion,
      name: 'Accordion'
    },
    {
      path: '/sortcontacts',
      component: SortContacts,
      name: 'SortContacts'
    },
    {
      path: '/select',
      component: Select,
      name: 'Select'
    }
  ]
});
