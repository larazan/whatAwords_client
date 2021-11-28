import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWords } from "../../actions/words_actions";

import data from "../utils/data";
import { ModalProvider } from "../utils/useModal.js";

import ContainerGrid from "../Grid";

const screenWidths = [
    data.SCREEN_WIDTH_1COLUMN,
    data.SCREEN_WIDTH_2COLUMNS,
    data.SCREEN_WIDTH_3COLUMNS,
];
  
const imageWidths = [
    data.IMAGE_WIDTH_1COLUMN,
    data.IMAGE_WIDTH_2COLUMNS,
    data.IMAGE_WIDTH_3COLUMNS,
];

const HomeMasonry = ({ match }) => {
    const [errorMessage, setErrorMessage] = useState(null);

    const pageNumber = match.params.pageNumber || 1

    const wordsList = useSelector((state) => state.wordsList);
    const dispatch = useDispatch();
    const { loading, error, words, results, count } = wordsList;

    useEffect(() => {
        dispatch(getWords(pageNumber));
        // dispatch(getWordsInfinite(page, words))
        // setPage(prevState => prevState + 1)
        window.scrollTo(0, 0)
    }, [dispatch, pageNumber]);

    console.log(words);

    return (
        <>
            <div style={{ height: data.HEADER_HEIGHT * 1.5 }}></div>
            <div style={{ minHeight: errorMessage ? 100 : 1600 }}>
                <ModalProvider>
                    <ContainerGrid 
                        screenWidths={screenWidths}
                        imageWidths={imageWidths}
                        minColumns={1}
                        rowGap={data.ROW_GAP}
                        columnGap={data.COLUMN_GAP}
                    />
                </ModalProvider>
            </div>
        </>
    )
}

export default HomeMasonry
