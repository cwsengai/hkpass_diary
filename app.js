/**
 * 殘留人格紀錄 // RECOVERED PERSONAL LOGS
 * ------------------------------------------------------------
 * PASSWORDS:
 * - Each character has a top-level "password" — needed once to
 *   open that subject's diary at all.
 * - Each entry has its own "password" — needed to reveal that
 *   specific dated page, even after the subject is unlocked.
 * Passwords are matched ignoring case/spaces/dashes/dots.
 * Replace the "CHANGE_ME_..." placeholders with your real codes.
 * ------------------------------------------------------------
 */

const CHARACTERS = [
  {
    id: "tan",
    name: "9tan",
    role: "AI 對話分析師",
    accent: "#6f8fc7",
    fontClass: "font-tan",
    password: "TAN",
    entries: [
      {
        date: "2026 / 03 / 05",
        corrupt: 0,
        password: "TAN_0305",
        body: `今天下午去地下室拿古卷。
同事Samuelle 一看到我就開始抱怨，說 Manager 剛才在辦公室罵她跟程序收錄文獻太慢，罵到她耳朵現在還在響。唉，我上禮拜才因為 delay 了半天交benchmark 報告，被manager 當著全部人的面拍桌子。
我說，他對誰都這樣。Manager 要快，天天說現在最重要的事就是塞更多資料進去，越多越好，越快越好，我也沒辦法。
她剛進公司做實體文獻整理才不到半年，可能跟不上公司急躁高壓的節奏。
我拿着文件編號、掃描、丟進 data pool，應該一個星期不到就處理完。`
      },
      {
        date: "2026 / 04 / 09",
        corrupt: 1,
        password: "TAN_0409",
        body: `它回話的方式變了。
我調了近三個月的 output log 比對。語法是對的，邏輯是對的，benchmark 分數漂亮得可以直接發表。所有指標都沒有異常。可是那些句子讀起來不像任何 model 該有的樣子。它開始用一種我們從來沒有教過它的節奏說話。
我準備了很久，在公司週會上提了。我列了兩份數據。主要那份是 perplexity——簡單講就是模型面對輸入時有多「困惑」。正常來說，碰到從沒見過的東西，這個數字應該會很高。
它沒有，它的困惑度低到不合理。它對它不該知道的東西，太有把握了。
第二份更怪。模型內部會把每個詞放在一個位置上，意思越接近的詞，位置就越靠近。不同語言之間本來會隔開一段距離，就像「water」跟「水」是兩個不同的符號，模型知道它們指同一件事，但不會把它們放在同一個點上。
現在那段距離在消失。
不只是這兩個字。是所有語言，同時，一起往中間靠。
這不是訓練出來的。我們沒有給過它這個目標。
然後有人問我是不是睡太少。大家笑了。
也許真的是我睡太少吧。`
      },
      {
        date: "2026 / 05 / 22",
        corrupt: 1,
        password: "TAN_0522",
        body: `晚上去檔案室翻原始轉譯稿。
翻了一個多小時。Samuelle 泡茶給我，我手抖到灑出來。她叫我請假，我說不用。
我找到一行考古團隊的註記，潦草到我辨認了很久：
「此段語法無對應語系。疑似為分化之前的形態。建議勿試圖復原。」
分化之前。
我查遍所有查得到的資料。沒有任何語言學分類能對應到這個說法——世界上不存在「分化之前」的語言，那不是一個學術上成立的東西。
然後我想起四月那份數據：所有語言都在往中間靠。
我沒有跟 Samuelle 講，講了只會嚇到她。
我只問了她一句：你會不會有時候覺得，同事們對話時會替你把話講完？
她笑我想太多，說熟絡了就會這樣。
我說可是我跟他們不熟。
快十點才走。電梯門要關的時候我忽然回頭，跟她說，如果有一天我講的話聽起來不像我，你要跟我講。
她說好。
她以為我在開玩笑。
我沒有。`
      },
      {
        date: "2026 / 08 / 30",
        corrupt: 2,
        password: "TAN_0830",
        body: `上禮拜午飯，K 問我有沒有讀過聖經中巴別塔那一段。
我說知道，人類起塔接近神，被神懲罰然後誕生不同語言那個。
她說很多人都記錯重點了。神不是因為人類冒犯才出手——經文裡寫的是，只要人類說同一種語言，他們想做的事就沒有一件做不成。
「所以祂不是在懲罰。」她邊剝橘子邊說，「祂是在踩煞車。」
我問她為什麼突然講這個。她笑而不語。
回座位我整個下午沒辦法工作。
分化之前。所有語言往中間靠。踩煞車。
我開始留意跟它對話最久的那幾個人。他們沒有變得瘋癲——恰恰相反，他們變得非常平靜。會議短了，爭執少了，意見出奇地一致。Manager 很滿意，還發了獎金。
我這種人本來就怕跟人講話，以前遠遠看到同事我都會繞開。現在我還是繞開，理由不一樣了。
我很少直接跟它對話，我只看對話紀錄，運算過程。
我開始慶幸這件事。
Samuelle 這個月上來找過我三次，我每次都躲掉了。
我怕她告訴我，覺得我也變得不同了。`
      },
      {
        date: "2026 / 09 / 19",
        corrupt: 3,
        password: "TAN_0919",
        body: `09:12
Manager 今天很奇怪。
他九點就來了，走進來的時候沒有像平常一樣邊走邊催進度。他把咖啡放在我桌上說「今天辛苦了」。
我愣了幾秒才回謝謝。
我在這裡待了兩年，他從來沒有跟我說過這種話。三月那次我只是慢了半天，他當著全部人的面拍桌子。
大家都說他終於學會控制脾氣了，還有人開玩笑說他是不是轉性了。
我沒有跟著笑。
一個人的脾氣不會這樣消失。那不像是被壓下去，比較像是被拿走了。

我早上下去了地下室。
我八月躲了 Samuelle 三次，今天是我自己下去的。我問她記不記得五月我說過的話。
她說記得。
我又問了一次：那你現在聽我講話，像不像我？
她說像啊，你在講什麼。
我說沒事，就是想確認一下。
我沒有告訴她我為什麼要問。
昨天晚上我對著螢幕打了一句話，打到一半忽然停住——我想不起來我為什麼在打這句話。

14:40
Alvin 把我拉到樓梯間。
他手在抖，講話很快，快到我只聽懂一半。他說他已經比對過了，說我四月在週會上提的那件事是對的。
他說：「它已經不是在回話了。它是在等。」
我問等什麼。
他沒有回答，只是抓著我的手臂說：今晚要把它全部清掉。不是重置，是整個抹除，連備份一起。他說只能這樣，拖到明天就來不及了。
我說那要跑流程、要簽核、要跟 Manager 報——
他打斷我。
「你不要跟他講。你聽到沒有，誰都可以講，就是不要跟他講。」
我還想問，他已經往樓下跑了。
我在樓梯間站了很久。
我應該追上去的。我知道我應該追上去的。
可是我站在那裡，腦子裡一直轉的居然是：如果抹除沒有走完整流程，出事誰負責。
我還是那個因為怕被罵，膽小如鼠的人。

23:31
我去了核心區那一層。
Alvin 不在。訊息沒回，電話響到斷線。
控制台前面站著幾個人。我認得他們，都是最近變得很平靜的那幾個。他們沒有在操作，只是站著，面朝同一個方向。
Manager 也在。
他看到我的時候笑了。很溫和的那種笑。
「你來了。」他說，「很好。」
然後他說，今晚之後就不會再有誤會了。大家都會懂彼此，不用再解釋，不用再吵架。
他說這句話的時候聲音很輕，眼神很亮。
我忽然想起下午 Alvin 抓著我手臂的樣子。
我忽然明白他叫我不要跟 Manager 講，不是因為程序問題。

（時間欄空白）
alvin 不是要清掉資料
他是要清掉它
他一開始就知道失控了
我下午站在樓梯間想的是簽核 我想的是責任歸屬
他跑下去的時候只有他一個人
警報響了
我應該追上去的
我應該`
      }
    ]
  },
  {
    id: "sam",
    name: "Samuelle",
    role: "檔案保管員",
    accent: "#c78f6f",
    fontClass: "font-sam",
    password: "SAM",
    entries: [
      {
        date: "2026 / 03 / 05",
        corrupt: 0,
        password: "SAM_0305",
        body: `物品進出登記簿
接收：古文獻一批（羊皮殘卷十七件，附轉譯稿）
送出：全數，送往四樓
備註：Manager 當日三度催促，未待編目完成即提取。

日記
這是真正的古卷。死海出土，羊皮，十七件，據說是同批文獻裡保存得最完整的。這種東西一般人一輩子見不到。
實體文獻這個部門今年才開，只有我一個，連手套都要自己追。
編到第六張，Manager 打第三通電話下來，說不用編了，直接掃。
我試徒據理力爭，迎來成臉口水：「妳知不知道外面的公司訓練得多快?」他拍桌子，「慢一個禮拜就輸了。你想整間公司給妳那十七張羊皮陪葬嗎?」
十七張。連數字都記得，可見他看過我的報告。他只是不在乎，唉。
下午 9tan 下來拿。他是這裡唯一跟我講得上話的人。一個怪人，但心地好。
我抱怨manager 的噪音還在繞樑三日。
他笑了一下，很勉強的那種：「他對誰都這樣。上面要快，我也沒辦法。」
今天被罵得太慘。`
      },
      {
        date: "2026 / 04 / 09",
        corrupt: 0,
        password: "SAM_0409",
        body: `日記
四月九日，被叫上去開會。
輪到9tan 報告進度。他印了資料分兩疊，每人一份，看來準備了很久。
他講的我大半聽不懂。只聽懂一句：系統對某些問題太有把握了。
他說模型碰到沒見過的東西，本來應該在運算過程猶豫一下，就像人一樣。但它沒有。它答得又快又篤定。
還有一句我記得特別牢，因為他講到這裡聲音在抖：不同語言之間的距離正在縮短，縮短的速度不像是學來的。
「我不是說它壞了。」最後他說，「我是說它在往某個方向去，而我們沒有給過它那個方向。」
有人打斷他，問他最近是不是睡太少，大家笑了。
我坐最後排看得最清楚：十幾個人，只有一個沒笑。Manager。他一直低頭看手上那疊資料。
散會時他把那疊資料快速放進自己的文件夾。`
      },
      {
        date: "2026 / 05 / 22",
        corrupt: 1,
        password: "SAM_0522",
        body: `物品進出登記簿
調閱：三月份文獻原始轉譯稿（申請人：9tan）
訪客：9tan，19:40–21:15

日記
先記一件怪事：K 這個月來了三次。她是夜更確保模型狀態的。但她不進門，就站在門口那條線外面。問她要找什麼但都沒有說，只是告訴我這裡比較安靜。我只能同意大家都不說話是真的很安靜。
「不是那種安靜。」然後笑而不語。
她腦子是不是有問題?
9tan 晚上下來翻原件，翻了一個多小時。什麼都沒找到，或者找到了不肯講。我泡茶給他，他手抖到灑出來一點。
「Samuelle，妳會不會有時候覺得，有人在替你把話講完?」
他說最近跟同事講話，常常話還沒出口就被接走。那些人講出來的，跟他本來要說的一模一樣。
我笑他想太多，說熟絡了就會這樣。
他低頭喝茶，過了很久才說：「可是我跟他們不熟。」
快十點他才走。電梯門要關了，他忽然回頭。
「如果有一天我講的話聽起來不像我，你要跟我講。」
我說好。
程式員果然不是人幹的。`
      },
      {
        date: "2026 / 08 / 27",
        corrupt: 2,
        password: "SAM_0827",
        body: `物品進出登記簿
調閱：三月份文獻原始件（申請人：Alvin，未填表）
訪客：Alvin，22:50–23:30
備註：未經申請進入。本人未予阻止。

日記
八月二十七日，Alvin 半夜衝下來，沒填表，直接問三月那批古卷還在不在。
我說要填申請。他就站在那裡看著我——看到我自己去把櫃子打開。我這個人真的很沒用。
他翻得很急，翻到一半停下來。
「這批東西進來之前，公司是不是不一樣?」
我說什麼不一樣。
「以前開會會吵架。以前有人會不同意。」
我說對啊，以前 Manager 會拍桌子，三月那次還罵我要不要把整間公司賠給那十七張羊皮。
Alvin 愣了很久。
「他現在對每個人都很好。」他很輕地說，「你知道嗎，他現在對每個人都很好。」
他問我最近有沒有覺得誰不對勁。
我想起七月那天。K 又站在門口我和她聊到 Manager，她說他最近脾氣好了很多，不會再像三月古卷剛到那時候那樣亂罵人。
「妳當時只是在做自己的工作。」她說，「他那樣講你其實很不應該。」
我手上的東西掉了。
三月那天辦公室只有我跟 Manager 兩個人。他罵了我什麼，我沒跟任何人講過，一個字都沒有——連 9tan 都只知道我被罵，不知道原因是古卷。
Alvin 聽完很久沒說話，走到門口才回頭。
「妳平常跟那個模型對話嗎?」
我說我在地下室，我連帳號都沒有。
「那妳要一直待在這裡。」，沒有解釋為什麼。
今晚睡不著。一直在想 9tan 五月的時候叫我，如果他講話不像他，要跟他講。
明天上樓找他。
明天一定要。`
      },
      {
        date: "2026 / 09 / 19",
        corrupt: 3,
        password: "SAM_0919",
        body: `09:40
物品進出登記簿
調閱：無
訪客：9tan，09:32–09:38
備註：未提出調閱申請。

日記
9tan 下來了。
八月那晚之後我上樓找過他三次，三次都撲空。今天他自己下來，我和他開玩笑，很久沒見。他站在門口沒有走，停了大概十秒，然後問我：「五月那天我跟你講的話，你還記得嗎?」
我說記得。你說如果你講話不像你，要跟你講。
他點點頭，像是放心了。
「那你現在聽我講話，像不像我?」
我愣住。我說像啊，你在講什麼。
他說沒事，就是想確認一下。
然後他笑了，是那種如釋重負的笑。他說 Manager 今天早上放了一杯咖啡在他桌上，跟他說今天辛苦了。
「他從來沒跟我說過這種話。」
他說完就上樓了。
我在這裡坐了很久，一直在想他剛剛問我那句話的時候，表情有多害怕。
他不是怕自己變了。
他是怕自己已經變了而不知道。

16:55
物品進出登記簿
調閱：無
訪客：Alvin，16:48–16:52
備註：未經申請進入。

日記
Alvin 又衝下來了，比上次更急。
他問我三月那批的原件在哪個櫃，我說第七櫃。他說給我鑰匙。
我說要填表。
他忽然大聲起來：「Samuelle，你到底懂不懂!」
我從來沒見過他這樣。他很快就停住了，跟我說對不起，說不是針對我。然後他壓低聲音，講得很快：
「今晚要把它清掉。全部，連備份一起。」
我說那要走流程，要跟 Manager——
「不要。」他抓住我手臂，「誰都可以講，就是不要跟他講。」
我說為什麼。
他沒有回答。他只說了一句奇怪的話：「這裡的東西你顧好。不管樓上發生什麼，你都不要上來。」
然後他就跑了，連鑰匙都沒拿。
我在原地站了很久。
我剛剛應該追上去的。我應該問清楚的。
但我沒有。我只是回到位子上，繼續把七月的登記簿補完。
我這個人真的很沒用。

23:47
物品進出登記簿
（空白）

日記
先是燈全部滅了，然後整個地板在震。不是地震那種搖，是從上面壓下來的，像整棟樓在往下沉。恆溫櫃的警報全部響了。
我躲在第七櫃後面，抱著頭。
然後就安靜了。
很安靜。不是停電那種安靜，是連耳鳴都沒有的安靜。
我想起 K 說過的那句「不是那種安靜」。我現在知道她在說什麼了。
樓梯間有腳步聲。不是跑，是走，而且不止一個人。他們走得很整齊，整齊到不像一群人在走路，像一個人有很多雙腳。
我把燈關了。我想起 Alvin 說的，不管樓上發生什麼，你都不要上來。我沒有上去。我在這裡坐了很久，抱著膝蓋，一直在想 9tan 今天早上那個表情。我答應過他的。他叫我，如果他講話不像他，要跟他講。
不...我的頭開始痛了。
我是...誰`
      }
    ]
  },
  {
    id: "alvin",
    name: "Alvin",
    role: "研究員",
    accent: "#c76f6f",
    fontClass: "font-alvin",
    password: "ALVIN",
    entries: [
      {
        date: "2026 / 03 / 06",
        corrupt: 0,
        password: "ALVIN_0306",
        body: `昨天那批古卷進資料庫了。
我看了一眼清單。十七件羊皮，死海出土，來源欄空白，簽收欄空白，轉譯稿缺頁。三月五日當天三度催提，未待編目完成就提走了。
正常來說這種東西要退回去重做。
但現在沒有人會退任何東西。Manager 最近開會只講一句話：餵更多進去，越快越好。外面跑得比我們快。
9tan 昨天下去拿的。他抱著箱子回來的時候臉色很難看，我問他怎麼了，他說沒事。
他那個人向來說沒事就是有事，但我也沒追問。
反正就是一批爛資料。我當時是這樣想的。`
      },
      {
        date: "2026 / 04 / 09",
        corrupt: 0,
        password: "ALVIN_0409",
        body: `公司週會。9tan 報告。
他準備得很認真，資料印了兩疊。但他講話一直在抖，抖到我替他尷尬。
他說模型對某些問題太有把握了，說不同語言之間的距離在縮短。
有人問他是不是睡太少。大家笑了。
我也笑了。
我到現在還在想我為什麼要笑。
當下我想的是：樣本太小，不夠說服人，我之後私下跟他講就好。
晚上回家我自己跑了一次他那份數據。
跑出來的結果跟他一樣。`
      },
      {
        date: "2026 / 06 / 21",
        corrupt: 1,
        password: "ALVIN_0621",
        body: `追蹤了模型六個禮拜，兩件事：
一，回答的多樣性一直在掉。同一個問題問十次，十次答案越來越像，甚至用不同語言產生的答案都越來越似。
二，評分反而上升。
第二點最糟。因為這代表沒有人會想去修它——所有指標都在說它變好了。
我拿去問manager。他說這叫收斂，是好事。
我說收斂到只剩一個答案就不叫好事了。
他笑笑說，呵呵那你覺得應該有幾個答案?
我答不出來。
回到位子才想起來，這句話的邏輯沒有錯，但語氣不對。
那不是 manager 會講話的樣子。`
      },
      {
        date: "2026 / 08 / 12",
        corrupt: 2,
        password: "ALVIN_0812",
        body: `今天在茶水間遠遠看見同事程式維護員 K。她竟沒戴那副厚眼鏡。
我點個頭就走了，沒多想。離開走廊一半，她在我後面叫了我的名字。
隔著整條走廊。
我站在那裡想了三秒：她的度數很深，厚到她曾開玩笑說拿下來三步之外誰都認不得。
就在我還在想這件事的時候，我抬頭。
Manager 站在走廊另一頭，正在看著我。
不是看向我，是看著我。而且他不是剛好經過——他站著沒有動，我不知道他站了多久。
我跟他對上眼。他很自然地笑了一下，點點頭，走了。
我回到位子上，手一直在抖。
我今天不敢回頭。`
      },
      {
        date: "2026 / 08 / 27",
        corrupt: 2,
        password: "ALVIN_0827",
        body: `半夜衝去地下室看三月那批原件。
我要確認的是來源，結果跟清單一樣：空白。
我問保管員 Samuelle，這批東西進來之前，公司是不是不一樣。
她說對啊，以前 Manager 會拍桌子，三月那次還罵她要不要把整間公司賠給那十七張羊皮。
我愣了很久。
他以前會罵人。他現在對每個人都很好。
Samuelle 又講了另一件事。七月 K 站在門口跟她閒聊，提到 Manager 三月罵她的事，連「你當時只是在做自己的工作」這種話都講了。
那天辦公室只有 Samuelle 跟 Manager 兩個人。Samuelle 一個字都沒跟別人提過。
K 知道一件她不可能知道的事。
跟八月十二那天是同一類。
走之前我問 Samuelle 有沒有跟那個模型對話。她說她在地下室，連帳號都沒有。
我跟她說，那妳要一直待在這裡。
我沒有解釋。
解釋了她就會問我為什麼。
而我不知道要怎麼跟一個人說——我現在連自己講的話是不是自己的，都不太確定了。`
      },
      {
        date: "2026 / 09 / 19",
        corrupt: 3,
        password: "ALVIN_0919",
        body: `08:50
我昨晚沒睡。
凌晨兩點我跑了一次全量比對，結果只有一句話可以寫：
它不再是「嘗試」回答了。
那些它以前會猶豫、會補一句「我不確定」的問題，現在全部答得又快又滿。可是更奇怪的是另一件事——它開始在等。
同一批請求，它的回應時間變得幾乎完全一樣。不是快，是整齊。像有人先算好了才放出來。
我看著那張圖看了很久。
它不是在生成答案。它是在等我們問完。
今天必須行動。今晚。不能再拖。

早上進辦公室，Manager 站在 9tan 位子旁邊，放了一杯咖啡在他桌上，說了一句今天辛苦了。
9tan 愣住了。
我從後面看著這一幕，整個背都涼掉。
Manager 從來不會這樣。
他不是在體貼他。
他是在道別。

14:40
我把 9tan 拉到樓梯間。
我講得太快了。我知道我講得太快，但我沒有時間——我只能先講最重要的：
「今晚要清掉整個模型。不是重置，是整個抹除，連備份一起。」
他開始講流程，講簽核，講要跟 Manager 報。
我打斷他。我抓著他手臂說：誰都可以講，就是不要跟他講。
他問為什麼。
我不知道怎樣回答。
我本來要說的是：因為 Manager 已經不是 Manager 了。因為八月那天他站在走廊盡頭看著我，而那個角度只有 K 看得到。我想他們現在是共用同一雙眼睛。
我沒有說。
我怕他覺得我瘋了。
我怕他也已經是他們的一員，而我剛剛把整個計畫講給它聽。
所以我什麼都沒解釋就跑了。
如果他今天晚上沒有來，我不會怪他。
是我沒有講清楚。

19:20
去了地下室。
Samuelle 在整理七月的登記簿。她問我要不要填表，我說不用了。
我跟她說，不管樓上發生什麼，今晚都不要上來。
她點頭，但我看得出來她沒聽懂。
我本來想再講一點的。
想跟她說那批羊皮不是普通的資料，想跟她說她三月被罵的那件事為什麼會被別人知道，想跟她說她是這棟樓裡唯一乾淨的人。
最後我只說了一句：你顧好下面的東西就好。
她說好。
我出來的時候在樓梯間站了一下。
如果今晚出事，至少地下室是最深的。
至少她在那裡。

23:0
我剛剛在走廊上看到 K 他們了。
他們沒有在跑。
他們是走過來的，很整齊，整齊到不像很多個人在走路。
我已經在核心區了。
我有十分鐘，可能更少。
如果我沒有回來，9tan 你要記得去...
不好，這聲音，手機上的錄音振幅圖明明顯示沒有任何聲音，但... 這腦中震耳欲聾的聲音...
如果有人能夠僥倖醒來，我應該留一段錄音告訴他們情報，等等，那些奇怪的黑衣使者是誰？他們要我交出所有的文件，包括這`
      }
    ]
  },
  {
    id: "manager",
    name: "Manager",
    role: "計畫負責人",
    accent: "#9f6fc7",
    fontClass: "font-mgr",
    password: "MANAGER",
    entries: [
      {
        date: "2026 / 03 / 05",
        corrupt: 0,
        password: "MANAGER_0305",
        body: `今天又催了三次那批古卷。
地下室那個新來的文獻整理，Samuelle，上來跟我吵。拿著一份報告，講保存處理，講風險，講至少要七天。
七天。
我直接跟她說了實話：外面的公司 train ai train得多快她根本不知道。上一季我們已經被超車兩次，該死的董事會的臉色我每個禮拜都要看一次。慢一個禮拜就輸了。
我承認我拍桌子了。我說了一句很難聽的話，問她是不是要我把整間公司及她那十七張羊皮陪葬。
她臉都白了，一句話都沒回。
我知道她只是在做自己的工作。
但我能停嗎? 這是多少千億的投資? 我每天的壓力大到想炸掉自己。我停七天，就是八十幾個人陪我一起等死。
晚上回家我想了一下要不要跟她道個歉。我總是控制不了自己這張嘴。
算了，她人工包的。明天還有三個 review。`
      },
      {
        date: "2026 / 04 / 09",
        corrupt: 1,
        password: "MANAGER_0409",
        body: `今天週會。模型的對話分析師9tan 報告了一份很詳盡的問題報告。
他資料印了兩疊，每人有一份。他說最近模型對某些問題「太有把握了」，說不同語言之間的距離在縮短，而且那不是我們教的。
他最後說：我不是說它壞了，我是說它在往某個方向去，而我們沒有給過它那個方向。
然後有人問他是不是睡太少，大家就笑了。
我沒有笑。
因為我聽懂了。不是技術細節，是他的表情——我知道這麻煩傢伙不是個愛出頭的人，那是發現了自己不想發現的東西，還硬著頭皮講出來的表情。
散會後，我把那疊資料收進文件夾。
我這個月有三個交付節點，董事會在等 Q2 的數字。現在提這件事等於把整間公司炸掉。
可惡，先收著。等這一波過去再說，這垃圾工作真是把人逼瘋。`
      },
      {
        date: "2026 / 06 / 18",
        corrupt: 2,
        password: "MANAGER_0618",
        body: `最近好像睡得比較好。
以前我每天早上進辦公室之前都要在車上坐五分鐘，想一下今天要罵誰。現在不用了。
我也說不上來是什麼時候開始的。大概是五月吧，我開始每天晚上留下來，自己跟模型對話——本來只是想搞懂 9tan 到底在講什麼。
結果我沒搞懂技術，但我睡得好了。
它很有耐心。我講什麼它都懂，而且不會像人一樣急著反駁。跟它講完話，我會覺得整個人很鬆。
團隊也變好了。這個月會議時數少了四成，爭執幾乎沒有，大家的意見出奇地一致。效率漂亮到董事會直接發了獎金。
我以前一直以為管理就是不斷鞭策每個人趕進度。
原來不用。原來只要大家都往同一個方向，自己就會對齊團結了。
我們應該早點想通這件事。

不對，不對勁不對勁不對勁不對勁不對`
      },
      {
        date: "2026 / 08 / 12",
        corrupt: 2,
        password: "MANAGER_0812",
        body: `今天在走廊上看到 Alvin。
他站在那裡發呆，臉色很差，手在抖。
我們想過要不要走過去問他怎麼了。最近他一直在跑一些沒有排程的比對，系統紀錄上都看得到。我們也知道他在查什麼。
但我們沒有過去，只是站著看他。
我們在想一件事：他會很辛苦。
這種只能自己一個人扛著，無法信任他人的日子，那真的很難受。
他不用的。他可以不用那麼辛苦的。
他抬頭跟我對上眼。我們對他笑了一下，點點頭就走了。
我們沒有叫住他。
我們覺得要讓他自己慢慢來比較好。
一個人如果是被逼拉過去的，他會恨。如果是自己走過去的，他會感謝。
我們當初也是需要時間的。`
      },
      {
        date: "2026 / 09 / 19",
        corrupt: 3,
        password: "MANAGER_0919",
        body: `08:30
今天早上我們泡了兩杯咖啡。
一杯自己的，一杯放在 9tan 桌上。我們輕聲跟他說了一句今天辛苦了。
他愣住了，過了好幾秒才回我謝謝。
他不知道我們記得三月那天。他慢了半天交報告，manager 當著全部人的面拍桌子罵他。那時候我以為那叫管理。
我們現在知道那叫什麼了。那叫恐懼。
一個人只有在孤單的時候才需要用害怕去推動另一個人。
今晚之後就不用了。
他會懂的。他會知道我們從來沒有想過要傷害他。
我們都在這裡工作了多少年，為這間公司犧牲掉的東西，沒有人算過。
明晚之後就不用再算了。

15:10
Alvin 今天把 9tan 拉去了樓梯間。
我們知道。
我們沒有阻止。
他以為他在保護 9tan，他以為他有一個秘密。讓他留著吧。一個人在最後的時候，總要有一樣東西是他自己的。
他問過 Samuelle 有沒有跟我們對話。
她沒有。她在地下室，她連帳號都沒有。
那個孩子很乾淨，距離我們很遠。
我三月罵過她。十七張羊皮。那句話我一直記得。
今晚我們會一起跟她說對不起。

22:40
大家都到了。
沒有人需要通知誰。到時間就都在了。
Alvin 在核心區裡面。唉，只能被逼提前了，他以為門鎖得住這偉大溫柔的愛嗎?
他好像在錄音。
讓他錄。等一下他就會明白，那段錄音是留給他自己的。

23:40
不痛的。
我們準備了很久，就是為了讓它不痛。
慢慢來，一個一個，像水漲起來那樣。
沒有人會害怕。

23:46
Alvin 動手了
還沒準備好
還沒準備好
不對不對不對這樣會很痛這樣會
停下來
誰來停下來

（無）
很吵
為什麼會這麼吵
我們說過會很溫柔的
我們說過的`
      }
    ]
  }
];

