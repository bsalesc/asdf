import{_ as i,c as a,a2 as e,o as l}from"./chunks/framework.BQmytedh.js";const r=JSON.parse('{"title":"创建插件","description":"","frontmatter":{},"headers":[],"relativePath":"zh-hans/plugins/create.md","filePath":"zh-hans/plugins/create.md","lastUpdated":1704804447000}'),n={name:"zh-hans/plugins/create.md"};function t(h,s,p,d,o,k){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="创建插件" tabindex="-1">创建插件 <a class="header-anchor" href="#创建插件" aria-label="Permalink to &quot;创建插件&quot;">​</a></h1><h2 id="插件里有什么" tabindex="-1">插件里有什么 <a class="header-anchor" href="#插件里有什么" aria-label="Permalink to &quot;插件里有什么&quot;">​</a></h2><p>插件是一个包含几个可执行脚本的 git 存储库，用于支持对某种语言或工具进行版本控制。这些脚本在执行 <code>list-all</code>、<code>install</code> 或者 <code>uninstall</code> 命令时被执行。你可以设定或取消设定环境变量，并执行设置工具环境所需的任何操作。</p><h2 id="必要的脚本" tabindex="-1">必要的脚本 <a class="header-anchor" href="#必要的脚本" aria-label="Permalink to &quot;必要的脚本&quot;">​</a></h2><ul><li><code>bin/list-all</code> - 列举所有可安装的版本</li><li><code>bin/download</code> - 下载指定版本的源代码或二进制文件</li><li><code>bin/install</code> - 安装指定版本</li></ul><h2 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h2><p>所有脚本除了 <code>bin/list-all</code> 之外对以下环境变量有权限进行操作：</p><ul><li><code>ASDF_INSTALL_TYPE</code> - <code>version</code> 或者 <code>ref</code></li><li><code>ASDF_INSTALL_VERSION</code> - 如果 <code>ASDF_INSTALL_TYPE</code> 是 <code>version</code>，那么这将是版本号。否则它将传递为 git 的 ref。可能指向存储库的一个标签/提交/分支。</li><li><code>ASDF_INSTALL_PATH</code> - <em>已经</em> 安装到的目录（或 <code>bin/install</code> 脚本执行情况下 <em>应该</em> 安装到的目录）</li></ul><p>这些附加的环境变量将可用于 <code>bin/install</code> 脚本：</p><ul><li><code>ASDF_CONCURRENCY</code> - 编译源代码时使用的内核数。对于配置 <code>make -j</code> 非常有用。</li><li><code>ASDF_DOWNLOAD_PATH</code> - <code>bin/download</code> 脚本下载源代码或二进制文件的路径。</li></ul><p>这些附加的环境变量将可用于 <code>bin/download</code> 脚本：</p><ul><li><code>ASDF_DOWNLOAD_PATH</code> - 源代码或二进制文件应该下载到的路径。</li></ul><h4 id="bin-list-all" tabindex="-1">bin/list-all <a class="header-anchor" href="#bin-list-all" aria-label="Permalink to &quot;bin/list-all&quot;">​</a></h4><p>必须打印一个带有空格分隔的版本列表的字符串，示例输出如下所示：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1.0.1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0.2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.3.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.4</span></span></code></pre></div><p>请注意，最新版本应列在最后，以便它看起来更接近用户的提示。这很有帮助，因为 <code>list-all</code> 命令会在自己的行打印每个版本。如果有很多版本，那么早期版本可能会不在屏幕上。</p><p>如果从网站上的发布页面拉取版本，建议尽可能不对版本进行排序。通常，版本已经按照正确的顺序排列，或者以相反的顺序排列，在这种情况下，像 <code>tac</code> 这样的东西就足够了。如果必须手动对版本进行排序，则不能依赖 <code>sort -V</code>，因为 OSX 操作系统不支持。一种可以替代的排序功能是 <a href="https://github.com/vic/asdf-idris/blob/master/bin/list-all#L6" target="_blank" rel="noreferrer">更好的选择</a>。</p><h4 id="bin-download" tabindex="-1">bin/download <a class="header-anchor" href="#bin-download" aria-label="Permalink to &quot;bin/download&quot;">​</a></h4><p>此脚本必须下载源代码或者二进制文件到 <code>ASDF_DOWNLOAD_PATH</code> 环境变量包含的路径。如果下载的源代码或者二进制文件是压缩的，则只有未压缩的源代码或二进制文件会放置在 <code>ASDF_DOWNLOAD_PATH</code> 目录中。</p><p>下载成功后脚本必须以 <code>0</code> 状态退出。如果下载失败，脚本必须以任何非零退出状态退出。</p><p>如果可能，脚本应该仅将文件放在 <code>ASDF_DOWNLOAD_PATH</code> 中。如果下载失败，则不应将任何文件放在目录中。</p><p>如果此脚本不存在，asdf 将假设存在 <code>bin/install</code> 脚本，将下载并安装该版本。asdf 仅在没有此脚本的情况下才能支持传统插件。所有插件都必须包含此脚本，最终将删除对传统插件的支持。</p><h4 id="bin-install" tabindex="-1">bin/install <a class="header-anchor" href="#bin-install" aria-label="Permalink to &quot;bin/install&quot;">​</a></h4><p>本脚本应在 <code>ASDF_INSTALL_PATH</code> 中安装版本。默认情况下，asdf 将为 <code>$ASDF_INSTALL_PATH/bin</code> （可以通过可选的 <a href="#binlist-bin-paths">bin/list-bin-paths</a> 脚本自定义）目录中的任意文件创建垫片。</p><p>安装成功时，安装脚本应以 <code>0</code> 状态退出。如果安装失败，脚本应以任何非零退出状态退出。</p><p>如果可能，脚本应仅在安装脚本认为工具的生成和安装成功后，才将文件放在 <code>ASDF_INSTALL_PATH</code> 目录中。asdf 检查 <code>ASDF_INSTALL_PATH</code> 目录的 <a href="https://github.com/asdf-vm/asdf/blob/242d132afbf710fe3c7ec23c68cec7bdd2c78ab5/lib/utils.sh#L44" target="_blank" rel="noreferrer">扩展</a> 以确认是否安装了该工具版本。如果在安装过程开始时填充了 <code>ASDF_INSTALL_PATH</code> 目录，则在安装过程中在其他终端中运行的其他 asdf 命令可能会认为该工具版本已经安装，即使它还未完全安装。</p><p>如果你希望你的插件使用 asdf 0.7._ 及更早版本和 0.8._ 及更高版本，请检查是否存在 <code>ASDF_DOWNLOAD_PATH</code> 环境变量。如果未设置，请在 <code>bin/install</code> 脚本回调时下载源代码。如果设置，则假设 <code>bin/downlaod</code> 脚本已经下载源代码。</p><h2 id="可选脚本" tabindex="-1">可选脚本 <a class="header-anchor" href="#可选脚本" aria-label="Permalink to &quot;可选脚本&quot;">​</a></h2><h4 id="bin-help-脚本" tabindex="-1">bin/help 脚本 <a class="header-anchor" href="#bin-help-脚本" aria-label="Permalink to &quot;bin/help 脚本&quot;">​</a></h4><p>这不是一个回调脚本，而是一组回调脚本，每个脚本将打印不同的文档到 STDOUT。下面列出了可能的回调脚本。请注意，<code>bin/help.overview</code> 是一种特殊情况，因为必须存在才能为脚本显示任何帮助输出。</p><ul><li><code>bin/help.overview</code> - 此脚本应该输出有关插件和所管理工具的一般描述。不应该打印任何标题，因为 asdf 将打印标题。输出可以是自由格式的文本，但理想情况下只有一个短段落。如果你希望 asdf 为你的插件提供帮助信息，则必须存在此脚本。所有其他的帮助回调脚本都是可选的。</li><li><code>bin/help.deps</code> - 此脚本应该输出为操作系统量身定制的依赖项列表。每行一个依赖项。</li><li><code>bin/help.config</code> - 此脚本应该打印对插件和工具可能有用的任何必需或可选配置。安装或编译该工具所需的任何环境变量或其他标志（尽可能针对用户的操作系统）。输出可以是自由格式的文本。</li><li><code>bin/help.links</code> - 这应该是与插件和工具相关的链接列表（同样，尽可能针对当前操作系统量身定制）。每行一个链接。行的格式可以是 <code>&lt;title&gt;: &lt;link&gt;</code> 或只是 <code>&lt;link&gt;</code>。</li></ul><p>这些脚本的每一个都应根据当前操作系统调整其输出。例如，在 Ubuntu 上，依赖脚本可以将依赖项输出为必须安装的 apt-get 包。设置变量时，脚本还应该根据设置变量 <code>ASDF_INSTALL_VERSION</code> 和 <code>ASDF_INSTALL_TYPE</code> 的值。它们是可选的，并不总是被设置。</p><p>帮助回调脚本<strong>不得</strong>输出核心 asdf-vm 文档中已涵盖的任何信息。不得出现一般的 asdf 使用信息。</p><h4 id="bin-latest-stable" tabindex="-1">bin/latest-stable <a class="header-anchor" href="#bin-latest-stable" aria-label="Permalink to &quot;bin/latest-stable&quot;">​</a></h4><p>如果实现了此回调，asdf 将使用它来确定工具的最新稳定版本，而不是尝试自行判断。<code>asdf latest</code> 通过查看由 <code>list-all</code> 回调打印的最新版本，在从输出中排除了几种类型的版本（如发布候选版本）之后推断出最新版本。当你的插件的 <code>list-all</code> 回调打印同一工具的不同变体并且最新版本不是你希望默认使用的变体的最新稳定版本时，这种默认行为是不可取的。例如，对于 Ruby，最新的稳定版本应该是 Ruby（MRI）的常规实现，但最后 <code>list-all</code> 回调打印的是 truffleruby 版本。</p><p>此回调使用单个 “过滤器” 字符串调用，因为它是唯一的参数。这应该用于过滤所有最新稳定版本。例如对于 Ruby，用户可以选择传入 <code>jruby</code> 以选择 <code>jruby</code> 的最新稳定版本。</p><h4 id="bin-list-bin-paths" tabindex="-1">bin/list-bin-paths <a class="header-anchor" href="#bin-list-bin-paths" aria-label="Permalink to &quot;bin/list-bin-paths&quot;">​</a></h4><p>列举指定工具版本的可执行程序。必须打印一个带有空格分隔的包含可执行文件的目录路径列表的字符串。路径必须相对于传递的安装路径。示例输出如下所示：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tools</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> veggies</span></span></code></pre></div><p>这将指示 asdf 为 <code>&lt;install-path&gt;/bin</code>、<code>&lt;install-path&gt;/tools</code> 和 <code>&lt;install-path&gt;/veggies</code> 中的文件创建垫片。</p><p>如果未指定此脚本，asdf 将在安装中查找 <code>bin</code> 目录并为这些脚本创建垫片。</p><h4 id="bin-exec-env" tabindex="-1">bin/exec-env <a class="header-anchor" href="#bin-exec-env" aria-label="Permalink to &quot;bin/exec-env&quot;">​</a></h4><p>设置环境变量以运行包中的二进制文件。</p><h4 id="bin-exec-path" tabindex="-1">bin/exec-path <a class="header-anchor" href="#bin-exec-path" aria-label="Permalink to &quot;bin/exec-path&quot;">​</a></h4><p>获取工具的指定版本的可执行程序路径。必须打印具有相对可执行程序路径的字符串。这允许插件有条件地覆盖垫片指定的可执行程序路径，否则返回垫片指定的默认路径。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">用法：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  plugin/bin/exec-path</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">install-pat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">comman</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">executable-pat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">例子调用：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  ~/.asdf/plugins/foo/bin/exec-path</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;~/.asdf/installs/foo/1.0&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;foo&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;bin/foo&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">输出：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  bin/foox</span></span></code></pre></div><h4 id="bin-uninstall" tabindex="-1">bin/uninstall <a class="header-anchor" href="#bin-uninstall" aria-label="Permalink to &quot;bin/uninstall&quot;">​</a></h4><p>卸载某个工具的指定版本。</p><h4 id="bin-list-legacy-filenames" tabindex="-1">bin/list-legacy-filenames <a class="header-anchor" href="#bin-list-legacy-filenames" aria-label="Permalink to &quot;bin/list-legacy-filenames&quot;">​</a></h4><p>为此插件注册其他设置器文件。必须打印一个带有空格分隔的文件名列表的字符串。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.ruby-version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .rvmrc</span></span></code></pre></div><p>注意：这仅适用于在 <code>~/.asdfrc</code> 配置文件中启用了 <code>legacy_version_file</code> 选项的用户。</p><h4 id="bin-parse-legacy-file" tabindex="-1">bin/parse-legacy-file <a class="header-anchor" href="#bin-parse-legacy-file" aria-label="Permalink to &quot;bin/parse-legacy-file&quot;">​</a></h4><p>这可用于进一步解析 asdf 找到的传统文件。如果 <code>parse-legacy-file</code> 未实现，asdf 将会简单读取文件来确定版本。脚本将传递文件路径作为其第一个参数。</p><h4 id="bin-post-plugin-add" tabindex="-1">bin/post-plugin-add <a class="header-anchor" href="#bin-post-plugin-add" aria-label="Permalink to &quot;bin/post-plugin-add&quot;">​</a></h4><p>这可用于在插件添加到 asdf 后运行任何安装后操作。</p><p>该脚本可以访问插件的安装路径（<code>\${ASDF_PLUGIN_PATH}</code>）和源 URL（<code>\${ASDF_PLUGIN_SOURCE_URL}</code>），如果有的话。</p><p>其他请参考相关钩子：</p><ul><li><code>pre_asdf_plugin_add</code></li><li><code>pre_asdf_plugin_add_\${plugin_name}</code></li><li><code>post_asdf_plugin_add</code></li><li><code>post_asdf_plugin_add_\${plugin_name}</code></li></ul><h4 id="bin-post-plugin-update" tabindex="-1">bin/post-plugin-update <a class="header-anchor" href="#bin-post-plugin-update" aria-label="Permalink to &quot;bin/post-plugin-update&quot;">​</a></h4><p>这可用于在 asdf 下载更新的插件后运行任何插件更新后操作。</p><p>该脚本可以访问插件的安装路径（<code>\${ASDF_PLUGIN_PATH}</code>）、更新前的 git-ref（<code>\${ASDF_PLUGIN_PREV_REF}</code>）和更新后的 git-ref（<code>\${ASDF_PLUGIN_POST_REF}</code>）。</p><p>其他请参考相关钩子：</p><ul><li><code>pre_asdf_plugin_update</code></li><li><code>pre_asdf_plugin_update_\${plugin_name}</code></li><li><code>post_asdf_plugin_update</code></li><li><code>post_asdf_plugin_update_\${plugin_name}</code></li></ul><h4 id="bin-pre-plugin-remove" tabindex="-1">bin/pre-plugin-remove <a class="header-anchor" href="#bin-pre-plugin-remove" aria-label="Permalink to &quot;bin/pre-plugin-remove&quot;">​</a></h4><p>这可用于在从 asdf 中删除插件之前运行任何预删除操作。</p><p>该脚本可以访问安装插件的路径（<code>\${ASDF_PLUGIN_PATH}</code>）。</p><p>其他请参考相关钩子：</p><ul><li><code>pre_asdf_plugin_remove</code></li><li><code>pre_asdf_plugin_remove_\${plugin_name}</code></li><li><code>post_asdf_plugin_remove</code></li><li><code>post_asdf_plugin_remove_\${plugin_name}</code></li></ul><h2 id="asdf-命令行的扩展命令" tabindex="-1">asdf 命令行的扩展命令 <a class="header-anchor" href="#asdf-命令行的扩展命令" aria-label="Permalink to &quot;asdf 命令行的扩展命令&quot;">​</a></h2><p>插件可以通过提供 <code>lib/commands/command*.bash</code> 脚本或者可执行程序来定义新的 asdf 命令，这些脚本或可执行程序将使用插件名称作为 asdf 命令的子命令进行调用。</p><p>例如，假设一个 <code>foo</code> 插件有以下文件：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  lib/commands/</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    command</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    command-bat.bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    command-bat-man.bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    command-help.bash</span></span></code></pre></div><p>用户现在可以执行：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foo</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         # 等同于运行 \`$ASDF_DATA_DIR/plugins/foo/lib/commands/command.bash\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bar</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 等同于运行 \`$ASDF_DATA_DIR/plugins/foo/lib/commands/command.bash bar\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> help</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 等同于运行 \`$ASDF_DATA_DIR/plugins/foo/lib/commands/command-help.bash\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> man</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 等同于运行 \`$ASDF_DATA_DIR/plugins/foo/lib/commands/command-bat-man.bash\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> baz</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 等同于运行 \`$ASDF_DATA_DIR/plugins/foo/lib/commands/command-bat.bash baz\`</span></span></code></pre></div><p>插件作者可以使用此功能来提供与其工具相关的实用命令，或者可以创建 asdf 本身的新命令扩展的插件。</p><p>调用时，如果扩展命令未设置其可执行位，则它们将作为 bash 脚本获取，且具有来自 <code>$ASDF_DIR/lib/utils.bash</code> 的所有可用功能。 此外，<code>$ASDF_CMD_FILE</code> 解析所获取文件的完整路径。 如果设置了可执行位，则只是执行它们并替换 asdf 执行。</p><p>这个功能的一个很好的例子是像 <a href="https://github.com/asdf-community/asdf-haxe" target="_blank" rel="noreferrer"><code>haxe</code></a> 这样的插件。 它提供了 <code>asdf haxe neko-dylibs-link</code> 来修复 haxe 可执行文件期望找到相对于可执行目录的动态链接库的问题。</p><p>如果你的插件提供了 asdf 扩展命令，请务必在插件的 README 文件中提及。</p><h2 id="自定义垫片模板" tabindex="-1">自定义垫片模板 <a class="header-anchor" href="#自定义垫片模板" aria-label="Permalink to &quot;自定义垫片模板&quot;">​</a></h2><p><strong>请仅在真的需要时才使用此功能</strong></p><p>asdf 允许自定义垫片模板。对于名为 <code>foo</code> 的可执行程序，如果有一个 <code>shims/foo</code> 的文件在插件中，那么 asdf 将复制这个文件替代使用标准垫片模板。</p><p>必须明智地使用这一点。对于目前的 AFAIK，它仅仅被使用在了 Elixir 插件中，因为一个可执行程序除了是可执行程序文件之外，还被读作为 Elixir 文件，这使得无法使用标准的 bash 垫片。</p><h2 id="测试插件" tabindex="-1">测试插件 <a class="header-anchor" href="#测试插件" aria-label="Permalink to &quot;测试插件&quot;">​</a></h2><p><code>asdf</code> 包含 <code>plugin-test</code> 命令用于测试插件。你可以像下面这样使用它：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">plugin-nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">plugin-ur</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--asdf-tool-version </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">versio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--asdf-plugin-gitref </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">git-re</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [test-command*]</span></span></code></pre></div><p>只有前两个参数是必须的。 如果指定了 _<em>version</em>，则该工具将随指定版本一起安装。默认返回为 <code>asdf latest &lt;plugin-name&gt;</code>。 如果指定了 <em>git-ref</em>，则插件将检查提交/分支/标签。这对于在该插件的 CI 上测试拉取请求非常有用。默认值是插件仓库的默认分支。</p><p>剩下的参数被视为要执行的命令，以确保安装的工具正常工作。通常情况下，它需要带 <code>--version</code> 或者 <code>--help</code>。例如，要测试 NodeJS 插件，我们可以运行：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asdf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nodejs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/asdf-vm/asdf-nodejs.git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span></span></code></pre></div><p>我们强烈建议你在 CI 环境中测试你的插件，并确保它可以在 Linux 和 OSX 上运行。</p><h4 id="github-action-示例" tabindex="-1">GitHub Action 示例 <a class="header-anchor" href="#github-action-示例" aria-label="Permalink to &quot;GitHub Action 示例&quot;">​</a></h4><p><a href="https://github.com/asdf-vm/actions" target="_blank" rel="noreferrer">asdf-vm/actions</a> 存储库为托管在 github 的项目提供了使用 Github Action 来测试插件的可能。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">asdf_plugin_test</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">asdf-vm/actions/plugin-test@v1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;my_tool --version&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      GITHUB_API_TOKEN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ secrets.GITHUB_TOKEN }}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 自动提供</span></span></code></pre></div><h4 id="travisci-配置示例" tabindex="-1">TravisCI 配置示例 <a class="header-anchor" href="#travisci-配置示例" aria-label="Permalink to &quot;TravisCI 配置示例&quot;">​</a></h4><p>这是一个 <code>.travis.yml</code> 示例文件，请根据你的需要进行自定义：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">language</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">c</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">asdf plugin test nodejs $TRAVIS_BUILD_DIR &#39;node --version&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">before_script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">git clone https://github.com/asdf-vm/asdf.git asdf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">. asdf/asdf.sh</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">os</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">linux</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">osx</span></span></code></pre></div><p>注意： 当使用其他 CI 时，你将需要确认哪些变量映射到存储库路径。</p><p>你还可以选择将相对路径传递给 <code>plugin-test</code>。</p><p>例如，如果在存储库目录中运行测试脚本：<code>asdf plugin test nodejs . &#39;node --version&#39;</code>。</p><h2 id="github-api-频率限制" tabindex="-1">GitHub API 频率限制 <a class="header-anchor" href="#github-api-频率限制" aria-label="Permalink to &quot;GitHub API 频率限制&quot;">​</a></h2><p>如果你的插件的 <code>list-all</code> 依赖于访问 GitHub API，请确保在访问时提供授权令牌，否则你的测试可能会因频率限制而失败。</p><p>为此，创建一个仅具有 <code>public_repo</code> 权限的 <a href="https://github.com/settings/tokens/new" target="_blank" rel="noreferrer">新个人令牌</a>。</p><p>然后，在 travis.ci 构建设置中添加一个名为 <code>GITHUB_API_TOKEN</code> 的 <em>安全</em> 环境变量。并且 <em>绝对不要</em> 在你的代码中公布你的 token。</p><p>最后，添加如下内容到 <code>bin/list-all</code>：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cmd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;curl -s&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$GITHUB_API_TOKEN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cmd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$cmd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -H &#39;Authorization: token </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$GITHUB_API_TOKEN</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cmd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$cmd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $releases_path</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span></code></pre></div><h2 id="向官方插件存储库提交插件" tabindex="-1">向官方插件存储库提交插件 <a class="header-anchor" href="#向官方插件存储库提交插件" aria-label="Permalink to &quot;向官方插件存储库提交插件&quot;">​</a></h2><p><code>asdf</code> 可以通过指定插件存储库 url 轻松安装插件，比如 <code>plugin add my-plugin https://github.com/user/asdf-my-plugin.git</code>。</p><p>为了使你的用户更轻松，你可以将插件添加到官方插件存储库中，以列出你的插件并使用较短的命令轻松安装，比如 <code>asdf plugin add my-plugin</code>。</p><p>请查看插件存储库 <a href="https://github.com/asdf-vm/asdf-plugins" target="_blank" rel="noreferrer">asdf-vm/asdf-plugins</a> 中的说明了解更多。</p>`,109)]))}const g=i(n,[["render",t]]);export{r as __pageData,g as default};