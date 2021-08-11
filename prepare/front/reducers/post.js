export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '에옹',
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: 'https://ifh.cc/g/hXlUGy.jpg',
        }, {
            src: 'https://ifh.cc/g/7v0fSD.jpg',
        }, {
            src: 'https://ifh.cc/g/T3Lgnt.jpg',
        }],
        Comments: [{
            User: {
                nickname: 'nyaong',
            },
            content: '우와 글이 올라왔군요~',
        }, {
            User: {
                nickname: 'hero',
            },
            content: '얼른 글쓰고싶어요~',
        }]
    }],
    imagePaths: [],
    postAdd: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id: 2,
    content: '더미데이터입니다',
    User: {
        id: 1,
        nickname: '제로초',
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            }
        default:
            return state;
    }
};

export default reducer;