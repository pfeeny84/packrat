import tokenService from './tokenService';


const BASE_URL = '/api/posts';

export function create(post){
  console.log(post, 'in create')
  return fetch(BASE_URL, {
    method: 'POST',
    body: post,
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  }).then(res => res.json())
}

export function getAll() {
  return fetch(BASE_URL, {
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  })
  .then(res => res.json());
}

export function deletePost(postID){
    return fetch(`${BASE_URL}/${postID}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
          }
    }).then(res => res.json())
}