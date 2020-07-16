import PropTypes from 'prop-types';

import { OperationVariables } from '../../core/types';
import { MutationComponentOptions } from './types';
import { useMutation } from '../hooks/useMutation';

export function Mutation<TData = any, TVariables = OperationVariables>(
  props: MutationComponentOptions<TData, TVariables>
) {
  const [runMutation, result] = useMutation(props.mutation, props);
  return props.children ? props.children(runMutation, result) : null;
}

export namespace Mutation {
  export const propTypes = {
    mutation: PropTypes.object.isRequired,
    variables: PropTypes.object,
    optimisticResponse: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    refetchQueries: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.object])
      ),
      PropTypes.func
    ]),
    awaitRefetchQueries: PropTypes.bool,
    update: PropTypes.func,
    children: PropTypes.func.isRequired,
    onCompleted: PropTypes.func,
    onError: PropTypes.func,
    fetchPolicy: PropTypes.string
  };
}