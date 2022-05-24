export const formatDateString = (date: string) => {
    return new Date(date).toLocaleDateString("en-SG");
};

export const formatYearString = (date: string) => {
    return new Date(date).getFullYear();
};
