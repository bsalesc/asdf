import{_ as a,c as e,a2 as i,o as t}from"./chunks/framework.BQmytedh.js";const k=JSON.parse('{"title":"asdf","description":"","frontmatter":{},"headers":[],"relativePath":"ko-kr/contribute/core.md","filePath":"ko-kr/contribute/core.md","lastUpdated":1734394996000}'),n={name:"ko-kr/contribute/core.md"};function l(p,s,h,o,r,d){return t(),e("div",null,s[0]||(s[0]=[i(`<h1 id="asdf" tabindex="-1">asdf <a class="header-anchor" href="#asdf" aria-label="Permalink to &quot;asdf&quot;">​</a></h1><p><code>asdf</code> 코어 기여 가이드.</p><h2 id="초기-설정" tabindex="-1">초기 설정 <a class="header-anchor" href="#초기-설정" aria-label="Permalink to &quot;초기 설정&quot;">​</a></h2><p>Github의 <code>asdf</code>를 fork하거나 clone하세요:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># clone your fork</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GITHUB_USE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">R</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/asdf.git</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or clone asdf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/asdf-vm/asdf.git</span></span></code></pre></div><p>코어 개발을 위한 툴들은 이 리포지토리의 <code>.tool-versions</code>에 있습니다. 만약 <code>asdf</code>가 직접 관리하기를 바라신다면, 다음 플러그인들을 설치하세요:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bats</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/timgluz/asdf-bats.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shellcheck</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/luizm/asdf-shellcheck.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shfmt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/luizm/asdf-shfmt.git</span></span></code></pre></div><p><code>asdf</code>를 개발하기 위한 버전들을 설치하세요:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><p>로컬 머신에서 개발 도구를 손상시킬 수 있는 기능을 개발 중일 경우 <code>asdf</code>를 사용하지 않는 것이 <em>좋을 수</em> 있습니다. 개발 도구들의 원본 목록입니다:</p><ul><li><a href="https://github.com/bats-core/bats-core" target="_blank" rel="noreferrer">bats-core</a>: Bash 또는 POSIX 준수 스크립트를 단위 테스트하기 위한 Bash 자동화 테스트 시스템.</li><li><a href="https://github.com/koalaman/shellcheck" target="_blank" rel="noreferrer">shellcheck</a>: 셸 스크립트 정적 분석 도구.</li><li><a href="https://github.com/mvdan/sh" target="_blank" rel="noreferrer">shfmt</a>: Bash를 지원하는 셸 parser, formatter, interpreter; shfmt 포함</li></ul><h2 id="개발" tabindex="-1">개발 <a class="header-anchor" href="#개발" aria-label="Permalink to &quot;개발&quot;">​</a></h2><p>만약 설치된 <code>asdf</code>에 영향 없이 변화들을 테스트해보시고 싶으시다면, <code>$ASDF_DIR</code> 변수를 리포지토리를 clone한 경로에 지정하시고, 그 다음 임시로 <code>bin</code>와 <code>shims</code> 디렉토리들을 경로 앞에 추가하세요.</p><p>원격 리포지토리에 커밋 혹은 push하기 전에, 당신의 코드를 format, lint, 그리고 locally test하세요. 다음 스크립트/명령어들을 사용하세요:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Lint</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./scripts/lint.bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --check</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Fix &amp; Format</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./scripts/lint.bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --fix</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Test: all tests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./scripts/test.bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Test: for specific command</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bats</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test/list_commands.bash</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>테스트 추가!</strong> - 새로운 기능들과 버그 수정들의 리뷰 속도 향상을 위해 테스트들은 <strong>필수적</strong>입니다. 풀 리퀘스트 요청을 만드시기 전에 새로운 코드 경로들을 추가해주세요. <a href="https://bats-core.readthedocs.io/en/stable/index.html" target="_blank" rel="noreferrer">bats-core 문서</a> 참조</p></div><h3 id="gitignore" tabindex="-1">Gitignore <a class="header-anchor" href="#gitignore" aria-label="Permalink to &quot;Gitignore&quot;">​</a></h3><p>다음은 <code>asdf-vm/asdf</code> 리포지토리에 <code>.gitignore</code> 파일입니다. 우리는 프로젝트에 관련된 특정한 파일들을 무시합니다. 운영체제, 툴, workflows에 관련된 파일들은 글로벌 <code>.gitignore</code> 설정에서 무시되어야합니다, <a href="http://stratus3d.com/blog/2018/06/03/stop-excluding-editor-temp-files-in-gitignore/" target="_blank" rel="noreferrer">더 보기</a>.</p><p>@/../.gitignore</p><h3 id="git-blame-ignore-revs" tabindex="-1"><code>.git-blame-ignore-revs</code> <a class="header-anchor" href="#git-blame-ignore-revs" aria-label="Permalink to &quot;\`.git-blame-ignore-revs\`&quot;">​</a></h3><p><code>asdf</code>는 <code>.git-blame-ignore-revs</code> 사용해 blame 실행에서 잡음을 줄입니다. 더 많은 정보 <a href="https://git-scm.com/docs/git-blame" target="_blank" rel="noreferrer">git blame 문서</a>.</p><p>다음과 같이 <code>git blame</code>과 <code>.git-blame-ignore-revs</code>을 사용:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blame</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --ignore-revs-file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .git-blame-ignore-revs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./test/install_command.bats</span></span></code></pre></div><p>선택적으로, 수동적으로 파일을 제공하는 대신 모든 <code>blame</code>에서 해당 파일을 사용하도록 설정:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blame.ignoreRevsFile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .git-blame-ignore-revs</span></span></code></pre></div><p>IDE들에서 이 파일을 사용하도록 설정할 수 있습니다. 예를 들어, VSCode를 사용하실 경우 (<a href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens" target="_blank" rel="noreferrer">GitLens</a>와 함께), 다음을 <code>.vscode/settings.json</code>에 추가하세요:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;gitlens.advanced.blame.customArguments&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;--ignore-revs-file&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;.git-blame-ignore-revs&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="bats-테스팅" tabindex="-1">Bats 테스팅 <a class="header-anchor" href="#bats-테스팅" aria-label="Permalink to &quot;Bats 테스팅&quot;">​</a></h2><p>로컬 테스트 실행:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./scripts/test.bash</span></span></code></pre></div><p>테스트 작성 전 <strong>반드시 읽기</strong>:</p><ul><li><code>test/</code>에 존재하는 테스트들</li><li><a href="https://bats-core.readthedocs.io/en/stable/index.html" target="_blank" rel="noreferrer">bats-core 문서</a></li><li><code>scripts/test.bash</code>에 존재하는 Bats 설정들</li></ul><h3 id="bats-팁" tabindex="-1">Bats 팁 <a class="header-anchor" href="#bats-팁" aria-label="Permalink to &quot;Bats 팁&quot;">​</a></h3><p>Bats 디버깅은 때에 따라 어려울 수 있습니다. 디버깅 단순화를 위해, <code>-t</code> flag로 TAP output을 사용하여 테스트 실행 중 결과물 출력을 위한 특별한 파일 디스크립터 <code>&gt;&amp;3</code>를 사용할 수 있습니다. 예시:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># test/some_tests.bats</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">printf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;%s\\n&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Will not be printed during bats test/some_tests.bats&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">printf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;%s\\n&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Will be printed during bats -t test/some_tests.bats&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&amp;3</span></span></code></pre></div><p>bats-core의 더 자세한 문서 <a href="https://bats-core.readthedocs.io/en/stable/writing-tests.html#printing-to-the-terminal" target="_blank" rel="noreferrer">Printing to the Terminal</a>.</p><h2 id="풀-리퀘스트-릴리스-관습적-커밋" tabindex="-1">풀 리퀘스트, 릴리스 &amp; 관습적 커밋 <a class="header-anchor" href="#풀-리퀘스트-릴리스-관습적-커밋" aria-label="Permalink to &quot;풀 리퀘스트, 릴리스 &amp; 관습적 커밋&quot;">​</a></h2><p><code>asdf</code>는 자동화 배포 툴 <a href="https://github.com/googleapis/release-please" target="_blank" rel="noreferrer">Release Please</a>를 사용하여 자동으로 <a href="https://semver.org/" target="_blank" rel="noreferrer">SemVer</a> 버전을 올리고 <a href="https://github.com/asdf-vm/asdf/blob/master/CHANGELOG.md" target="_blank" rel="noreferrer">변동사항</a>을 작성합니다. 이 정보들은 지난 배포들로부터 커밋 history를 읽음으로써 결정됩니다.</p><p><a href="https://www.conventionalcommits.org/" target="_blank" rel="noreferrer">유의적 커밋 메세지</a>는 기본 브랜치의 커밋 메세지 형식이 되는 풀 리퀘스트 제목의 형식을 정의합니다. 이것은 GitHub Action에서 강제됩니다 <a href="https://github.com/amannn/action-semantic-pull-request" target="_blank" rel="noreferrer"><code>amannn/action-semantic-pull-request</code></a>.</p><p>관습적인 커밋 다음 형식을 따릅니다:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;type&gt;[optional scope][optional !]: &lt;description&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- examples --&gt;</span></span>
<span class="line"><span>fix: some fix</span></span>
<span class="line"><span>feat: a new feature</span></span>
<span class="line"><span>docs: some documentation update</span></span>
<span class="line"><span>docs(website): some change for the website</span></span>
<span class="line"><span>feat!: feature with breaking change</span></span></code></pre></div><p><code>&lt;types&gt;</code>의 모든 목록: <code>feat</code>, <code>fix</code>, <code>docs</code>, <code>style</code>, <code>refactor</code>, <code>perf</code>, <code>test</code>, <code>build</code>, <code>ci</code>, <code>chore</code>, <code>revert</code>.</p><ul><li><code>!</code>: 주요한(breaking) 변화들을 나타냅니다</li><li><code>fix</code>: 새로운 SemVer <code>patch</code>을 만듭니다</li><li><code>feat</code>: 새로운 SemVer <code>minor</code>을 만듭니다</li><li><code>&lt;type&gt;!</code>: 새로운 SemVer <code>major</code>을 만듭니다</li></ul><p>풀 리퀘스트 제목은 반드시 이 형식을 따라야 합니다.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>풀 리퀘스트 제목을 관습적 커밋 메세지 형식을 사용하세요.</p></div><h2 id="docker-이미지" tabindex="-1">Docker 이미지 <a class="header-anchor" href="#docker-이미지" aria-label="Permalink to &quot;Docker 이미지&quot;">​</a></h2><p><a href="https://github.com/vic/asdf-alpine" target="_blank" rel="noreferrer">asdf-alpine</a>와 <a href="https://github.com/vic/asdf-ubuntu" target="_blank" rel="noreferrer">asdf-ubuntu</a> 프로젝트들은 asdf 툴들의 Dockerized 이미지들을 제공하기 위해 진행되고있습니다. 개발 서버의 베이스 혹은 프로덕션 앱들을 위해 docker 이미지들을 사용할 수 있습니다.</p>`,47)]))}const g=a(n,[["render",l]]);export{k as __pageData,g as default};