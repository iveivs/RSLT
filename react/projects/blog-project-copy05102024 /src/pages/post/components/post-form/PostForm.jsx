import { styled } from "styled-components";
import { Input, Icon } from "../../../../components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePostAsync } from "../../../../actions";
import { SpecialPanel } from "../special-panel/SpecialPanel";
import { sanitizeContent } from "./utils";
import { useServerRequest } from "../../../../hooks";
import { useState, useLayoutEffect, useRef } from "react";

const PostFormContainer = ({
    className,
    post: { id, title, imageUrl, content, publishedAt },
}) => {
    const [imageUrlValue, setImageUrlValue] = useState(imageUrl) // для контролируемых инпутов
    const [titleValue, setTitleValue] = useState(title) // для контролируемых инпутов
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const requestServer = useServerRequest()

    // const imageRef = useRef(null);
    // const titleRef = useRef(null);
    const contentRef = useRef(null);

    useLayoutEffect(() => {
        setImageUrlValue(imageUrl)
        setTitleValue(title)

    }, [imageUrl, title])

    const onSave = () => {
        // const newImageUrl = imageRef.current.value; // рефы для НЕконтролируемых инпутов
        // const newTitle = titleRef.current.value; // рефы для НЕконтролируемых инпутов
        const newContent = sanitizeContent(contentRef.current.innerHTML);

        dispatch(
            savePostAsync( requestServer, {
                id,
                // imageUrl: newImageUrl,
                imageUrl: imageUrlValue,
                // title: newTitle,
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
                // ref={imageRef}
                // defaultValue={imageUrl}
                value={imageUrlValue}
                placeholder="Изображение..."
                onChange={onImageChange}
            />
            <Input
                // ref={titleRef}
                // defaultValue={title}
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
