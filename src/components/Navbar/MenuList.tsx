"use client";

interface MenuItemProps {
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label }) => {
  return (
    <div
      className="
        px-4 
        py-3 
        pointer
        transition
        font-semibold
        uppercase
        cursor-pointer
      "
    >
      {label}
    </div>
  );
};

export default MenuItem;
