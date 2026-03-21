import type { TermsAgreement } from "@/features/terms/domain/model/termsAgreement";

export interface SignupRequest {
  readonly nickname: string;
  readonly email: string;
}
