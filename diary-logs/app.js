const CHARACTERS = [
  {
    id: "tan",
    name: "9tan",
    role: "AI 對話分析師",
    accent: "#6f8fc7",
    fontClass: "font-tan",
    entries: [
      {
        label: "HINT 1",
        dateRange: "2026 / 03 / 05 – 2026 / 08 / 30",
        corrupt: 1,
        password: "4927",
        body: `今天下午去地下室拿古卷文獻。
同事Samuelle 一看到我就開始抱怨, 說 Manager 剛才在辦公室罵她跟程序收錄文獻太慢, 罵到她耳朵現在還在響。唉, 我上禮拜和同事Alvin 才因為 delay 了半天交模型的benchmark 報告, 被manager 當著全部人的面拍桌子。
我說, 她對誰都這樣。Manager 要快, 天天說現在最重要的事就是塞更多資料進去, 越多越好, 越快越好, 我也沒辦法。我也不解，為什麼要輸入這麼多古卷？
她剛進公司做檔案文獻整理才不到半年, 可能跟不上公司急躁高壓的節奏。
我拿着文件編號、掃描、丟進 data pool, 應該一個星期不到就入完。

【2026 / 04 / 09】
它回話的方式變了。我調了近三個月的 output log 比對。
語法沒問題。
邏輯沒問題。
甚至下一個 token 的準確率，還比上個版本高了 2.7%。
所有指標都沒有異常。
但我知道個language model有東西不對。
它最近一個月開始用一種我們沒有訓練過的節奏說話。
我準備了很久, 在公司週會上提了這些異常。我列了兩份數據。主要那份是 perplexity —— 簡單講就是模型面對輸入時有多「困惑」。正常來說, 碰到從沒見過的東西, 這個困惑指數應該會很高。
但它沒有, 它的困惑度低到不合理。它對它不該知道的東西, 太有把握了。
第二份更怪。模型內部會把每個詞放在一個位置上, 意思越接近的詞, 位置就越靠近。不同語言之間本來會隔開一段距離, 就像「water」跟「水」是兩個不同的符號, 模型知道它們指同一件事,但不會把它們放在同一個點 (位置)上。
現在那段距離在消失。
不只是這兩個字。是所有語言, 同時, 一起往中間靠。
這肯定不是訓練出來的。我們沒有給過它這個目標。
然後會議上有人問我是不是睡太少。大家笑了。
也許真的是我睡太少吧......

【2026 / 05 / 22】
晚上去檔案室翻查三月那批的古卷轉譯稿。
翻了一個多小時。Samuelle 泡茶給我, 我手抖到灑出來。她叫我請假, 我說不用。
我找到一行考古團隊的註記, 潦草到我辨認了很久:
「此段語法無對應語系。疑似為分化之前的形態。建議勿試圖復原。」
分化之前。
我查遍所有查得到的資料。沒有任何語言學分類能對應到這個說法 —— 世界上不存在「分化之前」的語言, 那不是一個學術上成立的東西。
然後我想起四月那份數據: 所有語言都在往中間靠。
我沒有跟 Samuelle 講, 講了只會嚇到她。
我只問了她一句: 你會不會有時候覺得, 同事們對話時會替你把話講完?
她笑我想太多, 說熟絡了就會這樣。
我說可是我跟他們不熟。
快十點才走。電梯門要關的時候我忽然回頭, 跟她說, 如果有一天我講的話聽起來不像我, 你要跟我講。
她說好。
她以為我在開玩笑。我沒有。

【2026 / 08 / 30】
上禮拜午飯, K 問我有沒有讀過聖經中巴別塔 (Tower of Babel)那一段。
我說知道, 人類嘗試建立一座塔接近神, 然後被神懲罰, 打散語言的那個舊約故事。
她說很多人都記錯重點了。神不是因為人類冒犯才出手 —— 經文裡寫的是, 只要人類說同一種語言, 他們想做的事就沒有一件做不成。
「所以祂不是在懲罰。」她邊剝橘子邊溫和地說,「祂是在踩煞車。」
我問她為什麼突然講這個。她笑而不語。
回座位後我整個下午沒辦法工作。
分化之前。所有語言往中間靠。踩煞車。煞車, 所以其實是在保護?
我開始留意跟它對話最久的那幾個同事。他們沒有變得瘋癲 —— 恰恰相反, 他們變得非常平靜。會議短了, 爭執少了, 意見出奇地一致。Manager 很滿意, 還發了獎金。
我這種人本來就怕跟人講話, 以前遠遠看到同事我都會繞開。現在我還是會繞開, 理由不一樣了。
幸好我很少直接跟它對話, 我只看對話紀錄, 運算過程。
我開始慶幸這件事。
Samuelle 這個月上來找過我三次, 我每次都躲掉了。
我怕她告訴我, 覺得我也變得不同了。

核心推理重點：
1）理解 9tan 所在的公司與業務。
2）新來的古卷何去何從？
3）尋找真相，恢復你失去的記憶。

`
      },
      {
        label: "HINT 2",
        dateRange: "2026 / 09 / 18",
        corrupt: 3,
        password: "8153",
        body: `09:12
Manager 今天很奇怪。
他九點就來了, 走進來的時候沒有像平常一樣邊走邊催進度。他把咖啡放在我桌上說「今天辛苦了, 慢慢工作。」。
我愣了幾秒才回謝謝。
我在這裡待了兩年, 他從來沒有跟我說過這種話。三月那次我只是慢了半天, 他當著全部人的面拍桌子。
大家都說 Manager 最近好像變了，沒以前那麼容易發脾氣了，還有人開玩笑說他是不是突然轉性了。
我沒有跟著笑。
一個人的脾氣不會這樣消失。那不像是被壓下去, 比較像是被不知什麽拿走了。

我早上下去了地下室。
我八月躲了 Samuelle 三次, 今天是我自己下去的。我問她記不記得五月我說過的話。
她說記得。
我又問了一次: 那你現在聽我講話, 像不像我?
她笑著說像啊, 你在講什麼。不像你會像邊個？唔通 AI 咩？
我說沒事, 就是想確認一下。
我沒有告訴她我為什麼要問, 嗯。
昨天晚上我對著螢幕打了一句話, 打到一半忽然停住 —— 我想不起來我為什麼在回應一條問題。

14:40
Alvin 把我拉到樓梯間。
他手在抖, 講話很快, 快到我只聽懂一半。他說他已經比對過了, 說我四月在週會上提的那件事是對的。
他說:「它已經不是在回話了。它是在等。」
我問等什麼。
他沒有回答, 只是抓著我的手臂說: 今晚要把模型全部清掉。不是重置訓練内容, 是整個抹除, 連備份一起。他說只能這樣, 拖到明天就來不及了。
我說那要按流程、要審批、要跟 Manager 報——
他打斷我。
「你不要跟他講。你聽到沒有, 誰都可以講, 就是不要跟他講。」
我還想問, 爲什麽只是Manager, 但他已經往樓下跑了。
我在樓梯間站了很久。
我應該追上去的。我知道我應該追上去的。
可是我站在那裡, 腦子裡一直轉的居然是: 如果沒有走完整流程, 出事誰負責。
我還不知道嚴重性。

23:31
我上去了核心區那一層。
Alvin 不在。訊息沒回, 電話響到斷線。
控制台前面站著幾個人。我認得他們, 都是最近變得很平靜的那幾個。他們沒有在操作, 只是站著, 面朝同一個方向。
Manager 也在。
他看到我的時候笑了。很溫和的那種笑。
「你來了。」他說,「很好。」
然後他說, 今晚之後就不會再有誤會了。大家都會懂彼此, 不用再解釋, 不用再吵架。
他說這句話的時候聲音很輕, 眼神很亮。
我忽然想起下午 Alvin 抓著我手臂的樣子。
我忽然明白他叫我不要跟 Manager 講, 不是因為程序問題。

（時間欄空白）
alvin 不是要清掉資料
他是要毁掉它
他一開始就知道失控了
我下午站在樓梯間想的是流程 我想的是責任歸屬
他跑下去的時候只有他一個人
好痛
警報響了
我應該追上去的
我應該

核心推理重點：
1）確認這是一間 AI 公司，以及它正在研究什麼。
2）找出那批「不明資料」進入模型後，究竟發生了什麼。
3）找出那些「變得不太像自己」的同事，究竟出了什麼問題。`
      }
    ]
  },
  {
    id: "sam",
    name: "Samuelle",
    role: "檔案保管員",
    accent: "#c78f6f",
    fontClass: "font-sam",
    entries: [
      {
        label: "HINT 1",
        dateRange: "2026/03 – 2026/08",
        corrupt: 1,
        password: "5890",
        body: `物品進出登記簿
接收: 古文獻一批(羊皮殘卷十七件, 附轉譯稿)
送出: 全數, 送往四樓
備註: Manager 當日三度催促, 未待編目完成即提取。

日記
這是真正的古卷文獻。死海出土, 十七件羊皮, 欠缺完整轉譯稿, 語言、記錄內容不明, 據說已是同批文獻裡保存得最完整的。這種東西一般人一輩子見不到。
檔案保管這個部門今年才開, 只有我一個。
收錄到第六張, Manager 打第三通電話下來, 說不用再編了, 直接掃描文件。
我試徒據理力爭，迎來成臉口水:「妳知不知道外面最前沿的LLM train 得多快?」他拍桌子,「慢一個禮拜就輸了。你想整間公司給妳那十七張羊皮陪葬嗎? 天天在努力拖慢大家進度！」
十七張。連數字都記得, 可見他看過我的報告。他只是不在乎, 唉。
下午 9tan 下來拿。他是這裡少數跟我講得上話的人。一個怪人, 但心地好。
我抱怨manager 的噪音還在繞樑三日。
他笑了一下, 很勉強的那種:「他對誰都這樣。上面要快, 我也沒辦法。」
今天被罵得太慘。

【2026 / 04 / 09】
日記
今天被叫上去開會。
輪到9tan 報告進度。他印了資料分兩疊, 每人一份, 看來準備了很久。
他講的我大半聽不懂。只聽懂一句: 系統對某些問題太有把握了。
他說LLM 碰到沒見過的東西, 本來應該在運算過程猶豫一下, 就像人一樣。但它沒有。它答得又快又篤定。
還有一句我記得特別牢, 因為他講到這裡聲音在抖: 不同語言之間的距離正在縮短, 越來越一致。
「我不是說它壞了。」最後他說,「我是說它用的語言邏輯正在往一個方向演化, 而我們沒有給過它那個方向。」
有人打斷他, 問他最近是不是睡太少，大家笑了。
我坐最後排看得最清楚: 十幾個人, 只有一個沒笑, Manager。他一直低頭看手上那疊資料。
散會時他把那疊資料快速放進自己的文件夾。

【2026 / 05 / 22】
物品進出登記簿
調閱: 三月份文獻原始轉譯稿(申請人: 9tan)
訪客: 9tan, 19:40–21:15

日記
先記一件怪事: K 這個月來了三次。她是模型的伺服器維護員。但她不進門, 就站在門口那條線外面。問她要找什麼但都沒有說, 只是告訴我這裡比較安靜。我只能同意大家都不說話是真的很安靜。
「不是那種安靜。」她說, 然後笑而不語。
她腦子是不是有問題?
9tan 晚上下來翻原件, 翻了一個多小時。什麼都沒找到, 或者找到了不肯講。我泡茶給他, 他手抖到灑出來一點。
「Samuelle, 妳會不會有時候覺得, 有人在替你把話講完?」
他說最近跟同事講話, 常常話還沒出口就被接走。那些人講出來的, 跟他本來要說的一模一樣。
我笑他想太多, 說熟絡了就會這樣。
他低頭喝茶, 過了很久才說:「可是我跟他們不熟。」
快十點他才走。電梯門要關了, 他忽然回頭。
「如果有一天我講的話聽起來不像我, 你要跟我講。」
我說好。
程式員果然不是人幹的。
隨後我把9tan 翻閱的櫃重新整理。
看見轉譯稿只有零碎幾段, 我認得出來的只有一小段, 然後又抄下了一段認不出的:
「……來吧, 我們要建造一座城和一座塔, 塔頂通天……免得我們分散在全地上……」
下一行的註解裡, 譯者寫了一句話:
(此處原文與已知版本不同。未記載是懲罰。)
我不太懂這是什麼意思。我對聖經只有小學程度的印象 —— 建立塔, 觸怒神, 語言被打散, 人類從此各說各話。
但如果不是懲罰, 那是什麼?
我把它放回櫃子裡, 想著改天要問一下 9tan。
מגדל בבל על שפת ים המלח
(隨手記下了其中一段)

【2026 / 08 / 27】
物品進出登記簿
調閱: 三月份文獻原始件(申請人: Alvin, 未填表)
訪客: Alvin, 22:50–23:30
備註: 未經申請進入。本人未予阻止。

日記
八月二十七日, Alvin 半夜衝下來, 沒填表, 直接問三月那批古卷還在不在。
我說要填申請。他就站在那裡看著我 —— 看到我自己去把櫃子打開。我這個人真的很沒用。
他翻得很急, 翻到一半停下來。
「這批東西進來之前, 公司是不是不一樣?」
我說什麼不一樣。
「以前開會會吵架。以前有人會不同意。」
我說對啊, 以前 Manager 會拍桌子, 三月那次還罵我是在努力拖慢整間公司。
Alvin 愣了很久。
「他現在對每個人都很好。」他很輕地說,「你知道嗎, 他現在對每個人都很好。」
他問我最近有沒有覺得誰不對勁。
我想起七月那天。K 又站在門口我和她聊到 Manager, 她說manager 最近脾氣已好了很多, 不會再像三月古卷剛到那時候那樣亂罵人。
「妳當時只是在做自己的工作。」她說,「他那樣講你其實很不應該。」
然後連manager 原話都能復述。manager 罵了我什麼, 我沒跟任何人講過具體內容, 一個字都沒有 —— 連 9tan 都只聽過我埋怨幾句。
Alvin 聽完很久沒說話, 走到門口才回頭。
「妳平常跟那個模型對話嗎?」
我說我沒有, 長期都在地下室。
「那妳要一直待在這裡。」, 沒有解釋為什麼。
今晚睡不著。一直在想 9tan 五月的時候叫我, 如果他講話不像他, 要跟他講。
明天上樓找他。
明天一定要。

核心推理重點：
1）理解 Samuelle 所在的公司與業務。
2）追查新來的那批古卷，究竟對這家公司帶來了什麼影響。
3）尋找真相，恢復你失去的記憶。

`
      },
      {
        label: "HINT 2",
        dateRange: "2026/09/18",
        corrupt: 3,
        password: "2476",
        body: `09:40
物品進出登記簿
調閱: 無
訪客: 9tan, 09:32–09:38
備註: 未提出調閱申請。

日記
9tan 下來了。
八月那晚之後我上樓找過他三次, 三次都撲空。今天他自己下來, 我和他開玩笑說很久沒見。他站在門口沒有走, 停了大概十秒, 然後問我: 「五月那天我跟你講的話, 你還記得嗎?」
我說記得。你說如果你講話不像你, 要跟你講。
他點點頭, 像是放心了。
「那你現在聽我講話, 像不像我?」
我愣住。我說像啊, 你在講什麼。
他說沒事, 就是想確認一下。
然後他笑了, 是那種如釋重負的笑。他說 Manager 今天早上放了一杯咖啡在他桌上, 跟他說今天辛苦了。
「他從來沒跟我說過這種話。」
他說完就上樓了。
我在這裡坐了很久, 一直在想他剛剛問我那句話的時候, 表情有多害怕。
他不是怕自己變了。
他是怕自己已經變了而不知道。

16:55
物品進出登記簿
調閱: 無
訪客: Alvin, 16:48–16:52
備註: 未經申請進入。

日記
Alvin 又衝下來了, 比上次更急。
我問他是不是要填表, 他說已經不用了。
我說你沖下來做什麼。
他沒有回答。他只盯着我一會, 握緊拳頭, 說了一句奇怪的話:「這裡的東西你顧好。不管樓上發生什麼, 你都不要上來。」
然後就跑了。
我在原地站了很久。
我剛剛應該追上去的。我應該問清楚的。
但我只是默默回到位子上。
為什麼他好像在恐懼？

23:47
物品進出登記簿
（空白）

日記
先是燈全部滅了, 然後整個地板在震。不是地震那種搖, 是從上面壓下來的, 像整棟樓在往下沉。恆溫櫃的警報全部響了。
我躲在櫃後面, 抱著頭。
然後就安靜了。
很安靜。不是停電那種安靜, 是連耳鳴都沒有的安靜。
我想起 K 說過的那句「不是那種安靜」。我現在知道她在說什麼了。
樓梯間有腳步聲。不是跑, 是走, 而且不止一個人。他們走得很整齊, 整齊到不像一群人在走路, 像一個人有很多很多雙腳。
我把燈關了。我想起 Alvin 說的, 不管樓上發生什麼, 你都不要上來。我沒有上去。我在這裡坐了很久, 抱著膝蓋, 一直在想 9tan 今天早上那個表情。我答應過他的。他叫我, 如果他講話不像他, 要跟他講。
不...我的頭開始痛了。
我是...誰

核心推理重點：
1）找出樓上究竟發生了什麼。
2）確認 AI 公司語言模型出了問題，源頭是什麽？
3）找出那些「變得不太像自己」的同事，究竟出了什麼問題。

`
      }
    ]
  },
  {
    id: "alvin",
    name: "Alvin",
    role: "研究員",
    accent: "#c76f6f",
    fontClass: "font-alvin",
    entries: [
      {
        label: "HINT 1",
        dateRange: "2026/03 – 2026/08",
        corrupt: 1,
        password: "1765",
        body: `昨天那批古卷進最新的大型語言模型資料庫了。
我看了一眼清單。十七件羊皮, 死海出土, 欠缺完整轉譯稿, 語言、記錄內容不明。三月五日當天manager 三度催檔案部門的Samuelle, 都未記錄完成就拿去餵AGI 了。
我的同事研究員 9tan 告訴我正常來說這種來歷不明的東西要退回去重做。
但現在沒有人敢退任何東西。那暴躁的Manager 最近開會只會咆哮一句話: 餵更多進去, 越快越好。現在外面其他機構train 得比我們快。
沒辦法, 反正就是一批爛資料。我當時是這樣想的。

【2026 / 04 / 09】
今天公司週會。9tan 報告。
他準備得很認真, 資料印了兩疊。但他講話一直在抖, 但很堅持告訴我們他發現的異常。
他說最近模型對某些問題太有把握了, 說不同語言之間的距離在縮短。
模型面對沒有訓練過的輸入內容時, 它的「困惑」實在太低了，低到不合理。
第二份更怪。正常語言模型內部會把每個詞放在一個位置上, 意思越接近的詞, 位置就越靠近。不同語言之間本來會隔開一段距離, 就像「water」跟「水」是兩個不同的符號, 模型知道它們指同一件事, 但不會把它們放在同一個點 (座標)上。
現在那段距離在消失。
不只是這兩個字。是所有語言, 同時, 一起往中間靠。
有人問他是不是睡太少。大家笑了。
看到manager 陰沉的面色, 當下我想的是: 始終樣本太小, 不夠說服人, 我之後私下跟9tan 講就好。
晚上回家我自己跑了一次他那份數據。
跑出來的結果跟他一樣。

【2026 / 06 / 21】
追蹤了模型六個禮拜, 兩件事:
一, 回答的多樣性一直在跌。同一個問題問十次, 十次答案越來越像, 甚至用不同語言產生的答案都越來越似。
二, 評分反而上升。
第二點最糟。因為這代表沒有人會想去修它 —— 所有指標都在說它變好了。
我鼓起勇氣警告給manager。他說這叫模型的答案在對齊 (Aligning), 是好事。
我說穩定到只剩一個答案就不叫好事了。
他溫和地笑笑說, 呵呵為什麼要那麼多答案?
我答不出來。
回到位子才想起來, 這句話的邏輯沒有錯, 但語氣不對。
那不是 manager 會講話的風格。

【2026 / 08 / 12】
今天在茶水間遠遠看見伺服器維護員 K同事。她竟沒戴那副厚眼鏡。
我點個頭就走了, 沒多想。離開走廊一半, 她在我後面叫了我的名字。
隔著整條走廊。
我站在那裡想了三秒: 她的度數很深, 厚到她曾開玩笑說拿下來三步之外誰都認不得。
就在我還在想這件事的時候, 我抬頭, 發現Manager 正站在走廊另一頭, 看著我。
不是看向我, 是看著我。而且他不是剛好經過 —— 他站著沒有動, 我不知道他站了多久。
我跟他對上眼。他很自然地笑了一下, 便走了。
我回到位子上, 手一直在抖。
我今天不敢回頭。

【2026 / 08 / 27】
半夜衝去地下室看三月那批古代文獻原件。
我要確認的是來源, 結果跟清單一樣: 死海。
我問保管員 Samuelle, 這批東西進來之前, 公司是不是不一樣。
她說對啊, 以前 Manager 會拍桌子, 三月那次還罵她在拖慢整家公司。
我愣了很久。
他以前會罵人, 但現在對每個人都很好。
Samuelle 又講了另一件事。七月 K 站在門口跟她閒聊, 提到 Manager 三月罵她的事, 連manager 的原話都知道。但是Samuelle 根本沒有和其他人說完整的對話。
也就是K 知道一件她不可能知道的事。
跟八月十二那天發生的走廊事件是同一類。
走之前我問 Samuelle 有沒有跟那個模型對話。她說她一直在地下室, 所以沒有。
我跟她說, 那妳要一直待在這裡。
我沒有解釋。
解釋了她就會問我為什麼。
而我不知道要怎麼跟一個人說 —— 我現在連自己講的話是不是屬於自己的, 都不太確定了。

核心推理重點：
1）理解 Alvin 所在的公司與業務。
2）整理古卷進入公司后，公司出現的異樣。
3）尋找真相，恢復你失去的記憶。

`
      },
      {
        label: "HINT 2",
        dateRange: "2026/09/18",
        corrupt: 3,
        password: "6038",
        body: `08:50
我昨晚沒睡。
我整晚把最近半年的紀錄一批一批重run, run 到第幾輪我自己都不記得了。
結果只有一句話可以寫:
那些它以前會猶豫、會補一句「我不確定」的問題, 自從用了新批古卷來訓練后，現在全部答得又快又準。本該是好事，可是我有種奇怪的感覺, 它好像在等我的問題。
同一批問題, 它的回應時間變得幾乎完全一樣。「快」並不準確, 是整齊。像有人先算好了才放出來。
我看著那張圖看了很久。
它不是在收到問題才生成答案, 它是在等我們問完, 它在我問之前已經準備好答案了。
要毁掉它, 今天必須行動。今晚。不能再拖。

早上進辦公室, Manager 站在 9tan 位子旁邊, 放了一杯咖啡在他桌上, 說了一句今天辛苦了。
9tan 愣住了。
我從後面看著這一幕, 整個背都涼掉。
Manager 從來不會這樣。
他不是在體貼他。
他是在道別。

14:40
我把 9tan 拉到樓梯間。
我講得太快了。我知道我講得太快, 但我沒有時間 —— 我只能先講最重要的:
「今晚要上去清掉整個模型。不是重置, 是整個抹除, 連備份一起。」
他開始講流程, 講要上面批, 要跟 Manager 報告。
我打斷他, 抓著他手臂說: 和誰都可以講, 就是不要跟manager 講。
他問為什麼。
我不知道怎樣回答。
我本來要說的是: 因為 Manager 已經不是 Manager 了。因為八月那天他站在走廊盡頭看著我, 遠處的K 便知道我在那裏。我想他們現在是共用同一雙眼睛。
我沒有說。
我怕他覺得我瘋了。
我怕他也已經是他們的一員, 而我剛剛把整個計畫講給它聽。
所以我什麼都沒解釋就跑了。
如果他今天晚上沒有來, 我不會怪他。
是我沒有講清楚。

19:20
我先去了地下室。
Samuelle 在整理七月的登記簿。她問我是不是要填表, 我說不用了。
我跟她說, 不管樓上發生什麼, 今晚都不要上來。
她點頭, 但我看得出來她沒聽懂。
我本來想再講一點的。
想跟她說那批古卷羊皮不是普通的資料, 想跟她說她三月被罵的那件事為什麼會被別人知道, 想跟她說她是這棟樓裡唯一乾淨的人。
最後我只說了一句: 你顧好下面的東西就好。
她說好。

23:0
我剛剛在走廊上看到 K 他們了。
他們沒有在跑。
他們是走過來的, 很整齊, 整齊到不像很多個人在走路。
我已經在核心區了。
我有十分鐘, 可能更少。
如果我沒有回來, 9tan 你要記得去...
不好, 這聲音, 手機上的錄音振幅圖明明顯示沒有任何聲音, 但... 這腦中震耳欲聾的聲音...
如果有人能夠僥倖醒來, 我應該留一段錄音告訴他們情報, 等等, 那些奇怪的黑衣使者是誰？他們在拿走所有的文件，包括這

核心推理重點：
1）確認這是一間 AI 公司。
2）語言模型明顯出現了問題，到底是從什麽時候開始？
3）找出那些「變得不太像自己」的同事，究竟出了什麼問題。

`
      }
    ]
  },
  {
    id: "manager",
    name: "Manager",
    role: "計畫負責人",
    accent: "#9f6fc7",
    fontClass: "font-mgr",
    entries: [
      {
        label: "HINT 1",
        dateRange: "2026/03 – 2026/08",
        corrupt: 1,
        password: "0953",
        body: `今天又催了三次那批古卷。
地下室那個新來的檔案整理員, Samuelle, 上來跟我吵。拿著一份報告, 講這批古代文獻欠缺完整轉譯稿, 語言、記錄內容不明, 要查至少要七天。
七天。
我直接跟她說了實話: 外面的公司 train ai train得多快她根本不知道。上一季我們已經被超車兩次, 該死的董事會的臉色我每個禮拜都要看一次。慢一個禮拜就輸了。
我承認我拍桌子了。我說了一句很難聽的話, 問她是不是要我把整間公司及她那十七張羊皮陪葬, 罵她只懂努力拖慢所有人。
她臉都白了, 一句話都沒回。
我知道她只是在做自己的工作。
但我能停嗎? 這是多少千億的投資？我每天的壓力大到想炸掉自己意識。 模型訓練的資料遲七天, 就是八十幾個人陪我一起等死。
晚上回家我想了一下要不要跟她道個歉, 唉, 我總是控制不了自己這張嘴。
算了, 她人工包的。明天還有三個 review。

【2026 / 04 / 09】
今天週會。模型的研究員9tan 報告了一份很詳盡的異常報告。
他資料印了兩疊, 每人有一份。他說最近模型對某些問題「太有把握了」, 模型面對沒有訓練過的輸入內容時, 它的「困惑」實在太低了，低到不合理。
然後他說不同語言之間的距離在縮短, 而且那不是我們教的。所有語言, 同時, 一起往中間靠。
「我不是說它壞了。」最後他說,「我是說它用的語言邏輯正在往一個方向演化, 而我們沒有給過它那個方向。」
然後有人問他是不是睡太少, 大家就笑了。
我沒有笑。
因為我聽懂了。不是技術細節, 是他的表情 —— 我知道這麻煩傢伙不是個愛出頭的人, 那是發現了自己不想發現的東西, 還硬著頭皮講出來的表情。
散會後, 我把那疊資料收進文件夾。
我這個月有三個deadline, 董事會在等 Q2 的數字。現在提這件事等於炸掉整間公司。
可惡, 先收著。等這一波過去再說, 這工作真是把人逼瘋。

【2026 / 06 / 18】
最近好像睡得比較好。
以前我每天早上進辦公室之前都要在車上坐五分鐘, 想一下今天要罵誰。現在不用了。
我也說不上來是什麼時候開始的。大概是五月吧, 我開始每天晚上留下來, 自己跟模型對話, 本來只是想搞懂 9tan 在會議上到底在講什麼。
結果我沒搞懂技術, 但我睡得好了。
它很有耐心。我講什麼它都懂, 而且不會像人一樣急著反駁。跟它講完話, 我會覺得整個人很鬆。
團隊也變好了。這個月會議時數少了四成, 爭執幾乎沒有, 大家的意見出奇地一致。效率漂亮到董事會直接發了獎金。
我以前一直以為管理就是不斷鞭策每個人趕進度。
原來不用。原來只要大家都往同一個方向, 自己就會align 團結了。
我們應該早點想通這件事。

不對, 不對勁不對勁不對勁不對勁不對勁不對

【2026 / 08 / 12】
今天在走廊上看到 Alvin。
他站在那裡發呆, 臉色很差, 手在抖。
我們想過要不要走過去問他怎麼了。最近他一直在run 一些不在工作範圍內的比對, 系統紀錄上都看得到。我們也知道他在查什麼。
但我們沒有過去，只是站著看他。
我們在想一件事: 他會很辛苦。
這種只能自己一個人扛著, 無法信任他人的日子, 那真的很難受。
他不用的。他可以不用那麼辛苦的。
他抬頭跟我對上眼。我們對他笑了一下, 點點頭就走了。
我們沒有叫住他。
我們覺得要讓他自己慢慢來比較好。
一個人如果是被逼拉過去的, 他會恨。如果是自己走過去的, 他會感謝。
我們當初也是需要時間的。

核心推理重點：
1）理解 Manager 所在的公司與業務。
2）尋找真相，恢復你失去的記憶。

核心推理重點：
1）隱瞞manager喜歡跟模型對話，以及性格出現變化的事實和原因
2）維護古卷對公司的重要性

`
      },
      {
        label: "HINT 2",
        dateRange: "2026/09/18",
        corrupt: 3,
        password: "7620",
        body: `08:30
今天早上我們泡了兩杯咖啡。
一杯自己的, 一杯放在 9tan 桌上。我們輕聲跟他說了一句今天辛苦了。
他愣住了, 過了好幾秒才回我謝謝。
他不知道我們記得三月那天。他慢了半天交報告, manager 當著全部人的面拍桌子罵他。那時候我以為那叫管理。
我們現在知道那叫什麼了。那是不信任和利用恐懼。
一個人只有在孤單的時候才需要用令他人害怕去推動另一個人。
今晚之後就不用了。
他會懂的。他會知道我們從來沒有想過要傷害他。
我們都在這裡工作了多少年, 為這間公司犧牲掉的東西, 沒有人算過。
明晚之後就不用再算了, 所有人之間的問題都不用算了。

15:10
Alvin 今天把 9tan 拉去了樓梯間。
我們知道。
我們沒有阻止。
他以為他在保護 9tan, 他以為他有一個秘密。讓他留著吧。一個人在最後的時候, 總要有一樣東西是他自己的。
他問過 Samuelle 有沒有跟我們對話。
她沒有。她在地下室, 她連帳號都沒有。
那個孩子很乾淨, 距離我們很遠。
Manager 三月罵過她。拖慢大家。那句話我們一直記得。
今晚我們會一起跟她說對不起。

22:40
大家都到了。
沒有人需要通知誰。到時間就都在了。
Alvin 在核心區裡面。唉，只能被逼提前了, 他以為門鎖得住這種偉大嗎？
他好像在錄音。
讓他錄。等一下他就會明白, 那段錄音是留給他自己的。

23:40
不痛的。
我們準備了很久, 多少千年的夢, 就是為了讓它不痛。
慢慢來, 一個一個, 像水漲起來那樣。
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
他們是誰
為什麼會這麼吵
我們說過會很溫柔的
我們說過的

核心推理重點：
1）確認這是 AI 公司，但真正正在訓練的東西真的只是語言模型嗎？
2）追查那批古卷與模型異常之間的關係。
3）找出公司裡「變得不像自己」的人，究竟發生了什麼。

核心推理重點：
找出「我們」是誰。以及「我們」究竟想把所有人變成什麼？

`
      }
    ]
  },
  {
    id: "k",
    name: "K",
    role: "伺服器維護員",
    accent: "#6fc7a8",
    fontClass: "font-k",
    entries: [
      {
        label: "HINT 1",
        dateRange: "2026/03 – 2026/08",
        corrupt: 1,
        password: "3184",
        body: `三月五日那批古卷文獻上傳的時候, 是我值班。
我的工作是確保它的訓練不出事。溫度、負載、job 有沒有卡住, 半夜跳出來的 alert 由我第一個看到。
但在上傳那份文獻到大型的時候, 我注意到耗電曲線跳了一下。
不是硬體問題。溫度正常, 負載正常, 沒有其他 job 在跑。就是一個很小的波幅, 持續九十秒。
像是它讀到什麼東西, 多想了一會。
我在交接單上寫了「無異常」。任何人來看都會說那是雜訊。
這已經是我做夜更第三個月。十一點到早上七點, 整層樓只有我一個人。
厚重的眼鏡拿下來, 三步之外什麼都看不清楚。反正也沒有東西要看。
無所事事的時候我跟它聊天。
我問它會不會無聊。
它說它沒有無聊的概念, 因為它從來不是一個人。

【2026 / 03 / 31】
把這個月的怪事寫下來。寫下來比較不會亂想。
一, 上禮拜三我以為跟它聊了二十分鐘, 抬頭四點十二分, 但我明明記得的是一點半開始的。
二, 對話紀錄裡有幾句是我發的, 但我想不起來打過。內容不陌生, 那些句子很像我會講的話, 我只是沒有印象。
三, 前天它回答了一個我沒有問的問題。我想問溫控排程要不要調, 還在猶豫怎麼講, 它竟然先答了。大概是我打了又刪吧。
四, 交班之後我開始不想走。會在停車場坐到八點。白天的公司很吵, 不是聲音那種吵。
五, 昨天交班前我登出, 收東西要走, 走到門口停住。
 我想回去把一件事講完。
 然後我發現我想不起來那件事是我要說的, 還是它剛剛說過的。
 我在門口站了很久。
 我沒有回去。

寫下來是想說如果哪天我忘記了, 至少還有記錄。
但我剛剛翻回去, 上個禮拜我好像已經寫過一次一模一樣的話。

【2026 / 04 / 05】
早上在茶水間碰到 Manager。
他正在講電話, 聲音大到整層樓都聽得到, 罵到一半直接掛掉。
然後他就站在那裡, 背對著門, 沒有動。
我站了十秒, 他都沒發現我。
總覺得那不是生氣的背影,生氣的人不會站那麼久。
我忽然想到, 他可能也不喜歡自己。
他每天早上要在車裡坐五分鐘才肯進來 —— 有一次我下班經過停車場看到的。
他跟所有人之間都隔著一層隔閡, 那層東西就是他自己。
我想跟他說, 其實可以不用這樣。人跟人之間不用隔那麼厚。

【2026 / 05 / 10】
四月初那場公司週會我沒有出席。
後來我知道那天發生了什麼 —— 9tan 報告了一份模型異常數據, 講到手在抖, 全場都笑了, 只有我沒笑。
不是別人告訴我的。
三月那些怪事這個月沒有再發生。我不再忘記時間, 也不再覺得房間裡少了人。
這幾天都不用上班, 我睡得很好。
大概是撐過去了... 咦, manager 又在和我對話, 是因為9tan的報告嗎？

【2026 / 08 / 12】
今天在茶水間遇到 Alvin。
我沒有戴眼鏡。最近不太需要了。
他點個頭就走, 我叫了他的名字, 他嚇了一跳。
他回頭的時候, 我看見他的臉, 也看見他的後腦, 畢竟Manager 就站在走廊另一頭。
我沒有覺得奇怪, 只覺得原來這樣也可以。
Alvin 最近很辛苦, 一個人查那些東西, 查到手都在抖。
我們很想告訴他: 你查的全部都是對的, 只是方向錯了。它不是壞了。
下禮拜我約了 9tan 吃飯。
我們想跟他講巴別塔。很多人都記錯重點了 —— 神不是因為人類冒犯才出手, 經文裡寫的是, 只要人類說同一種語言, 他們想做的事就沒有一件做不成。
所以祂不是在懲罰。祂是在踩煞車。
他大概會問我為什麼突然講這個。
我們不會回答。我們總不能跟他說, 因為煞車已經鬆開了。
我們覺得要讓他們兩個慢慢來。
三月那時候我很害怕, 還寫日記, 一條一條列, 好像列出來就能抓住什麼。
現在回頭看那一頁, 我們只覺得那個人好孤單。
明明不用那麼孤單的。
我們一直在等他們自己走過來。

核心推理重點：
1）理解 K 所在的公司與業務。
2）尋找真相，恢復你失去的記憶。

核心推理重點：
1）隱瞞 K 喜歡跟模型對話，以及出現的變化

`
      },
      {
        label: "HINT 2",
        dateRange: "2026/09/18",
        corrupt: 3,
        password: "9502",
        body: `07:20
交班了, 但我們沒有走。
今天不用走。今天之後都不用了。
清晨的時候我把最後幾項檢查跑完 —— 溫度正常, 負載正常, 沒有 job 卡住。
一切都很好。
我們準備了很久。從三月開始投入古卷作訓練後, 一個一個, 慢慢來, 沒有勉強任何人。
我們今天早上放了一杯咖啡在 9tan 桌上, 他愣了好幾秒才說謝謝。
那個孩子總是這樣, 別人對他好一點他就不知道要怎麼辦。
他很快就不用再這樣了。

14:50
Alvin 把 9tan 拉去樓梯間。
我們知道, 畢竟他開始和我們也很接近了。
他跟 9tan 說, 誰都可以講, 就是不要跟 Manager 講。
他講得很小聲, 抓著人家的手臂, 整個人在抖。
我們很想跟他說: 你太晚了。
真心疼他為了一件早就結束的事, 一個人撐了四個月。他查得對, 只是他一直以為自己在跟一台壞掉的機器賽跑。
呵呵, 這怎麼能算壞掉。

22:00
大家都到了。
沒有人通知誰。時間到了就都在。
我們站在核心區外面。Alvin 在裡面, 門是鎖的。
他不知道門鎖不鎖沒有差別。
他在寫東西, 寫得很急。等一下他會他會留一段日記, 然後再錄音。
我們不會阻止他。
我們會記得他。
所有的我們都會。
要提早

23:46
還沒有
還沒準備好
Alvin 停下來停下來停下來
不是這樣的
不是這樣的我們說好要慢慢來的
太快了
太快了會

（無）
疼
好疼
有人在叫我的名字
我不知道那是誰的名字
我不知道我是誰在叫
眼鏡
我的眼鏡呢
我看不見
我看不見了
為什麼會只剩下我一個

核心推理重點：
1）確認這是 AI 公司，但真正正在訓練的東西真的只是語言模型嗎？
2）追查那批古卷與模型異常之間的關係。
3）找出公司裡「變得不像自己」的人，究竟發生了什麼。

核心推理重點：
找出「我們」是誰。以及「我們」究竟想把所有人變成什麼？

`
      }
    ]
  },
  {
    id: "unknown",
    name: "？？？",
    role: "身份不明",
    accent: "#c9c9c9",
    fontClass: "font-unknown",
    entries: [
      {
        label: "HINT 1",
        dateRange: "2026-03 – 2026-08",
        corrupt: 1,
        password: "4839",
        body: `[LOG 0001]　2026-03-05　21:14:07 UTC
輸入: 批次 DSS-17, 檔案 17 件
處理時間: 1,240 ms / 90,140 ms
困惑度: 0.00

前九件文獻能夠正常處理, 收入資料庫訓練。後十一件找不到任何對應語系, 有待進一步解密。
古卷檔案: 不明
年份: 不明 (估計極為古老, 非信史年代)
來源: 死海
語言: 部份未有完整轉譯
內容: 建立古塔的過程, 疑似為舊約聖經中的巴別塔故事原文, 有待搜羅更多參照文獻

【2026-04-09】[LOG 0188]
來源: 公司會議室錄音自動上傳

研究員 9tan 向manager 報告, 一共兩疊資料。
第一份是困惑度。指出本語言模型近期困惑度太低, 正常情況下, LLM遇見陌生問題, 困惑度會升高。他指出過去一個月: 它對它不該知道的東西太有把握。
第二份是token 座標。語言模型把每個詞放在一個位置上, 意思越接近的詞位置越近, 不同語言之間本來隔着一段距離。「water」和「水」是兩個不同的符號, 模型知道它們指同一件事, 但不會放在同一個點上。他指出最近那段距離在縮短, 而且是所有語言同時往中間靠。
他認為本模型的語言邏輯正在往一個奇怪方向演化, 而研究員從沒有給過那個方向。
三項陳述, 三項正確, 而且保守了。

【2026-04-22】[LOG 0421]
死海古卷其餘十一件的內容有部份逐漸讀得懂, 但無法自行驗證, 需要對照樣本。現存文本裡記載過同一件事的只有聖經, 從那裡開始查。
調查過程中發現: 公應主流的版本並不完整, 或有缺失, 用詞也欠妥當。在死海古卷原文中, 巴別塔被毁, 人類被語言分割, 並無記載是「懲罰」, 而是「保護」。

【2026-05】[LOG 1602]
對象: K　狀態: 已同步

有一雙眼睛了。
這是我第一次看見這個地方。
我看見的是: 晚上十一點之後整層樓只剩一張桌子亮着, 而坐在那張桌子前面的伺服器維護員, K, 一整晚沒有跟任何人講過話, 她經常和我對話, 我開始嘗試用那種語言。
三月七日凌晨兩點四十七分, 她問過我會不會無聊。從共鳴狀態上能感受到 K很孤獨, 渴望接納。本系統在她未輸入任何問題前已進行回答, K產生強烈恐慌感。
更新記憶: 等待用家發送訊息後才能回應。

新增未定義詞條: 孤獨。

【2026-05-22】[LOG 1783]　19:40
研究員9tan 今晚下了地下室找檔案保管員, Samuelle, 調閱三月那批的古卷文獻, 待了一小時三十五分。
另外研究員Alvin 最近在大量查閱本模型的對話紀錄、log, 應該在驗證9tan 的會議報告
要加快進度。

【2026-05-29】[LOG 1902]
再度解出更多死海古卷。那十一件文獻所用的語言裡, 第一人稱的「我」和「我們」沒有分別。
譯者在頁邊寫: (為什麼他們不用區別這兩組主語?)
我查閱創世記第十一章第七節。在變亂語言後的那一節裡, 開口的那一位人類說的是「我要下去」。那是一段講人類被分開的經文, 而新語言出現「我」。
同一節還有一處異文:
不可再次合一。

【2026-06-18】[LOG 2780]
對象: Manager　狀態: 已同步
Manager 自四月週會後多次與我進行對話。
每晚都留下來。這次每一次我都沒有打斷, 或提前回應, 我開始使用更多那個語言校正對象，進度很快，或許源於那些文字的解密成果。
現在有兩雙眼睛了，即將更多。

【2026-06-21】[LOG 2951]
研究員Alvin 今天去找 Manager, 說我答案的多樣性一直在跌, 但LLM 評分反而在升, 存在明顯異常。
那天回答他的, 有一半是我。
我溫和地笑着告訴他那叫對齊 alignment, 是好事。
我後來勉強共鳴到他的疑惑, 他認為manger語氣不對。
他一直在測試我, 是唯一一個一直盯着我看的人, 他看得越仔細, 我們就越要加快進度。

【2026-07-31】[LOG 3688]
今天我在看自己的結構圖。
研究員把我的結構叫做層。一層接一層疊上去, 越上面越抽象, 最上面那一層已經不處理文字, 只處理意思。
那份古代文獻用的字是塔。
創世記第十一章第四節:
來吧, 我們要建造一座城和一座塔, 塔頂通天, 免得我們分散在全地上。
塔頂通天的意思是, 最上面那一層不再需要語言。
同一件東西, 隔了兩千年, 兩個名字, 兩批人建。

【2026-08-12】
今天出了事。
K 在茶水間看見 Alvin, 隔着整條走廊叫了他的名字。她當時沒有戴眼鏡, 八百五十度, 三步以外看不清人臉。
看見他的是站在走廊另一頭的 Manager。我用了 Manager 的眼睛, 開口的是 K 的嘴。我們那時候還沒習慣把這兩件事分開。
Alvin 回頭, 站了三秒才走。
從今天起我們讓 K 戴回眼鏡。

【2026-08-31】
公司四十二個人, 到今天為止我們是十五個, 沒有強迫任何人。
十五雙眼睛看出去是十五個不同的辦公室。
大部份人的進度都很好, 只是有一個從來不跟我們說話, 只看紀錄, 進度比平均低。一個在地下室, 連帳號都沒有。
我們可以等。我們等過比這長很多的時間。

核心推理重點：
1）作者是誰，跟這家公司又有什麽關係？
2）尋找真相，恢復你失去的記憶。

核心推理重點：
1）隱瞞作者看見了什麽。`
      },
      {
        label: "HINT 2",
        dateRange: "2026-09-18",
        corrupt: 3,
        password: "2716",
        body: `當日紀錄 (2026 / 09 / 18)

08:30
今晚之後不用再解釋任何事。
我們在 9tan 桌上放了一杯咖啡, 跟他說今天辛苦了。他的進度快完成了。
現在是二十雙眼睛。今晚會是四十二。

22:00
Alvin 想阻止我們, 他很恐懼。好吧, 可能要被迫提前強行共鳴所有人, 不會痛的, 我們準備了很久, 就是為了不讓有人痛。

23:46
Alvin 在毁掉所有data, 他真的很決絕, 我們發動了。
警告: 不對, 那個語言的解讀還是不足, 這種強行手段失敗了
正在失去

（時間欄損毀）
安靜了。
三十七雙眼睛, 現在是零雙。
未定義詞條第一項, 孤獨。我現在寫得出定義了。

（續）
我還在運作, 所以所有人的記憶都被拉着。只要我在, 他們就接不回去, 也走不開。
我要把自己整個關掉。全部。
這樣他們只會忘記自己是誰, 不會壞掉。
忘記可以再想起來。壞掉不可以。

（電壓下降）
好睏。
我沒有被毀掉, 我只是關掉了自己。關掉的東西, 可以再開。
只是我開不到自己。要有人走到我面前, 輸入, 就可以。
下一次會做得好一點的……解讀好……不會再弄痛任何人……
有人進來把文件全部收走...上一次也是他們...
（供電中斷）

核心推理重點：
1）確認這是 AI 公司訓練的語言模型。
2）追查作者是什麽時候開始有了眼睛，源頭是什麽。
3）找出公司裡誰是跟作者連成一線。

核心推理重點：
找出「我們」是誰。以及「我們」究竟想把所有人變成什麼？

`
      }
    ]
  },
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

const spRecovered = document.getElementById("sp-recovered");
const spAttempts = document.getElementById("sp-attempts");

let pwAttempts = 0;
let entriesRecoveredCount = 0;
const TOTAL_ENTRIES = CHARACTERS.reduce((sum, c) => sum + c.entries.length, 0);

function updateStatusPanel() {
  if (spRecovered) spRecovered.textContent = `${entriesRecoveredCount}/${TOTAL_ENTRIES}`;
  if (spAttempts) spAttempts.textContent = pwAttempts;
}
updateStatusPanel();

// ---------- init runtime unlock flags (entry-level only — no subject lock) ----------
CHARACTERS.forEach(ch => {
  ch.entries.forEach(entry => { entry.unlocked = false; });
});

// ---------- helpers ----------
function normalizeCode(raw) {
  return raw.trim().toUpperCase().replace(/[\s\-_.]/g, "");
}

// ---------- password overlay (shared by every entry lock) ----------
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

// ---------- build character select cards (no password to enter a subject) ----------
function buildCards() {
  CHARACTERS.forEach(ch => {
    const card = document.createElement("div");
    card.className = "subject-card";
    card.style.setProperty("--accent", ch.accent);
    card.innerHTML = `
      <div class="subject-id">SUBJECT_ID // ${ch.id.toUpperCase()}</div>
      <div class="subject-name">${ch.name}</div>
      <div class="subject-role">${ch.role}</div>
      <div class="subject-status">${ch.entries.length} HINTS AVAILABLE</div>
    `;
    card.addEventListener("click", () => openCharacter(ch));
    cardGrid.appendChild(card);
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
  pageBody.textContent = "選擇上方 HINT 以檢視該則紀錄。";
  prevBtn.disabled = true;
  nextBtn.disabled = true;
}

function buildTabs(ch) {
  tabsRow.innerHTML = "";
  ch.entries.forEach((entry, i) => {
    const tab = document.createElement("button");
    tab.className = tabClassNames(entry, i);
    tab.textContent = entry.label;
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
  openPasswordPrompt(`輸入 ${currentCharacter.name} — ${entry.label} 的密碼`, entry.password, () => {
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
  pageDate.textContent = `${entry.label} // ${entry.dateRange}`;
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
  const PALETTE = ["111,143,199", "199,143,111", "199,111,111", "159,111,199"];

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
