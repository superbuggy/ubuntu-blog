export type WPTerm = {
  name: string;
  taxonomy: "topic";
};

export type WPAuthor = {
  name: string;
};

export type WPEmbeddedPostMeta = {
  "wp:term": WPTerm[];
  author: WPAuthor[];
};

export type RenderedProp = {
  rendered: string;
};
