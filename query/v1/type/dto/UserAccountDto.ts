export default interface UserAccountDto {
  userId: string;
  displayName: string;
  avatarUrl: string;

  gold: number;
  diamond: number;

  level: number;
  experience: number;
  required: number;
}
