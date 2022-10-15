import React from "react";
import styled from "styled-components";
import FilterSort from "../Components/FilterSort";
import MusicAlbum from "../Components/MusicAlbum";


const MusicRecords = () => {
    return (
        <Wrapper color="red">
            <WrapperFilterSort>
                <FilterSort/>
            </WrapperFilterSort>

            <WrapperMusicAlbum>
                <MusicAlbum/>
            </WrapperMusicAlbum>
        </Wrapper>
    );
};

const Wrapper= styled.div`
    border: ${({color}) => `1px solid ${color};`}
    display: flex;
    min-height: 100vh;
`;

const WrapperFilterSort = styled.div`
    border: 1px solid red;
    width: 300px;
`;

const WrapperMusicAlbum = styled.div`
    border: 1px solid blue;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
    justify-content: center;
    grid-gap: 5px;
`;

export default MusicRecords;
