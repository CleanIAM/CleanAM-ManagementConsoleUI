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
  ApiUserModel,
  ConfigureMfaRequest,
  DeleteApiUserMfaConfigurationParams,
  EnableMfaRequest,
  Error,
  GetApiUserMfaConfigurationParams,
  GetApiUserParams,
  MfaConfigurationResponse,
  MfaUpdatedResponse,
  PostApiUserMfaConfigurationParams,
  PutApiUserMfaEnabledParams,
  PutApiUserParams,
  UpdateUserSimpleRequest,
  UserUpdated
} from '../cleanIAM.schemas';

import { customAxiosRequest } from '../../mutator/axios/custom-axios';

/**
 * @summary Get user info for the current user
 */
export const getApiUser = (params?: GetApiUserParams, signal?: AbortSignal) => {
  return customAxiosRequest<ApiUserModel>({ url: `/api/user`, method: 'GET', params, signal });
};

export const getGetApiUserQueryKey = (params?: GetApiUserParams) => {
  return [`/api/user`, ...(params ? [params] : [])] as const;
};

export const getGetApiUserQueryOptions = <
  TData = Awaited<ReturnType<typeof getApiUser>>,
  TError = Error
>(
  params?: GetApiUserParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiUser>>, TError, TData>>;
  }
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetApiUserQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiUser>>> = ({ signal }) =>
    getApiUser(params, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getApiUser>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetApiUserQueryResult = NonNullable<Awaited<ReturnType<typeof getApiUser>>>;
export type GetApiUserQueryError = Error;

export function useGetApiUser<TData = Awaited<ReturnType<typeof getApiUser>>, TError = Error>(
  params: undefined | GetApiUserParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiUser>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiUser>>,
          TError,
          Awaited<ReturnType<typeof getApiUser>>
        >,
        'initialData'
      >;
  },
  queryClient?: QueryClient
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetApiUser<TData = Awaited<ReturnType<typeof getApiUser>>, TError = Error>(
  params?: GetApiUserParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiUser>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiUser>>,
          TError,
          Awaited<ReturnType<typeof getApiUser>>
        >,
        'initialData'
      >;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetApiUser<TData = Awaited<ReturnType<typeof getApiUser>>, TError = Error>(
  params?: GetApiUserParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiUser>>, TError, TData>>;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
/**
 * @summary Get user info for the current user
 */

export function useGetApiUser<TData = Awaited<ReturnType<typeof getApiUser>>, TError = Error>(
  params?: GetApiUserParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getApiUser>>, TError, TData>>;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetApiUserQueryOptions(params, options);

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * @summary Update user info for the current user
 */
export const putApiUser = (
  updateUserSimpleRequest: UpdateUserSimpleRequest,
  params?: PutApiUserParams
) => {
  return customAxiosRequest<UserUpdated>({
    url: `/api/user`,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    data: updateUserSimpleRequest,
    params
  });
};

export const getPutApiUserMutationOptions = <TError = Error, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof putApiUser>>,
    TError,
    { data: UpdateUserSimpleRequest; params?: PutApiUserParams },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof putApiUser>>,
  TError,
  { data: UpdateUserSimpleRequest; params?: PutApiUserParams },
  TContext
> => {
  const mutationKey = ['putApiUser'];
  const { mutation: mutationOptions } = options
    ? options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof putApiUser>>,
    { data: UpdateUserSimpleRequest; params?: PutApiUserParams }
  > = props => {
    const { data, params } = props ?? {};

    return putApiUser(data, params);
  };

  return { mutationFn, ...mutationOptions };
};

export type PutApiUserMutationResult = NonNullable<Awaited<ReturnType<typeof putApiUser>>>;
export type PutApiUserMutationBody = UpdateUserSimpleRequest;
export type PutApiUserMutationError = Error;

/**
 * @summary Update user info for the current user
 */
export const usePutApiUser = <TError = Error, TContext = unknown>(
  options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof putApiUser>>,
      TError,
      { data: UpdateUserSimpleRequest; params?: PutApiUserParams },
      TContext
    >;
  },
  queryClient?: QueryClient
): UseMutationResult<
  Awaited<ReturnType<typeof putApiUser>>,
  TError,
  { data: UpdateUserSimpleRequest; params?: PutApiUserParams },
  TContext
> => {
  const mutationOptions = getPutApiUserMutationOptions(options);

  return useMutation(mutationOptions, queryClient);
};
/**
 * @summary Enable or disable MFA for the current user
 */
export const putApiUserMfaEnabled = (
  enableMfaRequest: EnableMfaRequest,
  params?: PutApiUserMfaEnabledParams
) => {
  return customAxiosRequest<MfaUpdatedResponse>({
    url: `/api/user/mfa/enabled`,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    data: enableMfaRequest,
    params
  });
};

export const getPutApiUserMfaEnabledMutationOptions = <
  TError = Error,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof putApiUserMfaEnabled>>,
    TError,
    { data: EnableMfaRequest; params?: PutApiUserMfaEnabledParams },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof putApiUserMfaEnabled>>,
  TError,
  { data: EnableMfaRequest; params?: PutApiUserMfaEnabledParams },
  TContext
> => {
  const mutationKey = ['putApiUserMfaEnabled'];
  const { mutation: mutationOptions } = options
    ? options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof putApiUserMfaEnabled>>,
    { data: EnableMfaRequest; params?: PutApiUserMfaEnabledParams }
  > = props => {
    const { data, params } = props ?? {};

    return putApiUserMfaEnabled(data, params);
  };

  return { mutationFn, ...mutationOptions };
};

export type PutApiUserMfaEnabledMutationResult = NonNullable<
  Awaited<ReturnType<typeof putApiUserMfaEnabled>>
>;
export type PutApiUserMfaEnabledMutationBody = EnableMfaRequest;
export type PutApiUserMfaEnabledMutationError = Error;

/**
 * @summary Enable or disable MFA for the current user
 */
export const usePutApiUserMfaEnabled = <TError = Error, TContext = unknown>(
  options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof putApiUserMfaEnabled>>,
      TError,
      { data: EnableMfaRequest; params?: PutApiUserMfaEnabledParams },
      TContext
    >;
  },
  queryClient?: QueryClient
): UseMutationResult<
  Awaited<ReturnType<typeof putApiUserMfaEnabled>>,
  TError,
  { data: EnableMfaRequest; params?: PutApiUserMfaEnabledParams },
  TContext
> => {
  const mutationOptions = getPutApiUserMfaEnabledMutationOptions(options);

  return useMutation(mutationOptions, queryClient);
};
/**
 * @summary Generate a QR code for MFA connection
 */
export const getApiUserMfaConfiguration = (
  params?: GetApiUserMfaConfigurationParams,
  signal?: AbortSignal
) => {
  return customAxiosRequest<MfaConfigurationResponse>({
    url: `/api/user/mfa/configuration`,
    method: 'GET',
    params,
    signal
  });
};

export const getGetApiUserMfaConfigurationQueryKey = (
  params?: GetApiUserMfaConfigurationParams
) => {
  return [`/api/user/mfa/configuration`, ...(params ? [params] : [])] as const;
};

export const getGetApiUserMfaConfigurationQueryOptions = <
  TData = Awaited<ReturnType<typeof getApiUserMfaConfiguration>>,
  TError = Error
>(
  params?: GetApiUserMfaConfigurationParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiUserMfaConfiguration>>, TError, TData>
    >;
  }
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetApiUserMfaConfigurationQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiUserMfaConfiguration>>> = ({
    signal
  }) => getApiUserMfaConfiguration(params, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getApiUserMfaConfiguration>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type GetApiUserMfaConfigurationQueryResult = NonNullable<
  Awaited<ReturnType<typeof getApiUserMfaConfiguration>>
>;
export type GetApiUserMfaConfigurationQueryError = Error;

export function useGetApiUserMfaConfiguration<
  TData = Awaited<ReturnType<typeof getApiUserMfaConfiguration>>,
  TError = Error
>(
  params: undefined | GetApiUserMfaConfigurationParams,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiUserMfaConfiguration>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiUserMfaConfiguration>>,
          TError,
          Awaited<ReturnType<typeof getApiUserMfaConfiguration>>
        >,
        'initialData'
      >;
  },
  queryClient?: QueryClient
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetApiUserMfaConfiguration<
  TData = Awaited<ReturnType<typeof getApiUserMfaConfiguration>>,
  TError = Error
>(
  params?: GetApiUserMfaConfigurationParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiUserMfaConfiguration>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getApiUserMfaConfiguration>>,
          TError,
          Awaited<ReturnType<typeof getApiUserMfaConfiguration>>
        >,
        'initialData'
      >;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useGetApiUserMfaConfiguration<
  TData = Awaited<ReturnType<typeof getApiUserMfaConfiguration>>,
  TError = Error
>(
  params?: GetApiUserMfaConfigurationParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiUserMfaConfiguration>>, TError, TData>
    >;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
/**
 * @summary Generate a QR code for MFA connection
 */

export function useGetApiUserMfaConfiguration<
  TData = Awaited<ReturnType<typeof getApiUserMfaConfiguration>>,
  TError = Error
>(
  params?: GetApiUserMfaConfigurationParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getApiUserMfaConfiguration>>, TError, TData>
    >;
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetApiUserMfaConfigurationQueryOptions(params, options);

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * @summary Validate Totp and if valid, configure MFA for the user
 */
export const postApiUserMfaConfiguration = (
  configureMfaRequest: ConfigureMfaRequest,
  params?: PostApiUserMfaConfigurationParams,
  signal?: AbortSignal
) => {
  return customAxiosRequest<void>({
    url: `/api/user/mfa/configuration`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: configureMfaRequest,
    params,
    signal
  });
};

export const getPostApiUserMfaConfigurationMutationOptions = <
  TError = Error,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postApiUserMfaConfiguration>>,
    TError,
    { data: ConfigureMfaRequest; params?: PostApiUserMfaConfigurationParams },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postApiUserMfaConfiguration>>,
  TError,
  { data: ConfigureMfaRequest; params?: PostApiUserMfaConfigurationParams },
  TContext
> => {
  const mutationKey = ['postApiUserMfaConfiguration'];
  const { mutation: mutationOptions } = options
    ? options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postApiUserMfaConfiguration>>,
    { data: ConfigureMfaRequest; params?: PostApiUserMfaConfigurationParams }
  > = props => {
    const { data, params } = props ?? {};

    return postApiUserMfaConfiguration(data, params);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostApiUserMfaConfigurationMutationResult = NonNullable<
  Awaited<ReturnType<typeof postApiUserMfaConfiguration>>
>;
export type PostApiUserMfaConfigurationMutationBody = ConfigureMfaRequest;
export type PostApiUserMfaConfigurationMutationError = Error;

/**
 * @summary Validate Totp and if valid, configure MFA for the user
 */
export const usePostApiUserMfaConfiguration = <TError = Error, TContext = unknown>(
  options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof postApiUserMfaConfiguration>>,
      TError,
      { data: ConfigureMfaRequest; params?: PostApiUserMfaConfigurationParams },
      TContext
    >;
  },
  queryClient?: QueryClient
): UseMutationResult<
  Awaited<ReturnType<typeof postApiUserMfaConfiguration>>,
  TError,
  { data: ConfigureMfaRequest; params?: PostApiUserMfaConfigurationParams },
  TContext
> => {
  const mutationOptions = getPostApiUserMfaConfigurationMutationOptions(options);

  return useMutation(mutationOptions, queryClient);
};
/**
 * @summary Remove mfa configuration command for user and disable mfa.
 */
export const deleteApiUserMfaConfiguration = (params?: DeleteApiUserMfaConfigurationParams) => {
  return customAxiosRequest<void>({ url: `/api/user/mfa/configuration`, method: 'DELETE', params });
};

export const getDeleteApiUserMfaConfigurationMutationOptions = <
  TError = Error,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteApiUserMfaConfiguration>>,
    TError,
    { params?: DeleteApiUserMfaConfigurationParams },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteApiUserMfaConfiguration>>,
  TError,
  { params?: DeleteApiUserMfaConfigurationParams },
  TContext
> => {
  const mutationKey = ['deleteApiUserMfaConfiguration'];
  const { mutation: mutationOptions } = options
    ? options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteApiUserMfaConfiguration>>,
    { params?: DeleteApiUserMfaConfigurationParams }
  > = props => {
    const { params } = props ?? {};

    return deleteApiUserMfaConfiguration(params);
  };

  return { mutationFn, ...mutationOptions };
};

export type DeleteApiUserMfaConfigurationMutationResult = NonNullable<
  Awaited<ReturnType<typeof deleteApiUserMfaConfiguration>>
>;

export type DeleteApiUserMfaConfigurationMutationError = Error;

/**
 * @summary Remove mfa configuration command for user and disable mfa.
 */
export const useDeleteApiUserMfaConfiguration = <TError = Error, TContext = unknown>(
  options?: {
    mutation?: UseMutationOptions<
      Awaited<ReturnType<typeof deleteApiUserMfaConfiguration>>,
      TError,
      { params?: DeleteApiUserMfaConfigurationParams },
      TContext
    >;
  },
  queryClient?: QueryClient
): UseMutationResult<
  Awaited<ReturnType<typeof deleteApiUserMfaConfiguration>>,
  TError,
  { params?: DeleteApiUserMfaConfigurationParams },
  TContext
> => {
  const mutationOptions = getDeleteApiUserMfaConfigurationMutationOptions(options);

  return useMutation(mutationOptions, queryClient);
};
