import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  articles =  [
    {
    "source": {
    "id": "engadget",
    "name": "Engadget"
    },
    "author": "Steve Dent",
    "title": "HBO and Apple TV+ win big at the Emmys",
    "description": "Last year Netflix grabbed the most Primetime Emmys with 10, but this year it was only third best behind Apple TV+ and HBO Max. The latter dominated last night's proceedings with 12 awards, including five for The White Lotus, four for Succession (including Out…",
    "url": "https://www.engadget.com/hbo-max-apple-tv-ted-lasso-emmy-win-082538860.html",
    "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/97915200-3335-11ed-83bd-4864dcf5b7b6",
    "publishedAt": "2022-09-13T08:25:38Z",
    "content": "Last year Netflix grabbed the most Primetime Emmys with 10, but this year it was only third best behind Apple TV+ and HBO Max. The latter dominated last night's proceedings with 12 awards, including … [+1262 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "HBO reclaims its Emmy crown with 'Succession,' 'White Lotus' wins - Reuters.com",
    "description": "The dysfunctional dynasty of \"Succession,\" the teen drama \"Euphoria\" and a comedy series set in the fictional White Lotus resort helped propel HBO to the top of the Emmy Awards heap Monday, surpassing streaming rival Netflix Inc <a href=\"https://www.reuters.c…",
    "url": "https://www.reuters.com/lifestyle/hbo-reclaims-its-emmy-crown-with-succession-white-lotus-wins-2022-09-13/",
    "urlToImage": "https://www.reuters.com/resizer/zq0sHAYiTdUJ5PpxAxEE4dcOWuI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/I56UEZLNKRNJREPDZAQOQ5F2I4.jpg",
    "publishedAt": "2022-09-13T04:49:00Z",
    "content": "Sept 12 (Reuters) - The dysfunctional dynasty of \"Succession,\" the teen drama \"Euphoria\" and a comedy series set in the fictional White Lotus resort helped propel HBO to the top of the Emmy Awards he… [+2831 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "Taiwan's GlobalWafers sees Nov groundbreaking for $5 bln Texas plant - Reuters.com",
    "description": "Taiwan's GlobalWafers Co Ltd <a href=\"https://www.reuters.com/companies/6488.TWO\" target=\"_blank\">(6488.TWO)</a> expects to start construction in November of its new $5 billion plant in Texas, the company's chairwoman and CEO said on Tuesday.",
    "url": "https://www.reuters.com/markets/us/taiwans-globalwafers-sees-nov-groundbreaking-5-bln-texas-plant-2022-09-13/",
    "urlToImage": "https://www.reuters.com/resizer/63dp-I6lmY-brE0ZUdVYRUnzvaU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TGTQJH36UBNTTGY5F7AK5YUVTY.jpg",
    "publishedAt": "2022-09-13T07:26:00Z",
    "content": "TAIPEI, Sept 13 (Reuters) - Taiwan's GlobalWafers Co Ltd (6488.TWO) expects to start construction in November of its new $5 billion plant in Texas, the company's chairwoman and CEO said on Tuesday.\r\n… [+1864 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Android Central"
    },
    "author": "nicholas.sutrich@futurenet.com (Nicholas Sutrich)",
    "title": "Is Apple waiting too long to make a foldable phone?",
    "description": "We're already on the fourth generation of Samsung foldable phones, so when is Apple going to finally enter the fray?",
    "url": "https://www.androidcentral.com/phones/is-apple-waiting-too-long-to-make-a-foldable-phone",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/HzjSRkNW25JJUjuQLCszCW-1200-80.jpg",
    "publishedAt": "2022-09-13T12:00:00Z",
    "content": "While Samsung continues to forge ahead and push foldables as the next big thing in mobile tech, many folks have been wondering if Apple has also been working on a folding iPhone. At this point, Apple… [+7262 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "Adrian Horton",
    "title": "Emmys 2022: Succession, Ted Lasso, The White Lotus triumph",
    "description": "There were few surprises – and a few standout speeches – for an Emmys telecast that handed out trophies mostly to repeat winners and clear favorites.The Emmys offered few surprises but plenty of truncated speeches on Monday evening, in an awards-packed teleca…",
    "url": "https://amp.theguardian.com/tv-and-radio/2022/sep/12/emmys-2022-succession-ted-lasso-the-white-lotus-triumph",
    "urlToImage": "https://i.guim.co.uk/img/media/129f871ba9db9bffc81960ce57ae2fca803c02a8/0_4_3460_2076/master/3460.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ad0403bdd0e54df220784f5af6e108bb",
    "publishedAt": "2022-09-13T03:57:18Z",
    "content": "The Emmys offered few surprises but plenty of truncated speeches on Monday evening, in an awards-packed telecast that mostly handed out repeat trophies to established favorites with a few spoilers mi… [+4764 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "Keza MacDonald",
    "title": "Vikings, vibes and offbeat indies: this autumn’s hidden gaming gems",
    "description": "From a creeping horror to a funny alien shooter, here are unexpected highlights to play before the onslaught of big-name titles<ul><li>Don’t get Pushing Buttons delivered to your inbox? Sign up here</li></ul>Games follow a seasonal rhythm, and perhaps because…",
    "url": "https://amp.theguardian.com/games/2022/sep/13/pushing-buttons-season-of-the-switch-autumns-gaming-gems",
    "urlToImage": "https://i.guim.co.uk/img/media/808afcf9889e7e9558c3ad4080fa1d8b13595a8f/66_0_1800_1080/master/1800.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=872d6521a082d0a4c35592b402973b3d",
    "publishedAt": "2022-09-13T11:18:03Z",
    "content": "Games follow a seasonal rhythm, and perhaps because I have spent my career writing about them (take that, school careers advisor!), Im especially attuned to it. Absolutely nothing happens in winter, … [+9969 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "Sian Cain",
    "title": "Emmys 2022: Succession, Squid Game and more go head to head at awards ceremony – live",
    "description": "Follow the biggest night in television live, with Succession, Squid Game and The White Lotus up for top gongs and Murray Bartlett and Michael Keaton winning so far<ul><li>The full list of winners</li></ul>The British actor wins for his role as footballer Roy …",
    "url": "https://www.theguardian.com/tv-and-radio/live/2022/sep/13/emmys-2022-live-succession-squid-game-and-more-go-head-to-head-at-awards-ceremony",
    "urlToImage": "https://i.guim.co.uk/img/media/4f72c9db9725cd2ed7ed107b288572692bc0075e/0_55_4000_2400/master/4000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=a088420df1fb2fb4cffbb7239022291d",
    "publishedAt": "2022-09-13T00:53:16Z",
    "content": "Show key events onlyPlease turn on JavaScript to use this feature\r\nRight were one hour in and weve got our first Will Smith slap joke. I applaud the restraint.\r\nThere was just a weird extended film t… [+5573 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Sami Fathi",
    "title": "Apple Watch Ultra Features 76% Larger Battery Than Series 8",
    "description": "The Apple Watch Ultra features a 76% larger battery compared to the 45mm Series 8, according to newly uncovered specifications in a Chinese certification database.\n\n\n\n\n\nThe certification, spotted by MySmartPrice, reveals that the ‌Apple Watch Ultra‌ features …",
    "url": "https://www.macrumors.com/2022/09/13/apple-watch-ultra-76-larger-battery/",
    "urlToImage": "https://images.macrumors.com/t/Rh5xQmtx7wcjjdxRsryCwyC2kng=/2126x/article-new/2022/09/apple-watch-ultra-2.jpg",
    "publishedAt": "2022-09-13T11:08:19Z",
    "content": "The Apple Watch Ultra features a 76% larger battery compared to the 45mm Series 8, according to newly uncovered specifications in a Chinese certification database.\r\nThe certification, spotted by MySm… [+1205 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Joe Rossignol",
    "title": "iOS 16 Wallet App: Add Keys via Safari, Apple Pay Later Coming in Future Update",
    "description": "Apple this week updated the iOS 16 features page on its website with some additional information about the Wallet app on the iPhone.\n\n\n\n\n\nFirst, the page now indicates that iOS 16 allows users to securely add new keys to the Wallet app on the iPhone and Apple…",
    "url": "https://www.macrumors.com/2022/09/13/apple-shares-new-ios-16-wallet-app-features/",
    "urlToImage": "https://images.macrumors.com/t/p8c-qqwt-RLOLJbF3LcYX-kPaV4=/1600x/article-new/2022/06/apple-pay-later-wallet.jpeg",
    "publishedAt": "2022-09-13T12:57:07Z",
    "content": "Apple this week updated the iOS 16 features page on its website with some additional information about the Wallet app on the iPhone.\r\nFirst, the page now indicates that iOS 16 allows users to securel… [+1438 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Sami Fathi",
    "title": "Apple's Website Erroneously Says Latest iPhone and Apple Watch Costs $777,777",
    "description": "Apple's website in several countries erroneously displays $777,777 as the price of several products, including all iPhone models, the Apple Watch Ultra, the Apple Watch Series 8, and the second-generation AirPods Pro.\n\n\n\n\n\nThe bug only impacts Apple's main pr…",
    "url": "https://www.macrumors.com/2022/09/13/apple-website-bug-price/",
    "urlToImage": "https://images.macrumors.com/t/fw1g7x2V4in34DePIh6pGtTezC0=/2094x/article-new/2022/09/apple-website-price-bug.jpeg",
    "publishedAt": "2022-09-13T07:23:21Z",
    "content": "Apple's website in several countries erroneously displays $777,777 a month as the price of several products, including all iPhone models, the Apple Watch Ultra, the Apple Watch Series 8, and the seco… [+352 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Sami Fathi",
    "title": "Apple Suppliers Reportedly Preparing for Launch of New MacBook Pros Ahead of Rumored October Event",
    "description": "Apple's suppliers are reportedly preparing to produce and ship Apple's next-generation 14-inch and 16-inch MacBook Pros, which are expected to feature M2 Pro and ‌M2‌ Max chips. \n\n\n\n\n\nAccording to DigiTimes, suppliers within Apple's Mac supply chain are prepa…",
    "url": "https://www.macrumors.com/2022/09/13/apple-preparing-new-macbook-pros-october/",
    "urlToImage": "https://images.macrumors.com/t/6PPyzwpY4Zteqwwky9TbcZcjS1w=/1600x/article-new/2013/09/macbook-pro-sizes-space-gray.jpg",
    "publishedAt": "2022-09-13T09:16:25Z",
    "content": "Apple's suppliers are reportedly preparing to produce and ship Apple's next-generation 14-inch and 16-inch MacBook Pros, which are expected to feature M2 Pro and ‌M2‌ Max chips. \r\nAccording to DigiTi… [+1252 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Sami Fathi",
    "title": "iOS 16 Lock Screen Widget Lets You Quickly Open Any App",
    "description": "A new iOS 16 app lets users open any app of their choice directly from their Lock Screen without ever needing to navigate their iPhone.\n\n\n\n\n\nThe app called \"Launchify\" lets users configure one or more ‌iOS 16‌ Lock Screen widgets that directly open any app of…",
    "url": "https://www.macrumors.com/2022/09/13/ios-16-lock-screen-widget-open-any-app/",
    "urlToImage": "https://images.macrumors.com/t/XQB0022SVXBKGVidpj6x0-Ey0d8=/1920x/article-new/2022/09/ios-16-lock-screen-widget-launchify.jpg",
    "publishedAt": "2022-09-13T09:38:47Z",
    "content": "A new iOS 16 app lets users open any app of their choice directly from their Lock Screen without ever needing to navigate their iPhone.\r\nThe app called \"Launchify\" lets users configure one or more ‌i… [+723 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Mitchel Broussard",
    "title": "Deals: Verizon Helps You Prepare for iPhone 14 Launch Day With Up to 25% Off MagSafe Accessories",
    "description": "Verizon this week is helping soon-to-be iPhone 14 and iPhone 14 Pro owners get ready for the smartphone's arrival with 20 percent off MagSafe bundles and 25 percent off MagSafe chargers. This follows Verizon's sale on iPhone 14 cases that began last Friday an…",
    "url": "https://www.macrumors.com/2022/09/13/deals-verizon-magsafe-accessories/",
    "urlToImage": "https://images.macrumors.com/t/18WF9X0TZyzIhIPJ14fSjKIabuY=/2500x/article-new/2022/05/magsafe-charger-new-purple.jpg",
    "publishedAt": "2022-09-13T14:07:28Z",
    "content": "Verizon this week is helping soon-to-be iPhone 14 and iPhone 14 Pro owners get ready for the smartphone's arrival with 20 percent off MagSafe bundles and 25 percent off MagSafe chargers. This follows… [+1201 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Sami Fathi",
    "title": "iOS 16 Features and Changes Exclusive to Newer iPhones",
    "description": "Apple this week released iOS 16 to the public, the latest version of its iOS operating system with major changes and new features, including a customizable Lock Screen, the ability to edit and unsend messages, and more.\n\n\n\n\n\nThe biggest iOS 16 features, such …",
    "url": "https://www.macrumors.com/2022/09/13/ios-16-features-exclusive-newer-iphones/",
    "urlToImage": "https://images.macrumors.com/t/UT25dWzToRxX_vaTu8xC1EyGAIc=/1600x/article-new/2022/08/ios-16-live-text.jpg",
    "publishedAt": "2022-09-13T13:41:21Z",
    "content": "Apple this week released iOS 16 to the public, the latest version of its iOS operating system with major changes and new features, including a customizable Lock Screen, the ability to edit and unsend… [+2768 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MarketBeat"
    },
    "author": "MarketBeat Staff",
    "title": "Do These Dividend Achievers Deserve A Place In Your Portfolio?",
    "description": "This week, on the MarketBeat Podcast Kate sits down with ETF portfolio manager Dave Gilreath, who offers a perspective on “dividend achievers”,",
    "url": "https://www.marketbeat.com/originals/do-these-dividend-achievers-deserve-a-place-in-your-portfolio/",
    "urlToImage": "https://assets.entrepreneur.com/providers/marketbeat/hero-image-marketbeat-435200.jpeg",
    "publishedAt": "2022-09-13T07:00:00Z",
    "content": "This week, on The MarketBeat Podcast Kate sits down with ETF portfolio manager Dave Gilreath, who offers a perspective on dividend achievers and why these deserve a role in your portfolio. Dave gives… [+2691 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Joe Rossignol",
    "title": "Apple Shares List of 12 Features Affected by watchOS 9's New Low Power Mode",
    "description": "watchOS 9 introduces a new Low Power Mode for the Apple Watch Series 4 and later that is designed to extend battery life by disabling or limiting some features and sensors while enabled, such as the always-on display and background heart rate monitoring.\n\n\n\n\n…",
    "url": "https://www.macrumors.com/2022/09/12/watchos-9-low-power-mode-disabled-features/",
    "urlToImage": "https://images.macrumors.com/t/L44b5vPk45LxFLzZ9w1eGFTWJgk=/1600x/article-new/2022/09/Apple-Watch-Low-Power-Mode-watchOS-9.jpeg",
    "publishedAt": "2022-09-13T00:11:49Z",
    "content": "watchOS 9 introduces a new Low Power Mode for the Apple Watch Series 4 and later that is designed to extend battery life by disabling or limiting some features and sensors while enabled, such as the … [+1970 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Sami Fathi",
    "title": "Apple Confirms iOS 16 Battery Percentage Display Not Available on Certain iPhone Models",
    "description": "Following iOS 16's public release, Apple has confirmed that users of older generation iPhone models will miss out on the ability to show their ‌iPhone‌'s battery percentage directly in the status bar. \n\n\n\n\n\nIn an updated support document, Apple says that the …",
    "url": "https://www.macrumors.com/2022/09/13/ios-16-battery-percentage-certain-iphone-models/",
    "urlToImage": "https://images.macrumors.com/t/rSl3UUT4NzuKJ-nTX-XeBQAV7IQ=/1600x/article-new/2022/08/ios-16-beta-battery-percentage-icon.jpeg",
    "publishedAt": "2022-09-13T08:00:28Z",
    "content": "Following iOS 16's public release, Apple has confirmed that users of older generation iPhone models will miss out on the ability to show their ‌iPhone‌'s battery percentage directly in the status bar… [+1044 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Joe Rossignol",
    "title": "Apple Explains iPhone's New Alert Shown When Fake AirPods Are Connected",
    "description": "Starting with iOS 16, users may see a \"Cannot Verify AirPods\" alert on their iPhone if they try to connect fake AirPods to the device. Apple shared more information about this alert today in a new support document spotted by developer Steve Moser.\n\n\n\n\n\nThe su…",
    "url": "https://www.macrumors.com/2022/09/12/iphone-fake-airpods-alert/",
    "urlToImage": "https://images.macrumors.com/t/1bVm5QkmPiNQyXYibNGfeicLIks=/1600x/article-new/2022/09/iOS-16-iPhone-Unverified-AirPods-Alert.jpeg",
    "publishedAt": "2022-09-13T02:12:47Z",
    "content": "Starting with iOS 16, users may see a \"Cannot Verify AirPods\" alert on their iPhone if they try to connect fake AirPods to the device. Apple shared more information about this alert today in a new su… [+678 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Slashdot.org"
    },
    "author": "msmash",
    "title": "HBO Beats Netflix In Reversal Of Emmy Fortune",
    "description": "\"Succession,\" HBO's portrait of a dysfunctional media dynasty, won best drama at the 74th Emmy Awards on Monday night, the second time the series has taken the prize. The New York Times: Jesse Armstrong, the show's creator, also took home the Emmy for best wr…",
    "url": "https://entertainment.slashdot.org/story/22/09/13/141227/hbo-beats-netflix-in-reversal-of-emmy-fortune",
    "urlToImage": "https://a.fsdn.com/sd/topics/tv_64.png",
    "publishedAt": "2022-09-13T14:40:00Z",
    "content": "Jesse Armstrong, the show's creator, also took home the Emmy for best writing, the third time he's won in that category. And Matthew Macfadyen won best supporting actor in a drama for the first time … [+1762 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Insiderintelligence.com"
    },
    "author": "insider@insider.com (Grace Broadbent)",
    "title": "Bread brings virtual cards to BNPL push with Marqeta partnership",
    "description": "The launch highlights Bread's post-rebrand growth strategy, and diversified offerings should help Bread compete in the shaky BNPL market.",
    "url": "https://www.insiderintelligence.com/content/bread-brings-virtual-cards-bnpl-push-with-marqeta-partnership",
    "urlToImage": "https://www.insiderintelligence.com/content/storage/socialsharingdefault/default-image-share.png?im=FitAndFill,width=1200,height=630",
    "publishedAt": "2022-09-13T14:12:52Z",
    "content": "The news:Bread Financial and Marqeta launched a one-time-use virtual card for Bread Pay, a suite of buy now, pay later (BNPL) products, per a press release. The virtual card lets consumers apply for … [+2311 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "jerb@insider.com (Jordan Parker Erb)",
    "title": "An internal report explains why Instagram is struggling to keep up with TikTok",
    "description": "In internal documents viewed by the Wall Street Journal, Instagram outlines Reels' failure to keep up with rival TikTok.",
    "url": "https://www.businessinsider.com/instagram-reels-struggling-to-keep-up-with-tiktok-2022-9",
    "urlToImage": "https://i.insider.com/61fdb008bd5041001918e152?width=1200&format=jpeg",
    "publishedAt": "2022-09-13T10:50:00Z",
    "content": "Hello, tech friends. I'm Jordan Parker Erb, writing to you from New York but thinking about my home state, Montana. \r\nWhile I was visiting last month, I put together a guide to the state and, more sp… [+4563 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "prosen@insider.com (Phil Rosen)",
    "title": "August inflation data holds key implications for the Fed's next move – here's everything you want to know.",
    "description": "August's inflation data will impact markets and the next Fed rate hike. Experts told Insider what to watch and what could come next for stocks.",
    "url": "https://www.businessinsider.com/august-inflation-data-bank-investing-markets-experts-explain-fed-hike-2022-9",
    "urlToImage": "https://i.insider.com/631fa5d0e8b500001850eb91?width=1200&format=jpeg",
    "publishedAt": "2022-09-13T10:00:00Z",
    "content": "August's CPI data will have key implications for the Fed's next move. Today, I'm breaking down what to look out for and sharing what I learned from some of the sector's best and brightest market-watc… [+5789 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Entrepreneur"
    },
    "author": "Jonathan Small",
    "title": "Butt Dialed Your Boss? Apple Now Has a Fix for That.",
    "description": "The iOS 16 software update for iPhones fixes major texting fails.",
    "url": "https://www.entrepreneur.com/business-news/want-to-unsend-that-embarrassing-text-apple-now-has-a-fix/435166",
    "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1663027793-Applephone.jpeg",
    "publishedAt": "2022-09-13T00:25:00Z",
    "content": "Have you ever sent a text message to the wrong person? Butt-dialed a text to your boss at 1 am? Or sent an important message with loads of embarrassing autocorrections or wrong information?\r\nThese me… [+1452 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Harvard Business Review"
    },
    "author": "Timothy Hoff",
    "title": "How to Help Primary Care Physicians Craft Sustainable Careers",
    "description": "Burnout among primary care physicians in the United States is an especially big problem thanks to changes that have made their jobs much more difficult. But there are four ways that health care organizations can improve PCPs jobs. They would revamp how PCPs p…",
    "url": "https://hbr.org/2022/09/how-to-help-primary-care-physicians-craft-sustainable-careers",
    "urlToImage": "https://hbr.org/resources/images/article_assets/2022/09/Sep22_13_-1295941425.jpg",
    "publishedAt": "2022-09-13T13:00:00Z",
    "content": "American PCPs are more burned out than ever. It’s up to health systems to address the underlying issues and help doctors build more balanced careers.\r\n\"&gt;\r\nPhysician burnout, particularly in primar… [+9788 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Harvard Business Review"
    },
    "author": null,
    "title": "Rolling Stone’s Jann Wenner on Cultivating Creative Talent",
    "description": "A conversation about leading writers and other creative talent at a major publication.",
    "url": "https://hbr.org/podcast/2022/09/rolling-stones-jann-wenner-on-cultivating-creative-talent",
    "urlToImage": "https://hbr.org/resources/images/article_assets/2020/09/wide-ideacast.png",
    "publishedAt": "2022-09-13T13:20:00Z",
    "content": "ALISON BEARD: Welcome to the HBR IdeaCast from Harvard Business Review. I’m Alison Beard.\r\nIn 1967, my guest today and a few friends published the first issue of a new magazine. Rolling Stone changed… [+24586 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hipertextual"
    },
    "author": "Alberto Martín",
    "title": "Ya sabemos el secreto tras la enorme duración de la batería del Apple Watch Ultra",
    "description": "El Apple Watch Ultra promete una duración de batería sin precedentes. Comparado con el Apple Watch Series 8 y SE, su autonomía pasa de unas teóricas 18 horas hasta el doble, 36 horas. 60 con el modo de bajo consumo. Se trata de un salto importantísimo respect…",
    "url": "https://hipertextual.com/2022/09/apple-watch-ultra-bateria",
    "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2022/09/adventure_metrics__cngpug9ytqj6_large.jpg",
    "publishedAt": "2022-09-13T14:48:49Z",
    "content": "El Apple Watch Ultra promete una duración de batería sin precedentes. Comparado con el Apple Watch Series 8 y SE, su autonomía pasa de unas teóricas 18 horas hasta el doble, 36 horas. 60 con el modo … [+1876 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hipertextual"
    },
    "author": "Gabriel Erard",
    "title": "Actualiza ahora mismo tu iPhone, iPad y Mac para solucionar esta peligrosa vulnerabilidad",
    "description": "Por octava vez en el año, Apple ha lanzado una actualización de seguridad para corregir una vulnerabilidad zero-day que afecta a sus principales sistemas operativos y dispositivos. Así que si tienes un iPhone, iPad o Mac, no dudes en actualizar su software cu…",
    "url": "https://hipertextual.com/2022/09/actualiza-ya-mismo-iphone-ipad-mac-vulnerabilidad",
    "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2022/07/iphone-13-iphone-14.jpg",
    "publishedAt": "2022-09-13T14:16:20Z",
    "content": "Por octava vez en el año, Apple ha lanzado una actualización de seguridad para corregir una vulnerabilidad zero-day que afecta a sus principales sistemas operativos y dispositivos. Así que si tienes … [+3136 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hipertextual"
    },
    "author": "Alberto Martín",
    "title": "Esto es todo lo ganas y pierdes con el nuevo modo de bajo consumo del Apple Watch",
    "description": "Una de las novedades de watchOS 9, que ya está disponible para todos, es el modo de bajo consumo del Apple Watch. A diferencia de sistema anterior, este nuevo modo permite alargar la batería del reloj sin sacrificar, literalmente, todas las funciones del mism…",
    "url": "https://hipertextual.com/2022/09/modo-de-bajo-consumo-en-tu-apple-watch",
    "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2022/06/watchOS-9-Apple-Watch.jpg",
    "publishedAt": "2022-09-13T09:31:23Z",
    "content": "Una de las novedades de watchOS 9, que ya está disponible para todos, es el modo de bajo consumo del Apple Watch. A diferencia de sistema anterior, este nuevo modo permite alargar la batería del relo… [+2862 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hipertextual"
    },
    "author": "Rubén Chicharro",
    "title": "Una de las mejores funciones de iOS 16 no está disponible en todos los iPhone compatibles",
    "description": "iOS 16, que ya está disponible oficialmente, llega con un puñado de interesantes novedades. Entre ellas, la posibilidad de personalizar por completo la pantalla de bloqueo, nuevas características en iMessage y, curiosamente, el regreso del porcentaje de bater…",
    "url": "https://hipertextual.com/2022/09/ios-16-porcentaje-bateria-iphone-no-compatibles",
    "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2022/09/ios-16-scaled.jpeg",
    "publishedAt": "2022-09-13T10:54:28Z",
    "content": "iOS 16, que ya está disponible oficialmente, llega con un puñado de interesantes novedades. Entre ellas, la posibilidad de personalizar por completo la pantalla de bloqueo, nuevas características en … [+1897 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Xataka.com"
    },
    "author": "Eva Rodríguez de Luis",
    "title": "Si empiezas un nuevo curso y vas a hacer una compra tecnológica, estas son las compañías que ofrecen descuentos educativos",
    "description": "Curso nuevo, nuevas compras. Libros, material de papelería y quién sabe si te toca comprar un ordenador portátil, has apostado por una tablet para estudiar, la imprescindible calculadora científica para clase o simplemente tienes que hacerte con un montón de …",
    "url": "https://www.xataka.com/seleccion/empiezas-nuevo-curso-vas-a-hacer-compra-tecnologica-estas-companias-que-ofrecen-descuentos-educativos-2",
    "urlToImage": "https://i.blogs.es/c37e31/thisisengineering-raeng-tejz3cgzxrw-unsplash/840_560.jpg",
    "publishedAt": "2022-09-13T10:01:48Z",
    "content": "Curso nuevo, nuevas compras. Libros, material de papelería y quién sabe si te toca comprar un ordenador portátil, has apostado por una tablet para estudiar, la imprescindible calculadora científica p… [+13478 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Xataka.com"
    },
    "author": "John Tones",
    "title": "Warner puede estar en crisis, pero los Emmy corroboran su dominio absoluto de los premios de la industria",
    "description": "Warner no está pasando su mejor momento, en términos generales. En términos generales, de hecho, 2022 está siendo un año bastante horribilis para una compañía que se ha ganado, después de una serie de terribles decisiones como la de borrar 'Batgirl' del mapa,…",
    "url": "https://www.xataka.com/cine-y-tv/warner-puede-estar-crisis-emmy-corroboran-su-dominio-absoluto-premios-industria",
    "urlToImage": "https://i.blogs.es/e49be2/diseno-sin-titulo-32-/840_560.jpeg",
    "publishedAt": "2022-09-13T13:33:08Z",
    "content": "Warner no está pasando su mejor momento, en términos generales. En términos generales, de hecho, 2022 está siendo un año bastante horribilis para una compañía que se ha ganado, después de una serie d… [+10763 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Xataka.com"
    },
    "author": "John Tones",
    "title": "Prime Video ya es la plataforma de streaming que más dinero derrocha. A Amazon, de momento, le da igual",
    "description": "Es poco habitual encontrar comparativas de Prime Video con otras plataformas de streaming, incluso en estos tiempos en los que, gracias a 'El Señor de los Anillos: Los Anillos de Poder', al fin está consiguiendo ser considerada una plataforma con las mecánica…",
    "url": "https://www.xataka.com/streaming/prime-video-plataforma-streaming-que-dinero-derrocha-a-amazon-momento-le-da-igual",
    "urlToImage": "https://i.blogs.es/5cb6a4/630fb7a83fe7c40019e4c080/840_560.jpeg",
    "publishedAt": "2022-09-13T09:31:47Z",
    "content": "Es poco habitual encontrar comparativas de Prime Video con otras plataformas de streaming, incluso en estos tiempos en los que, gracias a 'El Señor de los Anillos: Los Anillos de Poder', al fin está … [+4805 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digital Trends"
    },
    "author": "Joe Maring",
    "title": "My 5 favorite iOS 16 features (and 1 I hate) after using it for two months",
    "description": "I've been using iOS 16 for the past two months. Here are a few things I absolutely love ... plus one feature I can't stand.",
    "url": "https://www.digitaltrends.com/mobile/favorite-ios-16-features-one-thing-i-hate-2-months-later/",
    "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2022/09/ios-16-logo-iphone-in-hand-hero.jpg?p=1",
    "publishedAt": "2022-09-13T12:00:07Z",
    "content": "After months of public and developer betas, iOS 16 is finally available as a free update for anyone with a modern iPhone. Apple released its final build of iOS 16 on September 12, bringing with it al… [+7580 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Atlantic"
    },
    "author": "Robinson Meyer",
    "title": "California’s Grid Is a Window Into the Future … And It’s Okay, Actually",
    "description": "The state’s record-smashing heat wave offered three lessons for the future of energy.",
    "url": "https://www.theatlantic.com/science/archive/2022/09/electric-cars-help-california-electricity-grid/671420/?utm_source=feed",
    "urlToImage": null,
    "publishedAt": "2022-09-13T11:38:20Z",
    "content": "Last week, Americans had a rare view into what the future might look like. It came from California, as usual, but it was not courtesy of Apple’s annual keynote, or indeed of any technology company. I… [+8082 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Eclecticlight.co"
    },
    "author": null,
    "title": "macOS leaves users vulnerable, and unaware of their vulnerability",
    "description": "John clicked on the wrong email, and suspected something malicious. From there on, nothing went right. He couldn’t even check macOS protection. A salutary tale.",
    "url": "https://eclecticlight.co/2022/09/13/how-macos-leaves-users-vulnerable-and-unaware-of-their-vulnerability/",
    "urlToImage": "https://eclecticlightdotcom.files.wordpress.com/2015/01/cropped-eclecticlightlogo-e1421784280911.png?w=200",
    "publishedAt": "2022-09-13T07:57:52Z",
    "content": "It isn’t the first time that a Mac user has asked me a simple question, only to discover that, while they thought their Mac was fully protected against malicious software, because of shortcomings in … [+3820 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Danluu.com"
    },
    "author": null,
    "title": "Futurist Prediction Accuracy",
    "description": "Comments",
    "url": "https://danluu.com/futurist-predictions/",
    "urlToImage": null,
    "publishedAt": "2022-09-13T05:40:14Z",
    "content": "I've been reading a lot of predictions from people who are looking to understand what problems humanity will face 10-50 years out (and sometimes longer) in order to work in areas that will be instrum… [+190029 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Gigazine.net"
    },
    "author": "@GIGAZINE",
    "title": "Apple Watch向け最新OS「watchOS 9」の配信スタート",
    "description": "2022年6月に開催されたWWDC22で発表されたApple Watch向け最新OS「watchOS 9」の配信がスタートしました。続きを読む...",
    "url": "https://gigazine.net/news/20220913-watchos-9-available/",
    "urlToImage": "https://i.gzn.jp/img/2022/09/13/watchos-9-available/00_m.png",
    "publishedAt": "2022-09-13T08:00:00Z",
    "content": "20226WWDC22Apple WatchOSwatchOS 9\r\nwatchOS 9 is available today - Applehttps://www.apple.com/newsroom/2022/09/watchOS-9-is-available-today/\r\nwatchOS 9 - Applehttps://www.apple.com/jp/watchos/watchos-… [+609 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Gigazine.net"
    },
    "author": "@GIGAZINE",
    "title": "Safari 16で追加されたWebKit機能まとめ",
    "description": "Appleは2022年9月12日に、iOS 16・macOS Monterey・macOS Big Sur向けにSafari 16をリリースしました。このSafari 16のWebKit機能について、SafariとWebKitのWeb Developer ExperienceチームでAppleエヴァンジェリストを務めるジェン・シモンズ氏が解説しています。続きを読む...",
    "url": "https://gigazine.net/news/20220913-webkit-features-in-safari-16/",
    "urlToImage": "https://i.gzn.jp/img/2022/09/13/webkit-features-in-safari-16/00.jpg",
    "publishedAt": "2022-09-13T10:00:00Z",
    "content": "Apple2022912iOS 16macOS MontereymacOS Big SurSafari 16Safari 16WebKitSafariWebKitWeb Developer ExperienceApple\r\nWebKit Features in Safari 16.0 | WebKithttps://webkit.org/blog/13152/webkit-features-in… [+803 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Gigazine.net"
    },
    "author": "@GIGAZINE",
    "title": "iOS 16の配信がスタート、ロック画面カスタマイズ機能を使ってみた",
    "description": "WWDC22で発表されたiPhone向けOSの最新バージョンとなる「iOS 16」がついに配信されています。数々の新機能が登場しているわけですが、WWDC22では目玉となる新機能として紹介されていた「ロック画面のカスタマイズ機能」をさっそく使ってみました。続きを読む...",
    "url": "https://gigazine.net/news/20220913-ios-16-available/",
    "urlToImage": "https://i.gzn.jp/img/2022/09/13/ios-16-available/00_m.png",
    "publishedAt": "2022-09-13T03:02:00Z",
    "content": "WWDC22iPhoneOSiOS 16WWDC22\r\niOS 16 is available today - Applehttps://www.apple.com/newsroom/2022/09/ios-16-is-available-today/\r\nAbout the security content of iOS 16 - Apple ()https://support.apple.co… [+775 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Malte Kirchner",
    "title": "Apple will noch dieses Jahr Clean Energy Charging für das iPhone einführen",
    "description": "Apple hat in den Fußnoten der Pressemitteilung zu iOS 16 eine neue Funktion durchblicken lassen. Sie soll den Kohlendioxid-Fußabdruck des iPhones reduzieren.",
    "url": "https://www.heise.de/news/Saubere-Sache-Apple-will-noch-dieses-Jahr-Clean-Energy-Charging-einfuehren-7262698.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/0/7/9/2/1/shutterstock_1590844660-ffca9cf01def224d.jpg",
    "publishedAt": "2022-09-13T16:18:00Z",
    "content": "Apple will noch in diesem Jahr eine Möglichkeit einführen, mit der iPhones bevorzugt nur mit regenerativer Energie geladen werden können. Das Clean Energy Charging soll dabei aber zunächst nur in den… [+1736 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Malte Kirchner",
    "title": "Apples Wetter für Entwickler: So viel kostet der Abruf",
    "description": "App-Entwickler können dank der neuen API WeatherKit in Apples neuen Betriebssystem auf Wetterdaten zugreifen. Zum Teil ist das kostenlos möglich.",
    "url": "https://www.heise.de/news/Apples-Wetter-fuer-Entwickler-So-viel-kostet-der-Abruf-7262319.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/0/7/7/7/8/IMG_8244-2a803ac500be0eb5.jpg",
    "publishedAt": "2022-09-13T13:54:00Z",
    "content": "Apple bietet Entwicklern eine neue Möglichkeit, an Wetterdaten zu gelangen. Mit den neuen Betriebssystem-Versionen in diesem Herbst (iOS 16, iPadOS 16, macOS 13, tvOS 16 und watchOS 9) wird die Progr… [+2133 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Stefan Krempl",
    "title": "EU-Kommission: Staatstrojaner-Einsatz kann wirksam und erforderlich sein",
    "description": "Weitgehend achselzuckend reagiert die EU-Kommission auf den Pegasus-Skandal. Das Mobiltelefon des Justizkommissars sei gar nicht kompromittiert worden.",
    "url": "https://www.heise.de/news/EU-Kommission-Staatstrojaner-Einsatz-kann-wirksam-und-erforderlich-sein-7262181.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/0/7/7/0/1/shutterstock_1475631128-76dcc6e82e074f5e.jpg",
    "publishedAt": "2022-09-13T12:31:00Z",
    "content": "Die EU-Kommission wäscht ihre Hände in Unschuld, was die vielfach kritisierten Angriffe mit Spyware wie Pegasus auch auf Oppositionelle, Bürgerrechtler und Anwälte in Mitgliedsstaaten angeht. Sie sel… [+5664 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Chance Miller",
    "title": "Apple Watch Ultra battery tidbits: mAH capacity and LTE impact",
    "description": "The new Apple Watch Ultra is Apple’s biggest change to the Apple Watch since its original release. With a completely new design, a focus on durability and extreme sports, and multi-day battery life, the Apple Watch Ultra is likely to impress when it officiall…",
    "url": "https://9to5mac.com/2022/09/13/apple-watch-battery-mah-lte/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/apple-watch-ultra-vs-series-8-SE-display-1.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2022-09-13T15:27:57Z",
    "content": "The new Apple Watch Ultra is Apple’s biggest change to the Apple Watch since its original release. With a completely new design, a focus on durability and extreme sports, and multi-day battery life, … [+2668 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Ben Lovejoy",
    "title": "Apple Digital ID feature relies on a government patent reassigned to the iPhone maker",
    "description": "We saw yesterday how Apple may be making it hard for competing smartphone makers to replicate the satellite comms feature of the iPhone 14, and we’re now learning that the same may be true of Apple digital IDs – like state ID cards and driving licenses.\nDetai…",
    "url": "https://9to5mac.com/2022/09/13/apple-digital-id/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/Apple-Digital-ID.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2022-09-13T14:27:24Z",
    "content": "We saw yesterday how Apple may be making it hard for competing smartphone makers to replicate the satellite comms feature of the iPhone 14, and we’re now learning that the same may be true of Apple d… [+3970 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Benjamin Mayo",
    "title": "Apple website glitch sets iPhone 14 price at $777,777/mo",
    "description": "Inflation is hitting us all, apparently. The front page for the iPhone section of Apple’s website is currently experiencing a little glitch where the iPhone 14 and iPhone 14 Pro are being advertised at the low, low, price of $777,777 per month — before trade-…",
    "url": "https://9to5mac.com/2022/09/13/apple-website-glitch-sets-iphone-14-price-at-777777-mo/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/iphone-14-price-glitch.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2022-09-13T07:22:24Z",
    "content": "Inflation is hitting us all, apparently. The front page for the iPhone section of Apple’s website is currently experiencing a little glitch where the iPhone 14 and iPhone 14 Pro are being advertised … [+1585 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "José Adorno",
    "title": "iPhone 14 Pro spotted in the wild ahead of Friday release",
    "description": "Apple will release the iPhone 14 and iPhone 14 Pro series later this week. While customers wait for their orders to arrive on Friday, it seems some people got their hands on the new iPhones before Apple would want to.\n more…\nThe post iPhone 14 Pro spotted in …",
    "url": "https://9to5mac.com/2022/09/13/iphone-14-pro-hands-on-before-release/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/iphone14-hands-on.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2022-09-13T16:19:41Z",
    "content": "Apple will release the iPhone 14 and iPhone 14 Pro series later this week. While customers wait for their orders to arrive on Friday, it seems some people got their hands on the new iPhones before Ap… [+2206 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Filipe Espósito",
    "title": "Developers can now subscribe to get more WeatherKit API requests",
    "description": "Following the release of iOS 16 to the public on Monday, Apple has now announced that developers can finally subscribe to get more WeatherKit API requests. With this API, third-party apps can get data provided by Apple Weather as part of the Dark Sky transiti…",
    "url": "https://9to5mac.com/2022/09/12/developers-weatherkit-api-requests/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/apple-weatherkit-subscription-dark-sky.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2022-09-13T00:08:02Z",
    "content": "Following the release of iOS 16 to the public on Monday, Apple has now announced that developers can finally subscribe to get more WeatherKit API requests. With this API, third-party apps can get dat… [+2303 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Chance Miller",
    "title": "Apple TV+ at the Emmys: ‘Ted Lasso’ wins best comedy, Jason Sudeikis wins best lead actor in a comedy, more",
    "description": "Tonight marks the 74th Emmy Awards, and as expected, Apple TV+ had a strong showing thanks to Ted Lasso. The Apple TV+ hit comedy scored a number of awards throughout the night. Jason Sudeikis took home the award for Outstanding Lead in a Comedy Series for hi…",
    "url": "https://9to5mac.com/2022/09/12/emmys-ted-lasso-jason-sudeikis/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/Screen-Shot-2022-09-12-at-10.16.33-PM.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2022-09-13T03:30:43Z",
    "content": "Tonight marks the 74th Emmy Awards, and as expected, Apple TV+ had a strong showing thanks to Ted Lasso. The Apple TV+ hit comedy scored a number of awards throughout the night. Jason Sudeikis took h… [+2040 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Ben Lovejoy",
    "title": "PSA: Update your iPhone and Mac asap, to fix an active zero-day security vulnerability",
    "description": "Even if you like to wait for new iOS and macOS updates to settle down before you take the plunge, you will want to update your iPhone and Mac asap, even if you opt to remain on iOS 15 for now. On iPhones, Apple is offering a choice between iOS 15.7 and iOS 16…",
    "url": "https://9to5mac.com/2022/09/13/update-your-iphone/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/Update-your-iPhone.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2022-09-13T12:42:19Z",
    "content": "Even if you like to wait for new iOS and macOS updates to settle down before you take the plunge, you will want to update your iPhone and Mac asap, even if you opt to remain on iOS 15 for now. On iPh… [+2256 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Chance Miller",
    "title": "Apple now warning Dark Sky for iOS users of the upcoming shutdown",
    "description": "Apple is moving forward with its plans to shut down the Dark Sky weather app at the end of this year. If you open the Dark Sky app today, you’ll see a new pop-up message telling you that “support for the Dark Sky app” will end on January 1, 2022. This comes a…",
    "url": "https://9to5mac.com/2022/09/13/dark-sky-shutting-down-warning/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/dark-sky-shutdown-2.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2022-09-13T11:29:20Z",
    "content": "Apple is moving forward with its plans to shut down the Dark Sky weather app at the end of this year. If you open the Dark Sky app today, you’ll see a new pop-up message telling you that “support for… [+2123 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Rikka Altland",
    "title": "Deals: Studio Display all-time low at $199 off, M1 iMacs from $1,100, Magic accessories, more",
    "description": "All of today’s best Apple deals arrive with three different ways to outfit your macOS workstation at some of the best prices to date. Leading the way, we spotted Apple’s latest 24-inch M1 iMac at up to $369 off to go alongside refurbished Studio Display listi…",
    "url": "https://9to5mac.com/2022/09/13/apple-studio-display-all-time-low-more/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/Studio-Display-speaker.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2022-09-13T15:52:22Z",
    "content": "All of today’s best Apple deals arrive with three different ways to outfit your macOS workstation at some of the best prices to date. Leading the way, we spotted Apples latest 24-inch M1 iMac at up t… [+4394 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Seth Kurkowski",
    "title": "9to5Mac Daily: September 12, 2022 – All the new iOS 16 features",
    "description": "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apple’s Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overcast and other podcast players.\nSponsored by Decluttr: Trade …",
    "url": "https://9to5mac.com/2022/09/12/9to5mac-daily-september-12-2022-all-the-new-ios-16-features/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/12/9to5Mac-Daily-art-lead.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2022-09-13T00:38:53Z",
    "content": "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apples Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overca… [+940 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Ben Lovejoy",
    "title": "Phil Schiller profile: From leaving money on the table, to response to mass shootings",
    "description": "The Information has a lengthy Phil Schiller profile, following his shift from head of worldwide marketing to Apple Fellow back in 2020.\nBased on interviews with unnamed colleagues, it’s something of a puff piece, but does contain some interesting snippets … \n…",
    "url": "https://9to5mac.com/2022/09/13/phil-schiller-profile/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/Phil-Schiller-profile.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2022-09-13T13:53:25Z",
    "content": "The Information has a lengthy Phil Schiller profile, following his shift from head of worldwide marketing to Apple Fellow back in 2020.\r\nBased on interviews with unnamed colleagues, it’s something of… [+5113 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Chance Miller",
    "title": "iOS 16 lets you feel iPhone keyboard input with haptic feedback, here’s how",
    "description": "iOS 16 includes a small but notable new feature for the on-screen virtual keyboard. For the first time, you’ll find a new option in Settings that enables haptic feedback as you type. This has been a popular feature of third-party keyboards on iOS for years, a…",
    "url": "https://9to5mac.com/2022/09/13/ios-16-haptic-feedback-keyboard/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/06/haptics.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2022-09-13T16:03:00Z",
    "content": "iOS 16 includes a small but notable new feature for the on-screen virtual keyboard. For the first time, you’ll find a new option in Settings that enables haptic feedback as you type. This has been a … [+1036 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Michael Potuck",
    "title": "Duplicate iPhone photos: How to delete with the built-in iOS 16 tool",
    "description": "iOS 16 comes with lots of love for Apple’s Photos app and one of the useful new additions is a built-in duplicate finder. Here’s how it works to use the new feature to delete duplicate iPhone photos a few at a time or in large batches.\n more…\nThe post Duplica…",
    "url": "https://9to5mac.com/2022/09/13/duplicate-iphone-photos/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/06/duplicate-iphone-photos.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2022-09-13T13:09:00Z",
    "content": "iOS 16 comes with lots of love for Apple’s Photos app and one of the useful new additions is a built-in duplicate finder. Here’s how it works to use the new feature to delete duplicate iPhone photos … [+2686 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Michael Potuck",
    "title": "Review: Ugreen Nexode 140W USB-C GaN Charger is a 14/16″ MacBook Pro owner’s best friend",
    "description": "Ugreen has released the next charger in its  today with the new 140W triple-port model. Coming in notably smaller than Apple’s 140W power brick, this charger offers two USB-C and one USB-A port for lots of convenience and power particularly suited for 14 and …",
    "url": "https://9to5mac.com/2022/09/13/ugreen-nexode-140w-gan-charger-review/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/ugreen-nexode-140w-gan-charger.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2022-09-13T07:00:00Z",
    "content": "Ugreen has released the next charger in its Nexode GaN lineup today with the new 140W triple-port model. Coming in notably smaller than Apple’s 140W power brick, this charger offers two USB-C and one… [+3286 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Ben Lovejoy",
    "title": "AnTuTu iPhone 14 Pro benchmarks show dramatic performance improvements",
    "description": "AnTuTu iPhone 14 Pro benchmarks show dramatic performance improvements in tests designed to mimic real-life usage of the devices.\nThe improvements found are markedly better than expected following earlier benchmarks run in Geekbench 5 …\n more…\nThe post AnTuTu…",
    "url": "https://9to5mac.com/2022/09/13/antutu-iphone-14-pro/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/AnTuTu-iPhone-14-Pro.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2022-09-13T12:12:11Z",
    "content": "AnTuTu iPhone 14 Pro benchmarks show dramatic performance improvements in tests designed to mimic real-life usage of the devices.\r\nThe improvements found are markedly better than expected following e… [+2489 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "José Adorno",
    "title": "Hands-on: iOS 16’s new Dictation feature adds auto-punctuation, emoji support, more",
    "description": "iOS 16 is finally out. One of the most interesting features of this new operating system is all about accessibility. With iOS 16, the Dictation function got even better as it now can bring auto-punctation, emoji support, and even more. Here’s what you need to…",
    "url": "https://9to5mac.com/2022/09/13/ios-16-dictation-feature-hands-on/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/dictation.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2022-09-13T17:33:29Z",
    "content": "iOS 16 is finally out. One of the most interesting features of this new operating system is all about accessibility. With iOS 16, the Dictation function got even better as it now can bring auto-punct… [+2168 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "Filipe Espósito",
    "title": "iOS 16 brings a new iPhone lock screen, but there are still some things you can’t change",
    "description": "iOS 16 is finally here, and it comes with a new, customizable lock screen for iPhone. For the first time, iPhone users can not only create multiple lock screens with different wallpapers, but also change aspects of the interface such as the font, colors, and …",
    "url": "https://9to5mac.com/2022/09/12/ios-16-new-iphone-lock-screen-things-you-cant-change/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/iOS-16-iPhone-lock-screen-things-you-cant-change.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2022-09-13T01:25:49Z",
    "content": "iOS 16 is finally here, and it comes with a new, customizable lock screen for iPhone. For the first time, iPhone users can not only create multiple lock screens with different wallpapers, but also ch… [+2730 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "José Adorno",
    "title": "Sonos unveils more affordable Sub Mini with Beam and Ray soundbar pairing",
    "description": "Today, Sonos announced a new, more affordable Sub Mini subwoofer that, according to the company, delivers “bold bass for smaller-sized rooms.” It features the same design as the Sub series in a more compact option. The new subwoofer will be available in matte…",
    "url": "https://9to5mac.com/2022/09/13/sonos-sub-mini-beam-ray-pairing/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/sonos-sub-mini.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2022-09-13T15:26:13Z",
    "content": "Today, Sonos announced a new, more affordable Sub Mini subwoofer that, according to the company, delivers “bold bass for smaller-sized rooms.” It features the same design as the Sub series in a more … [+1951 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5Mac"
    },
    "author": "José Adorno",
    "title": "How to add custom icons and Contacts to your new iOS 16 Lock Screen",
    "description": "Do you remember when you could make your iPhone Home Screen aesthetic with iOS 14? With iOS 16 finally out there, now you can take your Lock Screen to the next level with more customization than ever.\nTo help you with that, a developer created two specific ap…",
    "url": "https://9to5mac.com/2022/09/13/custom-icons-contacts-ios-16-lock-screen/",
    "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/app.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2022-09-13T13:44:08Z",
    "content": "Do you remember when you could make your iPhone Home Screen aesthetic with iOS 14? With iOS 16 finally out there, now you can take your Lock Screen to the next level with more customization than ever… [+1757 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Genbeta.com"
    },
    "author": "Antonio Vallejo",
    "title": "Prime Video supera en costes a cualquier otra plataforma de streaming: la lenta y compleja carrera de Amazon hacia el éxito",
    "description": "Las métricas que expone Amazon con su plataforma Prime Video son un tanto complejas si las comparamos con otras plataformas de streaming como Netflix, HBO Max, Disney+ y compañía. Esto es debido a que su servicio no se centra únicamente en ofrecer una platafo…",
    "url": "https://www.genbeta.com/actualidad/prime-video-supera-costes-a-cualquier-otra-plataforma-streaming-lenta-compleja-carrera-amazon-exito",
    "urlToImage": "https://i.blogs.es/763251/1366_2000-1-/840_560.jpeg",
    "publishedAt": "2022-09-13T16:31:51Z",
    "content": "Las métricas que expone Amazon con su plataforma Prime Video son un tanto complejas si las comparamos con otras plataformas de streaming como Netflix, HBO Max, Disney+ y compañía. Esto es debido a qu… [+5141 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Genbeta.com"
    },
    "author": "Marcos Merino",
    "title": "\"Tras autohospedar mi correo durante 23 años, he tirado la toalla\": este CEO lamenta que el email sea ahora un oligopolio",
    "description": "El pasado mes de marzo te explicábamos los planes de la Unión Europea para quitar poder a grandes tecnológicas como Apple y Facebook imponiendo por ley la interoperabilidad entre servicios de mensajería instantánea: es decir, que en el futuro los usuarios de …",
    "url": "https://www.genbeta.com/correo/autohospedar-mi-correo-durante-23-anos-he-tirado-toalla-este-ceo-lamenta-que-email-sea-ahora-oligopolio",
    "urlToImage": "https://i.blogs.es/2048f6/muerte_del_email/840_560.jpg",
    "publishedAt": "2022-09-13T14:53:55Z",
    "content": "El pasado mes de marzo te explicábamos los planes de la Unión Europea para quitar poder a grandes tecnológicas como Apple y Facebook imponiendo por ley la interoperabilidad entre servicios de mensaje… [+5200 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Andrew Orr)",
    "title": "Compared: Apple Watch Series 8 versus new Apple Watch SE",
    "description": "Apple released the Apple Watch Series 8 alongside an updated Apple Watch SE on September 7. Here's how they compare with one another.Left: Apple Watch SE. Right: Apple Watch Series 8The Apple Watch SE is an affordable model for buyers on a budget or parents w…",
    "url": "https://appleinsider.com/inside/apple-watch-series-8/vs/compared-apple-watch-series-8-versus-new-apple-watch-se",
    "urlToImage": "https://photos5.appleinsider.com/gallery/50351-98940-Apple-Watch-SE-and-Apple-Watch-Series-8-xl.jpg",
    "publishedAt": "2022-09-13T17:44:02Z",
    "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+8829 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Amber Neely)",
    "title": "New video shows how Crash Detection works on iPhone 14 and Apple Watch",
    "description": "Apple has shared a new video that explains how its new Crash Detection feature can detect serious car crashes and alert emergency responders automatically.The feature relies on the high dynamic range gyroscope, accelerometer, GPS, barometer, and microphone. U…",
    "url": "https://appleinsider.com/articles/22/09/13/new-video-shows-how-crash-detection-works-on-iphone-14-and-apple-watch",
    "urlToImage": "https://photos5.appleinsider.com/gallery/50364-98979-How-to-use-Crash-Detection-on-iPhone-and-Apple-Watch-_-Apple-Support-0-12-screenshot-xl.jpg",
    "publishedAt": "2022-09-13T01:57:54Z",
    "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1324 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (William Gallagher)",
    "title": "Apple Watch Ultra battery is much larger than Series 8's",
    "description": "New regulatory filings show that the Apple Watch Ultra has a battery that is 76% larger than that in the Series 8, and more than double the size of the small Apple Watch SE.Apple prefers to talk about battery life in terms of hours of usage, and at launch it …",
    "url": "https://appleinsider.com/articles/22/09/13/apple-watch-ultra-battery-is-much-larger-than-series-8s",
    "urlToImage": "https://photos5.appleinsider.com/gallery/50372-98996-000-lead-Apple-Watch-Ultra-xl.jpg",
    "publishedAt": "2022-09-13T14:04:24Z",
    "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1410 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Malcolm Owen)",
    "title": "How Apple Watch low power mode works, and what it turns off",
    "description": "Low Power Mode is in watchOS 9, extending the battery life of the Apple Watch by reducing overall power usage. Here's how to activate it, and what it turns off.Low Power Mode enabled on an Apple WatchThe Apple Watch is designed to be worn as much as possible,…",
    "url": "https://appleinsider.com/inside/watchos-9/tips/how-apple-watch-low-power-mode-works-and-what-it-turns-off",
    "urlToImage": "https://photos5.appleinsider.com/gallery/50373-98999-low-power-mode-2-xl.jpg",
    "publishedAt": "2022-09-13T13:32:33Z",
    "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+2503 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Andrew Orr)",
    "title": "High demand for iPhone 14 Pro line crashed Chinese servers",
    "description": "High demand for the iPhone 14 Pro and iPhone 14 Pro Max led to Apple server crashes in China as consumers placed over two million preorders in 24 hours.iPhone 14 Pro and iPhone 14 Pro MaxConsumers placed the preorders through the official Apple Store on JD.co…",
    "url": "https://appleinsider.com/articles/22/09/13/high-demand-for-iphone-14-pro-line-crashed-chinese-servers",
    "urlToImage": "https://photos5.appleinsider.com/gallery/50378-99005-iPhone-14-Pro---Pro-Max-xl.jpg",
    "publishedAt": "2022-09-13T16:39:17Z",
    "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1353 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Christine McKee)",
    "title": "Daily deals Sept. 13 - $30 off AirPods, $150 off Samsung Odyssey 27-inch Monitor, $50 off Shure Motiv Mic for iOS, more!",
    "description": "Tuesday's best deals include an Apple Watch Series 7 for $400, an 8TB WD My Book external drive for $165, a Logitech G432 headset for $35, and more.Best deals for September 13Every day, AppleInsider searches online retailers to find offers and discounts on it…",
    "url": "https://appleinsider.com/articles/22/09/13/daily-deals-sept-13---30-off-airpods-150-off-samsung-odyssey-27-inch-monitor-50-off-shure-motiv-mic-for-ios-more",
    "urlToImage": "https://photos5.appleinsider.com/gallery/50367-98995-deals-sept-13b-xl.jpg",
    "publishedAt": "2022-09-13T12:04:19Z",
    "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1630 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (William Gallagher)",
    "title": "Phil Schiller puts App Store users before developers & profits",
    "description": "A profile of Phil Schiller claims that his insistence on the best user experience in the App Store is putting him at odds with Apple's business people.Apple's Phil Schiller stepped down as senior vice president of Worldwide Marketing in 2020, to take on the m…",
    "url": "https://appleinsider.com/articles/22/09/13/phil-schiller-puts-app-store-users-before-developers-profits",
    "urlToImage": "https://photos5.appleinsider.com/gallery/50374-99000-000-lead-Phil-Schiller-d2-xl.jpg",
    "publishedAt": "2022-09-13T14:02:43Z",
    "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+3385 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Amber Neely)",
    "title": "Apple TV+ hit 'Ted Lasso' wins Emmy for Outstanding Comedy Series",
    "description": "Apple TV+ took home eight Emmys on Monday night, including four earned by the popular sports comedy \"Ted Lasso.\"The critically acclaimed series took home the win for Outstanding Comedy Series as well as three additional awards.Jason Sudeikis took home the win…",
    "url": "https://appleinsider.com/articles/22/09/13/apple-tv-hit-ted-lasso-wins-emmy-for-outstanding-comedy-series",
    "urlToImage": "https://photos5.appleinsider.com/gallery/40473-77970-yeikes-xl.jpg",
    "publishedAt": "2022-09-13T04:27:35Z",
    "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+934 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (William Gallagher)",
    "title": "iPhone 14 battery replacement costs a lot more than iPhone 13",
    "description": "Getting Apple to replace your iPhone 14 battery will now cost $99, up from the $69 the company has been charging for years.Apple made a big point of surprising people by keeping the prices of the new iPhone 14 range the same as last year's iPhone 13 models — …",
    "url": "https://appleinsider.com/articles/22/09/13/iphone-14-battery-replacement-costs-a-lot-more-than-iphone-13",
    "urlToImage": "https://photos5.appleinsider.com/gallery/50371-98993-000-lead-iPhone-14-xl.jpg",
    "publishedAt": "2022-09-13T11:28:31Z",
    "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1887 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (William Gallagher)",
    "title": "Battery percentage won't show on all iPhones with iOS 16",
    "description": "Although Apple brought back the option for a battery percentage icon in iOS 16, it has now confirmed that several iPhones will not be able to display it.The battery percentage returned in iOS 16, for some iPhonesEvery iPhone until 2017's iPhone X had the abil…",
    "url": "https://appleinsider.com/articles/22/09/13/battery-percentage-wont-show-on-all-iphones-with-ios-16",
    "urlToImage": "https://photos5.appleinsider.com/gallery/49783-97540-battery-xl.jpg",
    "publishedAt": "2022-09-13T09:45:56Z",
    "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1394 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Malcolm Owen)",
    "title": "Supply chain gearing up to ship new MacBook Pro",
    "description": "The Apple supply chain is now preparing to start shipping new MacBook Pro models, at the same time that shipments of current models are starting to slip.Apple is expected to hold a second special fall event in October, one that will likely feature the Mac and…",
    "url": "https://appleinsider.com/articles/22/09/13/supply-chain-gearing-up-to-ship-new-macbook-pro",
    "urlToImage": "https://photos5.appleinsider.com/gallery/50370-98991-49470-96736-49290-96297-48858-95528-M2-in-the-air-xl-xl-xl-xl.jpg",
    "publishedAt": "2022-09-13T10:49:56Z",
    "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+1516 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Andrew Orr)",
    "title": "How to enable the the haptic keyboard in iOS 16",
    "description": "In iOS 16 Apple introduced Haptic Feedback to the iPhone keyboard. Here's how to use it.The iPhone keyboardApple first introduced haptic feedback to the iPhone with the Taptic Engine in iPhone 7. It powered 3D Touch using slight vibrations in the physical dev…",
    "url": "https://appleinsider.com/inside/ios-16/tips/how-to-enable-the-the-haptic-keyboard-in-ios-16",
    "urlToImage": "https://photos5.appleinsider.com/gallery/50255-98715-iPhone-keyboard-xl.jpg",
    "publishedAt": "2022-09-13T16:37:26Z",
    "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+2053 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Malcolm Owen)",
    "title": "Compared: iPhone 14 vs iPhone 14 Pro",
    "description": "Apple made considerable upgrades to the iPhone 14 Pro while making fewer than usual to the iPhone 14. Here's how the two similar-sized flagship iPhone models differ.iPhone 14 (left) and the iPhone 14 Pro (right)Apple's bold strategy for its 2022 iPhones was a…",
    "url": "https://appleinsider.com/inside/iphone-14/vs/compared-iphone-14-vs-iphone-14-pro",
    "urlToImage": "https://photos5.appleinsider.com/gallery/50348-98951-iphone-14-vs-pro-xl.jpg",
    "publishedAt": "2022-09-13T11:55:44Z",
    "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+12850 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Christine McKee)",
    "title": "New price drops: save up to $1,100 on LG UltraFine OLED Pro 4K monitors for content creators",
    "description": "LG's professional-grade UltraFine OLED Pro displays are heavily discounted this week, offering content professionals true 10-bit color and 99% Adobe RGB color gamut coverage in your choice of 27-inch or 32-inch sizes.LG UltraFine OLED Pro monitors for Mac are…",
    "url": "https://appleinsider.com/articles/22/09/13/new-price-drops-save-up-to-1100-on-lg-ultrafine-oled-pro-4k-monitors-for-content-creators",
    "urlToImage": "https://photos5.appleinsider.com/gallery/50377-99006-lg-ultrafine-oled-pro-monitors-xl.jpg",
    "publishedAt": "2022-09-13T18:23:22Z",
    "content": "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+2169 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Gizmodo.jp"
    },
    "author": "小暮ひさのり",
    "title": "watchOS 9の目玉機能。Apple Watchの「低電力モード」の設定方法",
    "description": "Apple Watchの新OS、watchOS 9ではさまざまな機能が追加されましたが、個人的注目度MAXなのが節電機能「低電力モード」。その低電力モードの設定方法をご紹介します。",
    "url": "https://www.gizmodo.jp/2022/09/watcchos-9-apple-watch-low-power-mode.html",
    "urlToImage": "https://assets.media-platform.com/gizmodo/dist/images/2022/09/13/2022-09-13Apk00-w960.jpg",
    "publishedAt": "2022-09-13T09:00:00Z",
    "content": "Apple Watch\r\nApple WatchOSwatchOS 9MAX\r\nApple Watch\r\nImage: Apple\r\nImage: Apple\r\nAppleApple Watch Series 836\r\nApple Watch Series 41Watch\r\nSource: Apple"
    },
    {
    "source": {
    "id": null,
    "name": "Gizmodo.jp"
    },
    "author": "はらいさん",
    "title": "watchOS 9にアップデートすると、すべてのApple WatchでNike文字盤が使えるようになるよ",
    "description": "watchOS 9では5種類のNike文字盤が使えるようになった。",
    "url": "https://www.gizmodo.jp/2022/09/apple-watch-nike-display.html",
    "urlToImage": "https://assets.media-platform.com/gizmodo/dist/images/2022/09/10/Apple-Watch-S8-Nike-7up-hero-220907-w960.jpg",
    "publishedAt": "2022-09-13T04:00:00Z",
    "content": "Apple WatchNikeApple Watch NikewatchOS 9Apple Watch Nike\r\nAppleHERMESNikeApple Watch NikeNike\r\nApple Watch NikeApple WatchNikeNikeNike Run ClubNike\r\nwatchOS 9Series 4NikeApple Watch\r\nHERMESHERMES\r\nSo… [+11 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNET"
    },
    "author": "Imad Khan",
    "title": "These New iPhone 14 Features Have Been on Android for Years - CNET",
    "description": "The iPhone 14 Pro's always-on display and the redesigned punchhole screen design are only new for Apple's phones.",
    "url": "https://www.cnet.com/tech/mobile/these-new-iphone-14-features-have-been-on-android-for-years/",
    "urlToImage": "https://www.cnet.com/a/img/resize/339251ad116ba09b49b69419a5b0f3e4abbbc81f/2022/09/07/4b4c351d-1b4c-49b6-93c5-2001b329e6bf/iphone-14-pro-camera-closeup.jpg?auto=webp&fit=bounds&height=630&precrop=2647,1390,x0,y0&width=1200",
    "publishedAt": "2022-09-13T18:36:47Z",
    "content": "This story is part of Focal Point iPhone 2022, CNET's collection of news, tips and advice around Apple's most popular product. \r\nApple touted a lot of firsts at its iPhone 14 event last week, but tho… [+5685 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yanko Design"
    },
    "author": "Ida Torres",
    "title": "Minimalist Radio Desk gives you Braun vibes while bringing music from the airwaves",
    "description": "Minimalist Radio Desk gives you Braun vibes while bringing music from the airwavesWith things like Spotify, Apple Music, Pandora, etc, listening to your favorite music and podcasts have never been more accessible. You just open your smartphone...",
    "url": "https://www.yankodesign.com/2022/09/13/minimalist-radio-desk-gives-you-braun-vibes-while-bringing-music-from-the-airwaves/",
    "urlToImage": "https://www.yankodesign.com/images/design_news/2022/09/vintage-minimalist-radio-desk-concept-brings-music-from-the-airwaves/radio-desk.jpeg",
    "publishedAt": "2022-09-13T17:10:34Z",
    "content": "With things like Spotify, Apple Music, Pandora, etc, listening to your favorite music and podcasts have never been more accessible. You just open your smartphone or whatever device and you can alread… [+2040 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "Thomas Estimbre",
    "title": "Dynamic Island : Apple n’a rien inventé, LG avait déjà eu l’idée",
    "description": "Si Apple a marqué les esprits avec Dynamic Island sur les iPhone 14 Pro, ce n’est pas totalement une nouveauté. Il y a sept ans, LG avait déjà imaginé une fonction similaire sur son V10.\nDynamic Island : Apple n’a rien inventé, LG avait déjà eu l’idée",
    "url": "https://www.journaldugeek.com/2022/09/13/dynamic-island-apple-na-rien-invente-lg-avait-deja-eu-lidee/",
    "urlToImage": "https://www.journaldugeek.com/content/uploads/2022/09/encoche-iphone-14-pro.jpg",
    "publishedAt": "2022-09-13T08:00:59Z",
    "content": "Si Apple a marqué les esprits avec Dynamic Island sur les iPhone 14 Pro, ce nest pas totalement une nouveauté. Il y a sept ans, LG avait déjà imaginé une fonction similaire sur son V10.Lors de la pré… [+3239 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "Amandine Jonniaux",
    "title": "La keynote d’Apple a fait mieux que les sites pornographiques",
    "description": "Pendant la keynote Apple, les audiences du site pornographique Pornhub se sont effondrées. \nLa keynote d’Apple a fait mieux que les sites pornographiques",
    "url": "https://www.journaldugeek.com/2022/09/13/la-keynote-dapple-a-fait-mieux-que-les-sites-pornographiques/",
    "urlToImage": "https://www.journaldugeek.com/content/uploads/2022/09/apple-iphone-14-iphone-14-plus-mains.jpg",
    "publishedAt": "2022-09-13T11:00:13Z",
    "content": "Pendant la keynote Apple, les audiences du site pornographique Pornhub se sont effondrées.La keynote de rentrée de la Pomme était attendue, mais sans grande surprise à l’horizon. En plus de sa quator… [+2115 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "Tristan",
    "title": "Remplacer la batterie de l’Iphone 14 coute plus cher que prévu",
    "description": "Apple a présenté mardi dernier ses nouveaux iPhone 14. Si les prix en France ont beaucoup augmenté, c'est aussi le cas pour les réparations. \nRemplacer la batterie de l’Iphone 14 coute plus cher que prévu",
    "url": "https://www.journaldugeek.com/2022/09/13/remplacer-la-batterie-de-liphone-14-coute-plus-cher-que-prevu/",
    "urlToImage": "https://www.journaldugeek.com/content/uploads/2022/09/iphone14-apple.jpg",
    "publishedAt": "2022-09-13T12:00:45Z",
    "content": "Apple a présenté mardi dernier ses nouveaux iPhone 14. Si les prix en France ont beaucoup augmenté, c'est aussi le cas pour les réparations.Lors de lannonce de liPhone 14 mardi dernier, Apple nest pa… [+2502 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "Julie Hay",
    "title": "Emmy Awards : les plateformes se disputent le titre de fabrique à succès",
    "description": "Les plateformes se livrent bataille devant l'Academy of Televison Arts and Sciences. Quelle plateforme est la plus récompensée ? \nEmmy Awards : les plateformes se disputent le titre de fabrique à succès",
    "url": "https://www.journaldugeek.com/2022/09/13/emmy-awards-les-plateformes-se-disputent-le-titre-de-fabrique-a-succes/",
    "urlToImage": "https://www.journaldugeek.com/content/uploads/2022/09/le-seigneur-des-anneaux-les-anneaux-de-pouvoir6.jpg",
    "publishedAt": "2022-09-13T09:30:53Z",
    "content": "Les plateformes se livrent bataille devant l'Academy of Televison Arts and Sciences. Quelle plateforme est la plus récompensée ?Depuis plusieurs années maintenant, les Emmy Awards ressemblent moins à… [+3186 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "Tristan",
    "title": "PixelBook : le projet d’ordinateur portable par Google abandonné ?",
    "description": "Les PixelBook auront eu le droit à deux modèles, un en 2017, un en 2019, mais la production en restera là assure The Verge. \nPixelBook : le projet d’ordinateur portable par Google abandonné ?",
    "url": "https://www.journaldugeek.com/2022/09/13/pixelbook-le-projet-dordinateur-portable-par-google-abandonne/",
    "urlToImage": "https://www.journaldugeek.com/content/uploads/2021/10/google-logo.jpg",
    "publishedAt": "2022-09-13T13:30:51Z",
    "content": "Les PixelBook auront eu le droit à deux modèles, un en 2017, un en 2019, mais la production en restera là assure The Verge.Google vient de confirmer la mort du PixelBook. Présenté pour la première fo… [+2244 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "Arthur Nicolle",
    "title": "Elden Ring s’attaque aux plateformes musicales : GoTY et Grammy ?",
    "description": "Fort de son succès, le dernier souls-like de FromSoftware part conquérir de nouveaux horizons tout en musique.\nElden Ring s’attaque aux plateformes musicales : GoTY et Grammy ?",
    "url": "https://www.journaldugeek.com/2022/09/13/elden-ring-sattaque-aux-plateformes-musicales-goty-et-grammy/",
    "urlToImage": "https://www.journaldugeek.com/content/uploads/2021/10/template-jdg-2021-10-18t165104-139.jpg",
    "publishedAt": "2022-09-13T06:01:24Z",
    "content": "Fort de son succès, le dernier souls-like de FromSoftware part conquérir de nouveaux horizons tout en musique.Elden Ring est dans la course pour être sacré jeu de lannée 2022, mais il ny a pas que so… [+1850 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Jesús Quesada",
    "title": "El cargador doble MagSafe plegable de Apple es un chollo en MediaMarkt con esta gran rebaja: carga tu iPhone 14 y Apple Watch",
    "description": "Ya queda menos para que empiecen a llegar los primeros iPhone 14 a sus afortunados compradores. Los días previos se suelen adquirir accesorios para acompañar a los nuevos dispositivos, como fundas o cargadores. En MediaMarkt se puede comprar el cargador doble…",
    "url": "https://www.applesfera.com/seleccion/cargador-doble-magsafe-plegable-apple-chollo-mediamarkt-esta-gran-rebaja-carga-tu-iphone-14-apple-watch",
    "urlToImage": "https://i.blogs.es/2ac075/cargador-magsafe/840_560.jpg",
    "publishedAt": "2022-09-13T12:01:49Z",
    "content": "Ya queda menos para que empiecen a llegar los primeros iPhone 14 a sus afortunados compradores. Los días previos se suelen adquirir accesorios para acompañar a los nuevos dispositivos, como fundas o … [+1240 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Jesús Quesada",
    "title": "Consigue un Apple Watch con función ECG por 100 euros menos y cuida tu salud durante el nuevo curso",
    "description": "Aunque ya se puede reservar el Apple Watch Series 8 y Apple Watch Ultra, que llegarán en unos días a los primeros compradores, no hay que olvidarse de las anteriores generaciones; sobre todo si ofrecen muchas de las características de los nuevos modelos y tam…",
    "url": "https://www.applesfera.com/seleccion/consigue-apple-watch-funcion-ecg-100-euros-cuida-tu-salud-durante-nuevo-curso",
    "urlToImage": "https://i.blogs.es/3c5e93/apple-watch-series-6-oferta/840_560.jpg",
    "publishedAt": "2022-09-13T07:00:42Z",
    "content": "Aunque ya se puede reservar el Apple Watch Series 8 y Apple Watch Ultra, que llegarán en unos días a los primeros compradores, no hay que olvidarse de las anteriores generaciones; sobre todo si ofrec… [+1920 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "David Bernal Raspall",
    "title": "Cómo funciona exactamente el modo de bajo consumo de watchOS 9 en el Apple Watch",
    "description": "Una de las novedades estrella de watchOS 9 es el nuevo modo de bajo consumo. Un modo con el que la batería de nuestros relojes, ya hablemos del nuevo Apple Watch Series 8 o del Apple Watch Ultra, durará mucho, mucho más. Un modo, sin embargo, que también desa…",
    "url": "https://www.applesfera.com/apple-watch/como-funciona-exactamente-modo-consumo-watchos-9-apple-watch",
    "urlToImage": "https://i.blogs.es/1cb16a/hero/840_560.jpeg",
    "publishedAt": "2022-09-13T08:49:09Z",
    "content": "Una de las novedades estrella de watchOS 9 es el nuevo modo de bajo consumo. Un modo con el que la batería de nuestros relojes, ya hablemos del nuevo Apple Watch Series 8 o del Apple Watch Ultra, dur… [+2458 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Miguel López",
    "title": "iOS 16 estrena una nueva respuesta háptica para el teclado del iPhone: así puedes activarla",
    "description": "Esto no es una sorpresa porque ya lo descubrimos con las betas, pero sigue siendo una de esas novedades que debería merecer más mención por parte de Apple. Con iOS 16, ahora el teclado de los iPhone tiene una nueva respuesta háptica muy, muy cómoda. Viene des…",
    "url": "https://www.applesfera.com/ios/ios-16-estrena-nueva-respuesta-haptica-para-teclado-iphone-asi-puedes-activarla",
    "urlToImage": "https://i.blogs.es/ad840d/teclado-iphone/840_560.jpeg",
    "publishedAt": "2022-09-13T13:52:21Z",
    "content": "Esto no es una sorpresa porque ya lo descubrimos con las betas, pero sigue siendo una de esas novedades que debería merecer más mención por parte de Apple. Con iOS 16, ahora el teclado de los iPhone … [+717 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "David Bernal Raspall",
    "title": "La pantalla siempre encendida de los iPhone 14 Pro también se apaga (de forma inteligente). Así funciona",
    "description": "Cuando supimos que los iPhone 14 Pro tendrían soporte para la pantalla siempre encendida, algo que se planteó es el tema de la duración de la batería. Y directamente relacionado con ello está la cuestión de que hay diferentes circunstancias en las que tener l…",
    "url": "https://www.applesfera.com/iphone/pantalla-siempre-encendida-iphone-14-pro-tambien-se-apaga-forma-inteligente-asi-funciona",
    "urlToImage": "https://i.blogs.es/7b8483/captura-de-pantalla-2022-09-13-a-las-9.16.29/840_560.png",
    "publishedAt": "2022-09-13T07:17:25Z",
    "content": "Cuando supimos que los iPhone 14 Pro tendrían soporte para la pantalla siempre encendida, algo que se planteó es el tema de la duración de la batería. Y directamente relacionado con ello está la cues… [+1515 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Javier Lacort",
    "title": "watchOS 9 trae las esferas de Nike a cualquier Apple Watch... y hay una que me ha convencido",
    "description": "Una de las novedades tardías de watchOS 9 es que, puesto que ya no hay un nuevo Apple Watch Nike a la venta, y ya hace años que Apple \"liberó\" las correas de esta edición, ahora las esferas de Nike pasan a ofrecerse para cualquier Apple Watch siempre y cuando…",
    "url": "https://www.applesfera.com/juegos-para-ios/watchos-9-trae-esferas-nike-a-cualquier-apple-watch-hay-que-me-ha-convencido",
    "urlToImage": "https://i.blogs.es/b048c9/nike-v2/840_560.jpeg",
    "publishedAt": "2022-09-13T17:09:27Z",
    "content": "Una de las novedades tardías de watchOS 9 es que, puesto que ya no hay un nuevo Apple Watch Nike a la venta, y ya hace años que Apple \"liberó\" las correas de esta edición, ahora las esferas de Nike p… [+3694 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Miguel López",
    "title": "Clean Energy Charging: una nueva sorpresa para iOS 16 que busca reducir el impacto ambiental de cargar el iPhone",
    "description": "Seguimos dándonos cuenta de algunas nuevas funciones de iOS 16 que Apple no había revelado hasta ahora que el sistema está disponible para todo el mundo. En la nota de prensa oficial del lanzamiento de iOS 16 se describe un modo llamado 'Clean Energy Charging…",
    "url": "https://www.applesfera.com/ios/clean-energy-charging-nueva-sorpresa-para-ios-16-que-busca-reducir-impacto-ambiental-cargar-iphone",
    "urlToImage": "https://i.blogs.es/d9bb2e/captura-de-pantalla-2022-09-13-a-las-12.35.01/840_560.jpeg",
    "publishedAt": "2022-09-13T10:55:48Z",
    "content": "Seguimos dándonos cuenta de algunas nuevas funciones de iOS 16 que Apple no había revelado hasta ahora que el sistema está disponible para todo el mundo. En la nota de prensa oficial del lanzamiento … [+1596 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Miguel López",
    "title": "Nuevos MacBook Pro el mes que viene: los proveedores ya se están preparando según DigiTimes",
    "description": "Aún estamos saliendo de una semana repleta de novedades y ya hay rumores sobre lo que se viene, y no va a tardar en venir. DigiTimes informa que los proveedores están reduciendo el ritmo de producción de los modelos actuales de Mac en anticipo a nuevos modelo…",
    "url": "https://www.applesfera.com/portatil/nuevos-macbook-pro-mes-que-viene-proveedores-se-estan-preparando-digitimes",
    "urlToImage": "https://i.blogs.es/544e49/1366_2000-2/840_560.jpeg",
    "publishedAt": "2022-09-13T16:15:50Z",
    "content": "Aún estamos saliendo de una semana repleta de novedades y ya hay rumores sobre lo que se viene, y no va a tardar en venir. DigiTimes informa que los proveedores están reduciendo el ritmo de producció… [+975 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Applesfera.com"
    },
    "author": "Miguel López",
    "title": "iOS 16 ya te puede leer texto en euskera, gallego, valenciano y catalán: Siri empieza a acercarse a las lenguas regionales",
    "description": "La llegada de iOS 16 ha hecho que todos empecemos a escudriñar sus detalles más ocultos, y ya son varios los que se han topado con una grata sorpresa: el sistema es ahora capaz de leernos contenidos en varios idiomas regionales españoles. Son el catalán, el v…",
    "url": "https://www.applesfera.com/ios/ios-16-te-puede-leer-texto-euskera-gallego-valenciano-catalan-siri-empieza-a-acercarse-a-lenguas-regionales",
    "urlToImage": "https://i.blogs.es/df913e/siri-catalan-valenciano-euskera-gallego/840_560.jpeg",
    "publishedAt": "2022-09-13T09:51:47Z",
    "content": "La llegada de iOS 16 ha hecho que todos empecemos a escudriñar sus detalles más ocultos, y ya son varios los que se han topado con una grata sorpresa: el sistema es ahora capaz de leernos contenidos … [+1514 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MakeUseOf"
    },
    "author": "Kegan Mooney",
    "title": "Double Your Charging Speed With the UGREEN Nexode 140W GaN Charger",
    "description": "With fast charging speeds and less energy required, the UGREEN Nexode 140W charger is definitely worth a look.",
    "url": "https://www.makeuseof.com/ugreen-nexode-140w-gan-charger/",
    "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/09/UGREEN-Nexode-140W.jpg",
    "publishedAt": "2022-09-13T11:00:13Z",
    "content": "Are you fed up with waiting for your devices to charge? The Ugreen Nexode 140W GaN Charger uses the new PD 3.1 charging protocol to reach incredible speeds, offering a whole new level of charging pow… [+2715 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Phandroid - News for Android"
    },
    "author": "Tyler Lee",
    "title": "Here’s hoping Android phones will adopt this green iOS 16 feature soon",
    "description": "It appears that one of the features of iOS 16 is “Clean Energy Charging”, a feature that we hope Android phones could adopt in the future.\nThe post Here’s hoping Android phones will adopt this green iOS 16 feature soon first appeared on Phandroid.",
    "url": "https://phandroid.com/2022/09/12/heres-hoping-android-phones-will-adopt-this-green-ios-16-feature-soon/",
    "urlToImage": "https://phandroid.com/wp-content/uploads/2022/03/Xiaomi-12-Review-Charging-640x427.jpeg",
    "publishedAt": "2022-09-13T00:33:34Z",
    "content": "So it isn’t uncommon for phone makers these days to tout how green their phones are, and by that we mean environmentally friendly. We’re talking about packaging that might use recycled paper/cardboar… [+1280 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Phandroid - News for Android"
    },
    "author": "Tyler Lee",
    "title": "How to completely disable Bixby on Samsung Galaxy",
    "description": "Bixby is Samsung’s answer to digital assistants like Google Assistant, Siri, And Alexa. It might not necessarily be the best but it can get in the way, and if you’d like to remove Bixby from your Samsung phone, then this is what you need to do.\nThe post How t…",
    "url": "https://phandroid.com/2022/09/13/how-to-completely-disable-bixby-on-samsung-galaxy/",
    "urlToImage": "https://phandroid.com/wp-content/uploads/2017/07/bixby-voice-phone-640x446.png",
    "publishedAt": "2022-09-13T12:00:29Z",
    "content": "We get it. Samsung wants to be just like the other tech companies like Apple, Google, Amazon, and so on, all of whom have their own digital assistants. So much so that Samsung launched Bixby, their a… [+1849 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Presse-citron"
    },
    "author": "RPB",
    "title": "iPhone : iOS 16 permet enfin de voir le mot de passe des réseaux WiFi",
    "description": "Apple change la gestion des réseaux WiFi avec la mise à jour iOS 16. Il devient possible de gérer vos anciennes connexions sans se trouver à proximité, et même de voir leur mot de passe en clair.",
    "url": "https://www.presse-citron.net/iphone-ios-16-permet-enfin-de-voir-le-mot-de-passe-des-reseaux-wifi/",
    "urlToImage": "https://www.presse-citron.net/app/uploads/2022/06/Apple-iOS-16-affichage.jpg",
    "publishedAt": "2022-09-13T15:00:45Z",
    "content": "iOS, le système d’exploitation des iPhone, est dérivé de macOS, le système d’exploitation propriétaire des Mac. Mais contrairement à ce dernier, certaines fonctionnalités, comme la gestion des réseau… [+2553 chars]"
    }
    ]
    
  constructor(){
    super();
    console.log("hello");
    this.state= {
        articles: this.articles,
        loading: false
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6ce0936ddef14f18b0145199da2f41c5";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData); 
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (  
      <div className="container my-3">
        <h2>NEWSMONEY TOP NEWS</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                <Newsitem  title = {element.title?element.title:""} description={element.description?element.description:""} 
                imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>  
        })}
        </div>
        <div className="container">
        <button type="button" class="btn btn-dark">previos</button>
        <button type="button" class="btn btn-dark">Next</button>
        </div>
      </div>
    )
  }
}

export default News
