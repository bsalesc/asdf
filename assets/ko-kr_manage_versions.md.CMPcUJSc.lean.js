import{_ as i,c as a,a2 as l,o as h}from"./chunks/framework.BQmytedh.js";const o=JSON.parse('{"title":"버전","description":"","frontmatter":{},"headers":[],"relativePath":"ko-kr/manage/versions.md","filePath":"ko-kr/manage/versions.md","lastUpdated":1734384735000}'),t={name:"ko-kr/manage/versions.md"};function n(e,s,p,k,d,r){return h(),a("div",null,s[0]||(s[0]=[l(`<h1 id="버전" tabindex="-1">버전 <a class="header-anchor" href="#버전" aria-label="Permalink to &quot;버전&quot;">​</a></h1><h2 id="버전-설치" tabindex="-1">버전 설치 <a class="header-anchor" href="#버전-설치" aria-label="Permalink to &quot;버전 설치&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">versio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># asdf install erlang 17.3</span></span></code></pre></div><p>플러그인이 소스에서 다운로드 &amp; 컴파일을 지원하는 경우, <code>ref:foo</code>를 지정할 수 있으며 여기서 <code>foo</code>는 특정 브랜치, 태그 또는 커밋입니다. 제거할 때도 동일한 이름과 참조를 사용해야 합니다.</p><h2 id="최신-안정-버전-설치" tabindex="-1">최신 안정 버전 설치 <a class="header-anchor" href="#최신-안정-버전-설치" aria-label="Permalink to &quot;최신 안정 버전 설치&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> latest</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># asdf install erlang latest</span></span></code></pre></div><p>주어진 문자열로 시작하는 최신 안정 버전을 설치합니다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> latest:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">versio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># asdf install erlang latest:17</span></span></code></pre></div><h2 id="설치된-버전-목록" tabindex="-1">설치된 버전 목록 <a class="header-anchor" href="#설치된-버전-목록" aria-label="Permalink to &quot;설치된 버전 목록&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># asdf list erlang</span></span></code></pre></div><p>주어진 문자열로 시작하는 버전으로 필터링합니다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">versio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># asdf list erlang 17</span></span></code></pre></div><h2 id="사용-가능한-모든-버전-목록" tabindex="-1">사용 가능한 모든 버전 목록 <a class="header-anchor" href="#사용-가능한-모든-버전-목록" aria-label="Permalink to &quot;사용 가능한 모든 버전 목록&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># asdf list all erlang</span></span></code></pre></div><p>주어진 문자열로 시작하는 버전으로 필터링합니다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">versio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># asdf list all erlang 17</span></span></code></pre></div><h2 id="최신-안정-버전-보기" tabindex="-1">최신 안정 버전 보기 <a class="header-anchor" href="#최신-안정-버전-보기" aria-label="Permalink to &quot;최신 안정 버전 보기&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> latest</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># asdf latest erlang</span></span></code></pre></div><p>주어진 문자열로 시작하는 최신 안정 버전을 보여줍니다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> latest</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">versio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># asdf latest erlang 17</span></span></code></pre></div><h2 id="현재-버전-설정" tabindex="-1">현재 버전 설정 <a id="현재-버전-설정"></a> <a class="header-anchor" href="#현재-버전-설정" aria-label="Permalink to &quot;현재 버전 설정 &lt;a id=&#39;현재-버전-설정&#39;&gt;&lt;/a&gt;&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> global</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">versio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [&lt;version&gt;...]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shell</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">versio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [&lt;version&gt;...]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> local</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">versio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [&lt;version&gt;...]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># asdf global elixir 1.2.4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> global</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> latest[:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">versio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> local</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> latest[:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">versio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># asdf global elixir latest</span></span></code></pre></div><p><code>global</code>은 해당 버전을 <code>$HOME/.tool-versions</code>에 작성합니다.</p><p>현재 셸 세션에 대해서만, <code>shell</code>은 <code>ASDF_\${TOOL}_VERSION</code>이라는 이름의 환경 변수로 버전을 설정합니다.</p><p><code>local</code>은 해당 버전을 <code>$PWD/.tool-versions</code>에 작성합니다, 존재하지 않을 시에 새로 만듦.</p><p>세부 내용은 <code>.tool-versions</code> <a href="/ko-kr/manage/configuration.html">설정 섹션에 파일</a>을 참고하세요.</p><div class="warning custom-block"><p class="custom-block-title">대체수단</p><p>현재 셸 세션에 대해서만 버전을 설정하려는 경우 또는 특정 툴 버전 하에 단순히 한개의 명령어만 실행하기 위해, 당신은 <code>ASDF_\${TOOL}_VERSION</code>과 같은 환경 변수를 설정할 수 있습니다.</p></div><p>다음 예시에서는 버전 <code>1.4.0</code>의 Elixir 프로젝트에서 테스트를 수행합니다. 버전 형식은 <code>.tool-versions</code> 파일에서 지원되는 것과 동일하게 지원됩니다.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ASDF_ELIXIR_VERSION</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1.4.0</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span></code></pre></div><h2 id="시스템-버전으로의-폴백" tabindex="-1">시스템 버전으로의 폴백 <a class="header-anchor" href="#시스템-버전으로의-폴백" aria-label="Permalink to &quot;시스템 버전으로의 폴백&quot;">​</a></h2><p>asdf 관리 버전이 아닌 <code>&lt;name&gt;</code> 도구의 시스템 버전을 사용하려면 도구의 버전을 <code>system</code>으로 설정할 수 있습니다.</p><p>위에 <a href="#현재-버전-설정">현재 버전 설정</a> 섹션에 나와있는대로, <code>system</code>을 <code>global</code>, <code>local</code> or <code>shell</code> 중에 하나로 설정하세요.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> local</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> system</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># asdf local python system</span></span></code></pre></div><h2 id="현재-버전-보기" tabindex="-1">현재 버전 보기 <a class="header-anchor" href="#현재-버전-보기" aria-label="Permalink to &quot;현재 버전 보기&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> current</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># asdf current</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># erlang          17.3          /Users/kim/.tool-versions</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># nodejs          6.11.5        /Users/kim/cool-node-project/.tool-versions</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> current</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># asdf current erlang</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># erlang          17.3          /Users/kim/.tool-versions</span></span></code></pre></div><h2 id="버전-제거" tabindex="-1">버전 제거 <a class="header-anchor" href="#버전-제거" aria-label="Permalink to &quot;버전 제거&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">versio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># asdf uninstall erlang 17.3</span></span></code></pre></div><h2 id="shims" tabindex="-1">Shims <a class="header-anchor" href="#shims" aria-label="Permalink to &quot;Shims&quot;">​</a></h2><p>asdf는 패키지를 설치할 때 해당 패키지의 모든 실행 프로그램에 대한 shim들을 <code>$ASDF_DATA_DIR/shims</code> 디렉토리 (기본값은 <code>~/.asdf/shims</code>)에 생성합니다. 이 디렉토리는 설치된 프로그램들이 이용가능하도록 <code>$PATH</code> (<code>asdf.sh</code>, <code>asdf.fish</code> 등)에 존재합니다.</p><p>Shim 자체는 플러그인 이름과 shim이 감싸고 있는 설치된 패키지의 실행파일의 경로를 넘겨주는 <code>asdf exec</code>라는 헬퍼 프로그램을 <code>exec</code>시키는 매우 단순한 wrapper입니다.</p><p><code>asdf exec</code> 헬퍼는 (<code>.tool-version</code> 파일에 지정된 대로, <code>asdf local...</code> 또는 <code>asdf global...</code>에서 선택된 대로) 사용할 패키지의 버전을 결정합니다, (플러그인의 <code>exec-path</code> 콜백에 의해 조정될 수 있음) 패키지 설치 디렉토리의 실행 파일에 대한 최종 경로 및 (플러그인에 의해 제공된 - <code>exec-env</code> 스크립트) 실행할 환경을 결정하고, 최종적으로 이를 실행합니다.</p><div class="warning custom-block"><p class="custom-block-title">노트</p><p>이 시스템은 <code>exec</code> 호출을 사용하기 때문에, 실행 대신 셸에 의해 source 되야하는 패키지의 스크립트는 shim wrapper를 통하지 않고 직접 액세스되야 합니다. 두 가지 <code>asdf</code> 명령어: <code>which</code>와 <code>where</code>는 설치된 패키지로의 경로를 반환할 수 있습니다:</p></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># returns path to main executable in current version</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> which</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${PLUGIN})</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/../script.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># returns path to the package installation directory</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> where</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${PLUGIN})</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/bin/script.sh</span></span></code></pre></div><h3 id="asdf-shims-우회" tabindex="-1">asdf shims 우회 <a class="header-anchor" href="#asdf-shims-우회" aria-label="Permalink to &quot;asdf shims 우회&quot;">​</a></h3><p>어떠한 이유로 asdf의 shim들을 우회하고 싶거나 프로젝트의 디렉토리로 이동했을 때 자동으로 환경 변수를 설정되게 하고 싶으시면 <a href="https://github.com/asdf-community/asdf-direnv" target="_blank" rel="noreferrer">asdf-direnv</a> 플러그인이 도움이 될 것입니다. 상세한 내용은 README를 확인해 주세요.</p>`,45)]))}const c=i(t,[["render",n]]);export{o as __pageData,c as default};
