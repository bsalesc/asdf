import{_ as s,c as n,a2 as a,j as e,a as l,G as d,B as i,o as r}from"./chunks/framework.BQmytedh.js";const F=JSON.parse('{"title":"構成設定","description":"","frontmatter":{},"headers":[],"relativePath":"ja-jp/manage/configuration.md","filePath":"ja-jp/manage/configuration.md","lastUpdated":1735060646000}'),c={name:"ja-jp/manage/configuration.md"},p={tabindex:"0"},f={style:{"text-align":"left"}},u={tabindex:"0"},g={style:{"text-align":"left"}},h={tabindex:"0"},y={style:{"text-align":"left"}},b={tabindex:"0"},m={style:{"text-align":"left"}};function x(_,t,v,k,D,A){const o=i("Badge");return r(),n("div",null,[t[27]||(t[27]=a(`<h1 id="構成設定" tabindex="-1">構成設定 <a class="header-anchor" href="#構成設定" aria-label="Permalink to &quot;構成設定&quot;">​</a></h1><p><code>asdf</code>の構成設定には、他人と共有可能な<code>.tool-versions</code>ファイルと、<code>.asdfrc</code>や環境変数によってカスタマイズ可能なユーザ固有の設定とがあります。</p><h2 id="tool-versions" tabindex="-1"><code>.tool-versions</code> <a class="header-anchor" href="#tool-versions" aria-label="Permalink to &quot;\`.tool-versions\`&quot;">​</a></h2><p><code>.tool-versions</code>ファイルがディレクトリに存在する場合、当該ディレクトリおよびサブディレクトリで、ファイル内で宣言しているツールのバージョンが使用されます。</p><div class="warning custom-block"><p class="custom-block-title">備考</p><p>グローバルのデフォルト値は、<code>$HOME/.tool-versions</code>ファイルで設定できます。</p></div><p><code>.tool-versions</code>ファイル内は下記のような記述となっています:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ruby 2.5.3</span></span>
<span class="line"><span>nodejs 10.15.0</span></span></code></pre></div><p>コメントを含めることもできます:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ruby 2.5.3 # This is a comment</span></span>
<span class="line"><span># This is another comment</span></span>
<span class="line"><span>nodejs 10.15.0</span></span></code></pre></div><p>バージョンの表記は下記の形式があります:</p><ul><li><code>10.15.0</code> - 実バージョンの表記です。バイナリのダウンロードに対応しているプラグインの場合、バイナリがダウンロードされます。</li><li><code>ref:v1.0.2-a</code> or <code>ref:39cb398vb39</code> - 指定されたタグ/コミット/ブランチをgithubからダウンロードし、コンパイルされます。</li><li><code>path:~/src/elixir</code> - 使用するツールをカスタムコンパイルしたバージョンへのパスです。言語開発者などが使用します。</li><li><code>system</code> - このキーワードを指定した場合、asdfが管理していない、システム上のツールバージョンへパススルーします。</li></ul><div class="tip custom-block"><p class="custom-block-title">ヒント</p><p>スペースで区切れば、複数のバージョンを指定できます。例えば、Python <code>3.7.2</code>を使用し、Python <code>2.7.15</code>にフォールバックし、最終的に<code>system</code>のPythonにフォールバックさせるには、<code>.tool-versions</code>に下記の行を追記します。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>python 3.7.2 2.7.15 system</span></span></code></pre></div></div><p><code>.tool-versions</code>ファイルで定義されているすべてのツールをインストールするには、<code>.tool-versions</code>ファイルを含むディレクトリで、<code>asdf install</code>コマンドを引数を指定せずに実行します。</p><p><code>.tool-versions</code>ファイルで定義されている単一のツールをインストールするには、<code>.tool-versions</code>ファイルを含むディレクトリで、<code>asdf install &lt;name&gt;</code>コマンドを実行します。ツールは、<code>.tool-versions</code>ファイルで指定されたバージョンでインストールされます。</p><p>ファイルは、直接編集するか、<code>asdf local</code>コマンド(または<code>asdf global</code>コマンド)を使用して更新してください。</p><h2 id="asdfrc" tabindex="-1"><code>.asdfrc</code> <a class="header-anchor" href="#asdfrc" aria-label="Permalink to &quot;\`.asdfrc\`&quot;">​</a></h2><p><code>.asdfrc</code>では、ユーザのマシン固有の構成を設定します。</p><p>asdfはデフォルトで<code>\${HOME}/.asdfrc</code>に構成ファイルを配置します。ファイルの場所は、<a href="#asdf-config-file"><code>ASDF_CONFIG_FILE</code>環境変数</a>で設定できます。</p><p>下記は、構成に必要な項目とそのデフォルト値を示しています:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>legacy_version_file = no</span></span>
<span class="line"><span>use_release_candidates = no</span></span>
<span class="line"><span>always_keep_download = no</span></span>
<span class="line"><span>plugin_repository_last_check_duration = 60</span></span>
<span class="line"><span>disable_plugin_short_name_repository = no</span></span>
<span class="line"><span>concurrency = auto</span></span></code></pre></div><h3 id="legacy-version-file" tabindex="-1"><code>legacy_version_file</code> <a class="header-anchor" href="#legacy-version-file" aria-label="Permalink to &quot;\`legacy_version_file\`&quot;">​</a></h3><p><strong>対応している</strong>プラグインの場合、他のバージョンマネージャで使用されているバージョンファイルを読み込むことができます。例えば、Rubyの<code>rbenv</code>であれば<code>.ruby-version</code>ファイルを読み込みます。</p>`,22)),e("table",p,[t[4]||(t[4]=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"オプション"),e("th",{style:{"text-align":"left"}},"説明")])],-1)),e("tbody",null,[e("tr",null,[e("td",f,[t[0]||(t[0]=e("code",null,"no",-1)),t[1]||(t[1]=l()),d(o,{type:"tip",text:"デフォルト",vertical:"middle"})]),t[2]||(t[2]=e("td",{style:{"text-align":"left"}},[l("バージョンの読み込みには"),e("code",null,".tool-versions"),l("を使用します")],-1))]),t[3]||(t[3]=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"yes")]),e("td",{style:{"text-align":"left"}},[l("利用可能なレガシーバージョンファイル("),e("code",null,".ruby-version"),l("など)がある場合、プラグインのフォールバックで使用します")])],-1))])]),t[28]||(t[28]=e("h3",{id:"always-keep-download",tabindex:"-1"},[e("code",null,"always_keep_download"),l(),e("a",{class:"header-anchor",href:"#always-keep-download","aria-label":'Permalink to "`always_keep_download`"'},"​")],-1)),t[29]||(t[29]=e("p",null,[e("code",null,"asdf install"),l("コマンドでダウンロードしたソースコードやバイナリを、保持しておくか削除するかを制御します。")],-1)),e("table",u,[t[9]||(t[9]=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"オプション"),e("th",{style:{"text-align":"left"}},"説明")])],-1)),e("tbody",null,[e("tr",null,[e("td",g,[t[5]||(t[5]=e("code",null,"no",-1)),t[6]||(t[6]=l()),d(o,{type:"tip",text:"デフォルト",vertical:"middle"})]),t[7]||(t[7]=e("td",{style:{"text-align":"left"}},"インストールが成功したら、ソースコードやバイナリを削除します",-1))]),t[8]||(t[8]=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"yes")]),e("td",{style:{"text-align":"left"}},"インストール後も、ソースコードやバイナリを保持します")],-1))])]),t[30]||(t[30]=e("h3",{id:"plugin-repository-last-check-duration",tabindex:"-1"},[e("code",null,"plugin_repository_last_check_duration"),l(),e("a",{class:"header-anchor",href:"#plugin-repository-last-check-duration","aria-label":'Permalink to "`plugin_repository_last_check_duration`"'},"​")],-1)),t[31]||(t[31]=e("p",null,"asdfプラグインリポジトリの同期間隔(分)を制御します。何らかのトリガーイベントが発生した際に、最後に同期した時刻からの経過時間をチェックします。設定された間隔以上の時間が経過していた倍は、新たに同期が開始されます。",-1)),e("table",h,[t[21]||(t[21]=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"オプション"),e("th",{style:{"text-align":"left"}},"説明")])],-1)),e("tbody",null,[e("tr",null,[e("td",y,[t[10]||(t[10]=e("code",null,"1",-1)),t[11]||(t[11]=l("から")),t[12]||(t[12]=e("code",null,"999999999",-1)),t[13]||(t[13]=l("までの整数値 ")),t[14]||(t[14]=e("br",null,null,-1)),t[15]||(t[15]=l()),d(o,{type:"tip",text:"デフォルト",vertical:"middle"}),t[16]||(t[16]=l("は")),t[17]||(t[17]=e("code",null,"60",-1))]),t[18]||(t[18]=e("td",{style:{"text-align":"left"}},"最後に同期した時刻から指定時間(分)以上経過していた場合、トリガーイベントで同期します",-1))]),t[19]||(t[19]=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"0")]),e("td",{style:{"text-align":"left"}},"トリガーイベントのたびに同期します")],-1)),t[20]||(t[20]=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"never")]),e("td",{style:{"text-align":"left"}},"同期しません")],-1))])]),t[32]||(t[32]=a('<p>同期は、以下のコマンドが実行されたときに発生します:</p><ul><li><code>asdf plugin add &lt;name&gt;</code></li><li><code>asdf plugin list all</code></li></ul><p><code>asdf plugin add &lt;name&gt; &lt;git-url&gt;</code>コマンドでは、プラグインの同期はトリガーされません。</p><div class="warning custom-block"><p class="custom-block-title">備考</p><p>値を<code>never</code>にしても、プラグインリポジトリの初期同期は停止されません。この動作については、<code>disable_plugin_short_name_repository</code>の節をご覧ください。</p></div><h3 id="disable-plugin-short-name-repository" tabindex="-1"><code>disable_plugin_short_name_repository</code> <a class="header-anchor" href="#disable-plugin-short-name-repository" aria-label="Permalink to &quot;`disable_plugin_short_name_repository`&quot;">​</a></h3><p>asdfプラグインのショートネームリポジトリの同期を無効化します。ショートネームリポジトリが無効となっている場合、同期イベントはすぐに終了します。</p>',6)),e("table",b,[t[26]||(t[26]=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"オプション"),e("th",{style:{"text-align":"left"}},"説明")])],-1)),e("tbody",null,[e("tr",null,[e("td",m,[t[22]||(t[22]=e("code",null,"no",-1)),t[23]||(t[23]=l()),d(o,{type:"tip",text:"デフォルト",vertical:"middle"})]),t[24]||(t[24]=e("td",{style:{"text-align":"left"}},"同期イベントが発生した際に、asdfプラグインリポジトリをクローンまたは更新します",-1))]),t[25]||(t[25]=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"yes")]),e("td",{style:{"text-align":"left"}},"プラグインショートネームリポジトリを無効化します")],-1))])]),t[33]||(t[33]=a('<p>同期は、以下のコマンドが実行されたときに発生します:</p><ul><li><code>asdf plugin add &lt;name&gt;</code></li><li><code>asdf plugin list all</code></li></ul><p><code>asdf plugin add &lt;name&gt; &lt;git-url&gt;</code>コマンドでは、プラグインの同期はトリガーされません。</p><div class="warning custom-block"><p class="custom-block-title">備考</p><p>プラグインショートネームリポジトリを無効化しても、すでに同期されたリポジトリは削除されません。プラグインリポジトリを削除するには、<code>rm --recursive --trash $ASDF_DATA_DIR/repository</code>コマンドを実行してください。</p><p>また、プラグインショートネームリポジトリを無効化しても、以前にこのソースからインストールされたプラグインは削除されません。プラグインを削除するには、<code>asdf plugin remove &lt;name&gt;</code>コマンドを実行してください。プラグインを削除すると、そのプラグインでインストールされたすべてのツールバージョンが削除されます。</p></div><h3 id="concurrency" tabindex="-1"><code>concurrency</code> <a class="header-anchor" href="#concurrency" aria-label="Permalink to &quot;`concurrency`&quot;">​</a></h3><p>コンパイル時に使用するデフォルトのコア数です。</p><table tabindex="0"><thead><tr><th style="text-align:left;">Options</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">整数値</td><td style="text-align:left;">ソースコードのコンパイル時に使用するコア数です</td></tr><tr><td style="text-align:left;"><code>auto</code></td><td style="text-align:left;"><code>nproc</code>、<code>sysctl hw.ncpu</code>、<code>/proc/cpuinfo</code>、または<code>1</code>、の優先順でコア数を計算します</td></tr></tbody></table><p>備考: <code>ASDF_CONCURRENCY</code>環境変数が設定されている場合はそちらが優先されます。</p><h3 id="プラグインフック" tabindex="-1">プラグインフック <a class="header-anchor" href="#プラグインフック" aria-label="Permalink to &quot;プラグインフック&quot;">​</a></h3><p>下記のタイミングで、カスタムコードを実行することができます:</p><ul><li>プラグインのインストール、Shim再生成、更新および削除をする際の前後</li><li>プラグインコマンドの実行前後</li></ul><p>例えば、<code>foo</code>というプラグインがインストールされていて、<code>bar</code>という実行可能ファイルが提供されている場合、以下のようなフックを使うことで、一番最初にカスタムコードを実行することができます:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pre_foo_bar = echo Executing with args: $@</span></span></code></pre></div><p>以下のパターンがサポートされています:</p><ul><li><code>pre_&lt;plugin_name&gt;_&lt;command&gt;</code></li><li><code>pre_asdf_download_&lt;plugin_name&gt;</code></li><li><code>{pre,post}_asdf_{install,reshim,uninstall}_&lt;plugin_name&gt;</code><ul><li><code>$1</code>: フルバージョン</li></ul></li><li><code>{pre,post}_asdf_plugin_{add,update,remove,reshim}</code><ul><li><code>$1</code>: プラグイン名</li></ul></li><li><code>{pre,post}_asdf_plugin_{add,update,remove}_&lt;plugin_name&gt;</code></li></ul><p>どのようなコマンドの前後にどのようなコマンドフックを実行すべきかについての詳細は、<a href="./../plugins/create.html">プラグインの作成</a>をご覧ください。</p><h2 id="環境変数" tabindex="-1">環境変数 <a class="header-anchor" href="#環境変数" aria-label="Permalink to &quot;環境変数&quot;">​</a></h2><p>環境変数の設定値は、お使いのシステムやシェルによって異なります。デフォルトロケーションは、インストールした場所や方法(Gitクローン、Homebrew、AUR)によって異なります。</p><p>環境変数は通常、<code>asdf.sh</code>/<code>asdf.fish</code>などをsourceする前に設定する必要があります。Elvishの場合は、<code>use asdf</code>の上側に設定します。</p><p>以下では、Bashシェルでの使用方法について説明します。</p><h3 id="asdf-config-file" tabindex="-1"><code>ASDF_CONFIG_FILE</code> <a class="header-anchor" href="#asdf-config-file" aria-label="Permalink to &quot;`ASDF_CONFIG_FILE`&quot;">​</a></h3><p><code>.asdfrc</code>構成ファイルへのパスです。任意の場所に設定できます。必ず絶対パスで設定してください。</p><ul><li>未設定の場合: <code>$HOME/.asdfrc</code>の値が使用されます。</li><li>使用方法: <code>export ASDF_CONFIG_FILE=/home/john_doe/.config/asdf/.asdfrc</code></li></ul><h3 id="asdf-default-tool-versions-filename" tabindex="-1"><code>ASDF_DEFAULT_TOOL_VERSIONS_FILENAME</code> <a class="header-anchor" href="#asdf-default-tool-versions-filename" aria-label="Permalink to &quot;`ASDF_DEFAULT_TOOL_VERSIONS_FILENAME`&quot;">​</a></h3><p>ツール名とバージョンの情報を格納するファイルのファイル名です。有効なファイル名であれば何でも設定できます。通常、<code>.tool-versions</code>ファイルを無視したい場合を除き、この値を変更するべきではありません。</p><ul><li>未設定の場合: <code>.tool-versions</code>の値が使用されます。</li><li>使用方法: <code>export ASDF_DEFAULT_TOOL_VERSIONS_FILENAME=tool_versions</code></li></ul><h3 id="asdf-dir" tabindex="-1"><code>ASDF_DIR</code> <a class="header-anchor" href="#asdf-dir" aria-label="Permalink to &quot;`ASDF_DIR`&quot;">​</a></h3><p><code>asdf</code>のコアスクリプト場所です。任意の場所に設定できます。必ず絶対パスで設定してください。</p><ul><li>未設定の場合: <code>bin/asdf</code>実行ファイルの親ディレクトリが使用されます。</li><li>使用方法: <code>export ASDF_DIR=/home/john_doe/.config/asdf</code></li></ul><h3 id="asdf-data-dir" tabindex="-1"><code>ASDF_DATA_DIR</code> <a class="header-anchor" href="#asdf-data-dir" aria-label="Permalink to &quot;`ASDF_DATA_DIR`&quot;">​</a></h3><p><code>asdf</code>がプラグイン、Shim、ツールのバージョンをインストールする場所です。任意の場所に設定できます。必ず絶対パスで設定してください。</p><ul><li>未設定の場合: <code>$HOME/.asdf</code>ディレクトリが存在すればその場所、存在しない場合は<code>ASDF_DIR</code>の値を使用します。</li><li>使用方法: <code>export ASDF_DATA_DIR=/home/john_doe/.asdf</code></li></ul><h3 id="asdf-concurrency" tabindex="-1"><code>ASDF_CONCURRENCY</code> <a class="header-anchor" href="#asdf-concurrency" aria-label="Permalink to &quot;`ASDF_CONCURRENCY`&quot;">​</a></h3><p>ソースコードのコンパイル時に使用するコア数です。この環境変数の値は、asdf構成ファイルの<code>concurrency</code>の値よりも優先されます。</p><ul><li>未設定の場合: asdf構成ファイルの<code>concurrency</code>の値が使用されます。</li><li>使用方法: <code>export ASDF_CONCURRENCY=32</code></li></ul><h3 id="asdf-force-prepend" tabindex="-1"><code>ASDF_FORCE_PREPEND</code> <a class="header-anchor" href="#asdf-force-prepend" aria-label="Permalink to &quot;`ASDF_FORCE_PREPEND`&quot;">​</a></h3><p><code>asdf</code>のShimやパスのディレクトリを<code>PATH</code>の先頭(最高優先度)に追加するかどうかを設定します。</p><ul><li>未設定の場合: macOSでのデフォルト値は<code>yes</code>、その他のシステムでのデフォルト値は<code>no</code>です。</li><li><code>yes</code>の場合: <code>asdf</code>ディレクトリを強制的に<code>PATH</code>の先頭に配置します。</li><li><code>yes</code>以外の文字列を設定した場合: <code>asdf</code>ディレクトリを強制的に<code>PATH</code>の先頭に配置することは <em>しません</em> 。</li><li>Usage: <code>ASDF_FORCE_PREPEND=no . &quot;&lt;path-to-asdf-directory&gt;/asdf.sh&quot;</code></li></ul><h2 id="完全な構成の例" tabindex="-1">完全な構成の例 <a class="header-anchor" href="#完全な構成の例" aria-label="Permalink to &quot;完全な構成の例&quot;">​</a></h2><p>下記のように、asdfをシンプルにセットアップしたとします:</p><ul><li>Bashシェル</li><li>インストール先は<code>$HOME/.asdf</code></li><li>Git経由でインストール</li><li>環境変数は何も設定していない</li><li><code>.asdfrc</code>ファイルは何もカスタマイズしていない</li></ul><p>すると、結果として以下のような構成となります:</p><table tabindex="0"><thead><tr><th style="text-align:left;">構成</th><th style="text-align:left;">値</th><th style="text-align:left;">値がセットされる過程</th></tr></thead><tbody><tr><td style="text-align:left;">config file location</td><td style="text-align:left;"><code>$HOME/.asdfrc</code></td><td style="text-align:left;"><code>ASDF_CONFIG_FILE</code>は空なので、<code>$HOME/.asdfrc</code>が使用されます。</td></tr><tr><td style="text-align:left;">default tool versions filename</td><td style="text-align:left;"><code>.tool-versions</code></td><td style="text-align:left;"><code>ASDF_DEFAULT_TOOL_VERSIONS_FILENAME</code>は空なので、<code>.tool-versions</code>が使用されます。</td></tr><tr><td style="text-align:left;">asdf dir</td><td style="text-align:left;"><code>$HOME/.asdf</code></td><td style="text-align:left;"><code>ASDF_DIR</code>は空なので、<code>bin/asdf</code>の親ディレクトリが使用されます。</td></tr><tr><td style="text-align:left;">asdf data dir</td><td style="text-align:left;"><code>$HOME/.asdf</code></td><td style="text-align:left;"><code>ASDF_DATA_DIR</code>は空であり、<code>$HOME</code>が存在するので、<code>$HOME/.asdf</code>が使用されます。</td></tr><tr><td style="text-align:left;">concurrency</td><td style="text-align:left;"><code>auto</code></td><td style="text-align:left;"><code>ASDF_CONCURRENCY</code>は空なので、<a href="https://github.com/asdf-vm/asdf/blob/master/defaults" target="_blank" rel="noreferrer">デフォルト構成</a>の<code>concurrency</code>の値に依存します。</td></tr><tr><td style="text-align:left;">legacy_version_file</td><td style="text-align:left;"><code>no</code></td><td style="text-align:left;"><code>.asdfrc</code>をカスタマイズしていないので、<a href="https://github.com/asdf-vm/asdf/blob/master/defaults" target="_blank" rel="noreferrer">デフォルト構成</a>を使用します。</td></tr><tr><td style="text-align:left;">use_release_candidates</td><td style="text-align:left;"><code>no</code></td><td style="text-align:left;"><code>.asdfrc</code>をカスタマイズしていないので、<a href="https://github.com/asdf-vm/asdf/blob/master/defaults" target="_blank" rel="noreferrer">デフォルト構成</a>を使用します。</td></tr><tr><td style="text-align:left;">always_keep_download</td><td style="text-align:left;"><code>no</code></td><td style="text-align:left;"><code>.asdfrc</code>をカスタマイズしていないので、<a href="https://github.com/asdf-vm/asdf/blob/master/defaults" target="_blank" rel="noreferrer">デフォルト構成</a>を使用します。</td></tr><tr><td style="text-align:left;">plugin_repository_last_check_duration</td><td style="text-align:left;"><code>60</code></td><td style="text-align:left;"><code>.asdfrc</code>をカスタマイズしていないので、<a href="https://github.com/asdf-vm/asdf/blob/master/defaults" target="_blank" rel="noreferrer">デフォルト構成</a>を使用します。</td></tr><tr><td style="text-align:left;">disable_plugin_short_name_repository</td><td style="text-align:left;"><code>no</code></td><td style="text-align:left;"><code>.asdfrc</code>をカスタマイズしていないので、<a href="https://github.com/asdf-vm/asdf/blob/master/defaults" target="_blank" rel="noreferrer">デフォルト構成</a>を使用します。</td></tr></tbody></table>',43))])}const S=s(c,[["render",x]]);export{F as __pageData,S as default};