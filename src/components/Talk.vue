<template lang="pug">
    .eg-slideshow
        button.button__fs(@click='handleClick') toggle fullscreen
        slide(enter='fadeIn' leave='fadeOut')
          h1.title What is JAM Stack?
          .content
            h2 by Leo Melo (@leomeloxp)
        slide(enter='fadeIn' leave='fadeOut')
          h1.title Who am I?
          .content
            ul
              li Born in 🇧🇷
              li Living in 🇯🇪 for ~7 years
              li Love Javascript
              li Web dev @quadra (just up the road 😆)
        slide(enter='fadeIn' leave='fadeOut' :steps=5)
          h1.title JAM Stack
          .content
            img(v-if='step == 1' src='../assets/stack-of-jam.jpg')
            img(v-if='step == 2' src='../assets/michael.jpg')
            ul(v-if='step >= 3')
              li(v-if='step >= 3') Javascript, API and Markup stack
              li(v-if='step >= 4') An acronym with a nested acronym
              li(v-if='step >= 5')
                | Modern web development architecture
                | based on client-side JavaScript,
                | reusable APIs, and prebuilt Markup.
        slide(enter='fadeIn' leave='fadeOut')
          h1.title JAM Stack
          .content
            img(src='../assets/secret-stuff.jpg')
        slide(enter='fadeIn' leave='fadeOut')
          h1.title JAM Stack
          .content
            img(src='../assets/jam-code.png')
        slide(enter='fadeIn' leave='fadeOut')
          h1.title JAM Stack
          .content
            img(src='../assets/secret-stuff-gone.gif')
        slide(enter='fadeIn' leave='fadeOut')
          h1.title JAM Stack
          .content
            img(src='../assets/space-jam-site.png')
        slide(enter='fadeIn' leave='fadeOut')
          h1.title JAM Stack
          .content
            div
              h2
                span JavaScript + API = &nbsp;
                img(src='../assets/bugs-bunny.gif')
        slide(enter='fadeIn' leave='fadeOut' :steps=4)
          h1.title JAM Stack
          .content(style='--justify: flex-start;')
              p(style='width: 100%') Great example:
              img(v-if='step === 2' src='../assets/rachio-1.png')
              img(v-if='step === 3' src='../assets/rachio-2.png')
              img(v-if='step === 4' src='../assets/rachio-3.png')
        slide(enter='fadeIn' leave='fadeOut')
          h1.title Why should I give myself the trouble?
          .content(style='--justify: flex-start;')
            ul
              li Load speeds
              li Separation of concerns
              li Frequency of content update
              li No need to implement everywhere
              li Tie in with service workers, SPA's and animated page transitions
              li Caching
        slide(enter='fadeIn' leave='fadeOut' :steps=4)
          h1.title Why should I give myself the trouble?
          .content(style='--justify: flex-start;')
            ul
              li Load speeds
                ul
                  li(v-if='step > 1') No DB querying
                  li(v-if='step > 1') No template parsing for markup build
              li(v-if='step > 2') Separation of concerns
                ul
                  li(v-if='step > 3') Front-end takes care of all presentation
                  li(v-if='step > 3') Centralised/focused UX design
        slide(enter='fadeIn' leave='fadeOut' :steps=4)
          h1.title Why should I give myself the trouble?
          .content(style='--justify: flex-start;')
            ul
              li Frequency of content update
                ul
                  li(v-if='step > 1') How often do we really update ALL our pages?
                  li(v-if='step > 1') Frequently changing content can use APIs
              li(v-if='step > 2') No need to implement everywhere
                ul
                  li(v-if='step > 3') JAM Stack your blog
                  li(v-if='step > 3') User authenticated areas could remain non-JAM'd
                  li(v-if='step > 3') Progressive migration to JAM
        slide(enter='fadeIn' leave='fadeOut' :steps=4)
          h1.title Why should I give myself the trouble?
          .content(style='--justify: flex-start;')
            ul
              li Tie in with service workers, SPA's and animated page transitions
                ul
                  li(v-if='step > 1') Offline support
                  li(v-if='step > 2') Push update to service workers on build time
                  li(v-if='step > 3') Page transitions make UX sleek (like on native apps)
                    //- a(href='https://page-transitions.com/')
        slide(enter='fadeIn' leave='fadeOut')
          h1.title Why should I give myself the trouble?
          .content(style='--justify: flex-start;')
            video(src='../assets/page-transitions.mp4' loop autoplay)
        slide(enter='fadeIn' leave='fadeOut' :steps=3)
          h1.title Why should I give myself the trouble?
          .content(style='--justify: flex-start;')
            ul
              li(v-if='step > 0') Caching
                ul
                  li(v-if='step > 1') Cache some page assets "forever"
                  li(v-if='step > 2') JS will fetch dynamic content from APIs after all
        slide(enter='fadeIn' leave='fadeOut' :steps=4)
            h1.title Caveats
            .content(style='--justify: flex-start;')
              ul
                li(v-if='step > 0') E-commerce and extremely time sensitive content
                li(v-if='step > 1') Must implement SSR
                li(v-if='step > 2') Ensure no JS support if relevant and SEO best practices
                li(v-if='step > 3') Authenticated areas of your app
                  ul
                    li(v-if='step > 3') SSR the shell/chrome
                    li(v-if='step > 3') Pull info after content loaded (SSR with placeholder markup)
        slide(enter='fadeIn' leave='fadeOut')
            h1.title How can I join the JAM Stack hype train?
            .content
              video(src='../assets/hype-train.mp4' autoplay loop)
        slide(enter='fadeIn' leave='fadeOut' :steps=4)
            h1.title How can I join the JAM Stack hype train?
            ul.no-bullet.content(style='--justify: flex-start;')
              li(style='display: inline-block; flex: 1; max-width: 25vw')
                img.logo(src='../assets/react-logo.svg')
                h2 React JS
                ul(v-if='step >= 2'): li: h3 Create React app
              li(v-if='step >= 3' style='display: inline-block; flex: 1; max-width: 25vw')
                img.logo(src='../assets/gatsby-logo.svg')
                h3 Gatsby JS
              li(v-if='step >= 4' style='display: inline-block; flex: 1; max-width: 25vw')
                img.logo(src='../assets/nextjs.png')
                h3 Next
        slide(enter='fadeIn' leave='fadeOut' :steps=4)
          h1.title How can I join the JAM Stack hype train?
          ul.no-bullet.content(style='--justify: flex-start;')
            li(style='display: inline-block; flex: 1; max-width: 20vw')
              img.logo(src='../assets/vue.png')
              h2 Vue
            li(v-if='step >= 2' style='display: inline-block; flex: 1; max-width: 20vw')
              img.logo(src='../assets/nuxt.png')
              h3 Nuxt
            li(v-if='step >= 3' style='display: inline-block; flex: 1; max-width: 20vw')
              img.logo(src='../assets/vue-press.png')
              h3 VuePress
            li(v-if='step >= 4' style='display: inline-block; flex: 1; max-width: 20vw')
              img.logo(src='../assets/eagle-js.svg')
              h4 This presentation
                br
                | 🤓 😂
                | (ie eagle.js)
        slide(enter='fadeIn' leave='fadeOut' :steps=5)
          h1.title How can I join the JAM Stack hype train?
          ul.no-bullet.content(style='--justify: flex-start;')
            li(v-if='step >= 2' style='display: inline-block; flex: 1; max-width: 20vw')
              img.logo(src='../assets/jekyll.png')
              h3 Jekyll
                br
                | (Ruby)
            li(v-if='step >= 3' style='display: inline-block; flex: 1; max-width: 20vw')
              img.logo(src='../assets/hugo.svg')
              h3 Hugo
                br
                | (Go lang)
            li(v-if='step >= 4')
              div(v-if='step >= 4')
                h2 Or
                h3 Choose from the list at staticgen.com
              div(v-if='step >= 5')
                h2 Lastly
                h3 Build your own
                  br
                  | (not invented here syndrome? 😐)
        slide(enter='fadeIn' leave='fadeOut' :steps=5)
            h1.title JAM friendly backend solutions?
            ul.no-bullet.content(style='--justify: flex-start;')
              li(v-if='step >= 2' style='display: inline-block; flex: 1; max-width: 20vw')
                img.logo(src='../assets/wp-logo.svg')
                h3 Headless WordPress with Postlight's starter?
              li(v-if='step >= 3' style='display: inline-block; flex: 1; max-width: 20vw')
                img.logo(src='../assets/netlify-cms-logo.svg')
                h3
                  | Netlify CMS
                  br
                  | 💜💜💜💜💜💜
              li(v-if='step >= 4' style='display: inline-block; flex: 1; max-width: 20vw')
                img.logo(src='../assets/prerender.png')
                h3 Prerender.io
              li(v-if='step >= 5' style='display: inline-block; flex: 1; max-width: 20vw')
                h2 Or
                h3 Your Framework or CMS of choice 👌😉👍
        slide(enter='fadeIn' leave='fadeOut' :steps=3)
            h1.title Conclusion
            .content(style='--justify: flex-start')
              ul
                li(v-if='step >= 1') JAM Stack is awesome
                li(v-if='step >= 2') Possibly the best way forward
                li(v-if='step >= 3') Use it wherever possible
        slide(enter='fadeIn' leave='fadeOut')
            h1.title Talk available at
              br
              a(href='https://leomeloxp-jam-talk.netlify.com/') leomeloxp-jam-talk.netlify.com
            .content
              div
                p Links to resources and libraries on the next slide ^
                p Find me online at:
                ul
                  li: a(href='https://twitter.com/leomeloxp') twitter.com/leomeloxp
                  li: a(href='https://github.com/leomeloxp') github.com/leomeloxp
                  li: a(href='https://leomeloxp.net') leomeloxp.net
                h1.text-center Questions?
        slide(enter='fadeIn' leave='fadeOut')
            h1.title Resources (1/6)
            .content
              div
                p: a(href='https://leomeloxp-jam-talk.netlify.com/') Slides
                p: a(href='https://github.com/leomeloxp/jam-stack-talk') Slides' repo
                p: a(href='https://github.com/Zulko/eagle.js') Slides' framework (Eagle.js, Vue based)
        slide(enter='fadeIn' leave='fadeOut')
            h1.title Resources (2/6)
            .content
              div
                p: a(href='https://rach.io/store/') Example 1: Rachio website (Gatsby/React Based)
                p: a(href='https://page-transitions.com/') Example 2: Page transitions (Vue based, by Sara Drasner)
                p: a(href='https://github.com/sdras/page-transitions-travelapp') Example 2's Github repo
        slide(enter='fadeIn' leave='fadeOut')
            h1.title Resources (3/6)
            .content
              div
                p: a(href='https://reactjs.org/') React's home page
                p: a(href='https://www.gatsbyjs.org/') Gatsby JS
                p: a(href='https://nextjs.org/') Next JS
        slide(enter='fadeIn' leave='fadeOut')
            h1.title Resources (4/6)
            .content
              div
                p: a(href='https://vuejs.org/') Vue's home page
                p: a(href='https://vuepress.vuejs.org/') Vue Press
                p: a(href='https://nuxtjs.org/') Nuxt
        slide(enter='fadeIn' leave='fadeOut')
            h1.title Resources (5/6)
            .content
              div
                p: a(href='https://jekyllrb.com/') Jekyll
                p: a(href='https://gohugo.io/') Hugo
                p: a(href='https://www.staticgen.com/') staticgen.com
        slide(enter='fadeIn' leave='fadeOut')
            h1.title Resources (6/6)
            .content
              div
                p
                  a(href='https://github.com/postlight/headless-wp-starter')
                    | Postlight's headless WP starter
                p: a(href='https://www.netlifycms.org/') Netlify CMS
                p: a(href='https://prerender.io/') Prerender
