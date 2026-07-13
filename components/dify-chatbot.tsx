import Script from "next/script"

// Floating "digital twin" chatbot (Dify) — resume-backed RAG bot.
// Config must be present before embed.min.js executes, hence the two strategies.
export function DifyChatbot() {
  return (
    <>
      <Script id="dify-chatbot-config" strategy="afterInteractive">
        {`window.difyChatbotConfig = { token: 'xMJz6VYTmZvuYcjS' };`}
      </Script>
      <Script
        src="https://udify.app/embed.min.js"
        id="xMJz6VYTmZvuYcjS"
        strategy="lazyOnload"
      />
    </>
  )
}
