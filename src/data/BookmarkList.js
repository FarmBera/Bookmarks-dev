const BookmarkList_old = [
  {
    name: "Parsec",
    domain: "https://parsec.app/downloads",
    folder: "Utility",
  },
  {
    name: "Discord",
    domain: "https://discord.com/channels/@me",
    folder: "Community",
  },
  {
    name: "Tidal",
    domain: "https://listen.tidal.com/",
    folder: "Utility",
  },
  {
    name: "Gmail",
    domain: "https://mail.google.com/mail/u/0/",
    folder: "Online Tools",
  },
  {
    name: "NAVER Mail",
    domain: "https://mail.naver.com/",
    folder: "Online Tools",
  },
  {
    name: "Google Calendar",
    domain: "https://calendar.google.com/calendar/u/0/r",
    folder: "Online Tools",
  },
  {
    name: "YouTube Studio",
    domain: "https://studio.youtube.com/",
    folder: "Online Tools",
  },
  {
    name: "iCloud",
    domain: "https://www.icloud.com/",
    folder: "Online Tools",
  },
  {
    name: "NAVER MYBOX",
    domain: "https://cloud.naver.com/#/my",
    folder: "Online Tools",
  },
  {
    name: "Apple Music",
    domain: "https://music.apple.com/kr/browse",
    folder: "Online Tools",
  },
  {
    name: "Brave",
    domain: "https://brave.com/download/",
    folder: "Online Tools",
  },
  {
    name: "OBS Studio",
    domain: "https://obsproject.com/download",
    folder: "Online Tools",
  },
  {
    name: "PUBG",
    domain: "https://pubg.game.daum.net/pubg/index.daum",
    folder: "Game",
  },
  {
    name: "Voicemeeter",
    domain: "https://vb-audio.com/Voicemeeter/potato.htm",
    folder: "Utility",
  },
  // GPTs
  {
    name: "ChatGPT",
    domain: "https://chat.openai.com/",
    folder: "GPTs",
  },
  {
    name: "Claude",
    domain: "https://claude.ai/chats",
    folder: "GPTs",
  },
  {
    name: "Copilot",
    domain: "https://www.bing.com/chat?q=Bing+AI&FORM=hpcodx",
    folder: "GPTs",
  },
  {
    name: "Gemini",
    domain: "https://gemini.google.com/app",
    folder: "GPTs",
  },
  {
    // TODO: search icon
    name: "wrtn",
    domain: "https://wrtn.ai/",
    folder: "GPTs",
  },
  {
    name: "CLOVA X",
    domain: "https://clova-x.naver.com/",
    folder: "GPTs",
  },
  // Search Engine
  {
    name: "Google",
    domain: "https://www.google.com/",
    folder: "Search Engine",
  },
  {
    name: "Kagi Search",
    domain: "https://kagi.com/",
    folder: "Search Engine",
  },
  {
    name: "Bing",
    domain: "https://www.bing.com/",
    folder: "Search Engine",
  },
  {
    name: "Yahoo",
    domain: "https://www.yahoo.com/",
    folder: "Search Engine",
  },
  {
    name: "Yandex",
    domain: "https://yandex.com/",
    folder: "Search Engine",
  },
  {
    name: "Google Trends",
    domain: "https://trends.google.co.kr/trends/?geo=KR",
    folder: "Search Engine",
  },
  {
    name: "DuckDuckGo",
    domain: "https://duckduckgo.com/",
    folder: "Search Engine",
  },
  {
    name: "Daum",
    domain: "https://m.daum.net/?nil_top=mobile",
    folder: "Search Engine",
  },
  // Community
  {
    name: "Reddit",
    domain: "https://www.reddit.com/",
    folder: "Community",
  },
  {
    name: "크집사 - Cafe",
    icon: "Daum Cafe",
    domain: "https://cafe.daum.net/claireluvcat",
    folder: "Community",
  },
  {
    name: "X (Twitter)",
    domain: "https://x.com/",
    folder: "Community",
  },
  {
    name: "N Cafe",
    domain: "https://section.cafe.naver.com/ca-fe/",
    folder: "Community",
  },
  {
    name: "Clien",
    domain: "https://www.clien.net/service/",
    folder: "Community",
  },
  {
    name: "Instagram",
    domain: "https://www.instagram.com/",
    folder: "Community",
  },
  {
    name: "ArtStation",
    domain: "https://www.artstation.com/?sort_by=community",
    folder: "Community",
  },
  {
    name: "Facebook",
    domain: "https://www.facebook.com/",
    folder: "Community",
  },
  {
    name: "DG Inven",
    domain: "http://m.inven.co.kr/destinyguardians/",
    folder: "Community",
  },
  {
    name: "Gigglehd",
    domain: "https://gigglehd.com/gg/",
    folder: "Community",
  },
  {
    name: "Meeco",
    domain: "https://meeco.kr/index.php?act=dispMemberLoginForm",
    folder: "Community",
  },
  {
    name: "coolenjoy",
    domain: "https://coolenjoy.net/",
    folder: "Community",
  },
  {
    name: "Deviantart",
    domain: "https://www.deviantart.com/",
    folder: "Community",
  },
  {
    name: "Remiz Space",
    domain: "https://remiz.co.kr/index.php",
    folder: "Community",
  },
  {
    name: "Home | BAND",
    domain: "https://band.us/",
    folder: "Community",
  },
  // Utility
  {
    name: "HancomWeb",
    domain: "https://space.malangmalang.com/drive",
    folder: "Utility",
  },
  {
    name: "MSOfficeWeb",
    domain: "https://www.office.com/?flight=unauthrefresh&auth=1",
    folder: "Utility",
  },
  {
    name: "HTMLColorPicker",
    domain: "https://www.w3schools.com/colors/colors_picker.asp",
    folder: "Utility",
  },
  {
    name: "Kakao Map",
    domain: "https://map.kakao.com/",
    folder: "Utility",
  },
  {
    name: "NAVER Map",
    domain:
      "https://map.naver.com/v5/?c=14149525.3667629,448960.7664716,15,0,0,0,dh",
    folder: "Utility",
  },
  {
    name: "DeepL",
    domain: "https://www.deepl.com/translator",
    folder: "Utility",
  },
  {
    name: "Bitly",
    domain: "https://app.bitly.com/",
    folder: "Utility",
  },
  {
    name: "Downdetector",
    domain: "https://downdetector.com/",
    folder: "Utility",
  },
  {
    name: "Cymatics.fm",
    domain: "https://cymatics.fm/",
    folder: "Utility",
  },
  {
    name: "AudioJungle",
    domain: "https://audiojungle.net/",
    folder: "Utility",
  },
  {
    name: "Pinterest",
    domain: "https://www.pinterest.co.kr/",
    folder: "Utility",
  },
  {
    name: "TISTORY",
    domain: "https://www.tistory.com/",
    folder: "Utility",
  },
  {
    name: "링키드",
    domain: "https://linkid.pw/myParty",
    folder: "Utility",
  },
  {
    name: "SoundCloud",
    domain: "https://soundcloud.com/",
    folder: "Utility",
  },
  {
    name: "Apple System Status",
    domain: "https://www.apple.com/kr/support/systemstatus/",
    folder: "Utility",
  },
  {
    name: "Apple Silicon Games",
    domain: "https://applesilicongames.com/",
    folder: "Utility",
  },
  {
    name: "KeyTest",
    domain:
      "https://www.google.com/search?client=safari&rls=en&q=eytest+online&ie=UTF-8&oe=UTF-8&safari_group=9",
    folder: "Utility",
  },
  {
    name: "Splice",
    domain: "https://splice.com/home",
    folder: "Utility",
  },
  {
    name: "UserBenchmark",
    domain: "https://www.userbenchmark.com/",
    folder: "Utility",
  },
  {
    name: "TuneMyMusic",
    domain: "https://www.tunemymusic.com/ko/",
    folder: "Utility",
  },
  {
    name: "MEGA",
    domain: "https://mega.nz/fm/NeY3FYxC",
    folder: "Utility",
  },
  {
    name: "Mapianist",
    domain: "https://m.mapianist.com/",
    folder: "Utility",
  },
  {
    name: "네이버 메모",
    domain: "https://m.memo.naver.com/",
    folder: "Utility",
  },
  // Entertainment
  {
    name: "YouTube",
    domain: "https://www.youtube.com/",
    folder: "Entertainment",
  },
  {
    name: "크집사 즐겨찾기",
    domain:
      "https://youtube.com/playlist?list=PL5xWjgTr1g8j4fbHSnzxdWCP-pHtE6mKg&si=lmDb63dcJ39Pyo2R",
    folder: "Entertainment",
  },
  {
    name: "Claire Luvcat",
    domain: "https://www.youtube.com/@claire_luvcat",
    folder: "Entertainment",
  },
  {
    name: "크집사빨간맛",
    domain: "https://www.youtube.com/@claire_luvhot/streams",
    folder: "Entertainment",
  },
  {
    name: "TETR.IO",
    domain: "https://tetr.io/",
    folder: "Entertainment",
  },
  {
    name: "NAVER Webtoon",
    domain: "https://m.comic.naver.com/index.nhn",
    folder: "Entertainment",
  },
  {
    name: "Netfilx",
    domain: "https://www.netflix.com/kr/",
    folder: "Entertainment",
  },
  {
    name: "Watcha",
    domain: "https://play.watcha.net/",
    folder: "Entertainment",
  },
  {
    name: "Interpark",
    domain: "https://www.interpark.com/",
    folder: "Entertainment",
  },
  {
    name: "GamsGo",
    domain: "https://ko.gamsgo.com/",
    folder: "Entertainment",
  },
  {
    name: "GamsGo Sub",
    domain: "https://ko.gamsgo.com/subscription",
    folder: "Entertainment",
  },
  // News
  {
    name: "Apple",
    domain: "https://www.apple.com/kr/",
    folder: "News",
  },
  {
    name: "PlanKim",
    domain: "https://plankim.com/",
    folder: "News",
  },
  {
    name: "Google News",
    domain: "https://news.google.com/foryou",
    folder: "News",
  },
  {
    name: "Quasarzone",
    domain: "https://quasarzone.com/",
    folder: "News",
  },
  {
    name: "MacRumors",
    domain: "https://www.macrumors.com/",
    folder: "News",
  },
  {
    name: "삼성디스플레이 뉴스룸",
    domain: "http://news.samsungdisplay.com/",
    folder: "News",
  },
  {
    name: "노우나우",
    domain: "https://nounow.net/",
    folder: "News",
  },
  {
    name: "ITWorld Kr",
    domain: "https://www.itworld.co.kr/main/",
    folder: "News",
  },
  {
    name: "수방사",
    domain: "https://www.subangsa.com/home",
    folder: "News",
  },
  {
    name: "Material IT",
    domain: "https://itmaterial.co.kr/bbs/board.php?bo_table=news",
    folder: "News",
  },
  {
    name: "CardGorilla",
    domain: "https://www.card-gorilla.com/home",
    folder: "News",
  },
  {
    name: "Cnet News",
    domain: "https://www.cnet.com/tech/",
    folder: "News",
  },
  {
    name: "Gizmodo",
    domain: "https://gizmodo.com/",
    folder: "News",
  },
  {
    name: "UNDERkg",
    domain: "http://underkg.co.kr/",
    folder: "News",
  },
  {
    name: "Korea IT Times",
    domain: "http://www.koreaittimes.com/",
    folder: "News",
  },
  {
    name: "MBVGA Benchmark List",
    domain:
      "https://www.notebookcheck.net/Mobile-Graphics-Cards-enchmark-List.844.0.html",
    folder: "News",
  },
  {
    name: "VideoCardz",
    domain: "https://videocardz.com/",
    folder: "News",
  },
  {
    name: "Wccftech",
    domain: "https://wccftech.com/",
    folder: "News",
  },
  {
    name: "TechPowerUp",
    domain: "https://www.techpowerup.com/",
    folder: "News",
  },
  {
    name: "플랜김",
    domain: "https://plankim.com/",
    folder: "News",
  },
  {
    name: "AUDIOMAGAZINE",
    domain: "http://audiomagazine.co.kr/",
    folder: "News",
  },
  {
    name: "0db",
    domain: "https://www.0db.co.kr/",
    folder: "News",
  },
  {
    name: "Investing",
    domain: "https://www.investing.com/",
    folder: "News",
  },
  {
    name: "Forbes",
    domain: "https://www.forbes.com/home_asia/",
    folder: "News",
  },
  {
    name: "Techplus",
    domain: "https://tech-plus.co.kr/",
    folder: "News",
  },
  // Shopping
  {
    name: "Danawa",
    domain: "http://www.danawa.com/",
    folder: "Shopping",
  },
  {
    name: "Compuzone",
    domain: "http://www.compuzone.co.kr/main/main.htm",
    folder: "Shopping",
  },
  {
    name: "Oversystem",
    domain: "https://oversystem.co.kr/",
    folder: "Shopping",
  },
  {
    name: "Coupang",
    domain: "https://www.coupang.com/",
    folder: "Shopping",
  },
  {
    name: "Auction",
    domain: "http://auction.co.kr/",
    folder: "Shopping",
  },
  // Online Tools
  {
    name: "File Transfer Time Calculator",
    domain: "https://techinternets.com/copy_calc?do",
    folder: "Online Tools",
  },
  {
    name: "lifeofpix",
    domain: "https://www.lifeofpix.com/",
    folder: "Online Tools",
  },
  {
    name: "Notepad",
    domain: "https://www.rapidtables.com/tools/notepad.html",
    folder: "Online Tools",
  },
  {
    name: "Convertio",
    domain: "https://convertio.co/kr/",
    folder: "Online Tools",
  },
  {
    name: "Bottleneck Calculator",
    domain:
      "https://pc-builds.com/calculator/Core_i7-10700K/GeForce_TX_3080/0Yd174/",
    folder: "Online Tools",
  },
  {
    name: "WebGradients",
    domain: "https://webgradients.com/",
    folder: "Online Tools",
  },
  {
    name: "XELF",
    domain: "https://xelf.io/",
    folder: "Online Tools",
  },
  {
    name: "LifeOfPix-Picture",
    domain: "https://www.lifeofpix.com/",
    folder: "Online Tools",
  },
  {
    // OPERATIONiDROID
    name: "Radio Garden – Seoul",
    domain: "http://radio.garden/visit/seoul/kxEs9l2m",
    folder: "Online Tools",
  },
  {
    name: "클로바더빙",
    domain: "https://clovadubbing.naver.com/",
    folder: "Online Tools",
  },
  {
    name: "Google Translate",
    domain: "https://translate.google.com/",
    folder: "Online Tools",
  },
  {
    name: "D live",
    domain: "http://www.dokdo.re.kr:11081/popup/home/popup/dokdo_lie.html",
    folder: "Online Tools",
  },
  {
    name: "Pitch.com",
    domain: "https://pitch.com/",
    folder: "Online Tools",
  },
  {
    name: "EmojiPedia",
    domain: "https://emojipedia.org/",
    folder: "Online Tools",
  },
  {
    name: "PlaceIt",
    domain: "https://placeit.net/",
    folder: "Online Tools",
  },
  {
    name: "Clicking Speed Test",
    domain: "https://cookie.riimu.net/speed/",
    folder: "Online Tools",
  },
  {
    name: "Online C Compiler",
    domain: "http://repl.it/languages/c",
    folder: "Online Tools",
  },
  {
    name: "double click mouse test page",
    domain: "https://codepen.io/blink172/pen/vERyxK",
    folder: "Online Tools",
  },
  {
    name: "PIXLR",
    domain: "https://pixlr.com/x/",
    folder: "Online Tools",
  },
  {
    name: "눈누-Fonts",
    domain: "https://noonnu.cc/",
    folder: "Online Tools",
  },
  {
    name: "Pixlr",
    domain: "https://pixlr.com/kr/",
    folder: "Online Tools",
  },
  {
    name: "SoundCloud Downloader",
    domain: "https://sclouddownloader.net/",
    folder: "Online Tools",
  },
  {
    name: "WebTools hi098123",
    domain: "https://hi098123.tistory.com/pages/tools",
    folder: "Online Tools",
  },
  {
    name: "vClock",
    domain: "https://vclock.com/",
    folder: "Online Tools",
  },
  {
    name: "remove.bg",
    domain: "https://www.remove.bg/ko",
    folder: "Online Tools",
  },
  {
    name: "인크루트 맞춤법",
    domain: "https://www.incruit.com/tools/spell/",
    folder: "Online Tools",
  },
  {
    name: "SaveMP3",
    domain: "https://savemp3.app/en/",
    folder: "Online Tools",
  },
  {
    name: "hwp to PDF",
    domain: "https://allinpdf.com/hwp-to-pdf",
    folder: "Online Tools",
  },
  {
    name: "Mbps to MB/s",
    domain: "https://www.gbmb.org/mbps-to-mbs",
    folder: "Online Tools",
  },
  {
    name: "Cargo",
    domain: "https://cargo.site/",
    folder: "Online Tools",
  },
  {
    name: "GIF Maker",
    domain: "https://gifmaker.me/",
    folder: "Online Tools",
  },
  {
    name: "2Color Combinations",
    domain: "https://2colors.colorion.co/",
    folder: "Online Tools",
  },
  {
    name: "OperationDroid",
    domain: "http://operationidroid.com/minimalsetup",
    folder: "Online Tools",
  },
  {
    name: "Online Latex Editor - Sciweavers",
    domain: "http://www.sciweavers.org/free-online-latex-equation-edior",
    folder: "Online Tools",
  },
  {
    name: "Online LaTeX Editor",
    domain: "https://latex.codecogs.com/eqneditor/editor.php",
    folder: "Online Tools",
  },
  {
    name: "ASCII table",
    domain: "https://www.ascii-code.com/",
    folder: "Online Tools",
  },
  {
    name: "Detexify LaTeX symbol table",
    domain: "https://detexify.kirelabs.org/symbols.html",
    folder: "Online Tools",
  },
  // Game
  {
    name: "Apex News",
    domain: "https://www.ea.com/ko-kr/games/apex-legends/news",
    folder: "Game",
  },
  {
    name: "Origin",
    domain: "https://www.origin.com/kor/ko-kr/store",
    folder: "Game",
  },
  {
    name: "DIM",
    domain: "https://app.destinyitemmanager.com/",
    folder: "Game",
  },
  {
    name: "Bungie",
    domain: "https://www.bungie.net/ko",
    folder: "Game",
  },
  {
    name: "Pearl Abyss",
    domain: "https://www.pearlabyss.com/ko-KR",
    folder: "Game",
  },
  {
    name: "osu!",
    domain: "https://osu.ppy.sh/home",
    folder: "Game",
  },
  {
    name: "Simulacrum (apx)",
    domain: "https://polaris5023.tistory.com/173",
    folder: "Game",
  },
  {
    name: "Loba & Revenant (apx)",
    domain: "https://polaris5023.tistory.com/172",
    folder: "Game",
  },
  {
    name: "Crypto Story (apx)",
    domain: "https://polaris5023.tistory.com/174",
    folder: "Game",
  },
  {
    name: "SiLeNtWaLkEr",
    domain: "https://destinyemblemwallpapers.com/destiny2/desktp/emblems",
    folder: "Game",
  },
  {
    name: "Zombs Royale",
    domain: "https://zombsroyale.io/",
    folder: "Game",
  },
  {
    name: "Tetris",
    domain: "https://tetris.com/play-tetris/",
    folder: "Entertainment",
  },
  {
    name: "Most Popular PC Games | Newzoo",
    domain: "https://newzoo.com/insights/rankings/top-20-pc-games/",
    folder: "Game",
  },
  {
    name: "GeForce NOW",
    domain: "https://play.geforcenow.com/",
    folder: "Game",
  },
  {
    name: "Steam",
    domain: "https://store.steampowered.com/",
    folder: "Game",
  },
  {
    name: "EpicGames",
    domain: "https://www.epicgames.com/store/ko/",
    folder: "Game",
  },
  {
    name: "GeeGee",
    domain: "https://geegee.net/ko/news",
    folder: "Game",
  },
  {
    name: "9Minecraft",
    domain: "http://www.9minecraft.net/",
    folder: "Game",
  },
  {
    name: "발로그",
    domain: "https://valog.gg/",
    folder: "Game",
  },
  {
    name: "Chunker",
    domain: "https://chunker.app/#",
    folder: "Game",
  },
  // Edu
  {
    name: "표준국어대사전",
    domain: "https://stdict.korean.go.kr/search/searchDetailWord.do",
    folder: "Edu",
  },
  {
    name: "KR Dic",
    domain: "https://ko.dict.naver.com/?version=2#/main",
    folder: "Edu",
  },
  {
    name: "Papago",
    domain: "https://papago.naver.com/",
    folder: "Edu",
  },
  {
    name: "영어사전",
    domain: "https://en.dict.naver.com/#/main",
    folder: "Edu",
  },
  {
    name: "EN dic",
    domain: "https://endic.naver.com/main.nhn",
    folder: "Edu",
  },

  {
    name: "Tinkercad",
    domain:
      "https://www.tinkercad.com/dashboard?type=circuis&collection=designs",
    folder: "Edu",
  },
];

