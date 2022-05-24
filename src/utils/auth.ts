export const me = (id: string | undefined) => {
    const myDetails = sessionStorage.getItem("me");
    if (myDetails) {
        return id === JSON.parse(`${myDetails}`).id;
    }
    return false;
};
