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
        hover:bg-neutral-100 
        transition
        font-semibold
        text-slate-500
        uppercase
        cursor-pointer
      "
    >
      {label}
    </div>
  );
};

export default MenuItem;
