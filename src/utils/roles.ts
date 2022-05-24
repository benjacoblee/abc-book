export const generateSelectItems = (selectItem: any[], objKey: string) =>
    selectItem
        .reduce((acc: string[], obj) => {
            if (!acc.includes(obj[objKey])) {
                acc.push(obj[objKey].toString());
            }

            return acc;
        }, [])
        .sort();
