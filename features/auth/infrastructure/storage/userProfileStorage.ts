interface UserProfile {
  readonly nickname: string;
  readonly email: string;
}

const USER_PROFILE_KEY = "user_profile";

export const userProfileStorage = {
  save(profile: UserProfile): void {
    sessionStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
  },

  load(): UserProfile | null {
    const data = sessionStorage.getItem(USER_PROFILE_KEY);
    if (!data) return null;
    return JSON.parse(data) as UserProfile;
  },

  clear(): void {
    sessionStorage.removeItem(USER_PROFILE_KEY);
  },
} as const;
