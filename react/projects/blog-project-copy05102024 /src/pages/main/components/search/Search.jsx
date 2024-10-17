import PropTypes from 'prop-types'
import { styled } from "styled-components";
import { Icon, Input } from "../../../../components";

const searchContainer = ({ className, searchPhrase, onChange }) => {
    return (
        <div className={className}>
            <Input value={searchPhrase} placeholder='Поиск по заголовкам' onChange={onChange} />
            <Icon
                inactive={true}
                id="fa-search"
                size="21px"
            />
        </div>
    );
};

export const Search = styled(searchContainer)`
    position: relative;
    display: flex;
    margin: 40px auto 0;
    height: 40px;
    width: 340px;

    & > input {
        padding: 10px 38px 10px 10px;
    }

    & > div {
        position: absolute;
        top: 7px;
        right: 9px;
    }
`;

Search.propTypes = {
    searchPhrase: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
