import { BlogMarkdownView } from '@/components/blog/BlogMarkdownView'
import {
  BlogNavigationMenu
} from '@/components/blog/BlogNavigationMenu'

const html = `
<h1>Introduction</h1>
<blockquote>
<p>Hey 👋 Nice to meet you here.</p>
</blockquote>

<p>I am a student as well as a open sourceror, a Web developer and a UI/UX designer.</p>
<p>Lorem ipsum odor amet, consectetuer adipiscing elit. Etiam morbi odio vulputate curae tellus curabitur justo aptent. Consectetur elementum at quisque posuere orci non pellentesque elementum. Dis velit primis lorem urna quis. Eleifend lacinia mattis cubilia ligula tellus facilisis curabitur feugiat augue? Adipiscing pulvinar ridiculus cras risus dictum, rutrum amet tristique. Potenti nec sapien fermentum malesuada turpis. Libero ac ut neque habitant urna fringilla? Aliquet sollicitudin euismod vestibulum sociosqu mauris duis sodales non. Proin eget nisl condimentum, sodales proin pharetra? Nascetur ullamcorper suscipit dis congue netus nec torquent viverra cubilia. Curae sodales porta massa velit imperdiet risus mattis primis. Vel vitae efficitur lobortis cras; nisi habitant euismod nostra nisi. At nullam dui interdum pulvinar himenaeos a vestibulum. Augue nostra feugiat felis per maximus. Congue egestas tellus varius non natoque a bibendum. Pellentesque id sollicitudin vulputate nullam metus netus habitasse non porta. Viverra quis fringilla diam primis facilisi aptent felis ad. Praesent placerat fames consequat finibus netus himenaeos. Etiam hac facilisis blandit tempor odio nullam. Nisl facilisis semper fringilla quis sapien; ex eros. Vitae conubia condimentum cursus turpis integer platea ligula. Malesuada finibus habitant est nam aliquam ante ullamcorper inceptos lobortis. Nunc ante cras volutpat sit odio. Faucibus a interdum leo, egestas suscipit sed pharetra. Blandit cursus luctus egestas interdum ridiculus. At vulputate per pretium tincidunt egestas neque cursus condimentum fusce. Lobortis cras mi; inceptos vehicula faucibus cubilia consequat. Integer inceptos quis cursus praesent nullam nisi. Fermentum imperdiet adipiscing imperdiet facilisis a potenti. Iaculis maecenas bibendum ex cursus mus nam ex eget? Dapibus pretium in tempor finibus non lacus duis torquent. Donec metus metus accumsan leo congue donec sociosqu odio parturient. Mauris habitasse urna et tempor urna faucibus egestas magnis. Nulla cubilia sapien mollis etiam massa purus sagittis euismod. Fusce purus tempor eros elit nullam sapien finibus pretium dolor. Iaculis ridiculus auctor nullam nisl dis hac. Vestibulum in facilisi sapien habitasse iaculis sapien elit convallis. Nisi ex maximus fermentum pulvinar potenti, commodo mi. Velit sed hendrerit mi nascetur magna tristique quis suspendisse. Commodo fames inceptos conubia mus risus varius viverra magna. Dapibus convallis fames mus semper, nunc efficitur. Porttitor lobortis urna dui quam ligula senectus amet? Mollis proin praesent hendrerit nullam egestas vestibulum. Senectus maximus ante vulputate dui; suscipit faucibus inceptos. Habitasse rhoncus eros vestibulum imperdiet cursus adipiscing scelerisque dapibus. Dictum imperdiet cubilia convallis habitant natoque curabitur. Sapien vulputate donec litora egestas cursus a venenatis rutrum. Eleifend amet pulvinar et dui phasellus diam auctor.</p>
</ul>

`

function Page() {
  return <div>
    <BlogNavigationMenu />
    <BlogMarkdownView html={html}></BlogMarkdownView>
  </div>
}

export default Page
