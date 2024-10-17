// import PropTypes from 'prop-types'
import { styled } from "styled-components";
import { Input, Icon } from "../../../../components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePostAsync } from "../../../../actions";
import { SpecialPanel } from "../special-panel/SpecialPanel";
import { sanitizeContent } from "./utils";
import { useServerRequest } from "../../../../hooks";
import { useState, useLayoutEffect, useRef } from "react";
import { PROP_TYPE } from '../../../../constants'

const PostFormContainer = ({
    className,
    post: { id, title, imageUrl, content, publishedAt },
}) => {
    const [imageUrlValue, setImageUrlValue] = useState(imageUrl) // для контролируемых инпутов
    const [titleValue, setTitleValue] = useState(title) // для контролируемых инпутов
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const requestServer = useServerRequest()

    const contentRef = useRef(null);

    useLayoutEffect(() => {
        setImageUrlValue(imageUrl)
        setTitleValue(title)

    }, [imageUrl, title])

    const onSave = () => {
        const newContent = sanitizeContent(contentRef.current.innerHTML);

        dispatch(
            savePostAsync( requestServer, {
                id,
                imageUrl: imageUrlValue,
                title: titleValue,
                content: newContent,
            }),
        ).then(({ id}) => navigate(`/post/${id}`))
    };

    const onImageChange = ({ target }) => setImageUrlValue(target.value)
    const onTitleChange = ({ target }) => setTitleValue(target.value)

    return (
        <div className={className}>
            <Input
                value={imageUrlValue}
                placeholder="Изображение..."
                onChange={onImageChange}
            />
            <Input
                value={titleValue}
                placeholder="Заголовок"
                onChange={onTitleChange}
            />
            <SpecialPanel
                id={id}
                publishedAt={publishedAt}
                margin="20px 0"
                editButton={
                    <Icon
                        id="fa-floppy-o"
                        size="21px"
                        margin="0 10px 0 0 "
                        onClick={onSave}
                    />
                }
            />

            <div
                ref={contentRef}
                className="post-text"
                contentEditable={true}
                suppressContentEditableWarning={true}
            >
                {content}
            </div>
        </div>
    );
};

export const PostForm = styled(PostFormContainer)`
    & img {
        float: left;
        margin: 0 20px 10px 0;
    }

    & .post-text {
        min-height: 80px;
        border: 1px solid #222;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        font-size: 18px;
        white-space: pre-line;
    }
`;

PostForm.propTypes = {
    post: PROP_TYPE.POST.isRequired,
}
