import { ListItem } from "@chakra-ui/react";

export const renderItemPageNumbers = (options: {
    filter: any;
    items: any[];
    itemsPerPage: number;
    handlePageClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
    page: number;
    objKey: string;
}) => {
    const { filter, items, itemsPerPage, handlePageClick, page, objKey } =
        options;

    const numberOfItems =
        filter !== null
            ? items.filter((item) => item[objKey] === filter).length
            : items.length;

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(numberOfItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    return pageNumbers.map((number) => {
        return (
            <ListItem
                key={number}
                id={number.toString()}
                onClick={(e) => handlePageClick(e)}
                _hover={{
                    cursor: "pointer"
                }}
                mr={4}
            >
                {number === page ? (
                    <strong onClick={(e) => e.stopPropagation()}>
                        {number}
                    </strong>
                ) : (
                    number
                )}
            </ListItem>
        );
    });
};
