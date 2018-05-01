# jamstack-meetup-talk

> A Vue.js project

## JAM Stack - Jersey Web Dev Meetup 20180504

### Slide content

#### Intro

#### What is JAM Stack?

* Stack of jam?
* Acronym definition \* We did it, nested acronyms
* Michael's secret stuff

#### JAM Stack vs 90's web

* Space jam website
* Is it just water?
* JavaScript and API

#### Why should I give myself the trouble?

* Load speeds
  * No DB querying
  * No template parsing for markup build
* Separation of concerns
  * Front-end takes care of all presentation
  * Centralised/focused UX design
* Frequency of content update
  * How often do we really update ALL our pages?
  * Frequently changing content can use APIs
* No need to implement everywhere
  * JAM Stack your block
  * User authenticated areas may remain non-JAM
  * Progressive migration to JAM
* Tie in with service workers, SPA's and animated page transitions
  * Offline support
  * Push update to service workers on build time
  * [Page transitions make UX sleek (like on native apps)](https://page-transitions.com/)
* Caching
  * Cache some page assets "forever"
  * JS will fetch dynamic content from APIs after all

#### Caveats

* E-commerce and extremely time sensitive content
* Must implement SSR
* Ensure no JS support if relevant and SEO best practices
* Authenticated areas of your app
  * SSR the shell/chrome
  * Pull into after content loaded \* Show placeholder markup

#### How can I jump in the jam Stack hype train?

* React
  * Gatsby
  * List integrations \* Next
* Vue
  * Nuxt
  * This presentation XD
* Jekyll \* Ruby
* Hugo \* Go Lang
* Every static site generator under the sun \* Link to website
* WordPress static?
* Netlify CMS \* 💦💦💦💦💦
* Prerender.io
* Build your own
  * Total freedom
  * NIH syndrome

#### Conclusion

* It's great
* Use wherever possible
* Do in design not on build
* Links to talk and resources
* My social links

#### Questions

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
