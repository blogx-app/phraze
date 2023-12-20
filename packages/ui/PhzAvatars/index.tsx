import BoringAvatar, { AvatarProps } from "boring-avatars";

export interface PhzAvatarsProps extends AvatarProps {}

export const PhzAvatars = (
  props: PhzAvatarsProps & { style?: React.CSSProperties }
) => {
  const { style } = props;

  return (
    <div style={{ ...style, lineHeight: "0.5" }}>
      <BoringAvatar name="Sanjib Kumar Sah" variant="marble" {...props} />
    </div>
  );
};

export default PhzAvatars;
