export enum SelectedPage {
  MyURLs = "my urls",
  Features = "features",
  Pricing = "pricing",
  Analytics = "analytics",
  FAQs = "faqs",
}

export type user = {
  username?: string;
  email: string;
  password: string;
};
export type Context = {
  // signup: () => void;
  // signUp: (email: string, password: string) => Promise<void>;
  // login: () => void;
  user: user;
};
