export type NewsIntent =
  | {
      readonly type: "LOAD_NEWS_PAGE";
      readonly keyword: string;
      readonly page: number;
      readonly size: number;
    }
  | { readonly type: "CHANGE_NEWS_PAGE"; readonly page: number };
