export const genrateInviteCode = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let inviteCode = "";
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * characters.length);
    inviteCode += characters[random];
  }

  return inviteCode;
};
