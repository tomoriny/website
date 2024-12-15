export function BlogMarkdownView({ html }: { html: string }) {
  return (<div className="w-full px-80 py-10 font-sans typo-body bg-transparent" dangerouslySetInnerHTML={{ __html: html }}></div>)
}