export type AuthState =
  | { readonly status: "UNAUTHENTICATED" }
  | { readonly status: "AUTHENTICATED"; readonly token: string }
  | { readonly status: "TERMS_REQUIRED" };
