import Base from './Base';

class Post extends Base {
	// Loading
	getListPost = (query) => this.withLoading(() => this.apiGetWithoutPrefix('/posts', query));

	addPost = (data) => this.withLoading(() => this.apiPostWithoutPrefix('/addPost', data));

	updatePost = (data) => this.withLoading(() => this.apiPutWithoutPrefix('/updatePost', data));

	detailPost = (id) => this.withLoading(() => this.apiGetWithoutPrefix('/getDetailPost', { id }));

	deletePost = (id) => this.withLoading(() => this.apiDeleteWithoutPrefix('/deletePost', { id }));

	// Not Loading
	getListPostNotLoading = (query) => this.apiGetWithoutPrefix('/getPost', query);
}
export default new Post('/post');
