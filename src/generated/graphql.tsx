import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: "FieldError";
  field: Scalars["String"];
  message: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createPost: Post;
  deletePost?: Maybe<Post>;
  login: UserResponse;
  logout: Scalars["Boolean"];
  register: UserResponse;
  updatePost?: Maybe<Post>;
};

export type MutationCreatePostArgs = {
  title: Scalars["String"];
};

export type MutationDeletePostArgs = {
  id: Scalars["Int"];
};

export type MutationLoginArgs = {
  options: UsernamePasswordInput;
};

export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};

export type MutationUpdatePostArgs = {
  id: Scalars["Int"];
  title?: Maybe<Scalars["String"]>;
};

export type Post = {
  __typename?: "Post";
  createdAt: Scalars["String"];
  id: Scalars["Int"];
  title: Scalars["String"];
  updatedAt: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  getPost?: Maybe<Post>;
  getPosts: Array<Post>;
  hello: Scalars["String"];
  me?: Maybe<User>;
};

export type QueryGetPostArgs = {
  id: Scalars["Int"];
};

export type User = {
  __typename?: "User";
  createdAt: Scalars["String"];
  id: Scalars["Int"];
  password: Scalars["String"];
  updatedAt: Scalars["String"];
  username: Scalars["String"];
};

export type UserResponse = {
  __typename?: "UserResponse";
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UsernamePasswordInput = {
  password: Scalars["String"];
  username: Scalars["String"];
};

export type LoginMutationVariables = Exact<{
  username: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "UserResponse";
    errors?: Maybe<
      Array<{ __typename?: "FieldError"; field: string; message: string }>
    >;
    user?: Maybe<{
      __typename?: "User";
      id: number;
      username: string;
      password: string;
      createdAt: string;
      updatedAt: string;
    }>;
  };
};

export type Unnamed_1_MutationVariables = Exact<{ [key: string]: never }>;

export type Unnamed_1_Mutation = { __typename?: "Mutation"; logout: boolean };

export type RegisterMutationVariables = Exact<{
  username: Scalars["String"];
  password: Scalars["String"];
}>;

export type RegisterMutation = {
  __typename?: "Mutation";
  register: {
    __typename?: "UserResponse";
    errors?: Maybe<
      Array<{ __typename?: "FieldError"; field: string; message: string }>
    >;
    user?: Maybe<{
      __typename?: "User";
      id: number;
      username: string;
      password: string;
      createdAt: string;
      updatedAt: string;
    }>;
  };
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: "Query";
  me?: Maybe<{ __typename?: "User"; id: number; username: string }>;
};

export type PostsQueryVariables = Exact<{ [key: string]: never }>;

export type PostsQuery = {
  __typename?: "Query";
  getPosts: Array<{
    __typename?: "Post";
    title: string;
    id: number;
    createdAt: string;
    updatedAt: string;
  }>;
};

export const LoginDocument = gql`
  mutation Login($username: String!, $password: String!) {
    login(options: { username: $username, password: $password }) {
      errors {
        field
        message
      }
      user {
        id
        username
        password
        createdAt
        updatedAt
      }
    }
  }
`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
}
export const Document = gql`
  mutation {
    logout
  }
`;

export function useLogoutMutation() {
  return Urql.useMutation<Mutation, LoginMutationVariables>(Document);
}
export const RegisterDocument = gql`
  mutation Register($username: String!, $password: String!) {
    register(options: { username: $username, password: $password }) {
      errors {
        field
        message
      }
      user {
        id
        username
        password
        createdAt
        updatedAt
      }
    }
  }
`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument
  );
}
export const MeDocument = gql`
  query Me {
    me {
      id
      username
    }
  }
`;

export function useMeQuery(
  options: Omit<Urql.UseQueryArgs<MeQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
}
export const PostsDocument = gql`
  query Posts {
    getPosts {
      title
      id
      createdAt
      updatedAt
    }
  }
`;

export function usePostsQuery(
  options: Omit<Urql.UseQueryArgs<PostsQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<PostsQuery>({ query: PostsDocument, ...options });
}
