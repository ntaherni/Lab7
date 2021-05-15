// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;

// Make sure you register your service worker here too

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      for(var i = 0; i < entries.length; i++) {
        let current = i + 1;
        let newPost = document.createElement('journal-entry');
        newPost.entry = entries[i];
        document.querySelector('main').appendChild(newPost);
        newPost.addEventListener('click', (e) => {
          document.body.className = 'single-entry';
          document.querySelector('entry-page').entry = newPost.entry;
          document.querySelector('h1').innerHTML = 'Entry ' + current;
          history.pushState({ 'page': 'entry' }, 'Entry ' + current, '#entry' + current);
        });
      }
    });
});