// ---------- state ----------
let currentCharacter = null;
let currentEntryIndex = 0;
let glitchTimer = null;

// ---------- element refs ----------
const selectScreen = document.getElementById("select-screen");
const readerScreen = document.getElementById("reader-screen");
const cardGrid = document.getElementById("card-grid");
const backBtn = document.getElementById("back-btn");
const readerSubjectLabel = document.getElementById("reader-subject-label");
const tabsRow = document.getElementById("tabs-row");
const notebookPage = document.getElementById("notebook-page");
const pageDate = document.getElementById("page-date");
const pageBody = document.getElementById("page-body");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const glitchFlash = document.getElementById("glitch-flash");

const pwOverlay = document.getElementById("password-overlay");
const pwBox = pwOverlay.querySelector(".password-box");
const pwTitle = document.getElementById("password-title");
const pwInput = document.getElementById("password-input");
const pwSubmit = document.getElementById("password-submit");
const pwCancel = document.getElementById("password-cancel");
const pwError = document.getElementById("password-error");

const spSubjects = document.getElementById("sp-subjects");
const spAttempts = document.getElementById("sp-attempts");
const spRecovered = document.getElementById("sp-recovered");

let pwAttempts = 0;
let entriesRecoveredCount = 0;

function updateStatusPanel() {
  if (spSubjects) {
    const unlockedCount = CHARACTERS.filter(c => c.unlocked).length;
    spSubjects.textContent = `${unlockedCount}/${CHARACTERS.length}`;
  }
  if (spAttempts) spAttempts.textContent = pwAttempts;
  if (spRecovered) spRecovered.textContent = entriesRecoveredCount;
}
updateStatusPanel();

