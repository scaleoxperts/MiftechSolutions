type DataLayerEvent = Record<string, unknown> & { event: string };

export const gtmEvent = (
  event: string,
  params: Record<string, unknown> = {}
): void => {
  if (typeof window !== "undefined" && Array.isArray((window).dataLayer)) {
    (window as unknown as { dataLayer: DataLayerEvent[] }).dataLayer.push({
      event,
      ...params,
    });
  }
};

export const pageview = (url: string): void => {
  gtmEvent("page_view", {
    page_path: url,
    page_location: typeof window !== "undefined" ? window.location.href : url,
    page_title: typeof document !== "undefined" ? document.title : "",
  });
};
