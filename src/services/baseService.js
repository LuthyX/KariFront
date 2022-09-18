import Store from "../store";

export const authHeader = () => {
  const { currentUser } = Store.state;
  return {
    "Content-Type": "application/json",
    // eslint-disable-next-line prettier/prettier
    "Authorization": "Bearer " + currentUser?.access_token,
  };
};