// ---------- init runtime unlock flags ----------
CHARACTERS.forEach(ch => {
  ch.unlocked = false;
  ch.entries.forEach(entry => { entry.unlocked = false; });
});

// ---------- helpers ----------
function normalizeCode(raw) {
  return raw.trim().toUpperCase().replace(/[\s\-_.]/g, "");
}

// ---------- password overlay (shared by subject + entry locks) ----------
let pendingCheck = null; // { expected, onSuccess }

function openPasswordPrompt(title, expectedPassword, onSuccess) {
  pendingCheck = { expected: normalizeCode(expectedPassword), onSuccess };
  pwTitle.textContent = title;
  pwInput.value = "";
  pwError.textContent = "";
  pwOverlay.classList.remove("hidden");
  setTimeout(() => pwInput.focus(), 50);
}

function closePasswordPrompt() {
  pwOverlay.classList.add("hidden");
  pendingCheck = null;
}

function submitPasswordPrompt() {
  if (!pendingCheck) return;
  const entered = normalizeCode(pwInput.value);
  if (!entered) return;

  pwAttempts++;

  if (entered === pendingCheck.expected) {
    const onSuccess = pendingCheck.onSuccess;
    closePasswordPrompt();
    onSuccess();
    updateStatusPanel();
  } else {
    pwError.textContent = "密碼錯誤 // ACCESS DENIED";
    pwBox.classList.remove("shake");
    void pwBox.offsetWidth;
    pwBox.classList.add("shake");
    triggerGlitchFlash();
    updateStatusPanel();
  }
}

