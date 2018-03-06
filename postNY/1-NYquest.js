'use strict';

const R = require('ramda');
const prop = R.prop;
const path = R.path;
const curry = R.curry;
const Maybe = require('ramda-fantasy').Maybe;

let User = {
  name: 'joe',
  email: 'joe@example.com',
  prefs: {
    languages: {
      primary: 'sp',
      secondary: 'en'
    }
  }
}

let indexURLs = {
  'en': 'http://mysite.com/en',
  'sp': 'http://mysite.com/sp',
  'jp': 'http://mysite.com/jp'
}

const showIndexPage = (url) => {
  console.log(url);
}

const getUrlForUser = (user) => {
  return Maybe(user)
    .map(path(['prefs', 'languages', 'primary']))
    .chain(maybeGetUrl)
}

const maybeGetUrl = curry(function(allUrls, language) {
  return Maybe(allUrls[language]);
})(indexURLs);

const boot = (user, defaultUrl) => {
  showIndexPage(getUrlForUser(user).getOrElse(defaultUrl));
}

boot(User, 'http://mysite.com/en');
