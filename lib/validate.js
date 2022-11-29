// Function used to validate the username string and verify that it matches
// the requirements for an email username, which require you to use only
// letters (a-z), numbers, periods and underlines.
export const validateUsername = (username) => {
  const match = String(username)
    .toLowerCase()
    .match(/^[\w](?!.*?\.{2})[\w.]{1,28}[\w]$/);

  return match !== null;
};
