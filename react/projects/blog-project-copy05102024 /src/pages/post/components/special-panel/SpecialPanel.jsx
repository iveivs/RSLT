import PropTypes from 'prop-types'
import { Icon } from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openModal, CLOSE_MODAL, removePostAsync } from "../../../../actions";
import { styled } from "styled-components";
import { useServerRequest } from "../../../../hooks";
import { ROLE } from "../../../../constants";
import { selectUserRole } from "../../../../selectors";
import { checkAccess } from "../../../../utils";

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
    const dispatch = useDispatch();
    const requestServer = useServerRequest();
    const navigate = useNavigate();
    const useRole = useSelector(selectUserRole);

    const onPostRemove = (id) => {
        dispatch(
            openModal({
                text: "Удалить статью?",
                onConfirm: () => {
                    dispatch(removePostAsync(requestServer, id)).then(() => {
                        navigate("/");
                    });
                    dispatch(CLOSE_MODAL);
                },
                onCancel: () => dispatch(CLOSE_MODAL),
            })
        );
    };

    const isAdmin = checkAccess([ROLE.ADMIN], useRole);

    return (
        <div className={className}>
            <div className="published-at">
                {publishedAt && (
                    <Icon
                        inactive={true}
                        id="fa-calendar-o"
                        margin="0 7px 0 0"
                        size="18px"
                    />
                )}
                {publishedAt}
            </div>
            {isAdmin && (
                <div className="buttons">
                    {editButton}
                    {publishedAt && (
                        <Icon
                            id="fa-trash-o"
                            size="21px"
                            margin="0 0 0 7px"
                            onClick={() => onPostRemove(id)}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export const SpecialPanel = styled(SpecialPanelContainer)`
    display: flex;
    justify-content: space-between;
    margin: ${({ margin }) => margin};

    & .buttons {
        display: flex;
    }

    & i {
        position: relative;
        top: -1px;
    }

    & .published-at {
        display: flex;
        font-size: 18px;
    }
`;

SpecialPanel.propTypes = {
    id: PropTypes.string.isRequired, 
    publishedAt: PropTypes.string.isRequired, 
    // editButton: PropTypes.func.isRequired,
    editButton: PropTypes.node.isRequired,
}
