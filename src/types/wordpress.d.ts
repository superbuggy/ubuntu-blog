export type WPTerm = {
  name: string;
  taxonomy: "topic";
};

export type WPAuthor = {
  name: string;
  link: string;
};
export type WPFeaturedMedia = {
  source_url: string;
  alt_text: string;
};

export type WPEmbeddedPostMeta = {
  "wp:term": WPTerm[];
  "wp:featuredmedia": WPFeaturedMedia[];
  author: WPAuthor[];
};

export type RenderedProp = {
  rendered: string;
};
