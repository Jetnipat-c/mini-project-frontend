import create from 'zustand'
import { StroeTransaction } from './types/transaction.type'

export const TransactionStore = create<StroeTransaction>((set,get)=> ({
    userID: 0,
    tranID: 0,
    tranDate: '',
    tranNote: '0',
    tranType: false,
    tranAmount: 0,
    setTransaction: (userID,tranID,tranDate,tranNote,tranType,tranAmount) => {
        console.log(userID,tranID,tranDate,tranNote,tranType,tranAmount);
        set(()=> ({
            userID: userID,
            tranID: tranID,
            tranDate: tranDate,
            tranNote: tranNote,
            tranType: tranType,
            tranAmount: tranAmount
        }))
        
    }
}))