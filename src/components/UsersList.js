import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store/index";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import UserListItem from "./UserListItem";

function UserList() {
  const [doCreatingUser, isCreatingUser, creatingUserError] = useThunk(addUser);
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  // const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  // const [loadingUsersError, setLoadingUsersError] = useState(null);

  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
    // setIsLoadingUsers(true);
    // dispatch(fetchUsers())
    //   .unwrap()
    //   .catch((err) => setLoadingUsersError(err))
    //   .finally(() => setIsLoadingUsers(false));
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doCreatingUser();
  };

  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={5} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map((user) => {
      return <UserListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          + Add User
        </Button>
        {creatingUserError && "Error crating user..."}
      </div>
      {content}
    </div>
  );
}

export default UserList;