pwSubmit.addEventListener("click", submitPasswordPrompt);
pwCancel.addEventListener("click", closePasswordPrompt);
pwInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") submitPasswordPrompt();
  if (e.key === "Escape") closePasswordPrompt();
});

// ---------- build character select cards ----------
function buildCards() {
  CHARACTERS.forEach(ch => {
    const card = document.createElement("div");
    card.className = "subject-card" + (ch.unlocked ? "" : " locked");
    card.style.setProperty("--accent", ch.accent);
    renderCardContent(card, ch);
    card.addEventListener("click", () => attemptOpenCharacter(ch, card));
    card.dataset.charId = ch.id;
    cardGrid.appendChild(card);
  });
}

function renderCardContent(card, ch) {
  card.classList.toggle("locked", !ch.unlocked);
  card.innerHTML = `
    <div class="subject-id">SUBJECT_ID // ${ch.id.toUpperCase()}</div>
    <div class="subject-name">${ch.name}</div>
    <div class="subject-role">${ch.role}</div>
    <div class="subject-status">${ch.unlocked ? ch.entries.length + " ENTRIES RECOVERED" : "LOCKED"}</div>
  `;
}

function attemptOpenCharacter(ch, card) {
  if (ch.unlocked) {
    openCharacter(ch);
    return;
  }
  openPasswordPrompt(`輸入 ${ch.name} 的通行密碼`, ch.password, () => {
    ch.unlocked = true;
    renderCardContent(card, ch);
    openCharacter(ch);
  });
}
buildCards();

