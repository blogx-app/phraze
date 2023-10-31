import BoringAvatar, { AvatarProps } from "boring-avatars";

export interface PhzAvatarsProps extends AvatarProps {}

export const PhzAvatars = (props: PhzAvatarsProps) => {
  return <BoringAvatar name="Sanjib Kumar Sah" variant="marble" {...props} />;
};

export default PhzAvatars;
