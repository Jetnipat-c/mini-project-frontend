export type StroeTransaction = {
  userID: number;
  tranID: number;
  tranDate: string;
  tranNote: string;
  tranType: boolean;
  tranAmount: number;
  setTransaction: (userID,tranID,tranDate,tranNote,tranType,tranAmount) => void;
};
