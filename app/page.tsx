import { BlogMarkdownView } from '@/components/blog/BlogMarkdownView'
import {
  BlogNavigationMenu
} from '@/components/blog/BlogNavigationMenu'

const html = `
<h1>Introduction</h1>
<blockquote>
<p>Hey 👋 Nice to meet you here.</p>
</blockquote>

<p>I am a student as well as a open sourceror, a Web developer and a UI/UX designer. And I am studying in Guangdong Experimental High School currently.</p>

</ul>

`

function Page() {
  return <div>
    <BlogNavigationMenu />
    <BlogMarkdownView html={html}></BlogMarkdownView>
  </div>
}

export default Page
