/**
 * Generated by orval v7.8.0 🍺
 * Do not edit manually.
 * CleanIAM
 * CleanIAM API
 * OpenAPI spec version: v1
 */
import { useMutation, useQuery } from '@tanstack/react-query';
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryClient,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query';

import type {
  GetConnectAuthorizeParams,
  GetConnectEndsessionParams,
  GetConnectEndsessionSuccessParams,
  GetConnectUserinfoParams,
  PostConnectAuthorizeBody,
  PostConnectAuthorizeParams,
  PostConnectEndsessionParams,
  PostConnectUserinfoParams
} from '../cleanIAM.schemas';

import { customAxiosRequest } from '../../mutator/axios/custom-axios';

/**
 * @summary The main endpoint for OAuth 2 authorization code flow.
If the user is not authenticated, the user will be redirected to the signin page.
If user is authenticated, the confirmation will be shown.
 */
export const getConnectAuthorize = (params?: GetConnectAuthorizeParams, signal?: AbortSignal) => {
  return customAxiosRequest<void>({ url: `/connect/authorize`, method: 'GET', params, signal });
};

export const getGetConnectAuthorizeQueryKey = (params?: GetConnectAuthorizeParams) => {
  return [`/connect/authorize`, ...(params ? [params] : [])] as const;
};

export const getGetConnectAuthorizeQueryOptions = <
  TData = Awaited<ReturnType<typeof getConnectAuthorize>>,
  TError = unknown
