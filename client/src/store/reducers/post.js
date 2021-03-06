import {
	CREATE_COMMENT_ERROR,
	CREATE_COMMENT_START, CREATE_COMMENT_SUCCESS,
	CREATE_POST_ERROR,
	CREATE_POST_START,
	CREATE_POST_SUCCESS,
	FETCH_POST_ERROR,
	FETCH_POST_START,
	FETCH_POST_SUCCESS,
	FETCH_POSTS_ERROR,
	FETCH_POSTS_START,
	FETCH_POSTS_SUCCESS
} from '../actions/actionTypes'

const initialState = {
	posts: [],
	loading: false,
	error: null,
	post: null
}

export default function postReducer(state = initialState, action) {
	switch(action.type) {
		case FETCH_POSTS_START:
			return {
				...state, loading: true
			}
		case FETCH_POSTS_SUCCESS:
			return {
				...state, loading: false, posts: action.posts
			}
		case FETCH_POSTS_ERROR:
			return {
				...state, loading: false, error: action.error
			}
		case FETCH_POST_START:
			return {
				...state, loading: true
			}
		case FETCH_POST_SUCCESS:
			return {
				...state, loading: false, post: action.post
			}
		case FETCH_POST_ERROR:
			return {
				...state, loading: false, error: action.error
			}
		case CREATE_COMMENT_START:
			return {
				...state, loading: true
			}
		case CREATE_COMMENT_SUCCESS:
			return {
				...state, loading: false, post: { ...state.post, comments: [...state.post.comments, action.comment]}
			}
		case CREATE_COMMENT_ERROR:
			return {
				...state
			}
		case CREATE_POST_START:
			return {
				...state, loading: true
			}
		case CREATE_POST_SUCCESS:
			return {
				...state, loading: false, post: action.post
			}
		case CREATE_POST_ERROR:
			return {
				...state
			}
		default:
			return state
	}
}