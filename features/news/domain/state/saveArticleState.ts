export type SaveArticleState =
  | { readonly status: "IDLE" }
  | { readonly status: "SAVING" }
  | { readonly status: "SAVED"; readonly id: number }
  | { readonly status: "DUPLICATE" }
  | { readonly status: "ERROR"; readonly message: string };