>(
  params?: GetConnectAuthorizeParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getConnectAuthorize>>, TError, TData>
    >;
  }
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetConnectAuthorizeQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getConnectAuthorize>>> = ({ signal }) =>
    getConnectAuthorize(params, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getConnectAuthorize>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetConnectAuthorizeQueryResult = NonNullable<
  Awaited<ReturnType<typeof getConnectAuthorize>>
>;
export type GetConnectAuthorizeQueryError = unknown;

export function useGetConnectAuthorize<
  TData = Awaited<ReturnType<typeof getConnectAuthorize>>,
  TError = unknown
>(
  params: undefined | GetConnectAuthorizeParams,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getConnectAuthorize>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getConnectAuthorize>>,
          TError,
          Awaited<ReturnType<typeof getConnectAuthorize>>
        >,
        'initialData'
      >;
  },
  queryClient?: QueryClient
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetConnectAuthorize<
  TData = Awaited<ReturnType<typeof getConnectAuthorize>>,
  TError = unknown
>(
  params?: GetConnectAuthorizeParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getConnectAuthorize>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getConnectAuthorize>>,
          TError,
          Awaited<ReturnType<typeof getConnectAuthorize>>
        >,
        'initialData'
      >;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetConnectAuthorize<
  TData = Awaited<ReturnType<typeof getConnectAuthorize>>,
  TError = unknown
>(
  params?: GetConnectAuthorizeParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getConnectAuthorize>>, TError, TData>
    >;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
/**
 * @summary The main endpoint for OAuth 2 authorization code flow.
If the user is not authenticated, the user will be redirected to the signin page.
If user is authenticated, the confirmation will be shown.
 */

export function useGetConnectAuthorize<
  TData = Awaited<ReturnType<typeof getConnectAuthorize>>,
  TError = unknown
>(
  params?: GetConnectAuthorizeParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getConnectAuthorize>>, TError, TData>
    >;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetConnectAuthorizeQueryOptions(params, options);

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * @summary Endpoint handling the OpenId Connect authorization request.
 */
export const postConnectAuthorize = (
  postConnectAuthorizeBody: PostConnectAuthorizeBody,
  params?: PostConnectAuthorizeParams,
  signal?: AbortSignal
) => {
  const formData = new FormData();
  if (postConnectAuthorizeBody.newSignIn !== undefined) {
    formData.append('newSignIn', postConnectAuthorizeBody.newSignIn.toString());
  }

  return customAxiosRequest<void>({
    url: `/connect/authorize`,
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: formData,
    params,
    signal
  });
};

export const getPostConnectAuthorizeMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postConnectAuthorize>>,
    TError,
    { data: PostConnectAuthorizeBody; params?: PostConnectAuthorizeParams },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postConnectAuthorize>>,
  TError,
  { data: PostConnectAuthorizeBody; params?: PostConnectAuthorizeParams },
  TContext
> => {
  const mutationKey = ['postConnectAuthorize'];
  const { mutation: mutationOptions } = options
    ? options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postConnectAuthorize>>,
    { data: PostConnectAuthorizeBody; params?: PostConnectAuthorizeParams }
  > = props => {
    const { data, params } = props ?? {};

    return postConnectAuthorize(data, params);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostConnectAuthorizeMutationResult = NonNullable<
  Awaited<ReturnType<typeof postConnectAuthorize>>
>;
export type PostConnectAuthorizeMutationBody = PostConnectAuthorizeBody;
export type PostConnectAuthorizeMutationError = unknown;

/**
 * @summary Endpoint handling the OpenId Connect authorization request.
 */
export const usePostConnectAuthorize = <TError = unknown, TContext = unknown>(
  options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof postConnectAuthorize>>,
      TError,
      { data: PostConnectAuthorizeBody; params?: PostConnectAuthorizeParams },
      TContext
    >;
  },
  queryClient?: QueryClient
): UseMutationResult<
  Awaited<ReturnType<typeof postConnectAuthorize>>,
  TError,
  { data: PostConnectAuthorizeBody; params?: PostConnectAuthorizeParams },
  TContext
> => {
  const mutationOptions = getPostConnectAuthorizeMutationOptions(options);

  return useMutation(mutationOptions, queryClient);
};
/**
 * @summary Show the view to confirm the consent of the user to sing out.
 */
export const getConnectEndsession = (params?: GetConnectEndsessionParams, signal?: AbortSignal) => {
  return customAxiosRequest<void>({ url: `/connect/endsession`, method: 'GET', params, signal });
};

export const getGetConnectEndsessionQueryKey = (params?: GetConnectEndsessionParams) => {
  return [`/connect/endsession`, ...(params ? [params] : [])] as const;
};

export const getGetConnectEndsessionQueryOptions = <
  TData = Awaited<ReturnType<typeof getConnectEndsession>>,
  TError = unknown
>(
  params?: GetConnectEndsessionParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getConnectEndsession>>, TError, TData>
    >;
  }
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetConnectEndsessionQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getConnectEndsession>>> = ({ signal }) =>
    getConnectEndsession(params, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getConnectEndsession>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetConnectEndsessionQueryResult = NonNullable<
  Awaited<ReturnType<typeof getConnectEndsession>>
>;
export type GetConnectEndsessionQueryError = unknown;

export function useGetConnectEndsession<
  TData = Awaited<ReturnType<typeof getConnectEndsession>>,
  TError = unknown
>(
  params: undefined | GetConnectEndsessionParams,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getConnectEndsession>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getConnectEndsession>>,
          TError,
          Awaited<ReturnType<typeof getConnectEndsession>>
        >,
        'initialData'
      >;
  },
  queryClient?: QueryClient
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetConnectEndsession<
  TData = Awaited<ReturnType<typeof getConnectEndsession>>,
  TError = unknown
>(
  params?: GetConnectEndsessionParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getConnectEndsession>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getConnectEndsession>>,
          TError,
          Awaited<ReturnType<typeof getConnectEndsession>>
        >,
        'initialData'
      >;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetConnectEndsession<
  TData = Awaited<ReturnType<typeof getConnectEndsession>>,
  TError = unknown
>(
  params?: GetConnectEndsessionParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getConnectEndsession>>, TError, TData>
    >;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
/**
 * @summary Show the view to confirm the consent of the user to sing out.
 */

export function useGetConnectEndsession<
  TData = Awaited<ReturnType<typeof getConnectEndsession>>,
  TError = unknown
>(
  params?: GetConnectEndsessionParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getConnectEndsession>>, TError, TData>
    >;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetConnectEndsessionQueryOptions(params, options);

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * @summary Endpoint handling the sign-out request.
 */
export const postConnectEndsession = (
  params: PostConnectEndsessionParams,
  signal?: AbortSignal
) => {
  return customAxiosRequest<void>({ url: `/connect/endsession`, method: 'POST', params, signal });
};

export const getPostConnectEndsessionMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postConnectEndsession>>,
    TError,
    { params: PostConnectEndsessionParams },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postConnectEndsession>>,
  TError,
  { params: PostConnectEndsessionParams },
  TContext
> => {
  const mutationKey = ['postConnectEndsession'];
  const { mutation: mutationOptions } = options
    ? options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postConnectEndsession>>,
    { params: PostConnectEndsessionParams }
  > = props => {
    const { params } = props ?? {};

    return postConnectEndsession(params);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostConnectEndsessionMutationResult = NonNullable<
  Awaited<ReturnType<typeof postConnectEndsession>>
>;

export type PostConnectEndsessionMutationError = unknown;

/**
 * @summary Endpoint handling the sign-out request.
 */
export const usePostConnectEndsession = <TError = unknown, TContext = unknown>(
  options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof postConnectEndsession>>,
      TError,
      { params: PostConnectEndsessionParams },
      TContext
    >;
  },
  queryClient?: QueryClient
): UseMutationResult<
  Awaited<ReturnType<typeof postConnectEndsession>>,
  TError,
  { params: PostConnectEndsessionParams },
  TContext
> => {
  const mutationOptions = getPostConnectEndsessionMutationOptions(options);

  return useMutation(mutationOptions, queryClient);
};
/**
 * @summary Show the view to confirm the consent of the user to sing out.
Just a fallback in case the client application did not provide a redirect URI.
 */
export const getConnectEndsessionSuccess = (
  params?: GetConnectEndsessionSuccessParams,
  signal?: AbortSignal
) => {
  return customAxiosRequest<void>({
    url: `/connect/endsession/success`,
    method: 'GET',
    params,
    signal
  });
};

export const getGetConnectEndsessionSuccessQueryKey = (
  params?: GetConnectEndsessionSuccessParams
) => {
  return [`/connect/endsession/success`, ...(params ? [params] : [])] as const;
};

export const getGetConnectEndsessionSuccessQueryOptions = <
  TData = Awaited<ReturnType<typeof getConnectEndsessionSuccess>>,
  TError = unknown
>(
  params?: GetConnectEndsessionSuccessParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getConnectEndsessionSuccess>>, TError, TData>
    >;
  }
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetConnectEndsessionSuccessQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getConnectEndsessionSuccess>>> = ({
    signal
  }) => getConnectEndsessionSuccess(params, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getConnectEndsessionSuccess>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetConnectEndsessionSuccessQueryResult = NonNullable<
  Awaited<ReturnType<typeof getConnectEndsessionSuccess>>
>;
export type GetConnectEndsessionSuccessQueryError = unknown;

export function useGetConnectEndsessionSuccess<
  TData = Awaited<ReturnType<typeof getConnectEndsessionSuccess>>,
  TError = unknown
>(
  params: undefined | GetConnectEndsessionSuccessParams,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getConnectEndsessionSuccess>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getConnectEndsessionSuccess>>,
          TError,
          Awaited<ReturnType<typeof getConnectEndsessionSuccess>>
        >,
        'initialData'
      >;
  },
  queryClient?: QueryClient
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetConnectEndsessionSuccess<
  TData = Awaited<ReturnType<typeof getConnectEndsessionSuccess>>,
  TError = unknown
>(
  params?: GetConnectEndsessionSuccessParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getConnectEndsessionSuccess>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getConnectEndsessionSuccess>>,
          TError,
          Awaited<ReturnType<typeof getConnectEndsessionSuccess>>
        >,
        'initialData'
      >;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetConnectEndsessionSuccess<
  TData = Awaited<ReturnType<typeof getConnectEndsessionSuccess>>,
  TError = unknown
>(
  params?: GetConnectEndsessionSuccessParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getConnectEndsessionSuccess>>, TError, TData>
    >;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
/**
 * @summary Show the view to confirm the consent of the user to sing out.
Just a fallback in case the client application did not provide a redirect URI.
 */

export function useGetConnectEndsessionSuccess<
  TData = Awaited<ReturnType<typeof getConnectEndsessionSuccess>>,
  TError = unknown
>(
  params?: GetConnectEndsessionSuccessParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getConnectEndsessionSuccess>>, TError, TData>
    >;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetConnectEndsessionSuccessQueryOptions(params, options);

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * @summary The main endpoint for OpenId Connect userinfo requests.
 */
export const getConnectUserinfo = (params?: GetConnectUserinfoParams, signal?: AbortSignal) => {
  return customAxiosRequest<void>({ url: `/connect/userinfo`, method: 'GET', params, signal });
};

export const getGetConnectUserinfoQueryKey = (params?: GetConnectUserinfoParams) => {
  return [`/connect/userinfo`, ...(params ? [params] : [])] as const;
};

export const getGetConnectUserinfoQueryOptions = <
  TData = Awaited<ReturnType<typeof getConnectUserinfo>>,
  TError = unknown
>(
  params?: GetConnectUserinfoParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getConnectUserinfo>>, TError, TData>>;
  }
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetConnectUserinfoQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getConnectUserinfo>>> = ({ signal }) =>
    getConnectUserinfo(params, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getConnectUserinfo>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetConnectUserinfoQueryResult = NonNullable<
  Awaited<ReturnType<typeof getConnectUserinfo>>
>;
export type GetConnectUserinfoQueryError = unknown;

export function useGetConnectUserinfo<
  TData = Awaited<ReturnType<typeof getConnectUserinfo>>,
  TError = unknown
>(
  params: undefined | GetConnectUserinfoParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getConnectUserinfo>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getConnectUserinfo>>,
          TError,
          Awaited<ReturnType<typeof getConnectUserinfo>>
        >,
        'initialData'
      >;
  },
  queryClient?: QueryClient
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetConnectUserinfo<
  TData = Awaited<ReturnType<typeof getConnectUserinfo>>,
  TError = unknown
>(
  params?: GetConnectUserinfoParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getConnectUserinfo>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getConnectUserinfo>>,
          TError,
          Awaited<ReturnType<typeof getConnectUserinfo>>
        >,
        'initialData'
      >;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetConnectUserinfo<
  TData = Awaited<ReturnType<typeof getConnectUserinfo>>,
  TError = unknown
>(
  params?: GetConnectUserinfoParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getConnectUserinfo>>, TError, TData>>;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
/**
 * @summary The main endpoint for OpenId Connect userinfo requests.
 */

export function useGetConnectUserinfo<
  TData = Awaited<ReturnType<typeof getConnectUserinfo>>,
  TError = unknown
>(
  params?: GetConnectUserinfoParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getConnectUserinfo>>, TError, TData>>;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetConnectUserinfoQueryOptions(params, options);

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * @summary The main endpoint for OpenId Connect userinfo requests.
 */
export const postConnectUserinfo = (params?: PostConnectUserinfoParams, signal?: AbortSignal) => {
  return customAxiosRequest<void>({ url: `/connect/userinfo`, method: 'POST', params, signal });
};

export const getPostConnectUserinfoMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postConnectUserinfo>>,
    TError,
    { params?: PostConnectUserinfoParams },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postConnectUserinfo>>,
  TError,
  { params?: PostConnectUserinfoParams },
  TContext
> => {
  const mutationKey = ['postConnectUserinfo'];
  const { mutation: mutationOptions } = options
    ? options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postConnectUserinfo>>,
    { params?: PostConnectUserinfoParams }
  > = props => {
    const { params } = props ?? {};

    return postConnectUserinfo(params);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostConnectUserinfoMutationResult = NonNullable<
  Awaited<ReturnType<typeof postConnectUserinfo>>
>;

export type PostConnectUserinfoMutationError = unknown;

/**
 * @summary The main endpoint for OpenId Connect userinfo requests.
 */
export const usePostConnectUserinfo = <TError = unknown, TContext = unknown>(
  options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof postConnectUserinfo>>,
      TError,
      { params?: PostConnectUserinfoParams },
      TContext
    >;
  },
  queryClient?: QueryClient
): UseMutationResult<
  Awaited<ReturnType<typeof postConnectUserinfo>>,
  TError,
  { params?: PostConnectUserinfoParams },
  TContext
> => {
  const mutationOptions = getPostConnectUserinfoMutationOptions(options);

  return useMutation(mutationOptions, queryClient);
};
