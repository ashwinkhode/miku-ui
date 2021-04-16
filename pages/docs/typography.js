import React from 'react'
import Layout from '../../components/Layout'

const Typography = () => {
  return (
    <Layout>
      <div className="pb-5 border-b border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
          Typography
            </h1>
        <p className="mt-2 max-w-4xl text-lg font-normal text-gray-500">
          One of the crucial aspect when it comes to readability and accessibility.
            </p>
      </div>
      <div className='my-4 space-y-4'>
        <h1 className="mt-2 max-w-4xl text-lg font-normal text-gray-500">
          Heading Variation
            </h1>

        <h1 className="heading-xl">Heading 1</h1>
        <h2 className="heading-lg">Heading 2</h2>
        <h3 className="heading-md">Heading 3</h3>
        <h4 className="heading-sm">Heading 4</h4>
        <h5 className="heading-xs">Heading 5</h5>
        <h6>Heading 6</h6>
      </div>
      <div className='my-4 space-y-4'>
        <h1 className="mt-2 max-w-4xl text-lg font-normal text-gray-500">
          Centered Text in a container
            </h1>
        <p className="blog bg-white p-4">
          Have you ever tried to read Wikipedia on a very large screen? It looks
          like this. Those paragraphs are so wide! Wikipedia doesn't constrain the
          container width at all. This leads to lines that are hundreds of
          characters in length. It's hard for our eyes to wrap around when we
          reach the end of a line. If you're like me, you wind up using your mouse
          to assist. In addition to the line-wrapping concern, it's just generally
          hard to read lines of text that are so wide; it fatigues the eye.
          Research has shown that the ideal line length is about 65 characters.
          Anywhere between 45 and 85 is generally seen as acceptable, in the
          context of a roman alphabet. Reading is a complex process, and we should
          strive to make it as easy as possible. The standard solution to this
          problem is to create a single fixed-width column in the center of the
          page. You've seen this layout everywhere: online magazines,
          documentation, news sites, and blogs. You're looking at it right now, on
        this site! - Excerpt from Josh Comeau's blog. &copy; Josh Comeau Ref{" "}
          <a href="https://www.joshwcomeau.com/css/full-bleed/">Learn More</a>
        </p>
      </div>

    </Layout>
  )
}

export default Typography
