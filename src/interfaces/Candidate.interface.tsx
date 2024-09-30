export interface Candidate {
  bio: string;
  login: string; // Username
  name?: string; // Name (optional)
  location?: string; // Location (optional)
  avatar_url: string; // URL to the avatar image
  email?: string; // Email (optional)
  company?: string; // Company (optional)
  html_url: string; // URL to the candidate's GitHub profile
}

  