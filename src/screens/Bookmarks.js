import "../styles/App.css";

import CreateLink from "../modules/CreateLink";

const size = 100;
const location = "../icon/Google.png";
// const location = "./logo.svg";

/** folder list
 * Browser
 * Favorite
 * Search
 * Social
 */
const icon_list = [
  {
    name: "Discord",
    domain: "https://discord.com/channels/@me",
    folder: "Favorite",
  },
  {
    name: "Tidal",
    domain: "https://listen.tidal.com/",
    folder: "",
  },
  {
    name: "Drive",
    domain: "https://drive.google.com/drive/u/0/my-drive",
    folder: "",
  },
  {
    name: "Gmail",
    domain: "https://mail.google.com/mail/u/0/",
    folder: "",
  },
  {
    name: "N Mail",
    domain: "https://mail.naver.com/",
    folder: "",
  },
  {
    name: "G Cal",
    domain: "https://calendar.google.com/calendar/u/0/r",
    folder: "",
  },
  {
    name: "Y-Studio",
    domain: "https://studio.youtube.com/",
    folder: "",
  },
  {
    name: "iCloud",
    domain: "https://www.icloud.com/",
    folder: "",
  },
  {
    name: "Quasarzone",
    domain: "https://quasarzone.com/",
    folder: "",
  },
  {
    name: "NAVER MYBOX",
    domain: "https://cloud.naver.com/#/my",
    folder: "",
  },
  {
    name: "Google Drive",
    domain: "https://drive.google.com/drive/",
    folder: "Favorite",
  },
  {
    name: "Apple Music",
    domain: "https://music.apple.com/kr/browse",
    folder: "",
  },
  {
    name: "Brave",
    domain: "https://brave.com/download/",
    folder: "Browser",
  },
  {
    name: "OBS Studio",
    domain: "https://obsproject.com/download",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "PUBG",
    domain: "https://pubg.game.daum.net/pubg/index.daum",
    folder: "",
  },
  // GPTs
  {
    name: "ChatGPT",
    domain: "https://chat.openai.com/",
    folder: "",
  },
  {
    name: "Claude",
    domain: "https://claude.ai/chats",
    folder: "",
  },
  {
    name: "Copilot",
    domain: "https://www.bing.com/chat?q=Bing+AI&FORM=hpcodx",
    folder: "",
  },
  {
    name: "Gemini",
    domain: "https://gemini.google.com/app",
    folder: "",
  },
  {
    // TODO: search icon
    name: "wrtn",
    domain: "https://wrtn.ai/",
    folder: "",
  },
  {
    // TODO: search
    name: "CLOVA X",
    domain: "https://clova-x.naver.com/",
    folder: "",
  },
  // Search Engine
  {
    name: "Google",
    domain: "https://www.google.com/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "Kagi Search",
    domain: "https://kagi.com/",
    folder: "",
  },
  {
    // TODO: Search Icon (square)
    name: "Bing",
    domain: "https://www.bing.com/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "Yahoo",
    domain: "https://www.yahoo.com/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "Yandex",
    domain: "https://yandex.com/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "Danawa",
    domain: "http://www.danawa.com/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "Google Trends",
    domain: "https://trends.google.co.kr/trends/?geo=KR",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "DuckDuckGo",
    domain: "https://duckduckgo.com/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "Daum",
    domain: "https://m.daum.net/?nil_top=mobile",
    folder: "",
  },
  // Community
  {
    name: "Reddit",
    domain: "https://www.reddit.com/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "크집사 - Cafe",
    domain: "https://cafe.daum.net/claireluvcat",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "Twitter",
    domain: "https://twitter.com/home",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "N Cafe",
    domain: "https://section.cafe.naver.com/ca-fe/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "Clien",
    domain: "https://www.clien.net/service/",
    folder: "",
  },
  {
    name: "Instagram",
    domain: "https://www.instagram.com/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "ArtStation",
    domain: "https://www.artstation.com/?sort_by=community",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "Facebook",
    domain: "https://www.facebook.com/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "ColorScale",
    domain: "https://colorscale.co.kr/",
    folder: "",
  },
  {
    // TODO: Search Icon (incen)
    name: "DG 인벤",
    domain: "http://m.inven.co.kr/destinyguardians/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "Gigglehd",
    domain: "https://gigglehd.com/gg/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "Meeco",
    domain: "https://meeco.kr/index.php?act=dispMemberLoginForm",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "쿨엔조이",
    domain: "https://coolenjoy.net/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "dcinside",
    domain: "https://m.dcinside.com/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "Deviantart",
    domain: "https://www.deviantart.com/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "Remiz Space",
    domain: "https://remiz.co.kr/index.php",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "Home | BAND",
    domain: "https://band.us/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "Quasarzone",
    domain: "https://quasarzone.co.kr/",
    folder: "",
  },
  // Utility
  {
    // TODO: Search Icon
    name: "HancomWeb",
    domain: "https://space.malangmalang.com/drive",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "MSOfficeWeb",
    domain: "<https://www.office.com/?flight=unauthrefresh&auth=1",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "HTMLColorPicker",
    domain: "<https://www.w3schools.com/colors/colors_picker.asp",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "카카오맵",
    domain: "https://map.kakao.com/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "vClock",
    domain: "https://vclock.com/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "NAVER Map",
    domain:
      "https://map.naver.com/v5/?c=14149525.3667629,448960.7664716,15,0,0,0,dh",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "DeepL",
    domain: "https://www.deepl.com/translator",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "Bitly",
    domain: "https://app.bitly.com/Bk17cytYx2i/bitlinks/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "Downdetector",
    domain: "https://downdetector.com/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "Cymatics.fm",
    domain: "https://cymatics.fm/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "AudioJungle",
    domain: "https://audiojungle.net/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "Pinterest",
    domain: "https://www.pinterest.co.kr/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "NAVER Mail",
    domain: "https://mail.naver.com/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "NAVER Cloud",
    domain: "https://cloud.naver.com/#/my",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "TISTORY",
    domain: "https://www.tistory.com/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "링키드",
    domain: "https://linkid.pw/myParty",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "SoundCloud",
    domain: "https://soundcloud.com/",
    folder: "",
  },
  {
    name: "Apple System Status",
    domain: "<https://www.apple.com/kr/support/systemstatus/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "Apple Silicon Games",
    domain: "https://applesilicongames.com/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "KeyTest",
    domain:
      "https://www.google.com/search?client=safari&rls=en&q=eytest+online&ie=UTF-8&oe=UTF-8&safari_group=9",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "Splice",
    domain: "https://splice.com/home",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "UserBenchmark",
    domain: "https://www.userbenchmark.com/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "TuneMyMusic",
    domain: "https://www.tunemymusic.com/ko/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "MEGA",
    domain: "https://mega.nz/fm/NeY3FYxC",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "Mapianist",
    domain: "https://m.mapianist.com/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "SiLeNtWaLkEr",
    domain: "https://destinyemblemwallpapers.com/destiny2/desktp/emblems",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "네이버 메모",
    domain: "https://m.memo.naver.com/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "ROG Strix G17 (2023) | Gaming Laptops | ROG – Republic of Gamers | ROG Global",
    domain:
      "https://rog.asus.com/kr/laptops/rog-strix/rog-strix-17-2023-series/helpdesk_download/",
    folder: "",
  },
  // Entertainment
  {
    // TODO: Search Icon
    name: "YouTube",
    domain: "https://www.youtube.com/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "크집사 Fav",
    domain:
      "https://www.youtube.com/playlist?list=PL5xWjgr1g8j4fbHSnzxdWCP-pHtE6mKg",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "크집사빨간맛",
    domain: "https://www.youtube.com/@claire_luvhot/streams",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "D Live",
    domain: "http://www.dokdo.re.kr:11081/popup/home/popup/dokdo_lie.html",
    folder: "",
  },
  {
    name: "Instagram",
    domain: "https://www.instagram.com/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "TETR.IO",
    domain: "https://tetr.io/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "N Webtoon",
    domain: "https://m.comic.naver.com/index.nhn",
    folder: "",
  },
  {
    name: "netfilx",
    domain: "https://www.netflix.com/kr/",
    folder: "",
  },
  {
    // TODO: Search Icon
    name: "Watcha",
    domain: "https://play.watcha.net/",
    folder: "",
  },
  // News
  {
    name: "Apple",
    domain: "https://www.apple.com/kr/",
    folder: "",
  },
  {
    name: "PlanKim",
    domain: "https://plankim.com/",
    folder: "",
  },
  {
    name: "Google News",
    domain: "https://news.google.com/foryou",
    folder: "",
  },
  {
    name: "Quasarzone",
    domain: "https://quasarzone.com/",
    folder: "",
  },
  {
    name: "MacRumors",
    domain: "https://www.macrumors.com/",
    folder: "",
  },
  {
    name: "삼성디스플레이 뉴스룸",
    domain: "http://news.samsungdisplay.com/",
    folder: "",
  },
  {
    name: "노우나우",
    domain: "https://nounow.net/",
    folder: "",
  },
  {
    name: "ITWorld Kr",
    domain: "https://www.itworld.co.kr/main/",
    folder: "",
  },
  {
    name: "수방사",
    domain: "https://www.subangsa.com/home",
    folder: "",
  },
  {
    name: "Material IT",
    domain: "<https://itmaterial.co.kr/bbs/board.php?bo_table=news",
    folder: "",
  },
  {
    name: "CardGorilla",
    domain: "https://www.card-gorilla.com/home",
    folder: "",
  },
  {
    name: "Cnet News",
    domain: "https://www.cnet.com/tech/",
    folder: "",
  },
  {
    name: "Gizmodo",
    domain: "https://gizmodo.com/",
    folder: "",
  },
  {
    name: "Google News",
    domain: "https://news.google.com/topstories",
    folder: "",
  },
  {
    name: "UNDERkg",
    domain: "http://underkg.co.kr/",
    folder: "",
  },
  {
    name: "Korea IT Times",
    domain: "http://www.koreaittimes.com/",
    folder: "",
  },
  {
    name: "MBVGA Benchmark List",
    domain:
      "https://www.notebookcheck.net/Mobile-Graphics-Cards-enchmark-List.844.0.html",
    folder: "",
  },
  {
    name: "VideoCardz",
    domain: "https://videocardz.com/",
    folder: "",
  },
  {
    name: "Wccftech",
    domain: "https://wccftech.com/",
    folder: "",
  },
  {
    name: "TechPowerUp",
    domain: "https://www.techpowerup.com/",
    folder: "",
  },
  {
    name: "플랜김",
    domain: "https://plankim.com/",
    folder: "",
  },
  {
    name: "AUDIOMAGAZINE",
    domain: "http://audiomagazine.co.kr/",
    folder: "",
  },
  {
    name: "0db",
    domain: "https://www.0db.co.kr/",
    folder: "",
  },
  {
    name: "Investing",
    domain: "https://www.investing.com/",
    folder: "",
  },
  {
    name: "Forbes",
    domain: "https://www.forbes.com/home_asia/",
    folder: "",
  },
  {
    name: "Techplus",
    domain: "https://tech-plus.co.kr/",
    folder: "",
  },
  // Shopping
  {
    name: "Compuzone",
    domain: "http://www.compuzone.co.kr/main/main.htm",
    folder: "",
  },
  {
    name: "Oversystem",
    domain: "https://oversystem.co.kr/",
    folder: "",
  },
  {
    name: "Danawa",
    domain: "http://www.danawa.com/",
    folder: "",
  },
  {
    name: "Compuzone",
    domain: "https://www.compuzone.co.kr/main/main.htm",
    folder: "",
  },
  {
    name: "MBVGA Benchmark List",
    domain:
      "https://www.notebookcheck.net/Mobile-Graphics-Cards-enchmark-List.844.0.html",
    folder: "",
  },
  {
    name: "Bottleneck Calculator",
    domain:
      "https://pc-builds.com/calculator/Core_i7-10700K/GeForce_TX_3080/0Yd174/",
    folder: "",
  },
  {
    name: "Coupang",
    domain: "https://www.coupang.com/",
    folder: "",
  },
  {
    name: "Auction",
    domain: "http://auction.co.kr/",
    folder: "",
  },
  {
    name: "Apple",
    domain: "https://www.apple.com/kr/",
    folder: "",
  },
  // Online Tools
  {
    name: "File Transfer Time Calculator",
    domain: "https://techinternets.com/copy_calc?do",
    folder: "",
  },
  {
    name: "lifeofpix",
    domain: "https://www.lifeofpix.com/",
    folder: "",
  },
  {
    name: "Notepad",
    domain: "https://www.rapidtables.com/tools/notepad.html",
    folder: "",
  },
  {
    name: "Convertio",
    domain: "https://convertio.co/kr/",
    folder: "",
  },
  {
    name: "Bottleneck Calculator",
    domain:
      "https://pc-builds.com/calculator/Core_i7-10700K/GeForce_TX_3080/0Yd174/",
    folder: "",
  },
  {
    name: "WebGradients",
    domain: "https://webgradients.com/",
    folder: "",
  },
  {
    name: "XELF",
    domain: "https://xelf.io/",
    folder: "",
  },
  {
    name: "LifeOfPix-Picture",
    domain: "https://www.lifeofpix.com/",
    folder: "",
  },
  {
    // OPERATIONiDROID
    name: "Radio Garden – Seoul",
    domain: "<http://radio.garden/visit/seoul/kxEs9l2m",
    folder: "",
  },
  {
    name: "클로바더빙",
    domain: "https://clovadubbing.naver.com/",
    folder: "",
  },
  {
    name: "Google Translate",
    domain: "https://translate.google.com/",
    folder: "",
  },
  {
    name: "D live",
    domain: "http://www.dokdo.re.kr:11081/popup/home/popup/dokdo_lie.html",
    folder: "",
  },
  {
    name: "Pitch.com",
    domain: "https://pitch.com/",
    folder: "",
  },
  {
    name: "EmojiPedia",
    domain: "https://emojipedia.org/",
    folder: "",
  },
  {
    name: "PlaceIt",
    domain: "https://placeit.net/",
    folder: "",
  },
  {
    name: "Clicking Speed Test",
    domain: "https://cookie.riimu.net/speed/",
    folder: "",
  },
  {
    name: "Bitly",
    domain: "https://bitly.com/",
    folder: "",
  },
  {
    name: "Online C Compiler",
    domain: "http://repl.it/languages/c",
    folder: "",
  },
  {
    name: "double click mouse test page",
    domain: "<https://codepen.io/blink172/pen/vERyxK",
    folder: "",
  },
  {
    name: "PIXLR",
    domain: "https://pixlr.com/x/",
    folder: "",
  },
  {
    name: "눈누-Fonts",
    domain: "https://noonnu.cc/",
    folder: "",
  },
  {
    name: "Pixlr",
    domain: "https://pixlr.com/kr/",
    folder: "",
  },
  {
    name: "SoundCloud Downloader",
    domain: "https://sclouddownloader.net/",
    folder: "",
  },
  {
    name: "WebTools hi098123",
    domain: "<https://hi098123.tistory.com/pages/tools",
    folder: "",
  },
  {
    name: "vClock",
    domain: "https://vclock.com/",
    folder: "",
  },
  {
    name: "remove.bg",
    domain: "https://www.remove.bg/ko",
    folder: "",
  },
  {
    name: "인크루트",
    domain: "https://www.incruit.com/tools/spell/",
    folder: "",
  },
  {
    name: "SaveMP3",
    domain: "https://savemp3.app/en/",
    folder: "",
  },
  {
    name: "hwp to PDF",
    domain: "https://allinpdf.com/hwp-to-pdf",
    folder: "",
  },
  {
    name: "Mbps to MB/s",
    domain: "https://www.gbmb.org/mbps-to-mbs",
    folder: "",
  },
  {
    name: "Cargo",
    domain: "https://cargo.site/",
    folder: "",
  },
  {
    name: "GIF Maker",
    domain: "https://gifmaker.me/",
    folder: "",
  },
  {
    name: "2Color Combinations",
    domain: "https://2colors.colorion.co/",
    folder: "",
  },
  {
    name: "OperationDroid",
    domain: "http://operationidroid.com/minimalsetup",
    folder: "",
  },
  {
    name: "Online Latex Editor - Sciweavers",
    domain: "http://www.sciweavers.org/free-online-latex-equation-edior",
    folder: "",
  },
  {
    name: "Online LaTeX Editor",
    domain: "https://latex.codecogs.com/eqneditor/editor.php",
    folder: "",
  },
  {
    name: "ASCII table",
    domain: "https://www.ascii-code.com/",
    folder: "",
  },
  {
    name: "Detexify LaTeX symbol table",
    domain: "<https://detexify.kirelabs.org/symbols.html",
    folder: "",
  },
  // Game
  {
    name: "Apex News & Update",
    domain: "<https://www.ea.com/ko-kr/games/apex-legends/news",
    folder: "",
  },
  {
    name: "Origin",
    domain: "https://www.origin.com/kor/ko-kr/store",
    folder: "",
  },
  {
    name: "DIM",
    domain:
      "https://app.destinyitemmanager.com/461166018492676380/d2/inventory",
    folder: "",
  },
  {
    name: "Tistory",
    domain: "https://tistory.com/",
    folder: "",
  },
  {
    name: "Bungie",
    domain: "https://www.bungie.net/ko",
    folder: "",
  },
  {
    name: "Titanfall 2 간접 플레이",
    domain: "<https://m.blog.naver.com/urban14/220944772506",
    folder: "",
  },
  {
    name: "Pearl Abyss",
    domain: "https://www.pearlabyss.com/ko-KR",
    folder: "",
  },
  {
    name: "osu!",
    domain: "https://osu.ppy.sh/home",
    folder: "",
  },
  {
    name: "시뮬라크럼은 무엇인가? / 타이탄폴 에이펙스 레전드",
    domain: "<https://polaris5023.tistory.com/173",
    folder: "",
  },
  {
    name: "로바와 레버넌트의 서로에 대한 복수 이야기",
    domain: "<https://polaris5023.tistory.com/172",
    folder: "",
  },
  {
    name: "크립토의 이야기 [에이펙스 레전드 스토리]",
    domain: "<https://polaris5023.tistory.com/174",
    folder: "",
  },
  {
    name: "SiLeNtWaLkEr",
    domain: "https://destinyemblemwallpapers.com/destiny2/desktp/emblems",
    folder: "",
  },
  {
    name: "Zombs Royale",
    domain: "https://zombsroyale.io/",
    folder: "",
  },
  {
    name: "Tetris",
    domain: "https://tetris.com/play-tetris/",
    folder: "",
  },
  {
    name: "Most Popular PC Games | Global | Newzoo",
    domain: "<https://newzoo.com/insights/rankings/top-20-pc-games/",
    folder: "",
  },
  {
    name: "패스파인더의 이야기 [에이펙스 레전드 스토리 완결]",
    domain: "<https://polaris5023.tistory.com/171",
    folder: "",
  },
  {
    name: "GeForce NOW",
    domain:
      "https://play.geforcenow.com/games?game-id=cb2b15f-54ba-45fd-9839-96bbfe1376cd&lang=ko_KR&asset-id=01_2a0806cb-5818-40df-8f61-045ec17efae9",
    folder: "",
  },
  {
    name: "Steam",
    domain: "https://store.steampowered.com/",
    folder: "",
  },
  {
    name: "EpicGames",
    domain: "https://www.epicgames.com/store/ko/",
    folder: "",
  },
  {
    name: "GeeGee",
    domain: "https://geegee.net/ko/news",
    folder: "",
  },
  {
    name: "9Minecraft",
    domain: "http://www.9minecraft.net/",
    folder: "",
  },
  {
    name: "발로그",
    domain: "https://valog.gg/",
    folder: "",
  },
  {
    name: "Chunker",
    domain: "https://chunker.app/#",
    folder: "",
  },
  // Edu
  {
    name: "표준국어대사전",
    domain: "https://stdict.korean.go.kr/search/searchDetailWord.do",
    folder: "",
  },
  {
    name: "KR Dic",
    domain: "https://ko.dict.naver.com/?version=2#/main",
    folder: "",
  },
  {
    name: "Dongyang One",
    domain: "https://github.com/DongyangOne",
    folder: "",
  },
  {
    name: "CodeUp",
    domain: "https://codeup.kr/",
    folder: "",
  },
  {
    name: "Papago",
    domain: "https://papago.naver.com/",
    folder: "",
  },
  {
    name: "영어사전",
    domain: "https://en.dict.naver.com/#/main",
    folder: "",
  },
  {
    name: "EN dic",
    domain: "https://endic.naver.com/main.nhn",
    folder: "",
  },
  {
    name: "Google 번역",
    domain: "https://translate.google.com/?hl=ko&tab=TT",
    folder: "",
  },
  {
    name: "Tinkercad",
    domain:
      "https://www.tinkercad.com/dashboard?type=circuis&collection=designs",
    folder: "",
  },
  {
    name: "[YouTube] 영어회화 표현 20개 배우기",
    domain: "<https://www.youtube.com/watch?v=DB0EfWBTlCY",
    folder: "",
  },
  {
    name: "[YouTube] 해외여행 영어 회화 이 영상 하나로 끝내세요!",
    domain: "<https://www.youtube.com/watch?v=afqeynamUD4",
    folder: "",
  },
  {
    name: "[YouTube] 영어로 대화가 가능해지는 영어 회화 필수 패턴",
    domain: "<https://www.youtube.com/watch?v=ry1GeBVRed0",
    folder: "",
  },
];

const SHORTCUT_LIST = {
  Google: "https://www.google.co.kr",
  GoogleDrive: "https://drive.google.com/drive/",
};

function Bookmark() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Image Display Test</h3>
        <p>Now Testing</p>
        {/* TODO: for 구문을 이용하여 icon_list 안의 내용물을 모두 렌더링 하는 방법 찾기 */}
        <CreateLink name="Google" />
        <CreateLink name="Google Drive" />
        <CreateLink name="Google Drive Folder" />
        {/* <CreateLink name="Google" /> */}
      </header>
    </div>
  );
}

export default Bookmark;
