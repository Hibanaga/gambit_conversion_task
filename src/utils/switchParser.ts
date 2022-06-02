import { useMemo } from "react";
import { DataOptionType } from "../types/parser.types";
import {
  getParsedRegisterIntoInteger,
  getParsedRegisterIntoNumber,
  getParsedRegistersIntoBCD,
  getParsedRegistersIntoFloat,
  getParsedRegistersIntoNumbers,
} from "./parseData";

export const getCalculateValue = (propName: string, deps: DataOptionType) => {
  const withoutSpecialValue = propName.replace(/[^a-zA-Z0-9 ]/g, "");
  const actions = {
    number: ["(92)"],
    integers: [
      "(59)",
      "(60)",
      "(61)",
      "(62)",
      "(93)",
      "(94)",
      "(96)",
      "(51)",
      "(56)",
      "(72)",
    ],
    numbers: [
      "(21-22)",
      "(9-10)",
      "(13-14)",
      "(15-16)",
      "(17-18)",
      "(25-26)",
      "(29-30)",
      "(89-90)",
      "(99-100)",
    ],
    BCDs: ["(53-55)", "(49-50)", "(27-28)"],
    floats: [
      "(1-2)",
      "(3-4)",
      "(5-6)",
      "(7-8)",
      "(11-12)",
      "(27-28)",
      "(19-20)",
      "(23-24)",
      "(31-32)",
      "(35-36)",
      "(33-34)",
      "(37-38)",
      "(39-40)",
      "(41-42)",
      "(43-44)",
      "(45-46)",
      "(47-48)",
      "(97-98)",
      "(77-78)",
      "(79-80)",
      "(81-82)",
      "(83-84)",
      "(85-86)",
      "(87-88)",
    ],
  };

  return useMemo(() => {
    if (actions.number.includes(propName)) {
      return getParsedRegisterIntoNumber(deps[Number(withoutSpecialValue)]);
    }

    if (actions.integers.includes(propName)) {
      return getParsedRegisterIntoInteger(deps[parseInt(withoutSpecialValue)]);
    }

    if (actions.numbers.includes(propName)) {
      const middle = withoutSpecialValue.length / 2;
      const prevNumber = parseInt(withoutSpecialValue.slice(0, middle));
      const nextNumber = parseInt(withoutSpecialValue.slice(middle));

      return getParsedRegistersIntoNumbers(deps[prevNumber], deps[nextNumber]);
    }

    if (actions.BCDs.includes(propName)) {
      const middle = withoutSpecialValue.length / 2;
      const prevNumber = parseInt(withoutSpecialValue.slice(0, middle));
      const nextNumber = parseInt(withoutSpecialValue.slice(middle));

      return getParsedRegistersIntoBCD(deps[prevNumber], deps[nextNumber]);
    }

    if (actions.floats.includes(propName)) {
      const middle = withoutSpecialValue.length / 2;
      const prevNumber = parseInt(withoutSpecialValue.slice(0, middle));
      const nextNumber = parseInt(withoutSpecialValue.slice(middle));

      return getParsedRegistersIntoFloat(deps[prevNumber], deps[nextNumber]);
    } else {
      return "Already is doesn't support";
    }
  }, [propName]);
};
