import { useRef } from "react";
import { styled } from "styled-components";
import { Input, Icon } from "../../../../components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePostAsync } from "../../../../actions";
import { SpecialPanel } from "../special-panel/SpecialPanel";
import { sanitizeContent } from "./utils";
import { useServerRequest } from "../../../../hooks";

const PostFormContainer = ({
    className,
    post: { id, title, imageUrl, content, publishedAt },
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const requestServer = useServerRequest()

    const imageRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);

    const onSave = () => {
        const newImageUrl = imageRef.current.value;
        const newTitle = titleRef.current.value;
        const newContent = sanitizeContent(contentRef.current.innerHTML);

        dispatch(
            savePostAsync( requestServer, {
                id,
                imageUrl: newImageUrl,
                title: newTitle,
                content: newContent,
            })
        ).then(() => navigate(`/post/${id}`))
    };

    return (
        <div className={className}>
            <Input
                ref={imageRef}
                defaultValue={imageUrl}
                placeholder="Изображение..."
            />
            <Input
                ref={titleRef}
                defaultValue={title}
                placeholder="Заголовок"
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
