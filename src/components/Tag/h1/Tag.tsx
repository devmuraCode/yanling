import React from 'react';
import styles from './Tag.module.scss';

interface TagProps {
  label: string;
  onClick?: () => void;
}

const Tag: React.FC<TagProps> = ({ label, onClick }) => {
  return (
    <span className={styles.tag} onClick={onClick}>
      {label}
    </span>
  );
};

export default Tag;
