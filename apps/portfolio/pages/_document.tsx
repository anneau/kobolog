import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body className="text-neutral-900 dark:text-neutral-50 bg-neutral-50 dark:bg-neutral-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