</template>

<script>
import eagle from 'eagle.js';

document.title = 'What is JAM Stack? by leomeloxp';

export default {
  mixins: [eagle.slideshow],
  methods: {
    handleClick: function clickHander() {
      document.querySelector('.eg-slideshow').mozRequestFullScreen();
    }
  }
};
</script>

<style lang="scss">
.eg-slideshow {
  background-color: white;
  position: relative;
}

.eg-slide {
  background-color: white;
  position: absolute;
  top: 0;
  left: 5vw;
  width: 90vw;
  height: 95vh;
}

.eg-slide-content {
  display: grid;
  justify-content: stretch;
  align-content: stretch;
  align-items: top;
  justify-items: stretch;
  grid-template: 'title' 'content '' footer';
  grid-template-rows: minmax(auto, 30vh) minmax(auto, 60vh) 10vh;
  grid-template-columns: 1fr;
  height: 100%;
  .title {
    grid-area: title;
    text-align: center;
  }
  .content {
    --justify: center;
    --align: stretch;
    grid-area: content;
    display: flex;
    justify-content: var(--justify);
    align-items: var(--align);
  }
}
.text-center {
  text-align: center;
}
.no-bullet {
  list-style: none;
}

.button__fs {
  position: absolute;
  top: 1rem;
  left: 1rem;
  // appearance: none;
  background: none;
  z-index: 2;
  border: 1px solid #999;
  color: #999;
  padding: 5px 10px;
  box-shadow: 1px 1px 1px #999;
  &:active {
    box-shadow: none;
  }
}
pre {
  margin: 0 auto;
  max-width: 80%;
}
img {
  max-width: 100%;
  object-fit: contain;
  &.logo {
    --logo: 200px;
    height: var(--logo);
    width: var(--logo);
  }
}
</style>
