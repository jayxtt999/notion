import{_ as s,Y as l,Z as d,$ as e,a0 as o,a1 as t,a2 as n,D as r}from"./framework-d651fda7.js";const c={},h=e("p",null,"我从小特别羡慕会画画的伙伴。他们能够将心中的想法画出来，而我最高水平的肖像画是丁老头。但在接触 Stable Diffusion 之后，我感觉自己脱胎换骨，给自己贴上了「会画画」的新标签。",-1),p=e("figure",null,[e("img",{src:"https://tc.seoipo.com/2022-09-04-11-53-20.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption",null,"丁老头进化旅程")],-1),f=e("p",null,"Stable Diffusion 是一个「文本到图像」的人工智能模型，也是唯一一款开源且能部署在家用电脑（对硬件要求不高）上的 AI 绘图工具。使用 Stable Diffusion，你可以在拥有 6GB 显存显卡，16GB 内存或只依赖 CPU 的电脑上生成图像，并且仅需几秒钟的时间，无需进行预处理或后处理。",-1),u={href:"https://huggingface.co/spaces/stabilityai/stable-diffusion",target:"_blank",rel:"noopener noreferrer"},b={href:"https://beta.dreamstudio.ai/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://wenxin.baidu.com/moduleApi/ernieVilg",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/AbdBarho/stable-diffusion-webui-docker",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/invoke-ai/InvokeAI/blob/main/docs/installation/INSTALL_MAC.md#doesnt-work-anymore",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.charl-e.com/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://sspai.com/post/75682",target:"_blank",rel:"noopener noreferrer"},w=n('<figure><img src="https://tc.seoipo.com/2022-09-05-16-22-45.png" alt="" tabindex="0" loading="lazy"><figcaption>Stable Diffusion 部署流程</figcaption></figure><p>以 Windows 平台为例，本文将依次介绍 Docker 环境配置、Stable Diffusion 安装及基本使用方法。</p><h2 id="docker-环境配置" tabindex="-1"><a class="header-anchor" href="#docker-环境配置" aria-hidden="true">#</a> Docker 环境配置</h2><p>本方案基于 Docker 配置，Docker 实质上是在运行的 Linux 系统中创建了一个隔离的文件环境。因此，Docker 必须部署在基于 Linux 内核的系统上。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup> 对于 Mac 用户，无需特别配置即可使用。而对于 Windows 用户，若想部署 Docker，则需要安装一个虚拟 Linux 环境，<strong>配置 WSL 或启用 Hyper-V 二选一</strong>。我推荐使用 Windows 子系统 WSL，它需要占用系统盘 30G 的空间。</p><h3 id="安装-wsl" tabindex="-1"><a class="header-anchor" href="#安装-wsl" aria-hidden="true">#</a> 安装 WSL</h3><p>在管理员 PowerShell 输入命令 <code>wsl --install</code>，之后终端会默认安装 Ubuntu。系统下载时间较长，注意别关机。<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup> 安装 Ubuntu 完成后，按提示设置 Ubuntu 账户和密码。</p><h3 id="启用-hyper-v" tabindex="-1"><a class="header-anchor" href="#启用-hyper-v" aria-hidden="true">#</a> 启用 Hyper-V</h3><p>以管理员身份打开 PowerShell 控制台，输入命令 <code>Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All</code>。<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup> 重启电脑后，将开启 Hyper-V。</p><h3 id="linux-路径-windows" tabindex="-1"><a class="header-anchor" href="#linux-路径-windows" aria-hidden="true">#</a> Linux 路径（Windows）</h3><p>配置 WebUI Docker 要进入 Linux 环境，因此 Windows 用户需要将其路径转换为 Linux 路径。而 Mac 和 Linux 用户则可以忽略此步骤。</p><p>假设容器位于 <code>D:\\Desktop\\stable-diffusion-webui-docker</code>：</p><ol><li>把磁盘符号改为小写，转换为 <code>d:\\Desktop\\stable-diffusion-webui-docker</code></li><li>添加 <code>/mnt/</code> 前缀，转换为 <code>/mnt/d:\\Desktop\\stable-diffusion-webui-docker</code>。因为 Windows 本地磁盘是挂载在 Linux 的 mnt 目录下的。</li><li>将反斜扛 <code>\\</code> 替换为 <code>/</code>。最终得到 Linux 路径 <code>/mnt/d:/Desktop/stable-diffusion-webui-docker</code>。</li></ol><h2 id="配置-stable-diffusion" tabindex="-1"><a class="header-anchor" href="#配置-stable-diffusion" aria-hidden="true">#</a> 配置 Stable Diffusion</h2><h3 id="安装-docker-desktop" tabindex="-1"><a class="header-anchor" href="#安装-docker-desktop" aria-hidden="true">#</a> 安装 Docker Desktop</h3>',14),D={href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"},v=e("h3",{id:"下载-webui-docker",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载-webui-docker","aria-hidden":"true"},"#"),o(" 下载 WebUI Docker")],-1),S={href:"https://github.com/AbdBarho/stable-diffusion-webui-docker/releases/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.aliyundrive.com/s/EKmK7MGrHdn",target:"_blank",rel:"noopener noreferrer"},I=n('<h3 id="分支介绍" tabindex="-1"><a class="header-anchor" href="#分支介绍" aria-hidden="true">#</a> 分支介绍</h3><p>目前，Stable Diffusion 有 sygil、auto、auto-cpu 和 invoke 四个分支。如果需要更换分支，可以修改镜像构建命令 <code>docker compose --profile [ui] up --build</code> 中的 <code>[ui]</code>，将其替换为所需的镜像名即可。原先的 <code>hlky</code> 分支已经更名为 <code>sygil</code>，<code>lstein</code> 分支更名为 <code>invoke</code>。</p>',2),A=e("li",null,[e("strong",null,"sygil"),o("：界面直观，最高分辨率为 1024x1024，镜像构建命令为 "),e("code",null,"docker compose --profile sygil up --build"),o("。")],-1),G=e("strong",null,"auto",-1),L=e("code",null,"docker compose --profile auto up --build",-1),R=e("code",null,"--medvram",-1),W=e("code",null,"--lowvram",-1),P={href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Install-and-Run-on-AMD-GPUs#running-inside-docker",target:"_blank",rel:"noopener noreferrer"},B=e("li",null,[e("strong",null,"auto-cpu"),o("：唯一不依赖显卡的分支。如果没有符合要求的显卡，可以使用 CPU 模式，内存配置需满足 16G 以上，构建镜像的命令为 "),e("code",null,"docker compose --profile auto-cpu up --build"),o("。")],-1),C=e("li",null,[e("strong",null,"invoke"),o("：cli 端非常成熟，WebUI 端参数较少，能自动读取图片记录，适合无进阶需求的新手和 Mac 用户使用，镜像构建命令为 "),e("code",null,"docker compose --profile invoke up --build"),o("。")],-1),F=n(`<h3 id="构建-stable-diffusion" tabindex="-1"><a class="header-anchor" href="#构建-stable-diffusion" aria-hidden="true">#</a> 构建 Stable Diffusion</h3><p>在启动 Docker Desktop 后，打开 WSL（Ubuntu）或 Mac 终端，输入路径切换命令 <code>cd /mnt/d/Desktop/stable-diffusion-webui-docker</code>（路径为 Stable Diffusion WebUI Docker 解压文件目录）。接着，输入以下的部署命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 自动下载采样模型和依赖包</span>
<span class="token function">docker</span> compose <span class="token parameter variable">--profile</span> download up <span class="token parameter variable">--build</span>
<span class="token comment"># 上方命令需要 20 分钟或更长，完成后执行镜像构建命令</span>

<span class="token function">docker</span> compose <span class="token parameter variable">--profile</span> sygil up <span class="token parameter variable">--build</span>
<span class="token comment"># auto 是功能最多的分支，可以选择 auto | auto-cpu | invoke | sygil | sygil-sl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://tc.seoipo.com/2022-09-04-18-32-31.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>等待构建完成后，在终端中会提示访问 <code>http://localhost:7860/</code>，你就可以在本地电脑上用 AI 生成图片了。<sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup></p><h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明" aria-hidden="true">#</a> 使用说明</h2><p>以下示例以 sygil 分支为例，其他分支的主题界面略有不同，但在功能上并没有根本性的差异。</p><h3 id="启动-stable-diffusion" tabindex="-1"><a class="header-anchor" href="#启动-stable-diffusion" aria-hidden="true">#</a> 启动 Stable Diffusion</h3><ol><li>打开 Docker Desktop。</li><li>在 Containers 中选中分支容器，点击启动。</li><li>浏览器中访问 <code>http://localhost:7860/</code>。</li></ol><figure><img src="https://tc.seoipo.com/2022-09-04-17-06-27.png" alt="" tabindex="0" loading="lazy"><figcaption>Docker Desktop 界面</figcaption></figure><h3 id="text-to-image" tabindex="-1"><a class="header-anchor" href="#text-to-image" aria-hidden="true">#</a> Text-to-Image</h3><p>Text-to-Image 是 Stable Diffusion 依据文字描述来生成图像的方法。对于崇尚空间结构的画作类型，如风景、创意画等，推荐使用竖图或横图。对于人像类画作，推荐使用 1:1 的方形图像，否则可能会出现多个人脸叠加的情况。生成的图片分辨率受到一定限制，你可以使用 Upscale 对结果图片进行放大处理。</p><figure><img src="https://tc.seoipo.com/2022-09-05-08-28-23.png" alt="" tabindex="0" loading="lazy"><figcaption>Text-to-Image 界面</figcaption></figure><p>默认情况下使用的是 Simple 简单模式。如果你想要使用更多的功能，你可以点击右侧的 Advanced 按钮，进入进阶选项。在进阶选项中，你可以使用场景矩阵、面部修复和分辨率放大等多种高级功能。</p><h3 id="image-to-image" tabindex="-1"><a class="header-anchor" href="#image-to-image" aria-hidden="true">#</a> Image-to-Image</h3><p>Image-to-Image 是依据文字描述和输入源图来生成相关图像。如果输入源图是 Text-to-Image、素描或结构画，该模式可充分填充图像细节。而如果输入源图是细节充分的照片，生成的结果与原图差异较大。此外，你还可以限定区域来生成图像，这非常适合进行图像修改。</p><figure><img src="https://tc.seoipo.com/2022-09-04-15-39-00.png" alt="" tabindex="0" loading="lazy"><figcaption>Image-to-Image 界面</figcaption></figure><p>CLIP interrogator 会根据图像来生成文字描述。Denoising Strength 指与原图的差异度，建议设置在 0.75-0.9 之间。若要魔改图片，可将 Denoising Strength 设为 0.5 或以下。下图中的 Denoising Strength 只有 0.44，整体图片结构及要素未变，但结果如何，你看到了。</p><figure><img src="https://tc.seoipo.com/2022-09-04-15-40-26.png" alt="" tabindex="0" loading="lazy"><figcaption>超级魔改图片</figcaption></figure><p>Image-to-Image 还可以用来移除、替换或修复图像，甚至可以将源图作为结果图的一部分，利用 Stable Diffusion 扩展绘画。</p><h3 id="image-lab" tabindex="-1"><a class="header-anchor" href="#image-lab" aria-hidden="true">#</a> Image Lab</h3><p>Image Lab 有批量修正面孔和放大图片分辨率的功能。</p><p>Fix Faces 是通过 GFPGAN 模型来改善图片中的面孔，Effect strength 滑块可以控制效果的强度。但实际效果别报太高期许，下图右侧开启了 Fix Faces，只能说勉强有了五官。</p><figure><img src="https://tc.seoipo.com/2022-09-04-15-47-14.png" alt="" tabindex="0" loading="lazy"><figcaption>A woman flying in the air laughing</figcaption></figure><p>Upscale 可以通过 RealESRGAN、GoBIG、Latent Diffusion Super Resolution 和 GoLatent 四种模型来放大图片分辨率。其中，RealESRGAN 有普通和卡通两种模式，你可以根据需要进行选择。放大图片主要消耗 CPU 和内存资源。</p><h2 id="参数解释" tabindex="-1"><a class="header-anchor" href="#参数解释" aria-hidden="true">#</a> 参数解释</h2><h3 id="classifier-free-guidance" tabindex="-1"><a class="header-anchor" href="#classifier-free-guidance" aria-hidden="true">#</a> Classifier Free Guidance</h3><p>Classifier Free Guidance (CFG) 的默认值为 7。数字越小，创作自由度越高，模型与 Prompt 相关性越低。CFG 参数不影响所需的 VRAM 或生成时间。</p><ul><li>CFG 2-6：虽然有创意，但可能不符合提示。</li><li>CFG 7-10：这些提示适用于大多数情况，既富有创意又具有指导性。</li><li>CFG 10-15：当你确信 Prompt 足够好、足够具体时可以使用。</li><li>CFG 16-20：除非提示非常详细，否则不建议使用。这可能会影响连贯性和质量。</li></ul><h3 id="step" tabindex="-1"><a class="header-anchor" href="#step" aria-hidden="true">#</a> Step</h3><p>Step（采样步长/精度）的默认值为 50。Stable Diffusion 通过充满噪音的画布开始创建图像，并逐步去噪以达到最终输出。Step 参数控制这些去噪步骤的数量。通常情况下，越高越好。对于初学者来说，建议使用默认值。Step 参数不影响所需的 VRAM，但 Step 数值的变化会与生成图像的时间成正比。</p><h3 id="seed" tabindex="-1"><a class="header-anchor" href="#seed" aria-hidden="true">#</a> Seed</h3><p>Seed（种子）的默认值为 -1，代表随机值。Seed 是控制初始噪声的数字，在其他参数固定的情况下，每次生成的图像都会不同，这就是种子的作用。如果你保持提示、种子和所有其他参数不变，你可以得到相同的结果。如果一个 Seed 生成了高质量图片，保存该 Seed 并将其应用到其他图片上，以保持高质量。</p><h3 id="sampler" tabindex="-1"><a class="header-anchor" href="#sampler" aria-hidden="true">#</a> Sampler</h3><p>Sampling method/Diffusion Sampler（扩散采样器）是用来在生成图像过程中对图像进行去噪的方法。由于不同的扩散采样器在计算图像下一步的方式不同，因此它们需要不同的持续时间和步骤来生成可用的图像。建议初学者使用 DDIM，因为它速度快，通常只需要 10 步就能生成好的图像，因此可以很容易和快速地进行试验和改进。</p><h2 id="文字描述图像" tabindex="-1"><a class="header-anchor" href="#文字描述图像" aria-hidden="true">#</a> 文字描述图像</h2><p>Stable Diffusion 通过英文文字内容来描述场景或物体，以此来决定生成的图像中会出现什么。文字描述是决定图像生成质量的关键因素。<sup class="footnote-ref"><a href="#footnote5">[5]</a><a class="footnote-anchor" id="footnote-ref5"></a></sup></p><p>样例：<code>A beautiful painting {画作种类} of a singular lighthouse, shining its light across a tumultuous sea of blood {画面描述} by greg rutkowski and thomas kinkade {画家/画风}, Trending on artstation {参考平台}, yellow color scheme {配色}</code>。<sup class="footnote-ref"><a href="#footnote6">[6]</a><a class="footnote-anchor" id="footnote-ref6"></a></sup></p><h3 id="常规描述" tabindex="-1"><a class="header-anchor" href="#常规描述" aria-hidden="true">#</a> 常规描述</h3><ol><li>输入图像的对象、主体，比如一只熊猫、一个持剑的战士，<strong>不要描述动作、情绪和事件</strong>；<sup class="footnote-ref"><a href="#footnote7">[7]</a><a class="footnote-anchor" id="footnote-ref7"></a></sup></li><li><strong>图像种类</strong>：一幅画（a painting of + raw prompt）还是一张照片（a photograph of + raw prompt），或者 Watercolor（水彩）、Oil Paint（油画）、Comic（漫画）、Digital Art（数码艺术）、Illustration（插画）、realistic painting（写实画）、photorealistic（写实照片）、Portrait photogram（肖像照）、Low Poly（低面建模）、3D Item Rende（三维渲染）、sculpture (雕塑) 等等，图像种类可以叠加。</li><li><strong>画家/画风</strong>：建议混合多个画家的风格，比如 <code>Studio Ghibli, Van Gogh, Monet</code>，或描述风格种类，比如 <code>very coherent symmetrical artwork</code>，将作品结构设为「连贯且对称」。</li><li><strong>色调</strong>：yellow color scheme 指整个画面的主色调为黄色。</li><li><strong>参考平台</strong>：Trending on ArtStation，也可以替换为「Facebook」「Pixiv」「Pixbay」等。 <img src="https://tc.seoipo.com/2022-09-16-22-33-26.png" alt="" title="相同参数下，不同平台生成的图片" loading="lazy"></li></ol><h3 id="特征描述" tabindex="-1"><a class="header-anchor" href="#特征描述" aria-hidden="true">#</a> 特征描述</h3><p>除画面主体外，可以用其他具象物体和形容词来填充画面细节。描述词要具体，讲出你要的物体和它的特征。</p><ul><li>次要元素：物体不要太多，两到三个就好。若要特别强调某个元素，可以加很多括号或者惊叹号，比如 <code>beautiful forest background, desert!!, (((sunset)))</code> 中会优先体现「desert」和「sunset」元素。</li><li>人物特征：<code>detailed gorgeous face, delicate features, elegant, Googly Eyes, Bone, big tits, silver hair, olive skin, Mini smile</code>；</li><li>特定润色：<code>insanely detailed and intricate, gorgeous, surrealism, smooth, sharp focus, Painting, Digital Art, Concept Art, Illustration, Artstation, in a symbolic and meaningful style, 8K</code>；</li><li>光线描述：<code>Natural Lighting, Studio lighting, Cinematic Lighting, Crepuscular Rays, X-Ray, Backlight</code>，或逼真光照 <code>Unreal Engine</code>；</li><li>镜头视角：<code>Cinematic, Magazine, Golden Hour, F/22, Depth of Field, Side-View</code>，虚化背景 <code>Bokeh</code>；</li><li>画面质量：<code>professional, award winning, breathtaking, groundbreaking, superb, outstanding</code>；</li><li>其他描述：细节和纹理、物体占据画面的大小、年代、渲染 / 建模工具等，比如 Vivid Colors（艳丽色彩）。</li></ul><h3 id="prompt-权重" tabindex="-1"><a class="header-anchor" href="#prompt-权重" aria-hidden="true">#</a> prompt 权重</h3><p>假设你在提示词中使用了 <code>mountain</code>，生成的图像很可能会有树。但如果你想要生成没有树的山的图像，可以使用 <code>mountain | tree:-10</code>。其中 <code>tree:-10</code> 表示对于树的权重非常负，因此生成的图像中不会出现树。通过权重词，我们还能生成更复杂的图像，例如 <code>A planet in space:10 | bursting with color red, blue, and purple:4 | aliens:-10 | 4K, high quality</code>。<sup class="footnote-ref"><a href="#footnote8">[8]</a><a class="footnote-anchor" id="footnote-ref8"></a></sup></p><p>Prompt 中的词语顺序代表其权重，越靠前权重越大。如若某物未出现在图像中，可以将该名词放在首位。</p><h3 id="否定提示" tabindex="-1"><a class="header-anchor" href="#否定提示" aria-hidden="true">#</a> 否定提示</h3><p>auto/auto-cpu 分支中可以设置 Negative prompt（否定提示），以避免画面中出现指定元素。</p><ul><li>修正畸形：<code>disfigured, deformed hands, blurry, grainy, broken, cross-eyed, undead, photoshopped, overexposed, underexposed, lowres, bad anatomy, bad hands, extra digits, fewer digits, bad digit, bad ears, bad eyes, bad face, cropped: -5</code>。</li><li>避免裸体：<code>nudity, bare breasts</code>。</li><li>避免黑白照：<code>black and white,monochrome</code>。</li></ul><h3 id="prompt-参考" tabindex="-1"><a class="header-anchor" href="#prompt-参考" aria-hidden="true">#</a> prompt 参考</h3><p>除画面主体描述外，其他要素并非必须。如果你只是简单尝试，输入主体「apples」即可。</p>`,51),E={href:"https://promptomania.com/stable-diffusion-prompt-builder/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://weirdwonderfulai.art/resources/disco-diffusion-modifiers/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://prompthero.com/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://openart.ai/",target:"_blank",rel:"noopener noreferrer"},U=e("blockquote",null,[e("p",null,"goddess close-up portrait skull with mohawk, ram skull, skeleton, thorax, x-ray, backbone, jellyfish phoenix head, nautilus, orchid, skull, betta fish, bioluminiscent creatures, intricate artwork by Tooth Wu and wlop and beeple, highly detailed, digital painting, Trending on artstation, very coherent symmetrical artwork, concept art, smooth, sharp focus, illustration, 8k")],-1),V=e("h2",{id:"prompt-matrix",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prompt-matrix","aria-hidden":"true"},"#"),o(" Prompt matrix")],-1),z=e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote9"},"[9]"),e("a",{class:"footnote-anchor",id:"footnote-ref9"})],-1),H={href:"https://github.com/HelixNGC7293/DeforumStableDiffusionLocal",target:"_blank",rel:"noopener noreferrer"},O=n(`<p>上方视频的调教词为 <code>A mecha robot in World War II in realistic style|Shoot with another mecha robot|Bombed by planes|Missile drop|broken|Repaired|cinematic lighting</code>。<code>|</code> 符号后的场景条件将进行排列组合，视频样例有 6 个场景条件生成 64 张图。</p><p>另外，我们可以指定场景条件位置，比如 <code>@(moba|rpg|rts) character (2d|3d) model</code> 表示 <code>(moba|rpg|rts 三选一) character (2d|3d 二选一) model</code>，也就是会生成 3*2 张图片。开头的 <code>@</code> 是触发指定场景条件位置的符号，不能省略。</p><h2 id="textual-inversion" tabindex="-1"><a class="header-anchor" href="#textual-inversion" aria-hidden="true">#</a> Textual Inversion</h2><p>Textual Inversion（文本倒置）是 auto/auto-cpu 分支提供的功能，可以个人定制单词在模型中的含义。比如大众模型中医生多是白人男性，而我们可以输入 5 张亚洲女性照片并将其与 doctor 关联，经过 Textual Inversion 处理后的模型生成的医生形象将以亚洲女性为主。<sup class="footnote-ref"><a href="#footnote10">[10]</a><a class="footnote-anchor" id="footnote-ref10"></a></sup></p><p>Textual Inversion 定制流程：</p><ol><li>Preprocess images：设置源图目录和输出目录。</li><li>Create embedding（新建嵌入）：建立模型属性。</li><li>待续。</li></ol><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="docker-desktop-failed" tabindex="-1"><a class="header-anchor" href="#docker-desktop-failed" aria-hidden="true">#</a> Docker Desktop failed</h3><p>未正常安装/关闭 Docker 容器时，可能会报错 <code>Docker Desktop failed to start/stop</code>。</p><p>先删除 <code>%AppData%</code> 路径下的 Docker 文件夹，然后在 PowerShell 中输入下方命令，关闭 WSL 和 docker-desktop。最后，手动重启 Docker Desktop。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wsl <span class="token parameter variable">--shutdown</span>
wsl <span class="token parameter variable">-l</span> <span class="token parameter variable">-v</span>
wsl <span class="token parameter variable">--unregister</span> docker-desktop
wsl <span class="token parameter variable">-l</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-desktop-cannot-start" tabindex="-1"><a class="header-anchor" href="#docker-desktop-cannot-start" aria-hidden="true">#</a> Docker Desktop cannot start</h3><p><code>Hardware assisted virtualization and data execution protection must be enabled in the BIOS</code> 报错说明电脑没开启虚拟化。</p><p>在开机的时候多按几次 <code>F2</code> 或 <code>DEL</code> 进入 BIOS，然后设置中开启「Intel Virtual Technology」，AMD 则是将「SVM Support」设置为设置为「Enable」的状态；最后点击「F10」保存退出即可。</p><h3 id="docker-命令失败" tabindex="-1"><a class="header-anchor" href="#docker-命令失败" aria-hidden="true">#</a> docker 命令失败</h3><p><code>The command &#39;docker&#39; could not be found</code> 说明当前命令行确实 Docker 环境缺失，检查 Docker Desktop 是否启动。</p><h3 id="exited-with-code-137" tabindex="-1"><a class="header-anchor" href="#exited-with-code-137" aria-hidden="true">#</a> exited with code 137</h3><p>通常来说，<code>exited with code 137</code> 意味着内存不足，超出内存限制导致进程被关闭。建议硬件配置最低为 16G 内存，尤其是在使用 auto-cpu 模式时。</p><h3 id="端口访问被拒" tabindex="-1"><a class="header-anchor" href="#端口访问被拒" aria-hidden="true">#</a> 端口访问被拒</h3><p>Docker 容器原本运行正常，端口访问突然被拒绝了，显示 <code>Error response from daemon: Ports are not available: exposing port TCP 0.0.0.0:7860 -&gt; 0.0.0.0:0: listen tcp 0.0.0.0:7860: bind: An attempt was made to access a socket in a way forbidden by its access permissions</code>。</p><p>在 Powershell 中输入 <code>netsh int ipv4 show excludedportrange protocol=tcp</code> 检查是否处于被排除端口范围，然后输入 <code>reg add HKLM\\SYSTEM\\CurrentControlSet\\Services\\hns\\State /v EnableExcludedPortRange /d 0 /f</code> 开启端口。操作完成后，重启电脑即可解封端口。<sup class="footnote-ref"><a href="#footnote11">[11]</a><a class="footnote-anchor" id="footnote-ref11"></a></sup></p><h3 id="filenotfounderror" tabindex="-1"><a class="header-anchor" href="#filenotfounderror" aria-hidden="true">#</a> FileNotFoundError</h3><p>再次架构容器时报错 <code>FileNotFoundError: [Errno 2] No such file or directory: &#39;/models/model.ckpt&#39;</code>，这是架构位置错误导致的。此时，我们需要检查是否通过 WSL 输入的架构命令，并且 Stable Diffusion WebUI Docker 解压路径是否配置正确。</p><h3 id="采样模型" tabindex="-1"><a class="header-anchor" href="#采样模型" aria-hidden="true">#</a> 采样模型</h3><p>采样模型是 AI 绘画的核心。2022.09.10 已支持自动下载采样模型，下方列表仅做参考。</p>`,25),K={href:"https://www.googleapis.com/storage/v1/b/aai-blog-files/o/sd-v1-4.ckpt?alt=media",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"model.ckpt",-1),Y={href:"https://github.com/TencentARC/GFPGAN/releases/download/v1.3.0/GFPGANv1.4.pth",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth",target:"_blank",rel:"noopener noreferrer"},X={href:"https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.2.4/RealESRGAN_x4plus_anime_6B.pth",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://heibox.uni-heidelberg.de/f/578df07c8fc04ffbadf3/?dl=1",target:"_blank",rel:"noopener noreferrer"},$={href:"https://heibox.uni-heidelberg.de/f/31a76b13ea27482981b4/?dl=1",target:"_blank",rel:"noopener noreferrer"},J=e("code",null,"LDSR.ckpt",-1),Q=e("code",null,"LDSR.yaml",-1),ee=e("h2",{id:"最后",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#最后","aria-hidden":"true"},"#"),o(" 最后")],-1),oe=e("p",null,"尽管 Stable Diffusion 目前还不能作为生产力工具，但它使设计变得更加简单，也为普通人开启了 AI 绘画的可能性。建议你亲自体验，实际部署一下，让自己拥有更多的可能性。",-1),te=e("hr",{class:"footnotes-sep"},null,-1),ae={class:"footnotes"},ne={class:"footnotes-list"},re={id:"footnote1",class:"footnote-item"},ie={href:"https://www.runoob.com/docker/windows-docker-install.html",target:"_blank",rel:"noopener noreferrer"},se=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),le={id:"footnote2",class:"footnote-item"},de={href:"https://docs.microsoft.com/zh-cn/windows/wsl/install#install-wsl-command",target:"_blank",rel:"noopener noreferrer"},ce=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1),he={id:"footnote3",class:"footnote-item"},pe={href:"https://docs.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v#enable-hyper-v-using-powershell",target:"_blank",rel:"noopener noreferrer"},fe=e("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎",-1),ue={id:"footnote4",class:"footnote-item"},be={href:"https://github.com/AbdBarho/stable-diffusion-webui-docker/wiki/Setup",target:"_blank",rel:"noopener noreferrer"},ge=e("a",{href:"#footnote-ref4",class:"footnote-backref"},"↩︎",-1),me={id:"footnote5",class:"footnote-item"},_e={href:"https://openart.ai/promptbook",target:"_blank",rel:"noopener noreferrer"},ke=e("a",{href:"#footnote-ref5",class:"footnote-backref"},"↩︎",-1),xe={id:"footnote6",class:"footnote-item"},we={href:"https://www.ifanr.com/app/1484403",target:"_blank",rel:"noopener noreferrer"},De=e("a",{href:"#footnote-ref6",class:"footnote-backref"},"↩︎",-1),ve={id:"footnote7",class:"footnote-item"},Se={href:"https://www.guokr.com/article/462587/",target:"_blank",rel:"noopener noreferrer"},ye=e("a",{href:"#footnote-ref7",class:"footnote-backref"},"↩︎",-1),Ie={id:"footnote8",class:"footnote-item"},Ae={href:"https://learnprompting.org/docs/Images/weighted_terms",target:"_blank",rel:"noopener noreferrer"},Ge=e("a",{href:"#footnote-ref8",class:"footnote-backref"},"↩︎",-1),Le={id:"footnote9",class:"footnote-item"},Re={href:"https://github.com/sygil/stable-diffusion#prompt-matrix",target:"_blank",rel:"noopener noreferrer"},We=e("a",{href:"#footnote-ref9",class:"footnote-backref"},"↩︎",-1),Pe={id:"footnote10",class:"footnote-item"},Be={href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Textual-Inversion",target:"_blank",rel:"noopener noreferrer"},Ce=e("a",{href:"#footnote-ref10",class:"footnote-backref"},"↩︎",-1),Fe={id:"footnote11",class:"footnote-item"},Ee={href:"https://github.com/docker/for-win/issues/3171#issuecomment-572571882",target:"_blank",rel:"noopener noreferrer"},Me=e("a",{href:"#footnote-ref11",class:"footnote-backref"},"↩︎",-1);function Te(Ne,Ue){const a=r("ExternalLinkIcon"),i=r("BiliBili");return l(),d("div",null,[h,p,f,e("p",null,[o("想要体验 AI 绘图，你可以使用在线工具 "),e("a",u,[o("Hugging Face"),t(a)]),o("、"),e("a",b,[o("DreamStudio"),t(a)]),o(" 或"),e("a",g,[o("百度文心"),t(a)]),o("。但相对于本地部署来说，Hugging Face 需要排队，生成一张图约 5 分钟；DreamStudio 可以免费生成 200 张图片，之后需要缴费；百度文心能用中文生成图片，但仍处于 beta 阶段，未正式商用。此外，这些在线工具的图片调整功能比较有限，无法批量生成图片，只适用于测试和体验。")]),e("p",null,[o("如果你需要生成大量的 AI 图片，可以通过 Docker Desktop 将 "),e("a",m,[o("Stable Diffusion WebUI Docker"),t(a)]),o(" 部署到家用电脑上，从而实现免费的 AI 文字绘画，并摆脱在线工具的限制。对于 Mac 用户，推荐选择 Stable Diffusion 的 invoke 分支，如果在部署过程中出现错误，你可以参考 "),e("a",_,[o("InvokeAI 文档"),t(a)]),o("进行排查。对于 M1/M2 Mac 用户，推荐使用更简便的 "),e("a",k,[o("CHARL-E"),t(a)]),o(" 或 "),e("a",x,[o("DiffusionBee"),t(a)]),o("。")]),w,e("p",null,[o("按平台选 "),e("a",D,[o("Docker Desktop"),t(a)]),o(" 版本，安装后点击左侧的 Add Extensions，推荐安装 Disk usage 扩展，这将便于管理 Docker 的存储空间。")]),v,e("p",null,[o("下载 "),e("a",S,[o("Stable Diffusion WebUI Docker 配置包"),t(a)]),o("或"),e("a",y,[o("阿里云盘聚合版"),t(a)]),o("（定期更新），然后将其解压到指定路径。聚合版包括相关依赖和模型，因此文件较大。如果需要更新 Stable Diffusion WebUI Docker，你可以按照上述步骤重新构建容器。")]),I,e("ul",null,[A,e("li",null,[G,o("（推荐）：设置模块最丰富，显示绘画过程，支持随机插入艺术家、参数读取和否定描述，最高分辨率为 2048x2048（高分辨率对显存要求更高），镜像构建命令为 "),L,o("。默认使用 6GB 以上的显存，如果你的显卡内存较低，则将配置中的 "),R,o(" 改为 "),W,o("。A 卡用户注意修改"),e("a",P,[o("显卡设置"),t(a)]),o("。")]),B,C]),F,e("p",null,[o("如果你不知道生成什么图像，可以使用 "),e("a",E,[o("promptoMANIA"),t(a)]),o(" 、"),e("a",M,[o("WEIRD WONDERFUL AI ART"),t(a)]),o(" 按提示组合描述，或参考 AI 图库 "),e("a",T,[o("PromptHero"),t(a)]),o(" 和 "),e("a",N,[o("OpenArt"),t(a)]),o(" 上其他人分享的成品图和描述文案，比如")]),U,V,e("p",null,[o("Prompt matrix 是 sygil 分支的功能，可以按不同条件组合生成多张相关但不同的画面，适合用于制作视频素材。"),z,o(" 此时，批次数量的设置会被忽略。如果你对将图像转化为视频有兴趣，可以尝试使用 "),e("a",H,[o("Deforum Stable Diffusion Local Version"),t(a)]),o("。")]),t(i,{bvid:"BV1YP411V7vV"}),O,e("ul",null,[e("li",null,[e("a",K,[o("Stable Diffusion v1.4 (4GB)"),t(a)]),o(", 将压缩包文件重命名为 "),q,o("。")]),e("li",null,[o("(可选) "),e("a",Y,[o("GFPGANv1.4.pth (340MB)"),t(a)]),o("。")]),e("li",null,[o("(可选) "),e("a",j,[o("RealESRGAN_x4plus.pth (64MB)"),t(a)]),o(" 和 "),e("a",X,[o("RealESRGAN_x4plus_anime_6B.pth (18MB)"),t(a)]),o("。")]),e("li",null,[o("(可选) "),e("a",Z,[o("LDSR (2GB)"),t(a)]),o(" 和 "),e("a",$,[o("LDSR 配置"),t(a)]),o("，分别重命名为 "),J,o(" 和 "),Q,o("。")])]),ee,oe,te,e("section",ae,[e("ol",ne,[e("li",re,[e("p",null,[e("a",ie,[o("Windows Docker 安装"),t(a)]),o(),se])]),e("li",le,[e("p",null,[e("a",de,[o("使用 WSL 在 Windows 上安装 Linux"),t(a)]),o(),ce])]),e("li",he,[e("p",null,[e("a",pe,[o("在 Windows 10 上安装 Hyper-V"),t(a)]),o(),fe])]),e("li",ue,[e("p",null,[e("a",be,[o("Setup Stable Diffusion WebUI Docker"),t(a)]),o(),ge])]),e("li",me,[e("p",null,[e("a",_e,[o("Stable Diffusion Prompt Book - OpenArt"),t(a)]),o(),ke])]),e("li",xe,[e("p",null,[e("a",we,[o("外网爆火的 4 款「你说我画」自动作画工具，我们测了下，有 1 款的确超强"),t(a)]),o(),De])]),e("li",ve,[e("p",null,[e("a",Se,[o("最时髦的 AI 画画，一文包教包会"),t(a)]),o(),ye])]),e("li",Ie,[e("p",null,[e("a",Ae,[o("Learn Prompting: Weighted Terms"),t(a)]),o(),Ge])]),e("li",Le,[e("p",null,[e("a",Re,[o("stable-diffusion Prompt matrix"),t(a)]),o(),We])]),e("li",Pe,[e("p",null,[e("a",Be,[o("Textual Inversion"),t(a)]),o(),Ce])]),e("li",Fe,[e("p",null,[e("a",Ee,[o("Windows 端口访问被拒"),t(a)]),o(),Me])])])])])}const ze=s(c,[["render",Te],["__file","2022-09-05-stable_diffusion_ai_painting.html.vue"]]);export{ze as default};
