export const createSession = (roleId) => {
    const session = {}

    switch (roleId) {
        case 0: {
            session.removeComment
        }
            
            break;
    
        default:
            break;
    }
    return {
        
        removeComment() {
            console.log('удаление комментария');
        }
    }
}