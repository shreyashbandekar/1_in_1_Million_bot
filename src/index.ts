import { run, HandlerContext } from "@xmtp/message-kit";

//Tracks conversation steps
const inMemoryCacheStep = new Map<string, number>();

//List of words to stop or unsubscribe.
const stopWords = ["stop", "unsubscribe", "cancel", "list"];

run(async (context: HandlerContext) => {
  const {
    client,
    message: {
      content: { content: text },
      typeId,
      sender,
    },
  } = context;

  if (typeId !== "text") {
    /* If the input is not text do nothing */
    return;
  }
  const urlPatterns = [
    {
      pattern: /^\/start$/i,
      transform: () => "https://a-milly.vercel.app/",
    },
  ];

  for (const { pattern, transform } of urlPatterns) {
    const match = text.match(pattern);
    if (match) {
      const newUrl = transform();
      await context.send("Here's the URL to start a game of Milly:");
      await context.send(newUrl);
      return;
    }
  }

  await context.send(
    "Hello! I can help you start a game of Milly. Please send '/start'."
  );
});
