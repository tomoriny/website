import { BlogMarkdownView } from '@/components/blog/BlogMarkdownView'
import {
  BlogNavigationMenu
} from '@/components/blog/BlogNavigationMenu'

const html = `
<h1>Introduction</h1>
<blockquote>
<p>Hey 👋 Nice to meet you here.</p>
</blockquote>
<p>My nickname is <strong>Hydration</strong>, I come from Guangdong, China.</p>
<p>I am a student as well as a open sourceror, a Web developer and a UI/UX designer. And I am studying in Guangdong Experimental High School currently.</p>
<h2>I am</h2>
<ul>
<li>Core member team of <a href="https://github.com/EdgelessPE">Edgeless PE</a></li>
<li>Co-founder of <a href="https://github.com/cladonia-cn">Cladonia LLC.</a></li>
</ul>
<h2>I am currently focusing on</h2>
<ul>
<li>Modern Web Technologies. JavaScript, Vue, Vite and TypeScript.</li>
</ul>
<h2>Contact me</h2>
<ul>
<li>GitHub <a href="https://github.com/hydrati">@hydrati</a></li>
<li>bilibili <a href="https://space.bilibili.com/98955693">@水合Hydration</a></li>
<li>Email <a href="mailto:hy@cladonia.team">hy@cladonia.team</a></li>
<li>Twitter <a href="https://twitter.com/_hydrati">@_hydrati</a></li>
</ul>

`

function Page() {
  return <div>
    <BlogNavigationMenu />
    <BlogMarkdownView html={html}></BlogMarkdownView>
  </div>
}

export default Page
