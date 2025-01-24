import{_ as a,c as e,a2 as i,o as t}from"./chunks/framework.BQmytedh.js";const k=JSON.parse('{"title":"asdf","description":"","frontmatter":{},"headers":[],"relativePath":"ja-jp/contribute/core.md","filePath":"ja-jp/contribute/core.md","lastUpdated":1704890757000}'),n={name:"ja-jp/contribute/core.md"};function l(p,s,h,o,r,d){return t(),e("div",null,s[0]||(s[0]=[i(`<h1 id="asdf" tabindex="-1">asdf <a class="header-anchor" href="#asdf" aria-label="Permalink to &quot;asdf&quot;">​</a></h1><p>これは、<code>asdf</code>コアのコントリビューションガイドです。</p><h2 id="初期セットアップ" tabindex="-1">初期セットアップ <a class="header-anchor" href="#初期セットアップ" aria-label="Permalink to &quot;初期セットアップ&quot;">​</a></h2><p>GitHubで<code>asdf</code>をフォークするか、デフォルトのブランチをGitクローンしてください:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># clone your fork</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GITHUB_USE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">R</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/asdf.git</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or clone asdf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/asdf-vm/asdf.git</span></span></code></pre></div><p>コア開発用のツールは、このリポジトリの<code>.tool-versions</code>で定義されています。<code>asdf</code>自身でこれらのツールを管理したい場合は、下記のようにプラグインを追加してください:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bats</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/timgluz/asdf-bats.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shellcheck</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/luizm/asdf-shellcheck.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shfmt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/luizm/asdf-shfmt.git</span></span></code></pre></div><p><code>asdf</code>の開発に必要なバージョンを、下記のようにインストールします:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><p>開発ツールに影響を与える特定の機能を壊す可能性もあるため、ローカルマシンで開発する際は、<code>asdf</code>を使用しないほうが <em>良いかもしれません</em> 。下記に、使用しているツールを列挙します:</p><ul><li><a href="https://github.com/bats-core/bats-core" target="_blank" rel="noreferrer">bats-core</a>: BashまたはPOSIX準拠のスクリプトを単体テストするための、Bash自動テストシステムです。</li><li><a href="https://github.com/koalaman/shellcheck" target="_blank" rel="noreferrer">shellcheck</a>: シェルスクリプトの静的解析ツールです。</li><li><a href="https://github.com/mvdan/sh" target="_blank" rel="noreferrer">shfmt</a>: Bashをサポートするシェルパーサ、フォーマッタ、インタプリタです。</li></ul><h2 id="開発" tabindex="-1">開発 <a class="header-anchor" href="#開発" aria-label="Permalink to &quot;開発&quot;">​</a></h2><p>インストール済みの<code>asdf</code>に変更を加えずに、あなたが開発した変更内容を試したいときは、<code>$ASDF_DIR</code>変数に、クローンしたリポジトリのパスを設定し、そのディレクトリの<code>bin</code>と<code>shims</code>ディレクトリを一時的にパスの先頭へ追加します。</p><p>リモートにコミットまたはプッシュする前に、コードをローカルでフォーマット、Lint、およびテストすることを推奨します。その際は、次のスクリプト/コマンドを使用してください:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Lint</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./scripts/lint.bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --check</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Fix &amp; Format</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./scripts/lint.bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --fix</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Test: all tests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./scripts/test.bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Test: for specific command</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bats</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test/list_commands.bash</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">ヒント</p><p><strong>テストを作ってください!</strong> - 新機能にとってテストは<strong>必要不可欠</strong>であり、バグ修正のレビューをスピードアップさせることができます。プルリクエストを作成する前に、新しいコードをカバーするようなテストを作成してください。<a href="https://bats-core.readthedocs.io/en/stable/index.html" target="_blank" rel="noreferrer">bats-coreのドキュメント</a>もご覧ください。</p></div><h3 id="gitignore" tabindex="-1">Gitignore <a class="header-anchor" href="#gitignore" aria-label="Permalink to &quot;Gitignore&quot;">​</a></h3><p>下記は、<code>asdf-vm/asdf</code>リポジトリの<code>.gitignore</code>ファイルです。プロジェクト固有のファイルは無視をしています。使用しているOS、ツール、およびワークフロー固有のファイルは、グローバルな<code>.gitignore</code>構成で無視する必要があります。詳しくは<a href="http://stratus3d.com/blog/2018/06/03/stop-excluding-editor-temp-files-in-gitignore/" target="_blank" rel="noreferrer">こちら</a>をご覧ください。</p><p>@<a href="https://github.com/asdf-vm/asdf/blob/master/.gitignore" target="_blank" rel="noreferrer">Gitignoreコード</a></p><h3 id="git-blame-ignore-revs" tabindex="-1"><code>.git-blame-ignore-revs</code> <a class="header-anchor" href="#git-blame-ignore-revs" aria-label="Permalink to &quot;\`.git-blame-ignore-revs\`&quot;">​</a></h3><p><code>asdf</code>では、<code>.git-blame-ignore-revs</code>を使用して、Blameを実行する際のノイズを減らしています。詳しくは、<a href="https://git-scm.com/docs/git-blame" target="_blank" rel="noreferrer">git blameのドキュメント</a>をご覧ください。</p><p><code>git blame</code>を実行するときは、下記のように、このファイルと共に使います:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blame</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --ignore-revs-file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .git-blame-ignore-revs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./test/install_command.bats</span></span></code></pre></div><p>毎回手動でファイルを指定しなくても、gitのオプションで、<code>blame</code>を呼び出すたびにこのファイルを使うように設定することもできます:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blame.ignoreRevsFile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .git-blame-ignore-revs</span></span></code></pre></div><p>このファイルを使用するように、IDEを設定することもできます。例えば、VSCode(および<a href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens" target="_blank" rel="noreferrer">GitLens</a>)を使う場合は、<code>.vscode/settings.json</code>に下記のように記述します:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;gitlens.advanced.blame.customArguments&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;--ignore-revs-file&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;.git-blame-ignore-revs&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="batsテスト" tabindex="-1">Batsテスト <a class="header-anchor" href="#batsテスト" aria-label="Permalink to &quot;Batsテスト&quot;">​</a></h2><p>ローカルでテストを実行するには、下記のようにテストを呼び出します:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./scripts/test.bash</span></span></code></pre></div><p>テストを作成する前に、<strong>下記項目を一通り参照してください</strong>:</p><ul><li><code>test/</code>内にすでに作成されているテスト</li><li><a href="https://bats-core.readthedocs.io/en/stable/index.html" target="_blank" rel="noreferrer">bats-coreのドキュメント</a></li><li><code>scripts/test.bash</code>で使用されている既存のBatsの設定</li></ul><h3 id="batsのヒント" tabindex="-1">Batsのヒント <a class="header-anchor" href="#batsのヒント" aria-label="Permalink to &quot;Batsのヒント&quot;">​</a></h3><p>Batsでのデバッグは、難しいことがあります。<code>-t</code>フラグを指定してTAP出力を有効にすると、テスト実行中に特殊なファイルディスクリプタ<code>&gt;&amp;3</code>を使用して出力を表示できるため、デバッグが簡単になります。例えば次のとおりです:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># test/some_tests.bats</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">printf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;%s\\n&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Will not be printed during bats test/some_tests.bats&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">printf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;%s\\n&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Will be printed during bats -t test/some_tests.bats&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&amp;3</span></span></code></pre></div><p>詳しくは、bats-coreドキュメント内の<a href="https://bats-core.readthedocs.io/en/stable/writing-tests.html#printing-to-the-terminal" target="_blank" rel="noreferrer">Printing to the Terminal</a>で説明されています。</p><h2 id="プルリクエスト、リリース、conventional-commits" tabindex="-1">プルリクエスト、リリース、Conventional Commits <a class="header-anchor" href="#プルリクエスト、リリース、conventional-commits" aria-label="Permalink to &quot;プルリクエスト、リリース、Conventional Commits&quot;">​</a></h2><p><code>asdf</code>は、<a href="https://github.com/googleapis/release-please" target="_blank" rel="noreferrer">Release Please</a>という自動リリースツールを使用して、<a href="https://semver.org/" target="_blank" rel="noreferrer">セマンティックバージョン</a>を自動的に引き上げ、<a href="https://github.com/asdf-vm/asdf/blob/master/CHANGELOG.md" target="_blank" rel="noreferrer">Changelog</a>を生成しています。この情報は、前回のリリースからのコミット履歴を読み込むことで生成されます。</p><p><a href="https://www.conventionalcommits.org/ja/" target="_blank" rel="noreferrer">Conventional Commit messages</a>では、デフォルトブランチでのコミットメッセージのフォーマットとなる、プルリクエストタイトルのフォーマットを定義しています。これは、GitHub Action<a href="https://github.com/amannn/action-semantic-pull-request" target="_blank" rel="noreferrer"><code>amannn/action-semantic-pull-request</code></a>で強制されます。</p><p>Conventional Commitは、下記のフォーマットに従います:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;type&gt;[optional scope][optional !]: &lt;description&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- examples --&gt;</span></span>
<span class="line"><span>fix: some fix</span></span>
<span class="line"><span>feat: a new feature</span></span>
<span class="line"><span>docs: some documentation update</span></span>
<span class="line"><span>docs(website): some change for the website</span></span>
<span class="line"><span>feat!: feature with breaking change</span></span></code></pre></div><p><code>&lt;types&gt;</code>の種類は次のとおりです: <code>feat</code>、<code>fix</code>、<code>docs</code>、<code>style</code>、 <code>refactor</code>、 <code>perf</code>、<code>test</code>、<code>build</code>、<code>ci</code>、<code>chore</code>、 <code>revert</code>。</p><ul><li><code>!</code>: 破壊的変更を示します</li><li><code>fix</code>: セマンティックバージョンの<code>patch</code>を新しく作成します</li><li><code>feat</code>: セマンティックバージョンの<code>minor</code>を新しく作成します</li><li><code>&lt;type&gt;!</code>: セマンティックバージョンの<code>major</code>を新しく作成します</li></ul><p>プルリクエストのタイトルは、このフォーマットに従う必要があります。</p><div class="tip custom-block"><p class="custom-block-title">ヒント</p><p>プルリクエストのタイトルには、Conventional Commit messageのフォーマットを使用してください。</p></div><h2 id="dockerイメージ" tabindex="-1">Dockerイメージ <a class="header-anchor" href="#dockerイメージ" aria-label="Permalink to &quot;Dockerイメージ&quot;">​</a></h2><p><a href="https://github.com/vic/asdf-alpine" target="_blank" rel="noreferrer">asdf-alpine</a>および<a href="https://github.com/vic/asdf-ubuntu" target="_blank" rel="noreferrer">asdf-ubuntu</a>プロジェクトは、一部のasdfツールのDocker化されたイメージを提供する取り組みを継続的に行っています。これらのDockerイメージは、開発用サーバのベースとしたり、本番用アプリケーションの実行用途として使用することができます。</p>`,47)]))}const g=a(n,[["render",l]]);export{k as __pageData,g as default};