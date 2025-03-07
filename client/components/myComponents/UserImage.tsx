// src/components/ProfilePicture.tsx
import Image from "next/image";

interface UserPictureProps {
  src?: string; // Optional src for the profile picture
  alt?: string; // Optional alt text
  size?: number; // Size of the image (width and height in pixels)
  className?: string; // Additional custom classes
}

const UserImage = ({
  src,
  alt = "profile image",
  size = 40, // Default size
  className = "",
}: UserPictureProps) => {
  const defaultImage =
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div
      className={`rounded-full overflow-hidden ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Image
        src={src || defaultImage} // Use provided src or fallback to default
        alt={alt}
        width={size}
        height={size}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default UserImage;