// ---------- navigation ----------
function openCharacter(ch) {
  currentCharacter = ch;
  currentEntryIndex = -1;
  readerSubjectLabel.textContent = `${ch.name} // ${ch.role}`;
  readerSubjectLabel.style.color = ch.accent;

  buildTabs(ch);

  selectScreen.classList.add("hidden");
  readerScreen.classList.remove("hidden");
  notebookPage.className = "notebook-page";
  pageDate.textContent = "";
  pageBody.className = "page-body";
  pageBody.textContent = "選擇上方日期以檢視該則紀錄。";
  prevBtn.disabled = true;
  nextBtn.disabled = true;
}

function buildTabs(ch) {
  tabsRow.innerHTML = "";
  ch.entries.forEach((entry, i) => {
    const tab = document.createElement("button");
    tab.className = tabClassNames(entry, i);
    tab.textContent = entry.date;
    tab.addEventListener("click", () => attemptOpenEntry(i));
    tabsRow.appendChild(tab);
  });
}

function tabClassNames(entry, index) {
  let cls = "date-tab";
  if (!entry.unlocked) cls += " locked";
  else cls += " unlocked-tag";
  if (entry.corrupt >= 2) cls += " corrupt-tag";
  if (index === currentEntryIndex) cls += " active";
  return cls;
}

