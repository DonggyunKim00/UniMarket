import { create } from 'zustand';

interface Prop {
  signUpInfo: SignUpInfo;
  setSchool: (univ_name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setPhoneNumber: (phone_number: string) => void;
  init: () => void;
}
export interface SignUpInfo {
  univ_name: string;
  email: string;
  password: string;
  phone_number: string;
}

const useSignUpForm = create<Prop>((set) => ({
  signUpInfo: {
    univ_name: '',
    email: '',
    password: '',
    phone_number: '',
  },
  setSchool: (univ_name) =>
    set((state) => ({
      signUpInfo: {
        ...state.signUpInfo,
        univ_name: univ_name,
      },
    })),
  setEmail: (email) =>
    set((state) => ({
      signUpInfo: {
        ...state.signUpInfo,
        email: email,
      },
    })),
  setPassword: (password) =>
    set((state) => ({
      signUpInfo: {
        ...state.signUpInfo,
        password: password,
      },
    })),
  setPhoneNumber: (phone_number) =>
    set((state) => ({
      signUpInfo: {
        ...state.signUpInfo,
        phone_number: phone_number,
      },
    })),
  init: () =>
    set(() => ({
      signUpInfo: { univ_name: '', email: '', password: '', phone_number: '' },
    })),
}));

export default useSignUpForm;
