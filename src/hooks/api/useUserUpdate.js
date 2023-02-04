import useAsync from '../useAsync';

import * as userApi from '../../services/userApi';

export default function useUserUpdate() {
  const {
    loading: userUpdateLoading,
    error: userUpdateError,
    data: userUpdateData,
    act: userUpdate,
  } = useAsync(userApi.userUpdate, false);

  return {
    userUpdateLoading,
    userUpdateError,
    userUpdateData,
    userUpdate,
  };
}
