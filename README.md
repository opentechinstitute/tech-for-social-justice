# About this project

This is the site for the Technology for Social Justice Field Scan, a participatory action research project led by [Research Action Design](http://rad.cat) and supported by the [Open Technology Institute](https://opentechinstitute.org) at [The New America Foundation](https://newamerica.org). It was developed by [Maya Wagoner](https://github.com/mayawagon).

## Editing Content

After getting permission from someone on the T4SJ team, you can edit photos, text, and posts through the [Siteleaf](https://www.siteleaf.com/) CMS-style interface. Just create and account and start editing. It's rly easy.

## Quick Setup

To edit the code, there are a couple more steps, but not too much. 

This website is running on [Jekyll](https://jekyllrb.com/), and uses the [Jekyll Admin Interface](https://jekyll.github.io/jekyll-admin/). To use it, you'll need to have Ruby, Git, and Jekyll installed. If you already have those, awesome, just clone this repository and start a Jekyll server:

	bundle exec jekyll serve

and navigate your browser to localhost:4000

Yay! You can (hopefully) now see the site in action.

## Installing Dependencies 

If that didnt work, you might be missing some of the dependencies. 

Do you have Ruby? Open your command line (the program is called Terminal on a Mac) and check.

	ruby -v

If you don't, [install it](https://www.ruby-lang.org/en/documentation/installation/).

Do you have git?

	git --version

If you don't, you'll have to [install that](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

Do you have [Jekyll](https://jekyllrb.com/)?

	gem install jekyll bundler

That command should install Jekyll and the bundler for you. 

Let me know if there was another dependency I missed, and I'll add it to this readme. 

## Many thanks to togetherlist!

The "Search Projects & Organizations" page is based on [togetherlist](http://togetherlist.com/), which was created by [Sougwen](http://twitter.com/sougwen), [Raihan](http://twitter.com/raihan_) & [Willow](http://twitter.com/willowbl00) and a bunch of other contributors.

It was modified at the (now defunct) [Public Interest Tech Site](http://github.com/opentechinstitute/public-interest-tech-site/), and you can find more info over there. 