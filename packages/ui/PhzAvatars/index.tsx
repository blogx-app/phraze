import BoringAvatar, { AvatarProps } from "boring-avatars";

export interface PhzAvatarsProps extends AvatarProps {}

export const PhzAvatars = (props: PhzAvatarsProps) => {
  return <BoringAvatar {...props} />;
};

export default PhzAvatars;
