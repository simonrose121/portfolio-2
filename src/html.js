import React from "react"

export default function HTML(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#21AFF2" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {props.headComponents}
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  )
}