const BookmarkList = [
  {
    name: "Parsec",
    domain: "https://parsec.app/downloads",
    folder: "Utils",
  },
  {
    name: "Discord",
    domain: "https://discord.com/channels/@me",
    folder: "Community",
  },
  {
    name: "Tidal",
    domain: "https://listen.tidal.com/",
    folder: "Utils",
  },
  {
    name: "Gmail",
    domain: "https://mail.google.com/mail/u/0/",
    folder: "Utils",
  },
  {
    name: "NAVER Mail",
    domain: "https://mail.naver.com/",
    folder: "Utils",
  },
  {
    name: "Google Calendar",
    domain: "https://calendar.google.com/calendar/u/0/r",
    folder: "Utils",
  },
  {
    name: "YouTube Studio",
    domain: "https://studio.youtube.com/",
    folder: "Utils",
  },
  {
    name: "iCloud",
    domain: "https://www.icloud.com/",
    folder: "Utils",
  },
  {
    name: "NAVER MYBOX",
    domain: "https://cloud.naver.com/#/my",
    folder: "Utils",
  },
  {
    name: "Apple Music",
    domain: "https://music.apple.com/kr/browse",
    folder: "Utils",
  },
  {
    name: "Brave",
    domain: "https://brave.com/download/",
    folder: "Utils",
  },
  {
    name: "OBS Studio",
    domain: "https://obsproject.com/download",
    folder: "Utils",
  },
  {
    name: "PUBG",
    domain: "https://pubg.game.daum.net/pubg/index.daum",
    folder: "Game",
  },
  {
    name: "Voicemeeter",
    domain: "https://vb-audio.com/Voicemeeter/potato.htm",
    folder: "Utils",
  },
  // Imported
  {
    name: "ChatGPT",
    domain: "https://chatgpt.com/",
    folder: "GPTs",
  },
  {
    name: "Claude",
    domain: "https://claude.ai/chats",
    folder: "GPTs",
  },
  {
    name: "Perplexity",
    domain: "https://www.perplexity.ai/",
    folder: "GPTs",
  },
  {
    name: "Copilot",
    domain: "https://www.bing.com/chat?q=Bing+AI&FORM=hpcodx",
    folder: "GPTs",
  },
  {
    name: "Gemini",
    domain: "https://gemini.google.com/app",
    folder: "GPTs",
  },
  {
    name: "wrtn",
    domain: "https://wrtn.ai/",
    folder: "GPTs",
  },
  {
    name: "CLOVA X",
    domain: "https://clova-x.naver.com/",
    folder: "GPTs",
  },
  {
    name: "Google",
    domain: "https://www.google.com/",
    folder: "Search",
  },
  {
    name: "Kagi Search",
    domain: "https://kagi.com/",
    folder: "Search",
  },
  {
    name: "NAVER",
    domain: "https://www.naver.com/",
    folder: "Search",
  },
  {
    name: "Bing",
    domain: "https://www.bing.com/",
    folder: "Search",
  },
  {
    name: "Yahoo",
    domain: "https://www.yahoo.com/",
    folder: "Search",
  },
  {
    name: "Yandex",
    domain: "https://yandex.com/",
    folder: "Search",
  },
  {
    name: "Google Trends",
    domain: "https://trends.google.co.kr/trends/?geo=KR",
    folder: "Search",
  },
  {
    name: "DuckDuckGo",
    domain: "https://duckduckgo.com/",
    folder: "Search",
  },
  {
    name: "Daum",
    domain: "https://m.daum.net/?nil_top=mobile",
    folder: "Search",
  },
  {
    name: "M NAVER",
    domain: "https://m.naver.com/",
    folder: "Search",
  },
  {
    name: "ArtStation",
    domain: "https://www.artstation.com/",
    folder: "Community",
  },
  {
    name: "Clien",
    domain: "https://www.clien.net/service/",
    folder: "Community",
  },
  {
    name: "Coolenjoy",
    domain: "https://coolenjoy.net/",
    folder: "Community",
  },
  {
    name: "dcinside",
    domain: "https://m.dcinside.com/",
    folder: "Community",
  },
  {
    name: "Deviantart",
    domain: "https://www.deviantart.com/",
    folder: "Community",
  },
  {
    name: "DG 인벤",
    domain: "http://m.inven.co.kr/destinyguardians/",
    folder: "Community",
  },
  {
    name: "Facebook",
    domain: "https://www.facebook.com/",
    folder: "Community",
  },
  {
    name: "Gigglehd",
    domain: "https://gigglehd.com/gg/",
    folder: "Community",
  },
  {
    name: "Home | BAND",
    domain: "https://band.us/",
    folder: "Community",
  },
  {
    name: "Instagram",
    domain: "https://www.instagram.com/",
    folder: "Community",
  },
  {
    name: "Meeco",
    domain: "https://meeco.kr/index.php?act=dispMemberLoginForm",
    folder: "Community",
  },
  {
    name: "N Cafe",
    domain: "https://section.cafe.naver.com/ca-fe/",
    folder: "Community",
  },
  {
    name: "Quasarzone",
    domain: "https://quasarzone.co.kr/",
    folder: "Community",
  },
  {
    name: "Reddit",
    domain: "https://www.reddit.com/",
    folder: "Community",
  },
  {
    name: "Remiz Space",
    domain: "https://remiz.co.kr/index.php",
    folder: "Community",
  },
  {
    name: "Twitter",
    domain: "https://twitter.com/home",
    folder: "Community",
  },
  {
    name: "크집사 - DaumCafe",
    domain: "https://cafe.daum.net/claireluvcat",
    folder: "Community",
  },
  {
    name: "Docs Transfer",
    domain: "https://docstransfer.com/",
    folder: "Utils",
  },
  {
    name: "NAVER MYBOX",
    domain: "https://cloud.naver.com/#/my",
    folder: "Utils",
  },
  {
    name: "Apple System Status",
    domain: "https://www.apple.com/kr/support/systemstatus/",
    folder: "Utils",
  },
  {
    name: "Arc Resources",
    domain:
      "https://browserinc.notion.site/Arc-Resources-e5dfd3226b2544b0816f6778b32fc6a4",
    folder: "Utils",
  },
  {
    name: "AudioJungle",
    domain: "https://audiojungle.net/",
    folder: "Utils",
  },
  {
    name: "Cymatics.fm",
    domain: "https://cymatics.fm/",
    folder: "Utils",
  },
  {
    name: "DeepL",
    domain: "https://www.deepl.com/translator",
    folder: "Utils",
  },
  {
    name: "Downdetector",
    domain: "https://downdetector.com/",
    folder: "Utils",
  },
  {
    name: "Firebase Console",
    domain: "https://console.firebase.google.com/u/0/?hl=ko",
    folder: "Utils",
  },
  {
    name: "Google One",
    domain: "https://one.google.com/",
    folder: "Utils",
  },
  {
    name: "HancomWeb",
    domain: "https://space.malangmalang.com/drive",
    folder: "Utils",
  },
  {
    name: "Kakao Map",
    domain: "https://map.kakao.com/",
    folder: "Utils",
  },
  {
    name: "KT (My)",
    domain: "https://my.kt.com/main.jsp",
    folder: "Utils",
  },
  {
    name: "KT 링투유",
    domain: "https://ringtoyou.kt.com/oem/index.do",
    folder: "Utils",
  },
  {
    name: "Mapianist",
    domain: "https://m.mapianist.com/",
    folder: "Utils",
  },
  {
    name: "MEE6 (Discord Bot)",
    domain: "https://mee6.xyz/en/dashboard",
    folder: "Utils",
  },
  {
    name: "MEGA",
    domain: "https://mega.nz/fm/NeY3FYxC",
    folder: "Utils",
  },
  {
    name: "Microsoft Designer",
    domain: "https://designer.microsoft.com/",
    folder: "Utils",
  },
  {
    name: "MSOfficeWeb",
    domain: "https://www.office.com/?flight=unauthrefresh&auth=1",
    folder: "Utils",
  },
  {
    name: "MusicTube",
    domain:
      "https://www.youtube.com/channel/UC-uc1VfKx-XEEYbZSw-ZuWg/playlists",
    folder: "Utils",
  },
  {
    name: "N Mail",
    domain: "https://mail.naver.com/",
    folder: "Utils",
  },
  {
    name: "NAVER Map",
    domain: "https://map.naver.com/",
    folder: "Utils",
  },
  {
    name: "Pinterest",
    domain: "https://www.pinterest.co.kr/",
    folder: "Utils",
  },
  {
    name: "ROG Strix G17 (2023) | Gaming Laptops | ROG – Republic of Gamers | ROG Global",
    domain:
      "https://rog.asus.com/kr/laptops/rog-strix/rog-strix-g17-2023-series/helpdesk_download/",
    folder: "Utils",
  },
  {
    name: "SoundCloud",
    domain: "https://soundcloud.com/",
    folder: "Utils",
  },
  {
    name: "Splice",
    domain: "https://splice.com/home",
    folder: "Utils",
  },
  {
    name: "Suno",
    domain: "https://suno.com/",
    folder: "Utils",
  },
  {
    name: "TISTORY",
    domain: "https://www.tistory.com/",
    folder: "Utils",
  },
  {
    name: "TuneMyMusic",
    domain: "https://www.tunemymusic.com/ko/",
    folder: "Utils",
  },
  {
    name: "UserBenchmark",
    domain: "https://www.userbenchmark.com/",
    folder: "Utils",
  },
  {
    name: "유독 (LG U+)",
    domain: "https://www.lguplus.com/pogg/mypg",
    folder: "Utils",
  },
  {
    name: "클로바더빙",
    domain: "https://clovadubbing.naver.com/",
    folder: "Utils",
  },
  {
    name: "vClock",
    domain: "https://vclock.com/",
    folder: "Utils",
  },
  {
    name: "Dokdo Live",
    domain: "http://www.dokdo.re.kr:11081/popup/home/popup/dokdo_live.html",
    folder: "Entertainment",
  },
  {
    name: "GamsGo",
    domain: "https://www.gamsgo.com/subscription",
    folder: "Entertainment",
  },
  {
    name: "GFN.CO.KR",
    domain: "https://gfn.co.kr/",
    folder: "Entertainment",
  },
  {
    name: "KakaoPUBG",
    domain: "https://pubg.game.daum.net/pubg/index.daum",
    folder: "Entertainment",
  },
  {
    name: "Linkid",
    domain: "https://linkid.pw/",
    folder: "Entertainment",
  },
  {
    name: "N Webtoon",
    domain: "https://m.comic.naver.com/index.nhn",
    folder: "Entertainment",
  },
  {
    name: "netfilx",
    domain: "https://www.netflix.com/kr/",
    folder: "Entertainment",
  },
  {
    name: "TETR.IO",
    domain: "https://tetr.io/",
    folder: "Entertainment",
  },
  {
    name: "Tetris",
    domain: "https://tetris.com/play-tetris/",
    folder: "Entertainment",
  },
  {
    name: "Watcha",
    domain: "https://play.watcha.net/",
    folder: "Entertainment",
  },
  {
    name: "YouTube",
    domain: "https://www.youtube.com/",
    folder: "Entertainment",
  },
  {
    name: "Claire Luvcat",
    domain: "https://www.youtube.com/@claire_luvcat",
    folder: "Entertainment",
  },
  {
    name: "크집사 Fav",
    domain:
      "https://www.youtube.com/playlist?list=PL5xWjgTr1g8j4fbHSnzxdWCP-pHtE6mKg",
    folder: "Entertainment",
  },
  {
    name: "크집사빨간맛",
    domain: "https://www.youtube.com/@claire_luvhot/streams",
    folder: "Entertainment",
  },
  {
    name: "0db",
    domain: "https://www.0db.co.kr/",
    folder: "News",
  },
  {
    name: "Apple",
    domain: "https://www.apple.com/kr/",
    folder: "News",
  },
  {
    name: "AUDIOMAGAZINE",
    domain: "http://audiomagazine.co.kr/",
    folder: "News",
  },
  {
    name: "CardGorilla",
    domain: "https://www.card-gorilla.com/home",
    folder: "News",
  },
  {
    name: "Cnet News",
    domain: "https://www.cnet.com/tech/",
    folder: "News",
  },
  {
    name: "Forbes",
    domain: "https://www.forbes.com/home_asia/",
    folder: "News",
  },
  {
    name: "Gizmodo",
    domain: "https://gizmodo.com/",
    folder: "News",
  },
  {
    name: "Google News",
    domain: "https://news.google.com/foryou",
    folder: "News",
  },
  {
    name: "Investing",
    domain: "https://www.investing.com/",
    folder: "News",
  },
  {
    name: "ITWorld Kr",
    domain: "https://www.itworld.co.kr/main/",
    folder: "News",
  },
  {
    name: "Korea IT Times",
    domain: "http://www.koreaittimes.com/",
    folder: "News",
  },
  {
    name: "MacRumors",
    domain: "https://www.macrumors.com/",
    folder: "News",
  },
  {
    name: "Material IT",
    domain: "https://itmaterial.co.kr/bbs/board.php?bo_table=news",
    folder: "News",
  },
  {
    name: "MBVGA Benchmark List",
    domain:
      "https://www.notebookcheck.net/Mobile-Graphics-Cards-Benchmark-List.844.0.html",
    folder: "News",
  },
  {
    name: "Plankim",
    domain: "https://plankim.com/",
    folder: "News",
  },
  {
    name: "PlanKim",
    domain: "https://plankim.com/",
    folder: "News",
  },
  {
    name: "Quasarzone",
    domain: "https://quasarzone.com/",
    folder: "News",
  },
  {
    name: "SamsungDisplay NewsRoom",
    domain: "http://news.samsungdisplay.com/",
    folder: "News",
  },
  {
    name: "Techplus",
    domain: "https://tech-plus.co.kr/",
    folder: "News",
  },
  {
    name: "TechPowerUp",
    domain: "https://www.techpowerup.com/",
    folder: "News",
  },
  {
    name: "UNDERkg",
    domain: "http://underkg.co.kr/",
    folder: "News",
  },
  {
    name: "VideoCardz",
    domain: "https://videocardz.com/",
    folder: "News",
  },
  {
    name: "Wccftech",
    domain: "https://wccftech.com/",
    folder: "News",
  },
  {
    name: "수방사",
    domain: "https://www.subangsa.com/home",
    folder: "News",
  },
  {
    name: "Apple",
    domain: "https://www.apple.com/kr/",
    folder: "Shopping",
  },
  {
    name: "Auction",
    domain: "http://auction.co.kr/",
    folder: "Shopping",
  },
  {
    name: "Bottleneck Calculator",
    domain:
      "https://pc-builds.com/calculator/Core_i7-10700K/GeForce_RTX_3080/0Yd174/",
    folder: "Shopping",
  },
  {
    name: "Compuzone",
    domain: "http://www.compuzone.co.kr/main/main.htm",
    folder: "Shopping",
  },
  {
    name: "Coupang",
    domain: "https://www.coupang.com/",
    folder: "Shopping",
  },
  {
    name: "Danawa",
    domain: "http://www.danawa.com/",
    folder: "Shopping",
  },
  {
    name: "moyo",
    domain: "https://www.moyoplan.com/mypage",
    folder: "Shopping",
  },
  {
    name: "Oversystem",
    domain: "https://oversystem.co.kr/",
    folder: "Shopping",
  },
  {
    name: "2Color Combinations",
    domain: "https://2colors.colorion.co/",
    folder: "Tools",
  },
  {
    name: "ASCII table",
    domain: "https://www.ascii-code.com/",
    folder: "Tools",
  },
  {
    name: "Bitly",
    domain: "https://bitly.com/",
    folder: "Tools",
  },
  {
    name: "Cargo",
    domain: "https://cargo.site/",
    folder: "Tools",
  },
  {
    name: "Clicking Speed Test",
    domain: "https://cookie.riimu.net/speed/",
    folder: "Tools",
  },
  {
    name: "Convertio",
    domain: "https://convertio.co/kr/",
    folder: "Tools",
  },
  {
    name: "Detexify LaTeX symbol table",
    domain: "https://detexify.kirelabs.org/symbols.html",
    folder: "Tools",
  },
  {
    name: "double click mouse test page",
    domain: "https://codepen.io/blink172/pen/vERyxK",
    folder: "Tools",
  },
  {
    name: "EmojiPedia",
    domain: "https://emojipedia.org/",
    folder: "Tools",
  },
  {
    name: "File Transfer Time Calculator",
    domain: "https://techinternets.com/copy_calc?do",
    folder: "Tools",
  },
  {
    name: "GIF Maker",
    domain: "https://gifmaker.me/",
    folder: "Tools",
  },
  {
    name: "Google Translate",
    domain: "https://translate.google.com/",
    folder: "Tools",
  },
  {
    name: "HTMLColorPicker",
    domain: "https://www.w3schools.com/colors/colors_picker.asp",
    folder: "Tools",
  },
  {
    name: "hwp to PDF",
    domain: "https://allinpdf.com/hwp-to-pdf",
    folder: "Tools",
  },
  {
    name: "KeyTest",
    domain: "https://en.key-test.ru/",
    folder: "Tools",
  },
  {
    name: "lifeofpix",
    domain: "https://www.lifeofpix.com/",
    folder: "Tools",
  },
  {
    name: "LifeOfPix-Picture",
    domain: "https://www.lifeofpix.com/",
    folder: "Tools",
  },
  {
    name: "Mbps to MB/s",
    domain: "https://www.gbmb.org/mbps-to-mbs",
    folder: "Tools",
  },
  {
    name: "Notepad",
    domain: "https://www.rapidtables.com/tools/notepad.html",
    folder: "Tools",
  },
  {
    name: "Online C Compiler",
    domain: "http://repl.it/languages/c",
    folder: "Tools",
  },
  {
    name: "Online LaTeX Editor",
    domain: "https://latex.codecogs.com/eqneditor/editor.php",
    folder: "Tools",
  },
  {
    name: "Online Latex Editor - Sciweavers",
    domain: "http://www.sciweavers.org/free-online-latex-equation-editor",
    folder: "Tools",
  },
  {
    name: "OpenUI (dev)",
    domain: "https://openui.fly.dev/",
    folder: "Tools",
  },
  {
    name: "OperationDroid",
    domain: "http://operationidroid.com/minimalsetup",
    folder: "Tools",
  },
  {
    name: "Photopea",
    domain: "https://www.photopea.com/",
    folder: "Tools",
  },
  {
    name: "Pitch.com",
    domain: "https://pitch.com/",
    folder: "Tools",
  },
  {
    name: "Pixlr",
    domain: "https://pixlr.com/kr/",
    folder: "Tools",
  },
  {
    name: "PlaceIt",
    domain: "https://placeit.net/",
    folder: "Tools",
  },
  {
    name: "Radio Garden – Seoul",
    domain: "http://radio.garden/visit/seoul/kxEs9l2m",
    folder: "Tools",
  },
  {
    name: "remove.bg",
    domain: "https://www.remove.bg/ko",
    folder: "Tools",
  },
  {
    name: "SaveMP3",
    domain: "https://savemp3.app/en/",
    folder: "Tools",
  },
  {
    name: "SoundCloud Downloader",
    domain: "https://sclouddownloader.net/",
    folder: "Tools",
  },
  {
    name: "waifu2x",
    domain: "https://www.waifu2x.net/",
    folder: "Tools",
  },
  {
    name: "WebGradients",
    domain: "https://webgradients.com/",
    folder: "Tools",
  },
  {
    name: "WebTools hi098123",
    domain: "https://hi098123.tistory.com/pages/tools",
    folder: "Tools",
  },
  {
    name: "XELF",
    domain: "https://xelf.io/",
    folder: "Tools",
  },
  {
    name: "눈누-Fonts",
    domain: "https://noonnu.cc/",
    folder: "Tools",
  },
  {
    name: "인크루트",
    domain: "https://www.incruit.com/tools/spell/",
    folder: "Tools",
  },
  {
    name: "퍼센트 증감 계산기",
    domain:
      "http://mwultong.blogspot.com/2008/05/percent-increase-decrease-difference.html",
    folder: "Tools",
  },
  {
    name: "시뮬라크럼은 무엇인가",
    domain: "https://polaris5023.tistory.com/173",
    folder: "Game",
  },
  {
    name: "로바와 레버넌트의 이야기",
    domain: "https://polaris5023.tistory.com/172",
    folder: "Game",
  },
  {
    name: "크립토의 이야기",
    domain: "https://polaris5023.tistory.com/174",
    folder: "Game",
  },
  {
    name: "패스파인더의 이야기",
    domain: "https://polaris5023.tistory.com/171",
    folder: "Game",
  },
  {
    name: "Apex News & Update",
    domain: "https://www.ea.com/ko-kr/games/apex-legends/news",
    folder: "Game",
  },
  {
    name: "Apple Silicon Games",
    domain: "https://applesilicongames.com/",
    folder: "Game",
  },
  {
    name: "Bungie",
    domain: "https://www.bungie.net/ko",
    folder: "Game",
  },
  {
    name: "Chunker",
    domain: "https://chunker.app/#",
    folder: "Game",
  },
  {
    name: "DIM",
    domain: "https://app.destinyitemmanager.com/login",
    folder: "Game",
  },
  {
    name: "EpicGames",
    domain: "https://www.epicgames.com/store/ko/",
    folder: "Game",
  },
  {
    name: "GeeGee",
    domain: "https://geegee.net/ko/news",
    folder: "Game",
  },
  {
    name: "GeForce NOW",
    domain: "https://play.geforcenow.com/",
    folder: "Game",
  },
  {
    name: "Hero Wars (Online)",
    domain: "https://www.hero-wars.com/",
    folder: "Game",
  },
  {
    name: "Origin",
    domain: "https://www.origin.com/kor/ko-kr/store",
    folder: "Game",
  },
  {
    name: "osu!",
    domain: "https://osu.ppy.sh/home",
    folder: "Game",
  },
  {
    name: "Pearl Abyss",
    domain: "https://www.pearlabyss.com/ko-KR",
    folder: "Game",
  },
  {
    name: "SiLeNtWaLkEr",
    domain: "https://destinyemblemwallpapers.com/destiny2/desktop/emblems",
    folder: "Game",
  },
  {
    name: "Steam",
    domain: "https://store.steampowered.com/",
    folder: "Game",
  },
  {
    name: "Zombs Royale",
    domain: "https://zombsroyale.io/",
    folder: "Game",
  },
  {
    name: "발로그",
    domain: "https://valog.gg/",
    folder: "Game",
  },
  {
    name: "EN dic",
    domain: "https://endic.naver.com/main.nhn",
    folder: "Edu",
  },
  {
    name: "Google 번역",
    domain: "https://translate.google.com/?hl=ko&tab=TT",
    folder: "Edu",
  },
  {
    name: "KR Dic",
    domain: "https://ko.dict.naver.com/?version=2#/main",
    folder: "Edu",
  },
  {
    name: "Papago",
    domain: "https://papago.naver.com/",
    folder: "Edu",
  },
  {
    name: "Tinkercad",
    domain:
      "https://www.tinkercad.com/dashboard?type=circuits&collection=designs",
    folder: "Edu",
  },
  {
    name: "영어사전",
    domain: "https://en.dict.naver.com/#/main",
    folder: "Edu",
  },
  {
    name: "표준국어대사전",
    domain: "https://stdict.korean.go.kr/search/searchDetailWords.do",
    folder: "Edu",
  },
  {
    name: "KBS ON AIR",
    domain:
      "https://onair.kbs.co.kr/?sname=onair&stype=live&ch_code=24&ch_type=radioList&bora=on&chat=off",
    folder: "KBS Radio",
  },
  {
    name: "새아침의 클래식 > KBS 선곡표",
    domain:
      "https://program.kbs.co.kr/1fm/radio/mornclassic/pc/board.html?smenu=fbde62&bbs_loc=R2002-0281-03-240543,list,none,1,0",
    folder: "KBS Radio",
  },
  {
    name: "출발 FM과 함께 > KBS 선곡표",
    domain:
      "https://program.kbs.co.kr/1fm/radio/startfm/pc/board.html?smenu=0cc198&bbs_loc=R2002-0282-03-537648,list,none,1,0",
    folder: "KBS Radio",
  },
  {
    name: "세상의 모든 음악 > KBS 선곡표",
    domain:
      "https://program.kbs.co.kr/1fm/radio/musicall/pc/board.html?smenu=c1ef1a&bbs_loc=R2007-0077-03-821927,list,none,1,0",
    folder: "KBS Radio",
  },
  {
    name: "FM 실황음악 > KBS 선곡표",
    domain:
      "https://program.kbs.co.kr/1fm/radio/fmlive/pc/board.html?smenu=3d162d&bbs_loc=R2009-0087-03-584709,list,none,1,0",
    folder: "KBS Radio",
  },
  {
    name: "명연주 명음반 > KBS 선곡표",
    domain:
      "https://program.kbs.co.kr/1fm/radio/best/pc/board.html?smenu=2646b9&bbs_loc=R2002-0286-03-346636,list,none,1,0",
    folder: "KBS Radio",
  },
  {
    name: "송영훈의 가정음악 > KBS 선곡표",
    domain:
      "https://program.kbs.co.kr/1fm/radio/fmmusics/pc/board.html?smenu=5831ce&bbs_loc=R2019-0104-03-9865,list,none,1,0",
    folder: "KBS Radio",
  },
  {
    name: "Jazz 수첩 > KBS 선곡표",
    domain:
      "https://program.kbs.co.kr/1fm/radio/jass/pc/board.html?smenu=bc14e1&bbs_loc=R2002-0295-03-966295,list,none,1,0",
    folder: "KBS Radio",
  },
];

export default BookmarkList;
