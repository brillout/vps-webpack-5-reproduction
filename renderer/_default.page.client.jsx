import { hydrateRoot } from "react-dom/client";
import React from "react";
import { PageLayout } from "./PageLayout";

export { render };
async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  hydrateRoot(
    document.getElementById("page-view"),
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>
  );
}
