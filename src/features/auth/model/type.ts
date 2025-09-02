import { User } from 'firebase/auth';

export interface LoginPayload {
  email: string;
  password: string;
}

export type RegisterPayload = {
  fullName: string;
  phone: string;
  email: string;
  password: string;
};

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  verificationId: string | null;
}