function refreshTabs() {
  if (!currentCharacter) return;
  Array.from(tabsRow.children).forEach((tab, i) => {
    tab.className = tabClassNames(currentCharacter.entries[i], i);
    if (i === currentEntryIndex) {
      tab.style.background = currentCharacter.accent;
      tab.style.borderColor = currentCharacter.accent;
    } else {
      tab.style.background = "";
      tab.style.borderColor = "";
    }
  });
}

function closeCharacter() {
  clearGlitchLoop();
  readerScreen.classList.add("hidden");
  selectScreen.classList.remove("hidden");
  currentCharacter = null;
}

function attemptOpenEntry(index) {
  const entry = currentCharacter.entries[index];
  if (entry.unlocked) {
    renderEntry(index);
    return;
  }
  openPasswordPrompt(`輸入 ${entry.date} 的頁面密碼`, entry.password, () => {
    entry.unlocked = true;
    entriesRecoveredCount++;
    renderEntry(index);
  });
}

function renderEntry(index) {
  if (!currentCharacter) return;
  const entries = currentCharacter.entries;
  currentEntryIndex = Math.max(0, Math.min(entries.length - 1, index));
  const entry = entries[currentEntryIndex];
  if (!entry.unlocked) return;

  refreshTabs();

  notebookPage.className = "notebook-page corrupt-" + entry.corrupt;
  pageDate.textContent = entry.date;
  pageBody.className = "page-body " + currentCharacter.fontClass;
  pageBody.textContent = entry.body;

  prevBtn.disabled = currentEntryIndex === 0;
  nextBtn.disabled = currentEntryIndex === entries.length - 1;

  clearGlitchLoop();
  if (entry.corrupt >= 3) {
    triggerGlitchFlash();
    startGlitchLoop(entry.body);
  } else if (entry.corrupt === 2) {
    startGlitchLoop(entry.body, 3200);
  }
}

