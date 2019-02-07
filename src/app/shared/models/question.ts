export interface Question {
  id?: any;
  question?: Option[];
  option_a?: Option[];
  option_b?: Option[];
  option_c?: Option[];
  option_d?: Option[];
  grade: string;
  answer?: Answer;
  origin?: Origin;
}

export interface Option {
  type?: string;
  value?: string;
  index?: number;
}

export interface Answer {
  index: string;
  verified: boolean;
}

export interface Origin {
  from: string;
  year: number;
}
