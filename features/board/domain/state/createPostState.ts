export type CreatePostState =
  | { readonly status: "IDLE" }
  | { readonly status: "SUBMITTING" }
  | { readonly status: "SUCCESS" }
  | { readonly status: "ERROR"; readonly message: string };
