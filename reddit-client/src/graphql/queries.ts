/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      contents
      image
      votes {
        items {
          id
          vote
          postID
          post {
            id
            title
            contents
            image
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      comments {
        items {
          id
          postID
          content
          post {
            id
            title
            contents
            image
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $id: ID
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPosts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        title
        contents
        image
        votes {
          items {
            id
            vote
            postID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        comments {
          items {
            id
            postID
            content
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      content
      post {
        id
        title
        contents
        image
        votes {
          items {
            id
            vote
            postID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        comments {
          items {
            id
            postID
            content
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $id: ID
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listComments(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        postID
        content
        post {
          id
          title
          contents
          image
          votes {
            nextToken
          }
          comments {
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getVote = /* GraphQL */ `
  query GetVote($id: ID!) {
    getVote(id: $id) {
      id
      vote
      postID
      post {
        id
        title
        contents
        image
        votes {
          items {
            id
            vote
            postID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        comments {
          items {
            id
            postID
            content
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listVotes = /* GraphQL */ `
  query ListVotes(
    $id: ID
    $filter: ModelVoteFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listVotes(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        vote
        postID
        post {
          id
          title
          contents
          image
          votes {
            nextToken
          }
          comments {
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
