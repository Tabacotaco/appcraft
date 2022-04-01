export const ReferenceProvider: React.Provider<{
    refs: any;
    options: any[];
}>;
export function useReference(): {
    refs: any;
    options: any[];
};
export default VariableBase;
import React from "react";
declare const VariableBase: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