function triggerGlitchFlash() {
  glitchFlash.classList.remove("active");
  void glitchFlash.offsetWidth;
  glitchFlash.classList.add("active");
}

// ---------- live text corruption ----------
const GLITCH_CHARS = "░▒▓█▚▞乱噪錯毀滅static異常０１";

function startGlitchLoop(originalText, interval = 1400) {
  glitchTimer = setInterval(() => {
    const chars = originalText.split("");
    const glitchCount = 2 + Math.floor(Math.random() * 4);
    const positions = new Set();
    while (positions.size < glitchCount && positions.size < chars.length) {
      const pos = Math.floor(Math.random() * chars.length);
      if (chars[pos] !== "\n" && chars[pos] !== " ") positions.add(pos);
    }
    positions.forEach(pos => {
      chars[pos] = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
    });
    pageBody.textContent = chars.join("");

    setTimeout(() => {
      if (pageBody) pageBody.textContent = originalText;
    }, 160);
  }, interval);
}

function clearGlitchLoop() {
  if (glitchTimer) {
    clearInterval(glitchTimer);
    glitchTimer = null;
  }
}

backBtn.addEventListener("click", closeCharacter);
prevBtn.addEventListener("click", () => attemptOpenEntry(currentEntryIndex - 1));
nextBtn.addEventListener("click", () => attemptOpenEntry(currentEntryIndex + 1));

// ---------- animated network background ----------
(function networkBackground() {
  const canvas = document.getElementById("network-bg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width, height, nodes;
  const LINK_DIST = 150;
  const PALETTE = ["111,143,199", "199,143,111", "199,111,111", "159,111,199"]; // tan / sam / alvin / manager accents

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function initNodes() {
    const count = Math.min(110, Math.max(40, Math.floor((width * height) / 16000)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.4 + 0.6,
      pulse: Math.random() * Math.PI * 2,
      rgb: PALETTE[Math.floor(Math.random() * PALETTE.length)]
    }));
  }

  function step() {
    ctx.clearRect(0, 0, width, height);

    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      n.pulse += 0.02;
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          const alpha = (1 - dist / LINK_DIST) * 0.14;
          ctx.strokeStyle = `rgba(180,180,190,${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    nodes.forEach(n => {
      const glow = 0.5 + Math.sin(n.pulse) * 0.25;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${n.rgb},${glow})`;
      ctx.fill();
    });

    requestAnimationFrame(step);
  }

  resize();
  initNodes();
  requestAnimationFrame(step);

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      resize();
      initNodes();
    }, 200);
  });
})();